import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrJ-RCk7NO7IfoD94uN3FWRtDFsfKMwqo",
  authDomain: "connect-app-bfc44.firebaseapp.com",
  projectId: "connect-app-bfc44",
  storageBucket: "connect-app-bfc44.appspot.com",
  messagingSenderId: "942929621681",
  appId: "1:942929621681:web:502cc2ea703373ad6a2890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);