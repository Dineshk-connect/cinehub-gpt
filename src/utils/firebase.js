// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg7c4jjOTyAhIDDgYpqjkz8UvV3eYxxO0",
  authDomain: "cinehubgpt-29d55.firebaseapp.com",
  projectId: "cinehubgpt-29d55",
  storageBucket: "cinehubgpt-29d55.firebasestorage.app",
  messagingSenderId: "688617065313",
  appId: "1:688617065313:web:cb9a078c82520dbedc5320",
  measurementId: "G-NXNYVZH1L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();