import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxtYOR5prMHx71EduraU07ktUn_ZoGw9c",
  authDomain: "trance-c9f6a.firebaseapp.com",
  projectId: "trance-c9f6a",
  storageBucket: "trance-c9f6a.appspot.com",
  messagingSenderId: "828035942321",
  appId: "1:828035942321:web:6b735b4e1428c2f74bdf90",
  measurementId: "G-HEMLSXSDWE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()



