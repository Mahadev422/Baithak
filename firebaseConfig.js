// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkM_L5HHH7rl_ZQ0YEcmdGfO2j7MLCvPc",
  authDomain: "baithak-f4545.firebaseapp.com",
  projectId: "baithak-f4545",
  storageBucket: "baithak-f4545.firebasestorage.app",
  messagingSenderId: "159351238682",
  appId: "1:159351238682:web:f027410e82794c649ba1a3",
  measurementId: "G-2JW6V0Q4XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Initialize Firebase Analytics
const analytics = getAnalytics(app);