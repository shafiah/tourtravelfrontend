import React from 'react';
import './ComingSoonPage.css';

const ComingSoonPage = () => {

  return (
    <div className="coming-modal-overlay">

      <div className="coming-modal-content">

        {/* Badge */}
        <div className="coming-badge">
          ✈️ Tour & Travel Services
        </div>

        {/* Heading */}
        <h1 className="coming-title">
          Booking Services Coming Soon
        </h1>

        {/* Description */}
        <p className="coming-description">
          We are currently working on our Flights, Hotels, Trains, and Bus booking systems
          to provide you with a smooth and professional travel experience.
        </p>

        {/* Image */}
        <div className="coming-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=700&fit=crop"
            alt="Travel"
            className="coming-image"
          />
        </div>

        {/* Features */}
        <div className="coming-feature-grid">

          <div className="coming-feature-card">
            ✈️ Flights
          </div>

          <div className="coming-feature-card">
            🚆 Trains
          </div>

          <div className="coming-feature-card">
            🏨 Hotels
          </div>

          <div className="coming-feature-card">
            🚌 Buses
          </div>

        </div>

        {/* Footer Button */}
        <button
          className="coming-ok-btn"
          onClick={() => window.history.back()}
        >
          Back
        </button>

      </div>
    </div>
  );
};

export default ComingSoonPage;