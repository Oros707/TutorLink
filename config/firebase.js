// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import {  initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSWip5-iAvXJqr1txu6Y5pmIQxNExi7Ts",
  authDomain: "react-native-53c98.firebaseapp.com",
  projectId: "react-native-53c98",
  storageBucket: "react-native-53c98.appspot.com",
  messagingSenderId: "787475351138",
  appId: "1:787475351138:web:42bcc498bcd2ec88dcb33b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
