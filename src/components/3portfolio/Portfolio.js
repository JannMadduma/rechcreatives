import React from "react";
import SMTemplates from "./1SMTeamplates";
import SMTemplates2 from "./2SMTemplates";
import Footer from "../0common/2Footer";
import Header from "../0common/1Header";

function Portfolio() {
  return (
    <div>
      <div className="main3">
        <div className="overlay"></div>
        <video src={"homebg.mp4"} autoPlay loop muted />
        <div className="content3">
          <Header />
          <SMTemplates />
        </div>
      </div>
      <SMTemplates2 />
      <Footer />
    </div>
  );
}

export default Portfolio;
