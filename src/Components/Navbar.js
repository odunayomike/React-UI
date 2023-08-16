/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../App.css";
import Logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-link">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Portfolio</a>
          <a href="">Services</a>
        </div>
        <div className="navbar-button">
          <button className="btn btn-primary">Login</button>
          <button className="btn">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
