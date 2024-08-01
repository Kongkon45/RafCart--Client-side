import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcwdbY6QVl9GEU66leOrJDz2tXupVNaVY",
  authDomain: "rafcart-39dde.firebaseapp.com",
  projectId: "rafcart-39dde",
  storageBucket: "rafcart-39dde.appspot.com",
  messagingSenderId: "403782831021",
  appId: "1:403782831021:web:5c2a00a665c7fb1f656f24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;