import { BG_URL } from "../utils/constants"
import GptMoviesSuggestions from "./GptMoviesSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt="logo"
        />
      </div>
      <GptSearchBar/>
      <GptMoviesSuggestions/>
    </div>
  );
};

export default GptSearch;