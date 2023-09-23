import React from "react";
import Home from "../pages/Home";
import Livestream from "../pages/Livestream";
import Breakout from "../pages/Breakout";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/livestream" element={<Livestream></Livestream>}></Route>
        <Route path="/breakout" element={<Breakout></Breakout>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
