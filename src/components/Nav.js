import React from "react";
import littlelemon_logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className={`navbar ${isNavOpen ? "open" : ""}`}>
      <img src={littlelemon_logo} alt="Little Lemon Logo"></img>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <a>About</a>
        </li>
        <li className="navbar-item">
          <a>Menu</a>
        </li>
        <li className="navbar-item">
          <Link to="/booking">Reservations</Link>
        </li>
        <li className="navbar-item">
          <a>Order Online</a>
        </li>
        <li className="navbar-item">
          <a>Login</a>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={toggleNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Nav;
