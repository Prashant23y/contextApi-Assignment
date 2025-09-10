import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProviderCustom } from "./contexts/ThemeContext";
import "./index.css";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProviderCustom>
        <App />
      </ThemeProviderCustom>
    </AuthProvider>
  </React.StrictMode>
);
