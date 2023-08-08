import "./App.css";
import Welcome from "./components/Welcome/Welcome"
import Heading from "./components/Heading/Heading"
// import React from "react";
import { ReactNode } from "react";
// import something here

function App() {
  return (
    <div className="App">
    <Welcome name="Catherine" />
    <Heading>Welcome to my React app!</Heading>
    </div>
  )
}

export default App;
