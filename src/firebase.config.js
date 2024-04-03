// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9WEMJH2dDzA7O3gPgGFJioSHgVVVhyZU",
  authDomain: "practice-project-7e415.firebaseapp.com",
  projectId: "practice-project-7e415",
  storageBucket: "practice-project-7e415.appspot.com",
  messagingSenderId: "569261425848",
  appId: "1:569261425848:web:ca0e352843bc823a37e04d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export default auth;