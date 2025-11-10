// src/hooks/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "../utils/constants"; // store your key there

// Initialize Gemini with your API key
const genAI = new GoogleGenerativeAI(GEMINI_KEY);

export default genAI;
