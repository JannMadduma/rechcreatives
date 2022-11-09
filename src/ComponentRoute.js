import "./App.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/1homepage/1Home";
import About from "./components/2about/1AboutMe";

const ComponentRoute = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default ComponentRoute;
