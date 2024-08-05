// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-7c981.firebaseapp.com",
  projectId: "mern-auth-7c981",
  storageBucket: "mern-auth-7c981.appspot.com",
  messagingSenderId: "958252091289",
  appId: "1:958252091289:web:6c29b85e68fa8bdd847508"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);