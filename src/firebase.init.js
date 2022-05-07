// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmWM6Y9A7XgvftvAPSX45ljAaILxG1yp0",
  authDomain: "vegetable-lover.firebaseapp.com",
  projectId: "vegetable-lover",
  storageBucket: "vegetable-lover.appspot.com",
  messagingSenderId: "357592502139",
  appId: "1:357592502139:web:f2672dba7c5cdb3923b7de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;