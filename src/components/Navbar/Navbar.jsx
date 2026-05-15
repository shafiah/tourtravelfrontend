import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import LoginModal from '../Modal/LoginModal';
import SignupModal from '../Modal/SignupModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // Load user from localStorage on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('tourTravelUser');
    if (savedUser) {
      setUserName(savedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setIsOpen(false);
  };

  const handleSignupClick = () => {
    setShowSignupModal(true);
    setIsOpen(false);
  };

  const handleSignupSuccess = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const handleLoginSuccess = (userEmail) => {
    setShowLoginModal(false);
    // Extract username from email or use full email
    const username = userEmail.split('@')[0] || userEmail;
    setUserName(username);
    setIsLoggedIn(true);
    // Save user to localStorage
    localStorage.setItem('tourTravelUser', username);
    // Scroll to home section smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setIsOpen(false);
    // Remove user from localStorage
    localStorage.removeItem('tourTravelUser');
  };

  return (
    <>
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
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about-us" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="/hotels" className="nav-link">Hotels</a>
            </li>
            <li className="nav-item">
              <a href="/visa" className="nav-link">Visa</a>
            </li>
            <li className="nav-item">
              <a href="/contact-us" className="nav-link">Contact Us</a>
            </li>
          </ul>

          {/* Auth Section */}
          <div className={`nav-auth ${isOpen ? 'active' : ''}`}>
            {isLoggedIn ? (
              <>
                <div className="welcome-message">
                  Welcome, <span className="username">{userName}</span>
                </div>
                <button className="auth-btn logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="auth-btn login-btn" onClick={handleLoginClick}>
                  Login
                </button>
                <button className="auth-btn signup-btn" onClick={handleSignupClick}>
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSignupSuccess={handleSignupSuccess}
      />
    </>
  );
};

export default Navbar;
