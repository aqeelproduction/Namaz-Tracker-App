// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3EXCuty5EzzfZQV4aVkdtTJtpBdO3tGc",
  authDomain: "namaz-tracker-app.firebaseapp.com",
  projectId: "namaz-tracker-app",
  storageBucket: "namaz-tracker-app.appspot.com",
  messagingSenderId: "179831613956",
  appId: "1:179831613956:web:aa1db07433bfe46d11e351",
  measurementId: "G-5E4E0Y077X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
