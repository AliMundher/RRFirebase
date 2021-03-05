import firebase from "firebase/app"
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBINOoWbrpT-vx26seQtjpaVLh97aNs85k",
    authDomain: "react-app-75c56.firebaseapp.com",
    projectId: "react-app-75c56",
    storageBucket: "react-app-75c56.appspot.com",
    messagingSenderId: "829046089472",
    appId: "1:829046089472:web:ff3209de830a52544435e5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();