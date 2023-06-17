import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsHN6w0UtT1L8a-T6hWjhc9BkRdQH0WJc",
  authDomain: "creative-agency-own.firebaseapp.com",
  projectId: "creative-agency-own",
  storageBucket: "creative-agency-own.appspot.com",
  messagingSenderId: "895507446872",
  appId: "1:895507446872:web:c971e86953bb5baf841e2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;