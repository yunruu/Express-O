import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6NLACvLvG1guoEuT1yhle4FGpDVK8Tz0",
  authDomain: "express-o-2022.firebaseapp.com",
  projectId: "express-o-2022",
  storageBucket: "express-o-2022.appspot.com",
  messagingSenderId: "1039249120113",
  appId: "1:1039249120113:web:7b1efebd07499bea29f4d0",
  measurementId: "G-T94QKKRFQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };