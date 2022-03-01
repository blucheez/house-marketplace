// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjeYe2NvfvjfVq1Y9vOSqRW8fjInmOCr0",
  authDomain: "house-marketplace-4c7f9.firebaseapp.com",
  projectId: "house-marketplace-4c7f9",
  storageBucket: "house-marketplace-4c7f9.appspot.com",
  messagingSenderId: "929084161598",
  appId: "1:929084161598:web:67cf75937e4bbb5ec55b6f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()