import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBqAoxdptEDpXieOm3wK6UtVQcvI4SYxBM",
  authDomain: "omniplexai1.firebaseapp.com",
  projectId: "omniplexai1",
  storageBucket: "omniplexai1.firebasestorage.app",
  messagingSenderId: "699231184743",
  appId: "1:699231184743:web:5c7c43c01f306aa5deb1c2",
  measurementId: "G-0BM22XV0JW"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };

export const initializeFirebase = () => {
  return app;
};
