// src/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBquaaVfdlmxEKTE2NoOF1T-t2HdvLSrU4",
  authDomain: "proyecto2-6464a.firebaseapp.com",
  databaseURL: "https://proyecto2-6464a-default-rtdb.firebaseio.com",
  projectId: "proyecto2-6464a",
  storageBucket: "proyecto2-6464a.appspot.com",
  messagingSenderId: "430821414547",
  appId: "1:430821414547:web:29a1bc0c200791af8a9f66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
