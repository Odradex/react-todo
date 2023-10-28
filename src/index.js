import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/inter";
import Sheet from "@mui/joy/Sheet";
import { Typography } from "@mui/joy";

import App from "./App";

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
