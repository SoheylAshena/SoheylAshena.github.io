import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router";
import "./style.css";
import Context from "./Context/Context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Context>
        <App />
      </Context>
    </Router>
  </React.StrictMode>
);
