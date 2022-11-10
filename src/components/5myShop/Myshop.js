import React from "react";
import Header from "../0common/1Header";
import Footer from "../0common/2Footer";
import Services1 from "../4services/1MyServices";

function Myshop() {
  return (
    <div>
      <div className="main3">
        <div className="overlay"></div>
        <video src={"homebg.mp4"} autoPlay loop muted />
        <div className="content3">
          <Header />
          <Services1 />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Myshop;
