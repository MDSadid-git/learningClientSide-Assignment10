// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn-xXKURWHya0pH2-zw_M3rjIVPL9BTvw",
  authDomain: "learning-client-side.firebaseapp.com",
  projectId: "learning-client-side",
  storageBucket: "learning-client-side.appspot.com",
  messagingSenderId: "853947558158",
  appId: "1:853947558158:web:0deef2f96a53abbd744f5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
