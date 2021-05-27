import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTo-2GA7dH90UUdkHgG8pS27pRfmHwjPM",
    authDomain: "keep-d511b.firebaseapp.com",
    projectId: "keep-d511b",
    storageBucket: "keep-d511b.appspot.com",
    messagingSenderId: "492495291456",
    appId: "1:492495291456:web:d9fa432b504480e9d8cba5",
    measurementId: "G-M29P9JT21D"
};

firebase.initializeApp(firebaseConfig);

export default firebase;