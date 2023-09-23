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
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/livestream" element={<Livestream/>}></Route>
        <Route path="/breakoutsession" element={<Breakoutsession/>}></Route>
        <Route path="/livepostalcard" element={<Livepostalcard/>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
