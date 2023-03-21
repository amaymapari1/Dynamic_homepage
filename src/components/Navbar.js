import React, { useState } from "react";
import "./Navbar.css";
import sitelogo from "../images/career-corner-logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
// import Hamburger from "hamburger-react";
const Navbar = () => {
  const [showhamburger, setShowhamburger] = useState(false);
  return (
    <>
      <nav className="main">
        <div className="logo">
          <a href="#">
            <img src={sitelogo} height={100} width={120} />
          </a>
        </div>
        <div className={showhamburger ? "nav-menu mobile-menu" : "nav-menu"}>
          <ul>
            <li>
              <a href="#">OUR PROGRAMS</a>
            </li>
            <li>
              <a href="#">OUR STORY</a>
            </li>
            <li>
              <a href="#">OUR BRANDS</a>
            </li>
            <li>
              <a href="#">SOCIAL INITIATIVES</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowhamburger(!showhamburger)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
