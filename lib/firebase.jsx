// lib/firebase.js

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAJzyMph2iAGK-hSizINO2SWJHczFBNJ6A",
  authDomain: "jamua-2ef80.firebaseapp.com",
  projectId: "jamua-2ef80",
  storageBucket: "jamua-2ef80.appspot.com",
  messagingSenderId: "773357370350",
  appId: "1:773357370350:web:a9401ae8e6bca789ae2cff",
  measurementId: "G-95EJKVS50Y"
};

// Initialize Firebase App
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Export services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
