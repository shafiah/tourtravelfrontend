import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-icon">✈️</span>
          <span className="logo-text">TourTravel</span>
        </div>

        {/* Menu Toggle Button */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#flights" className="nav-link">Flights</a>
          </li>
          <li className="nav-item">
            <a href="#hotels" className="nav-link">Hotels</a>
          </li>
          <li className="nav-item">
            <a href="#trains" className="nav-link">Trains</a>
          </li>
          <li className="nav-item">
            <a href="#bus" className="nav-link">Bus</a>
          </li>
          <li className="nav-item">
            <a href="#holidays" className="nav-link">Holidays</a>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className={`nav-auth ${isOpen ? 'active' : ''}`}>
          <button className="auth-btn login-btn">Login</button>
          <button className="auth-btn signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
