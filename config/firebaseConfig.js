import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
//  import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getStorage } from 'firebase/storage'
// const firebaseConfig = {
//     apiKey: "AIzaSyCbNQ6C7Ul1dny_JRk1Ia22tkkZuuim4i0",
//     authDomain: "e-commerce-ea003.firebaseapp.com",
//     projectId: "e-commerce-ea003",
//     storageBucket: "e-commerce-ea003.appspot.com",
//     messagingSenderId: "565918497410",
//     appId: "1:565918497410:web:19d7c6748ea2d0b2ca929b",
//     measurementId: "G-N2J2EG8YRP"
//   };

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
// const auth = getAuth();

// export const db = firebase.firestore(app);
export const db = getFirestore(app);
