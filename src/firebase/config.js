// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN-au35cbNrNjuQbZ4ltrNlz7Y-7B0OSE",
  authDomain: "julien-site.firebaseapp.com",
  projectId: "julien-site",
  storageBucket: "julien-site.appspot.com",
  messagingSenderId: "492847318847",
  appId: "1:492847318847:web:d7ce91efecc0e80cf7f58a",
  measurementId: "G-QHNMHF99NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);