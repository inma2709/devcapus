import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import "./styles/nav.css";  
import ScrollToTop from "./components/ScrollToTop";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/contenido-manuales/manualcss/manual-css/dist">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
