import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactGA from "react-ga4";

ReactGA.initialize("G-6Q4DY2VSKP");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
