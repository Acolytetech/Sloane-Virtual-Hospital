import React from 'react';
import './Navbar.css';
import logo from '../../img/Sloane Virtual Hospital logo transparent 1.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container bt-logo-area menu-holder btClear">
        <a href="/" className="logo">
          <img src={logo} alt="ClinIQ Logo" />
          {/* <span>clinIQ</span> */}
        </a>
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/pages">Pages</a></li>
          <li><a href="/elements">Elements</a></li>
        </ul>
        <div className="nav-actions">
          <a href="/search" className="search">
            <i className="fas fa-search"></i>
          </a>
          {/* Other actions */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
