import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

if (avt?.platform === "web") {
  window.addEventListener("readySDK", loadExt);
} else {
  loadExt();
}

function loadExt() {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
