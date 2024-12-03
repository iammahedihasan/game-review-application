// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkCswzwoq-BPUJzX9GdSix-WkR8ftroQg",
  authDomain: "game-review-app-7d9a0.firebaseapp.com",
  projectId: "game-review-app-7d9a0",
  storageBucket: "game-review-app-7d9a0.firebasestorage.app",
  messagingSenderId: "23683965643",
  appId: "1:23683965643:web:844278c535d2738b7ef14e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app