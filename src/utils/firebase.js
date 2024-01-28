// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoB9ZcY321tj0c1dXQK-oNhjJE-athFm4",
  authDomain: "nithinnetflixgpt.firebaseapp.com",
  projectId: "nithinnetflixgpt",
  storageBucket: "nithinnetflixgpt.appspot.com",
  messagingSenderId: "694272711227",
  appId: "1:694272711227:web:5f69cd88df33edb96ada1e",
  measurementId: "G-XJP7Z8NHBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();