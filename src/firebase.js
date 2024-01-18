import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBjQpwKQxBNrbpPe1mdl6zipkvzQ_wPp_0",
  authDomain: "projectjsev21.firebaseapp.com",
  projectId: "projectjsev21",
  storageBucket: "projectjsev21.appspot.com",
  messagingSenderId: "1050495627686",
  appId: "1:1050495627686:web:2d0b87b34644f5e2fcdf67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
