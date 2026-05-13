import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { destinationData } from '../../data/destinationData';
import PackageCard from '../../components/PackageCard/PackageCard';
import TripPlanModal from '../../components/Modal/TripPlanModal';
import './DestinationPage.css';

const DestinationPage = () => {
  const { destinationName } = useParams();
  const destination = destinationData[destinationName?.toLowerCase()];
  const [showTripPlanModal, setShowTripPlanModal] = useState(false);
  
  const [tripDetails, setTripDetails] = useState({
    from: 'Patna',
    to: destination?.name || '',
    departureDate: '',
    travelers: '1'
  });

  if (!destination) {
    return (
      <div className="destination-error">
        <h2>Destination not found</h2>
        <p>Sorry, we couldn't find information about this destination.</p>
      </div>
    );
  }

  const handleTripChange = (e) => {
    const { name, value } = e.target;
    setTripDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearchTrip = (e) => {
    e.preventDefault();
    alert(`Searching trips from ${tripDetails.from} to ${tripDetails.to} on ${tripDetails.departureDate}`);
  };

  return (
    <div className="destination-page">
      {/* Banner Section */}
      <div className="destination-banner" style={{ backgroundImage: `url(${destination.bannerImage})` }}>
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="destination-title">{destination.name}</h1>
          <p className="destination-description">{destination.description}</p>
        </div>
      </div>

      {/* Travel Search Box */}
      <div className="travel-search-container">
        <form className="travel-search-box" onSubmit={handleSearchTrip}>
          <div className="search-field">
            <label>From</label>
            <div className="input-group">
              <FaMapMarkerAlt className="field-icon" />
              <input
                type="text"
                name="from"
                value={tripDetails.from}
                onChange={handleTripChange}
                placeholder="Departure city"
              />
            </div>
          </div>

          <div className="search-field">
            <label>To</label>
            <div className="input-group">
              <FaMapMarkerAlt className="field-icon" />
              <input
                type="text"
                name="to"
                value={destination.name}
                disabled
                placeholder="Destination"
              />
            </div>
          </div>

          <div className="search-field">
            <label>Departure Date</label>
            <div className="input-group">
              <FaCalendarAlt className="field-icon" />
              <input
                type="date"
                name="departureDate"
                value={tripDetails.departureDate}
                onChange={handleTripChange}
                required
              />
            </div>
          </div>

          <div className="search-field">
            <label>Travelers</label>
            <div className="input-group">
              <FaUsers className="field-icon" />
              <select
                name="travelers"
                value={tripDetails.travelers}
                onChange={handleTripChange}
              >
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
                <option value="5">5+ Persons</option>
              </select>
            </div>
          </div>

          <button type="submit" className="search-btn">Search Trips</button>
        </form>
      </div>

      {/* Packages Section */}
      <div className="packages-section">
        <h2>Recommended Packages for {destination.name}</h2>
        <div className="packages-grid">
          {destination.packages && destination.packages.map(pkg => (
            <PackageCard
              key={pkg.id}
              title={pkg.title}
              image={pkg.image}
              duration={pkg.duration}
              description={pkg.description}
              price={pkg.price}
              packageId={pkg.packageId}
            />
          ))}
        </div>
      </div>

      {/* Floating Plan Your Trip Button */}
      <button 
        className="floating-plan-btn" 
        title="Plan Your Trip"
        onClick={() => setShowTripPlanModal(true)}
      >
        ✈️
      </button>

      {/* Trip Plan Modal */}
      <TripPlanModal
        isOpen={showTripPlanModal}
        onClose={() => setShowTripPlanModal(false)}
      />
    </div>
  );
};

export default DestinationPage;
