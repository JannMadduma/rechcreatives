import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import ClientFeedbacks from "./components/homepage/ClientFeedbacks";
import DesignServices from "./components/homepage/DesignServices";
import Home from "./components/homepage/Home";
import MoreWorks from "./components/homepage/MoreWorks";
import Work from "./components/homepage/Work";
import Workflow from "./components/homepage/Workflow";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Work />
      <MoreWorks />
      <DesignServices />
      <ClientFeedbacks />
      <Workflow />
    </div>
  );
}

export default App;
