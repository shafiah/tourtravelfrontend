import React from 'react';
import './DestinationCard.css';

const DestinationCard = ({ image, name, duration }) => {
  return (
    <div className="destination-card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
        {duration && <div className="trip-duration">{duration}</div>}
        <div className="card-overlay">
          <button className="explore-btn">Explore Now</button>
        </div>
      </div>
      <div className="card-content">
        <h3 className="destination-name">{name}</h3>
      </div>
    </div>
  );
};

export default DestinationCard;
