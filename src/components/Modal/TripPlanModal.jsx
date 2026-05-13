import React, { useState } from 'react';
import './TripPlanModal.css';

const TripPlanModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    destination: '',
    departureDate: '',
    departureCity: '',
    fullName: '',
    phoneNumber: '',
    email: '',
    adults: '1',
    children: '0',
    infants: '0',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.destination.trim()) {
      setError('Destination is required');
      return;
    }
    if (!formData.departureDate) {
      setError('Date of departure is required');
      return;
    }
    if (!formData.departureCity.trim()) {
      setError('City of departure is required');
      return;
    }
    if (!formData.fullName.trim()) {
      setError('Full name is required');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setError('Phone number is required');
      return;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }

    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Auto close after 2 seconds
      setTimeout(() => {
        resetForm();
        onClose();
      }, 2000);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      destination: '',
      departureDate: '',
      departureCity: '',
      fullName: '',
      phoneNumber: '',
      email: '',
      adults: '1',
      children: '0',
      infants: '0',
    });
    setSuccess(false);
  };

  if (!isOpen) return null;

  return (
    <div className="trip-modal-overlay" onClick={onClose}>
      <div className="trip-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="trip-modal-close" onClick={onClose}>×</button>

        <h2 className="trip-modal-header">
          Want to go for a memorable holiday? 🛍🎈⛱️
        </h2>

        {success ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <p>Your travel enquiry has been submitted successfully!</p>
            <p className="success-subtitle">We'll contact you soon with exciting travel packages.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="trip-form">
            <div className="form-grid">
              {/* Destination */}
              <div className="form-group">
                <label htmlFor="destination">Destination *</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  placeholder="e.g., Bali, Switzerland"
                  value={formData.destination}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Departure Date */}
              <div className="form-group">
                <label htmlFor="departureDate">Date of Departure *</label>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Departure City */}
              <div className="form-group">
                <label htmlFor="departureCity">City of Departure *</label>
                <input
                  type="text"
                  id="departureCity"
                  name="departureCity"
                  placeholder="e.g., New York"
                  value={formData.departureCity}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number *</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">E-mail ID *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Adults */}
              <div className="form-group">
                <label htmlFor="adults">Adults</label>
                <select
                  id="adults"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  className="form-input"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              {/* Children */}
              <div className="form-group">
                <label htmlFor="children">Children</label>
                <select
                  id="children"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  className="form-input"
                >
                  {[...Array(6)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>

              {/* Infants */}
              <div className="form-group">
                <label htmlFor="infants">Infants</label>
                <select
                  id="infants"
                  name="infants"
                  value={formData.infants}
                  onChange={handleChange}
                  className="form-input"
                >
                  {[...Array(4)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button
              type="submit"
              className="trip-submit-btn"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Send Enquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TripPlanModal;
