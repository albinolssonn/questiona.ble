import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTlUPfmj_J9V53XKnU-RtqWqbTMXDTGsU",
  authDomain: "questionable-db.firebaseapp.com",
  projectId: "questionable-db",
  storageBucket: "questionable-db.appspot.com",
  messagingSenderId: "233937870000",
  appId: "1:233937870000:web:1d50e091649840d5c2af75",
  measurementId: "G-67B068CET9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
