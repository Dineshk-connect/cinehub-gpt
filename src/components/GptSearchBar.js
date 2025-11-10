import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import genAI from "../hooks/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ TMDB Movie Search Function
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        encodeURIComponent(movie) +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  // ✅ Safe Gemini Call with Retry
  const safeGenerateContent = async (model, prompt, retries = 3) => {
    for (let i = 0; i < retries; i++) {
      try {
        const result = await model.generateContent(prompt);
        return result;
      } catch (error) {
        // specifically handle 503 overload
        if (
          error.message?.includes("503") ||
          error.message?.includes("overloaded")
        ) {
          if (i < retries - 1) {
            console.warn(
              `⚠️ Gemini overloaded. Retrying in 2s... (attempt ${i + 1}/${retries})`
            );
            await new Promise((res) => setTimeout(res, 2000));
            continue;
          } else {
            throw new Error(
              "Gemini service is currently overloaded. Please try again later."
            );
          }
        }
        throw error;
      }
    }
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;
    if (!query.trim()) return;

    console.log("User query:", query);
    setErrorMsg("");
    setLoading(true);
    setMovies([]);

    let movieTitles = [];
    let tmdbResults = [];

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const prompt = `
Act as a professional movie recommendation system.
For the query: "${query}", return ONLY a pure JSON array (no markdown, no explanation)
containing exactly 5 movie titles as strings.
Example:
["Inception", "Interstellar", "The Dark Knight", "Tenet", "Memento"]
`;

      // ✅ Use retry-safe Gemini call
      const result = await safeGenerateContent(model, prompt);
      const response = await result.response;
      const text = response.text();

      console.log("Raw Gemini Response:", text);

      try {
        const cleanedText = text
          .replace(/```json/i, "")
          .replace(/```/g, "")
          .trim();

        movieTitles = JSON.parse(cleanedText);
        console.log("Movie Titles Array:", movieTitles);

        setMovies(movieTitles);
      } catch (err) {
        console.warn("⚠️ Failed to parse JSON:", err);
        console.log("Gemini raw output:", text);
        setErrorMsg("Failed to parse Gemini output. Please try again.");
      }
    } catch (err) {
      console.error("Error fetching movie recommendations:", err);
      setErrorMsg(err.message || "Error fetching movie recommendations.");
    }

    // ✅ Fetch TMDB details only if Gemini worked
    if (movieTitles.length > 0) {
      try {
        const promiseArray = movieTitles.map((movie) => searchMovieTMDB(movie));
        tmdbResults = await Promise.all(promiseArray);
        console.log("TMDB Search Results:", tmdbResults);
      } catch (err) {
        console.error("Error fetching TMDB data:", err);
        setErrorMsg("Error fetching movie details from TMDB.");
      }
    }

    // ✅ Dispatch results
    dispatch(addGptMovieResult({ movieNames: movieTitles, movieResults: tmdbResults }));

    setLoading(false);
  };

  return (
    <div className="pt-[10%] flex flex-col items-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-md outline-none text-black"
          placeholder={lang[langKey].GptSearchPlaceholder}
        />
        <button
          className={`col-span-3 m-4 py-2 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
          onClick={handleGptSearchClick}
          disabled={loading}
        >
          {loading ? "Searching..." : lang[langKey].search}
        </button>
      </form>

      {/* ✅ Error / Status Messages */}
      {errorMsg && (
        <p className="mt-4 text-red-500 font-medium text-center w-1/2">
          {errorMsg}
        </p>
      )}
      {loading && (
        <p className="mt-4 text-gray-300 italic">Fetching recommendations...</p>
      )}
    </div>
  );
};

export default GptSearchBar;
