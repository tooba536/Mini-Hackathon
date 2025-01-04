import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBjSWtucwQuQX9if-9Pw8g8GsmJicICAjM",
    authDomain: "mini-hackathon-4da7c.firebaseapp.com",
    projectId: "mini-hackathon-4da7c",
    storageBucket: "mini-hackathon-4da7c.firebasestorage.app",
    messagingSenderId: "994378483234",
    appId: "1:994378483234:web:bef7f826b40a46db6aac7b",
    measurementId: "G-2NPH2G7VD9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Example: User Signup
function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User signed up:", userCredential.user);
        })
        .catch((error) => {
            console.error("Error signing up:", error.message);
        });
}
