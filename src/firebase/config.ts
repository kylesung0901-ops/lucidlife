// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBKAhXv4wSUhpohzaJUc68znjUj-WCmbT0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "lucidlife-30c91.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "lucidlife-30c91",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "lucidlife-30c91.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "530961346412",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:530961346412:web:306973e2006c515f78cd49",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-9JEW9YD0LW"
};

// Initialize Firebase only if it hasn't been initialized already
let app: FirebaseApp;
let analytics: Analytics | null = null;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  
  // Initialize Analytics only in browser environment
  if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
  }
} else {
  app = getApps()[0];
}

export { app, analytics };

