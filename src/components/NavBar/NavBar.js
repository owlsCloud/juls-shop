import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import "./navbar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <nav>
          <NavLink className="link" to="/" exact>
            Home
          </NavLink>
          <NavLink className="link" to="/shop">
            Shop
          </NavLink>
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </nav>
        <div className="icon-container">
          <SocialIcon className="icon" url="https://instagram.com" style={{ height: 40, width: 40 }}></SocialIcon>
          <SocialIcon className="icon" url="https://twitter.com" style={{ height: 40, width: 40 }}></SocialIcon>
          <SocialIcon className="icon" url="https://facebook.com" style={{ height: 40, width: 40 }}></SocialIcon>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
