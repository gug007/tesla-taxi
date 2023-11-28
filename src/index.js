import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";

import "./index.css";
import App from "./App";
import theme from "./theme";

if (
  window.location.hostname !== "localhost" &&
  window.location.protocol !== "https:"
) {
  window.location.protocol = "https:";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
