import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/inter";
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Typography } from "@mui/joy";

import Wrapper from "./components/Wrapper";
import ToDo from "./components/ToDo";
import Login, { action as loginAction } from "./components/LogInPage";
import Signup from "./components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper/>,
    children: [
      {
        path: "/todo",
        element: <ToDo/>,
      },
      {
        path: "/login",
        action: loginAction,
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>
      }
    ]
  },
]);

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
    <RouterProvider router={router}/>
  </StrictMode>
);
