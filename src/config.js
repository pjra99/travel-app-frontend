import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJgtm1JRjItTdX2zg8ilKUZtlO4r2w0p0",
  authDomain: "http://localhost:3000",
  projectId: "travel-app-backend",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
