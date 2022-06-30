// Import the functions you need from the SDKs you need-
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAFFaKulGMe308S9Q3kytPOpDAFkchbsAc",
    authDomain: "nitter-e475b.firebaseapp.com",
    projectId: "nitter-e475b",
    storageBucket: "nitter-e475b.appspot.com",
    messagingSenderId: "47166635106",
    appId: "1:47166635106:web:bc8f535dc2cd78a836253b"
  };

export default firebase.initializeApp(firebaseConfig);