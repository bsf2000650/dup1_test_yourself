import React from 'react';
import './Navbar.css';
import TestYourSelf from '../images/testyourself-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={TestYourSelf} alt="Logo" />
      </div>
      <ul className="nav-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
