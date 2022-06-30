import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage } from 'firebase/storage';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBJaZqdti73p6_W5VLhL4cImtIP3yLPJho",
  authDomain: "fir-todo-19dea.firebaseapp.com",
  projectId: "fir-todo-19dea",
  storageBucket: "fir-todo-19dea.appspot.com",
  messagingSenderId: "546043032199",
  appId: "1:546043032199:web:382ef00bd32eef2a4a7e22",
  measurementId: "G-27XG6KV0ZC"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
 export const auth = getAuth(app);

// export const db = firebase.firestore(app);
export const db = getFirestore(app);
