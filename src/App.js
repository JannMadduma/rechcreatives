import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import DesignServices from "./components/homepage/DesignServices";
import Home from "./components/homepage/Home";
import MoreWorks from "./components/homepage/MoreWorks";
import Work from "./components/homepage/Work";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Work />
      <MoreWorks />
      <DesignServices />
    </div>
  );
}

export default App;
