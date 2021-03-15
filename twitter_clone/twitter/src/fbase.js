import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBLyhke55iBfY4TFajdoSzZaCK7D8ZX_vs",
//     authDomain: "nwitter-7e49f.firebaseapp.com",
//     projectId: "nwitter-7e49f",
//     storageBucket: "nwitter-7e49f.appspot.com",
//     messagingSenderId: "465951404655",
//     appId: "1:465951404655:web:e3728237d08c3a3f5d139a"
//   };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();