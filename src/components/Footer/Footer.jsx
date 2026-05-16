import React, { useState } from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">✈️</span>
            <span className="logo-text">TourTravel</span>
          </div>
          <p className="company-description">
            Explore the world with unforgettable travel experiences and affordable holiday packages. Your journey to remarkable destinations starts here.
          </p>
          <div className="social-icons">
            <a href="#facebook" className="social-link" title="Facebook">
              <FaFacebook />
            </a>
            <a href="#instagram" className="social-link" title="Instagram">
              <FaInstagram />
            </a>
            <a href="#twitter" className="social-link" title="Twitter">
              <FaTwitter />
            </a>
            <a href="#youtube" className="social-link" title="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/coming-soon">Flights</a></li>
            <li><a href="/hotels">Hotels</a></li>
            <li><a href="/coming-soon">Trains</a></li>
            <li><a href="/coming-soon">Bus</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Popular Destinations */}
        <div className="footer-section">
          <h4 className="footer-title">Popular Destinations</h4>
          <ul className="footer-links">
            <li><a href="http://18.206.151.182/destination/kerala">Kerala</a></li>
            <li><a href="http://18.206.151.182/destination/bali">Bali</a></li>
            <li><a href="http://18.206.151.182/destination/kashmir">Kashmir</a></li>
            <li><a href="http://18.206.151.182/destination/dubai">Dubai</a></li>
            <li><a href="http://18.206.151.182/destination/maldives">Maldives</a></li>
            <li><a href="http://18.206.151.182/destination/switzerland">Switzerland</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:info@tourtravel.com">info@tourtravel.com</a>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Travel Street, Tour City, TC 12345</span>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h4 className="footer-title">Newsletter</h4>
          <p className="newsletter-description">Subscribe to get special offers and travel updates.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-btn">
              {subscribed ? '✓ Subscribed' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright">© 2026 Travel World. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <span className="divider">|</span>
          <a href="#terms">Terms of Service</a>
          <span className="divider">|</span>
          <a href="#sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
