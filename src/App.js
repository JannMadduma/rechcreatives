import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import ComponentRoute from "./ComponentRoute";

function App() {
  return (
    <div>
      <HashRouter>
        <ComponentRoute />
      </HashRouter>
    </div>
  );
}

export default App;

// "homepage": "http://JannMadduma.github.io/rechcreatives",
