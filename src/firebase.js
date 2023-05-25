import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMCBXAVAhmWzgw6zsfB8k6QFCZlY_oAW4",
  authDomain: "testfire-dccae.firebaseapp.com",
  databaseURL: "https://testfire-dccae-default-rtdb.firebaseio.com",
  projectId: "testfire-dccae",
  storageBucket: "testfire-dccae.appspot.com",
  messagingSenderId: "984828777999",
  appId: "1:984828777999:web:f2fb726aed100966e4f57a",
  measurementId: "G-LSSRWMZSZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth(app)
export const db = getFirestore(app)