import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/1homepage/Home";
import About from "./components/2about/About";
import Contact from "./components/contact/Contact";
import Myshop from "./components/5myShop/Myshop";
import Services from "./components/4services/Services";
import Portfolio from "./components/3portfolio/Portfolio";

const ComponentRoute = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/services" element={<Services />} />
      <Route path="/myshop" element={<Myshop />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default ComponentRoute;
