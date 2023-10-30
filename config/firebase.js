import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getReactNativePersistence } from "firebase/auth"; // Added this import
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"; // Added this import

const firebaseConfig = {
  apiKey: "AIzaSyCSWip5-iAvXJqr1txu6Y5pmIQxNExi7Ts",
  authDomain: "react-native-53c98.firebaseapp.com",
  projectId: "react-native-53c98",
  storageBucket: "react-native-53c98.appspot.com",
  messagingSenderId: "787475351138",
  appId: "1:787475351138:web:42bcc498bcd2ec88dcb33b",
};

const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const db = getFirestore(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { db };
