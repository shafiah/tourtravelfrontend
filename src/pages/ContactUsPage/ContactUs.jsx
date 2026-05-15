import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="contact-page">

      {/* Banner Section */}
      <div className="contact-banner">

        <div className="contact-overlay"></div>

        <div className="contact-banner-content">
          <h1>Contact Us</h1>

          <p>
            We would love to help you plan your next dream vacation.
          </p>
        </div>

      </div>

      {/* Contact Main Section */}
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info-section">

          <span className="contact-tag">
            ✈️ Get In Touch
          </span>

          <h2 className="contact-title">
            Let’s Plan Your Perfect Journey Together
          </h2>

          <p className="contact-description">
            Our travel experts are ready to help you with holiday packages,
            hotel bookings, flights, visas, honeymoon trips, adventure tours,
            and customized travel plans.
          </p>

          {/* Contact Cards */}
          <div className="contact-cards">

            <div className="contact-card">
              <div className="contact-icon">📞</div>

              <div>
                <h4>Phone Number</h4>
                <p>+91 9876543210</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📧</div>

              <div>
                <h4>Email Address</h4>
                <p>info@tourtravel.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>

              <div>
                <h4>Office Address</h4>
                <p>Patna, Bihar, India</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🕒</div>

              <div>
                <h4>Working Hours</h4>
                <p>Mon - Sat : 9 AM - 8 PM</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side Form */}
        <div className="contact-form-section">

          <div className="form-box">

            <h3>Send Your Enquiry</h3>

            {
              submitted ? (
                <div className="success-message">
                  ✅ Your enquiry has been submitted successfully!
                </div>
              ) : (
                <form onSubmit={handleSubmit}>

                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="destination"
                      placeholder="Preferred Destination"
                      value={formData.destination}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      rows="5"
                      name="message"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="contact-btn">
                    Send Message
                  </button>

                </form>
              )
            }

          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="contact-bottom-section">

        <div className="bottom-card">
          <h3>🌍 150+ Destinations</h3>
          <p>
            Explore domestic and international travel packages.
          </p>
        </div>

        <div className="bottom-card">
          <h3>🏨 Luxury Hotels</h3>
          <p>
            Premium 4★ & 5★ hotel stays with best pricing.
          </p>
        </div>

        <div className="bottom-card">
          <h3>✈️ Easy Booking</h3>
          <p>
            Fast and secure booking with dedicated support.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ContactUs;