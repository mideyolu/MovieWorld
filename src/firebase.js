// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import the authentication module
import { getFirestore } from "firebase/firestore"; // Import the Firestore module

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCAobVtPT_pk0DdggX-ljitPV9zQsBGB0w",
//   authDomain: "netflix-clone-cd065.firebaseapp.com",
//   projectId: "netflix-clone-cd065",
//   storageBucket: "netflix-clone-cd065.appspot.com",
//   messagingSenderId: "754053135498",
//   appId: "1:754053135498:web:3655ae9ec3936e14184173",
//   measurementId: "G-SSGFBX4RVJ",
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);
export { auth };
export default db;
