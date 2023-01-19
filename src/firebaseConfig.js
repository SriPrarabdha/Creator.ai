// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoW_wvsk5_2NYDVMVqOZ_vH2Y0kof3UiY",
  authDomain: "creator-ai.firebaseapp.com",
  projectId: "creator-ai",
  storageBucket: "creator-ai.appspot.com",
  messagingSenderId: "865728586412",
  appId: "1:865728586412:web:3273a25c0eb07a0a547509",
  measurementId: "G-J89NPNSX2T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);