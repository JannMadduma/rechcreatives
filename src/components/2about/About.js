import React from "react";
import AboutMe from "./1AboutMe";
import MoreWorks from "../1homepage/MoreWorks";
import Footer from "../0common/2Footer";
import Header from "../0common/1Header";

function About() {
  return (
    <div>
      <div className="main3">
        <div className="overlay"></div>
        <video src={"homebg.mp4"} autoPlay loop muted />
        <div className="content3">
          <Header />
          <AboutMe />
        </div>
      </div>
      <MoreWorks />
      <Footer />
    </div>
  );
}

export default About;
