import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../src/styles/global/index.css";
import "../src/styles/responsive/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
