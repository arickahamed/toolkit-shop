// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDR8jVRNEc9vCCBL1oIbnu4cnUoYFGJaUw",
    authDomain: "toolkit-shop.firebaseapp.com",
    projectId: "toolkit-shop",
    storageBucket: "toolkit-shop.appspot.com",
    messagingSenderId: "138348539122",
    appId: "1:138348539122:web:70b9851a8d4a3c9cbef46b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
