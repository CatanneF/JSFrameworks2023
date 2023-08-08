import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App"; // This line will vary from exercise to exercise

// // Change these lines to resolve TypeScript issues
// const rootElement = document.getElementById("root");
// if (!rootElement) {
//   throw new Error("Failed to find the root element");
// }
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
