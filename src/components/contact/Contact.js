import React from "react";
import Header from "../0common/1Header";
import Footer from "../0common/2Footer";
import MoreWorks from "../1homepage/MoreWorks";

function Contact() {
  return (
    <div>
      <div className="main3">
        <div className="overlay"></div>
        <video src={"homebg.mp4"} autoPlay loop muted />
        <div className="content3">
          <Header />
          <MoreWorks />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
