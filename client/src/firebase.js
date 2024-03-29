// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FIREBASE_API } from "./ENV";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API,
  authDomain: "solxraf.firebaseapp.com",
  projectId: "solxraf",
  storageBucket: "solxraf.appspot.com",
  messagingSenderId: "1009064805031",
  appId: "1:1009064805031:web:5b5dbb218e398629839182",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
