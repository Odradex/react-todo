// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2UEF_8xKBjONpaGLE_1y5ZmGFRUx_Q0A",
  authDomain: "react-todo-d44cc.firebaseapp.com",
  projectId: "react-todo-d44cc",
  storageBucket: "react-todo-d44cc.appspot.com",
  messagingSenderId: "732750539860",
  appId: "1:732750539860:web:583bca345be55cff0e11c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = app.auth()
export default app
