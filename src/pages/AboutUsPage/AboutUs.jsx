import React from 'react';
import './AboutUs.css';

const AboutUs = () => {

  return (
    <div className="about-page">

      {/* Banner Section */}
      <div className="about-banner">

        <div className="about-overlay"></div>

        <div className="about-banner-content">
          <h1>About Our Travel Agency</h1>

          <p>
            Creating unforgettable journeys and premium travel experiences
            for travelers around the world.
          </p>
        </div>

      </div>

      {/* Main About Section */}
      <div className="about-container">

        {/* Left Image Section */}
        <div className="about-image-section">

          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&h=1000&fit=crop"
            alt="Travel Agency Founder"
            className="about-image"
          />

          <div className="experience-badge">
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>

        </div>

        {/* Right Content Section */}
        <div className="about-content-section">

          <span className="about-tag">
            ✈️ Trusted Tour & Travel Agency
          </span>

          <h2 className="about-title">
            We Make Every Journey Special & Memorable
          </h2>

          <p className="about-description">
            TourTravel is a professional travel agency dedicated to helping
            travelers explore beautiful destinations across the globe.
            From luxury vacations and honeymoon packages to adventure trips
            and business travel, we provide complete travel solutions with
            comfort, affordability, and world-class customer service.
          </p>

          <p className="about-description">
            Our mission is to turn your dream destinations into reality with
            carefully planned travel experiences, premium hotel bookings,
            guided tours, flight reservations, and customized holiday packages.
            We believe traveling should be stress-free, exciting, and unforgettable.
          </p>

          {/* Features */}
          <div className="about-features">

            <div className="feature-card">
              <span className="feature-icon">🌍</span>
              <div>
                <h4>Worldwide Tours</h4>
                <p>Domestic & international destinations.</p>
              </div>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🏨</span>
              <div>
                <h4>Luxury Hotels</h4>
                <p>Premium 4★ & 5★ hotel stays.</p>
              </div>
            </div>

            <div className="feature-card">
              <span className="feature-icon">✈️</span>
              <div>
                <h4>Easy Booking</h4>
                <p>Fast and secure booking process.</p>
              </div>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🛡️</span>
              <div>
                <h4>Trusted Support</h4>
                <p>24×7 customer assistance available.</p>
              </div>
            </div>

          </div>

          {/* Button */}
          <button className="about-btn">
            Explore Packages
          </button>

        </div>

      </div>

      {/* Stats Section */}
      <div className="stats-section">

        <div className="stat-box">
          <h2>15K+</h2>
          <p>Happy Travelers</p>
        </div>

        <div className="stat-box">
          <h2>250+</h2>
          <p>Tour Packages</p>
        </div>

        <div className="stat-box">
          <h2>120+</h2>
          <p>Destinations</p>
        </div>

        <div className="stat-box">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>

      </div>

    </div>
  );
};

export default AboutUs;