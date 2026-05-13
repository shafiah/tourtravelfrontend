import React from 'react';

const PackageOverview = ({ overview }) => {
  return (
    <div className="tab-content">
      <div className="overview-wrapper">
        <div className="overview-description">
          <h3>About This Package</h3>
          <p>{overview.description}</p>
        </div>

        <div className="highlights-section">
          <h3>Package Highlights</h3>
          <div className="highlights-grid">
            {overview.highlights.map((highlight, idx) => (
              <div key={idx} className="highlight-card">
                <div className="highlight-icon">⭐</div>
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageOverview;
