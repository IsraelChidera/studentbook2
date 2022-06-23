// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB4WTz-NOjMBWjZdA3K4v6meF9UKjtcD0M",
  authDomain: "studentbook-af01e.firebaseapp.com",
  projectId: "studentbook-af01e",
  storageBucket: "studentbook-af01e.appspot.com",
  messagingSenderId: "324293256030",
  appId: "1:324293256030:web:00535c030209bb3d9e25cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};
const db = getFirestore(app);
export default db;