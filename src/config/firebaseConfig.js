// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvc5_N2errnDNza_b2mccgOp5K2KzgsMU",
  authDomain: "proyecto-final-react-fca9a.firebaseapp.com",
  projectId: "proyecto-final-react-fca9a",
  storageBucket: "proyecto-final-react-fca9a.appspot.com",
  messagingSenderId: "533551856498",
  appId: "1:533551856498:web:e381c7ef6ab4acb1f1fbeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);