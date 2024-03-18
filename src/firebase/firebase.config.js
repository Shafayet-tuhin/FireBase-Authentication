// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFiUlK-_9cm7lBf3-sABcdcFlIltMI-q8",
  authDomain: "email-authentication-22373.firebaseapp.com",
  projectId: "email-authentication-22373",
  storageBucket: "email-authentication-22373.appspot.com",
  messagingSenderId: "647685661246",
  appId: "1:647685661246:web:7fd62ecb8b2ac04e7fa76f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;

export default auth ;