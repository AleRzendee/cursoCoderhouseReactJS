// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVrX8LZWM0_DfV23KXOeY35ifYNVVSIEk",
  authDomain: "aula13-93806.firebaseapp.com",
  projectId: "aula13-93806",
  storageBucket: "aula13-93806.firebasestorage.app",
  messagingSenderId: "216314051704",
  appId: "1:216314051704:web:d1a0ac3aef76ca6ba8c18d",
  measurementId: "G-PD7TC42ZSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);