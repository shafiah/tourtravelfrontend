import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { packageData } from '../../data/packageData';
import PackageOverview from '../../components/PackageDetails/PackageOverview';
import ItinerarySection from '../../components/PackageDetails/ItinerarySection';
import TripPlanModal from '../../components/Modal/TripPlanModal';
import './PackageDetails.css';

const PackageDetails = () => {
  const { packageId } = useParams();
  const pkg = packageData[packageId];
  const [activeTab, setActiveTab] = useState('overview');
  // Trip Plan Modal State
const [showTripPlanModal, setShowTripPlanModal] = useState(false);

  if (!pkg) {
    return (
      <div className="package-error">
        <h2>Package Not Found</h2>
        <p>Sorry, the package you're looking for doesn't exist.</p>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <PackageOverview overview={pkg.overview} />;
      case 'itinerary':
        return <ItinerarySection itinerary={pkg.itinerary} />;
      case 'inclusions':
        return (
          <div className="tab-content">
            <div className="inclusions-exclusions-wrapper">
              <div className="inclusions-box">
                <h3>What's Included</h3>
                <ul className="inclusion-list">
                  {pkg.inclusions.map((item, idx) => (
                    <li key={idx}>
                      <span className="inclusion-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="exclusions-box">
                <h3>What's Excluded</h3>
                <ul className="exclusion-list">
                  {pkg.exclusions.map((item, idx) => (
                    <li key={idx}>
                      <span className="exclusion-icon">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case 'additional':
        return (
          <div className="tab-content">
            <div className="additional-info-grid">
              <div className="info-card">
                <h4>Best Time to Visit</h4>
                <p>{pkg.additionalInfo.bestTimeToVisit}</p>
              </div>
              <div className="info-card">
                <h4>Currency & Money</h4>
                <p>{pkg.additionalInfo.howToBringCurrency}</p>
              </div>
              <div className="info-card">
                <h4>Documentation</h4>
                <p>{pkg.additionalInfo.documentations}</p>
              </div>
              <div className="info-card">
                <h4>Cancellation Policy</h4>
                <p>{pkg.additionalInfo.cancellationPolicy}</p>
              </div>
            </div>

            <div className="travel-tips-section">
              <h3>Travel Tips</h3>
              <ul className="travel-tips-list">
                {pkg.additionalInfo.travelTips.map((tip, idx) => (
                  <li key={idx}>
                    <span className="tip-icon">💡</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="package-details-page">
      {/* Banner Section with 70/30 Layout */}
      <div className="package-banner-container">
        <div className="banner-background" style={{ backgroundImage: `url(${pkg.bannerImage})` }}>
          <div className="banner-overlay"></div>
        </div>
        
        <div className="banner-layout">
          {/* Left side - 70% */}
          <div className="banner-content-left">
            <div className="banner-content">
              <div className="destination-badge">{pkg.destination}</div>
              <h1 className="package-title">{pkg.title}</h1>
              <p className="package-tagline">{pkg.tagline}</p>
              
              <div className="package-info-grid">
                <div className="info-item">
                  <span className="info-label">Duration</span>
                  <span className="info-value">{pkg.duration}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Price per Person</span>
                  <span className="info-value">{pkg.pricePerPerson}</span>
                </div>
              </div>

              <button className="book-now-btn"
              onClick={() => setShowTripPlanModal(true)}>Book This Package</button>
            </div>
                {/* Trip Plan Modal */}
                <TripPlanModal
                isOpen={showTripPlanModal}
                onClose={() => setShowTripPlanModal(false)}
/>
          </div>

          {/* Right side - 30% (reserved for future widgets) */}
          <div className="banner-content-right">
            <div className="sidebar-placeholder">
              <p>Featured Package</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs-container">
        <div className="tabs-wrapper">
          <button
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`tab-button ${activeTab === 'itinerary' ? 'active' : ''}`}
            onClick={() => setActiveTab('itinerary')}
          >
            Day Wise Itinerary
          </button>
          <button
            className={`tab-button ${activeTab === 'inclusions' ? 'active' : ''}`}
            onClick={() => setActiveTab('inclusions')}
          >
            Inclusions & Exclusions
          </button>
          <button
            className={`tab-button ${activeTab === 'additional' ? 'active' : ''}`}
            onClick={() => setActiveTab('additional')}
          >
            Additional Information
          </button>
        </div>
      </div>

      {/* Tab Content Section */}
      <div className="tab-content-container">
        {renderTabContent()}
      </div>

      {/* Booking CTA Section */}
      <div className="booking-cta-section">
        <div className="cta-content">
          <h2>Ready for Your Adventure?</h2>
          <p>Book your {pkg.destination} trip now and create unforgettable memories!</p>
          <button className="cta-book-btn"
          onClick={() => setShowTripPlanModal(true)}>
            Book This Package
          </button>
        </div>
      </div>
        {/* Trip Plan Modal */}
            <TripPlanModal
            isOpen={showTripPlanModal}
            onClose={() => setShowTripPlanModal(false)}
/>
    </div>
  );
};

export default PackageDetails;
