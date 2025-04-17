// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAFjKUpKDZ5uneNt944_3Xf67k2HrRBeqw",
    authDomain: "tell-rizal-8ec81.firebaseapp.com",
    projectId: "tell-rizal-8ec81",
    storageBucket: "tell-rizal-8ec81.firebasestorage.app",
    messagingSenderId: "643997325233",
    appId: "1:643997325233:web:1eace0a495202d50b60f90"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
