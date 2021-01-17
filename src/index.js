import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Reset } from "styled-reset";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Reset />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
