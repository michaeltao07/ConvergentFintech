// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvf-p9njRQogVXUerVvAo7jgrXbAvDV0U",
  authDomain: "fantasystocks-ac46f.firebaseapp.com",
  projectId: "fantasystocks-ac46f",
  storageBucket: "fantasystocks-ac46f.appspot.com",
  messagingSenderId: "262071228683",
  appId: "1:262071228683:web:2518f10ee39d95d9d0aa0e",
  measurementId: "G-X7J4Q6HPEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);