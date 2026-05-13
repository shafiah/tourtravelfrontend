import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PackageCard.css';

const PackageCard = ({ title, image, duration, description, price, packageId }) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    if (packageId) {
      navigate(`/package/${packageId}`);
    }
  };

  return (
    <div className="package-card">
      <div className="package-image-container">
        <img src={image} alt={title} className="package-image" />
        <div className="package-overlay">
          <button className="package-explore-btn" onClick={handleExplore}>
            Explore Package
          </button>
        </div>
      </div>
      <div className="package-content">
        <h3 className="package-title">{title}</h3>
        <p className="package-duration">📅 {duration}</p>
        <p className="package-description">{description}</p>
        <div className="package-footer">
          <span className="package-price">{price}</span>
          <button className="package-view-details-btn" onClick={handleExplore}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
