import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
    <nav className="largeContainer main--nav">
      <NavLink to="/" className="logo"  exact>
        BARRY.
      </NavLink>
    <div className="menu">
      <nav>
        <NavLink to="/about-me" className="animated">
            About me
        </NavLink>
        <NavLink to="/portfolio/" className="animated">
            Portfolio
        </NavLink>
        <NavLink to="/blog" className="animated">
            Blog
        </NavLink>
        <NavLink to="/contact-me" className="btn btn-strong animated">
            Contact me
        </NavLink>
      </nav>
      <div className="fab-container">
        <div className="hamburger-container">
          <div id="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <div className="menu-bg"></div>
        </div>
      <div className="top fab" tooltip="Back To Top"></div>
    </div>
    </div>
  </nav>
)

export default Header;