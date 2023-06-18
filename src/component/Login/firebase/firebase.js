import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNZD5KC9GMD_WlFelm7AsPoqyF-uU2fdU",
  authDomain: "creative-agency-work.firebaseapp.com",
  projectId: "creative-agency-work",
  storageBucket: "creative-agency-work.appspot.com",
  messagingSenderId: "1090055328172",
  appId: "1:1090055328172:web:b185b829c24ddde1772a09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;