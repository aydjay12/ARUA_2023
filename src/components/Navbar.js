import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Logo2 from "../assets/unilag_icon.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img className="logo1" src={Logo2} alt=""></img>
        <img className="logo2" src={Logo} alt=""></img>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/livestream"> Livestream </Link>
          <Link to="/breakout"> Breakout </Link>
        </div>
      </div>
      <div className="rightSide" id="right">
        <Link to="/"> Home </Link>
        <Link to="/livestream"> Livestream </Link>
        <Link to="/breakout"> Breakout Session </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon></ReorderIcon>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
