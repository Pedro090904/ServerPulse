import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import "./index.css"; // opcional, caso queira estilizar depois

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
