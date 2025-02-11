// src/components/Navbar.js
import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/" className="navbar__logo-link" aria-label="Homepage">Trippy</a>
      </div>
      <ul className="navbar__links">
        <li className="navbar__item">
          <a href="/" className="navbar__link" aria-label="Home">
            <i className="fas fa-home" aria-hidden="true"></i> {/* Font Awesome icon */}
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a href="/about" className="navbar__link" aria-label="About">
            <i className="fas fa-info-circle" aria-hidden="true"></i> {/* Font Awesome icon */}
            About
          </a>
        </li>
        <li className="navbar__item">
          <a href="/services" className="navbar__link" aria-label="Services">
            <i className="fas fa-briefcase" aria-hidden="true"></i> {/* Font Awesome icon */}
            Service
          </a>
        </li>
        <li className="navbar__item">
          <a href="/contact" className="navbar__link" aria-label="Contact">
            <i className="fas fa-phone" aria-hidden="true"></i> {/* Font Awesome icon */}
            Contact
          </a>
        </li>
        <li className="navbar__item">
          <a href="/signup" className="navbar__link navbar__signup" aria-label="Sign Up">
            Sign Up
          </a>
        </li>
        {/* Info icon (optional) */}
        <li className="navbar__item navbar__info-item">
          <a href="/info" className="navbar__link" aria-label="Information">
            <i className="fas fa-question-circle" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
