import React from "react";
import AboutMe from "./1AboutMe";
import MoreWorks from "../1homepage/MoreWorks";
import Footer from "../0common/2Footer";
import Header from "../0common/1Header";

function About() {
  return (
    <div>
      <Header />
      <AboutMe />
      <MoreWorks />
      <Footer />
    </div>
  );
}

export default About;
