// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7vqwVzAXXoHywRuc74lmodsvVs2NrjXc",
  authDomain: "travel-74874.firebaseapp.com",
  projectId: "travel-74874",
  storageBucket: "travel-74874.appspot.com",
  messagingSenderId: "843984790396",
  appId: "1:843984790396:web:4d8deda1060897bcc43af9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
