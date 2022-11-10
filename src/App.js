import React from "react";
import "./App.css";
import Header from "./components/0common/1Header";
import Work from "./components/1homepage/3Work";
import Home from "./components/1homepage/1Home";
import DesignServices from "./components/1homepage/4DesignServices";
import ClientFeedbacks from "./components/1homepage/5ClientFeedbacks";
import Workflow from "./components/0common/3Workflow";
import Studio from "./components/1homepage/2Studio";
import About from "./components/2about/1AboutMe";
import MoreWorks from "./components/1homepage/MoreWorks";
import Footer from "./components/0common/2Footer";
import SMTemplates from "./components/3portfolio/1SMTeamplates";
import SMTemplates2 from "./components/3portfolio/2SMTemplates";
import Services1 from "./components/4services/1MyServices";
import Services2 from "./components/4services/2DigitalProducts";
import { BrowserRouter } from "react-router-dom";
import ComponentRoute from "./ComponentRoute";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="main3">
          <div className="overlay"></div>
          <video src={"homebg.mp4"} autoPlay loop muted />
          <div className="content3">
            <Header />
            {/* <Services1 /> */}
            <ComponentRoute />
          </div>
          <Footer />
        </div>
        {/* <Services2 /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
