import React from "react";
import Hero from "./1Home";
import Studio from "./2Studio";
import Work from "./3Work";
import DesignServices from "./4DesignServices";
import ClientFeedbacks from "./5ClientFeedbacks";
import Workflow from "../0common/3Workflow";
import Footer from "../0common/2Footer";
import Header from "../0common/1Header";

function Home() {
  return (
    <div>
      <div className="main3">
        <div className="overlay"></div>
        <video src={"homebg.mp4"} autoPlay loop muted />
        <div className="content3">
          <Header />
          <Hero />
          <Studio />
        </div>
      </div>
      <Work />
      <DesignServices />
      <ClientFeedbacks />
      <Workflow />
      <Footer />
    </div>
  );
}

export default Home;
