import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/inter";
import Sheet from "@mui/joy/Sheet";
import { Typography } from "@mui/joy";

import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Typography variant="solid" color="primary" level="h2" 
        sx={{
          width: 400,
          m: 0,
          textAlign: 'center',
          borderRadius: 'md',
          boxShadow: 'lg',
        }}>
        Список Задач
      </Typography>
    <Sheet variant="plain"
      sx={{
        width: 400,
        height: "auto",
        my: 2,
        p: 2,
        display: "flex",
        flexDirection: "column",
        boxShadow: 'lg',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 'md',
      }}>
      
      <App/>
    </Sheet>
  </StrictMode>
);
