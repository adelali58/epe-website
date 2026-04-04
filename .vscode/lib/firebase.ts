import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2yGJAyNJPgjifSMJAFE0pHTsJEMWD2MI",
  authDomain: "epe-website.firebaseapp.com",
  projectId: "epe-website",
  storageBucket: "epe-website.firebasestorage.app",
  messagingSenderId: "223944293698",
  appId: "1:223944293698:web:0f308fb5280351270f5cdb",
  measurementId: "G-T99FVNEZ28"
};

// منع إعادة تعريف التطبيق في السيرفر
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };