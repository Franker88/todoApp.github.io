import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { App } from "./App/App";
import { createPortal } from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const modal = ReactDOM.createRoot(document.getElementById("modal"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
