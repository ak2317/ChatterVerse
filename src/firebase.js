import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
   apiKey: "AIzaSyD4sYAqjMRN-npmXnNXpBp2ptHrRr5tZAM",
  authDomain: "chatting-app-99022.firebaseapp.com",
  databaseURL: "https://chatting-app-99022-default-rtdb.firebaseio.com",
  projectId: "chatting-app-99022",
  storageBucket: "chatting-app-99022.appspot.com",
  messagingSenderId: "985907677932",
  appId: "1:985907677932:web:b0800cfea2a691271a33c9",
  measurementId: "G-4B3NHNGLHQ" 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
