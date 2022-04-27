
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA61U06sumcKMuA0LNxGFvuoLC_TIv7sf4",
  authDomain: "meraki-7db96.firebaseapp.com",
  projectId: "meraki-7db96",
  storageBucket: "meraki-7db96.appspot.com",
  messagingSenderId: "481458385972",
  appId: "1:481458385972:web:e90b77e0168cebbad80661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)