import React from "react";
import Hero from "./1Home";
import Studio from "./2Studio";
import Work from "./3Work";
import Footer from "../0common/2Footer";
import Header from "../0common/1Header";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Studio />
      <Work />
      <Footer />
    </div>
  );
}

export default Home;
