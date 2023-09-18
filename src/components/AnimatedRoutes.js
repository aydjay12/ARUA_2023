import React from "react";
import Home from "../pages/Home";
import Pricing from "../pages/Breakout";
import About from "../pages/Livestream";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
