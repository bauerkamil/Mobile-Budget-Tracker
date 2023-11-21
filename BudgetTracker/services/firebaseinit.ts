// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN-RJ06Y05nfcfXKl-1YdSJae5JddFmYg",
  authDomain: "budget-tracker-f5c96.firebaseapp.com",
  projectId: "budget-tracker-f5c96",
  storageBucket: "budget-tracker-f5c96.appspot.com",
  messagingSenderId: "1092565925707",
  appId: "1:1092565925707:web:3f164fb88f17321e3c32ce",
  measurementId: "G-DX78C0HK89"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);