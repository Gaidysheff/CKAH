// Import the functions you need from the SDKs you need

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS05pFF4T_lW4rzfjNPrhhihDpGBNInF4",
  authDomain: "ckah-e1601.firebaseapp.com",
  projectId: "ckah-e1601",
  storageBucket: "ckah-e1601.appspot.com",
  messagingSenderId: "378518859332",
  appId: "1:378518859332:web:59662dae62beb80a065611",
  measurementId: "G-WY1R2XX7Q3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};
