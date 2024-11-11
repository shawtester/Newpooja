// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Importing GoogleAuthProvider here
import { getFirestore,Timestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAJzyMph2iAGK-hSizINO2SWJHczFBNJ6A",
  authDomain: "jamua-2ef80.firebaseapp.com",
  projectId: "jamua-2ef80",
  storageBucket: "jamua-2ef80.firebasestorage.app",
  messagingSenderId: "773357370350",
  appId: "1:773357370350:web:a9401ae8e6bca789ae2cff",
  measurementId: "G-95EJKVS50Y"
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
