// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpyEwDpSMD4nMf0iNeOWC6g9I43i9ieNM",
  authDomain: "coffee-store-38fab.firebaseapp.com",
  projectId: "coffee-store-38fab",
  storageBucket: "coffee-store-38fab.firebasestorage.app",
  messagingSenderId: "637073736553",
  appId: "1:637073736553:web:868ccaae3abcad244c73f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
