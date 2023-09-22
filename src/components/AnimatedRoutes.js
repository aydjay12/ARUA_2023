import React from "react";
import Home from "../pages/Home";
import Breakoutsession from "../pages/Breakout";
import Livestream from "../pages/Livestream";
import Livepostalcard from './Livepodcast/Livepostalcard';
import { Routes, Route,} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/arua2023" element={<Home/>}></Route>
        <Route path="/livestream" element={<Livestream/>}></Route>
        <Route path="/breakoutsession" element={<Breakoutsession/>}></Route>
        <Route path="/livepostalcard" element={<Livepostalcard/>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
