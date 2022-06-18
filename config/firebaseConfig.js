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
    apiKey: "AIzaSyBzf6dXo63wiERETLy0-RrVQXceJERBvAA",
    authDomain: "products-be2fb.firebaseapp.com",
    projectId: "products-be2fb",
    storageBucket: "products-be2fb.appspot.com",
    messagingSenderId: "1083248750712",
    appId: "1:1083248750712:web:cfa60b2dee18fab29ebd8d"
  };

  export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
// const auth = getAuth();

// export const db = firebase.firestore(app);
export const db = getFirestore(app);
