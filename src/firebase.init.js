// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDeFMn_46rcwCWMyDktbhJDr1l7jpFAfvQ",
//     authDomain: "manufacturer-25224.firebaseapp.com",
//     projectId: "manufacturer-25224",
//     storageBucket: "manufacturer-25224.appspot.com",
//     messagingSenderId: "367806397564",
//     appId: "1:367806397564:web:373ed376ca0f270c569df9"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;