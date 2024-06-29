import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"; // Import auth module

const firebaseConfig = {
  apiKey: "AIzaSyCkOcZUdSrmafu6MHgj1tXbXUkCLvTYetw",
  authDomain: "portfolio-site-52b79.firebaseapp.com",
  projectId: "portfolio-site-52b79",
  storageBucket: "portfolio-site-52b79.appspot.com",
  messagingSenderId: "497329971873",
  appId: "1:497329971873:web:50feb9ecdc58e782d906e0",
  measurementId: "G-JN2HTMJT50",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app); // Initialize auth module

export { db, storage, auth }; // Export auth along with db and storage
