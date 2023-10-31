import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbo2afwmuD57kaPkYzhq5tgyWXjWfEUMw",
    authDomain: "expensely-2e77a.firebaseapp.com",
    projectId: "expensely-2e77a",
    storageBucket: "expensely-2e77a.appspot.com",
    messagingSenderId: "965800357006",
    appId: "1:965800357006:web:f16946a0e31354d309eddf",
    measurementId: "G-HGTLGFZYK4"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  db
}