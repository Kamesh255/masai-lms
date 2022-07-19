import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
 
const firebaseConfig = {
  apiKey: "AIzaSyDm_hmjYDyRD4q931cILzUU__4zRJBQOWI",
  authDomain: "authentication-masai-lms.firebaseapp.com",
  projectId: "authentication-masai-lms",
  storageBucket: "authentication-masai-lms.appspot.com",
  messagingSenderId: "876167131223",
  appId: "1:876167131223:web:75db31494fd81d09b6f312",
  measurementId: "G-3DBP16F7R2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)