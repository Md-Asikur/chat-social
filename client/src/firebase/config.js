// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfwLjeEqmwuarzQ_DqYXeFAdJ7mZ-7ajU",
  authDomain: "chatapp-8edbf.firebaseapp.com",
  projectId: "chatapp-8edbf",
  storageBucket: "chatapp-8edbf.appspot.com",
  messagingSenderId: "443224385446",
  appId: "1:443224385446:web:8a731945fe70783f2c9167",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
