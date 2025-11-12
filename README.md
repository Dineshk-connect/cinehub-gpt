# 🎥 CineHub

CineHub is a smart movie recommendation web app that blends AI with real-time movie data.  
It uses **Google’s Gemini API** to understand your movie preferences and suggest films you’ll actually enjoy, while **TMDB (The Movie Database)** powers all the movie details, posters, and ratings.  
For authentication and data handling, CineHub is powered by **Firebase**.

---

## 🚀 About the Project

Ever spend more time choosing a movie than watching one? CineHub fixes that.  
Just describe the kind of movie you're in the mood for — maybe *“a mind-bending thriller like Inception but lighter”* — and CineHub instantly recommends a list of movies that match your vibe.

It’s fast, secure, and designed for movie lovers who want personalized picks without endless scrolling.

---

## 🧠 How It Works

1. **You ask** – Type what you feel like watching.  
2. **Gemini understands** – The Gemini API processes your input and generates movie suggestions.  
3. **TMDB delivers** – CineHub fetches posters, descriptions, and ratings from TMDB for each title.  
4. **Firebase secures** – Handles user login, session storage, and authentication.  
5. **You discover** – Enjoy tailored recommendations and start watching something new.

---

## ⚙️ Tech Stack

**Frontend:**
- React.js  
- Redux Toolkit  
- Tailwind CSS  
- Axios  

**Backend:**
- Node.js  
- Express.js  
- dotenv  

**APIs:**
- Google Gemini API → AI movie suggestions  
- TMDB API → Movie details & posters  

**Cloud & Authentication:**
- **Firebase** (Auth, Firestore, Hosting optional)

---

## 🧩 Key Features

✅ AI-powered movie recommendations  
✅ Firebase Authentication (Email/Google login)  
✅ TMDB integration for real movie data  
✅ Multi-language support  
✅ Responsive Tailwind UI  
✅ Error-handling for API limits and network failures  

---

## 🔧 Installation & Setup

### 1. Clone this repository
```bash
git clone https://github.com/Dineshk-connect/cinehub.git
cd cinehub


# Manual 
# cinehub-GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase SetUp
- Deploying our app to production
- Create a SignUp user Account 
- Implement Sign In Api
- Created Redux store with UserSlice
- Implemented Sign Out
- Update Profile
- BugFix: SignUp user displayName and profile picture update 
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Register TMDB API & create an app & get access token 
- Get Data from TMDB now playing movies list API 
- Custom hook for Now Playing Movies
- Create MovieSlice
- Update store with Movies Data
- Planning for MainContainer & SecondayContainer
- Fetch data for Trailer video
- Update the store with Trailer vide Data
- Embeded the Youtube Video and make it autoplay and mute
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browser page amazing with Tailwind CSS
- usePopularMovies Custom Hook
- GPT Search page
- GPT Search Bar
- Multi Language feature in App
- 








# Features 
- Login/SignUp
    - Sign In / Sign Up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - MovieSuggestions
            - MovieLists * N
- CinehubGPT
    - Search Bar
    - Movie Suggestions