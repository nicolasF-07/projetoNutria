// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4K9WdILUOn0eJjJWLtNFsIFXgvsaBoxY",
    authDomain: "nutria-pre.firebaseapp.com",
    databaseURL: "https://nutria-pre-default-rtdb.firebaseio.com",
    projectId: "nutria-pre",
    storageBucket: "nutria-pre.firebasestorage.app",
    messagingSenderId: "1080581157539",
    appId: "1:1080581157539:web:10c75c0bc4c21bdbb64516"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
