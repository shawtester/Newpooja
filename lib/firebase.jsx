// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Importing GoogleAuthProvider here
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAQJqj77nDd6QFuF56wf1V2xT0tgSjg3UU",
  authDomain: "temp-5376e.firebaseapp.com",
  projectId: "temp-5376e",
  storageBucket: "temp-5376e.firebasestorage.app",
  messagingSenderId: "501654905489",
  appId: "1:501654905489:web:6628d9512700cde5885530",
  measurementId: "G-BVETTP3DVV"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Firebase services initialization
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Firebase Analytics - Only on the client side
export const analytics =
  typeof window !== "undefined"
    ? import("firebase/analytics").then((module) => {
        const { getAnalytics, isSupported } = module;
        return isSupported().then((yes) => (yes ? getAnalytics(app) : null));
      })
    : null;

// Export GoogleAuthProvider
export const googleAuthProvider = new GoogleAuthProvider();  // Export the GoogleAuthProvider
