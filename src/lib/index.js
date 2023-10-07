// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3EeNRxUqvpczReAvowoJBQTdba3a7nPM",
  authDomain: "soundboard-4bc77.firebaseapp.com",
  projectId: "soundboard-4bc77",
  storageBucket: "soundboard-4bc77.appspot.com",
  messagingSenderId: "982447558045",
  appId: "1:982447558045:web:67c826208ea3676cc23374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const soundRef = ref(storage, 'sounds/');
export default soundRef;