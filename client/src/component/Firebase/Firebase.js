// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYrP-jPoBuWg-J9-Cmh_jCoW2RXW4TFUk",
  authDomain: "swcms-b7cfe.firebaseapp.com",
  projectId: "swcms-b7cfe",
  storageBucket: "swcms-b7cfe.appspot.com",
  messagingSenderId: "812623173915",
  appId: "1:812623173915:web:3569954e358e279d571bbe",
  measurementId: "G-6GPGTY6VLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);