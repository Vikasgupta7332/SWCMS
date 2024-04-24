import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

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
// const analytics = getAnalytics(app);
const auth = getAuth(app);
// const db = getFirestore(app);

export { auth };