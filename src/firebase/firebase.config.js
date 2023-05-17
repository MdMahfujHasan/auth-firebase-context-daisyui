import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAbEkYhLsz2V3u3GMV_5O8egf7n4DeMapc",
    authDomain: "auth-firebase-context-daisy-ui.firebaseapp.com",
    projectId: "auth-firebase-context-daisy-ui",
    storageBucket: "auth-firebase-context-daisy-ui.appspot.com",
    messagingSenderId: "228173971871",
    appId: "1:228173971871:web:ee6bb815c3e69edf81bdaa"
};

const app = initializeApp(firebaseConfig);

export default app;