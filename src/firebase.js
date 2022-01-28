import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCilS1sZqz22kFD2VCAxPp9KbX-Cj1oryY",
    authDomain: "ebookshop-95f82.firebaseapp.com",
    projectId: "ebookshop-95f82",
    storageBucket: "ebookshop-95f82.appspot.com",
    messagingSenderId: "948998643964",
    appId: "1:948998643964:web:3ceff40d72c45b8bd93779",
    measurementId: "G-M8BS2C539L"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

