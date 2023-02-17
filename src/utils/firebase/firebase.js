// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwj2ou8QW9vLtvKSmRzWvapd1ALXUJ3uA",
  authDomain: "crown-db-1cbfe.firebaseapp.com",
  projectId: "crown-db-1cbfe",
  storageBucket: "crown-db-1cbfe.appspot.com",
  messagingSenderId: "722448005306",
  appId: "1:722448005306:web:3ff859ec3d6c0640eb2a83",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
