import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyUHV3VVgpqe7a35jhNyYpD9iNhYc8ouQ",
  authDomain: "examen-b4237.firebaseapp.com",
  projectId: "examen-b4237",
  storageBucket: "examen-b4237.appspot.com",
  messagingSenderId: "723225027285",
  appId: "1:723225027285:web:7d97fcc382700cd7d1f85c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
