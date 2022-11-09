import React from "react";
import "./App.css";
import Header from "./components/0common/1Header";
import Work from "./components/1homepage/3Work";
import Home from "./components/1homepage/1Home";
import MoreWorks from "./components/1homepage/MoreWorks";
import DesignServices from "./components/1homepage/4DesignServices";
import ClientFeedbacks from "./components/1homepage/5ClientFeedbacks";
import Workflow from "./components/0common/3Workflow";

function App() {
  return (
    <div>
      <div className="main">
        <div className="overlay"></div>
        <video src={"/homebg.mp4"} autoPlay loop muted />
        <div className="content">
          <Header />
          <Home />
        </div>
      </div>
      <Work />
      <MoreWorks />
      <DesignServices />
      <ClientFeedbacks />
      <Workflow />
    </div>
  );
}

export default App;
