import React from 'react';
import './VisaPage.css';

const VisaPage = () => {

  const visaCountries = [
    {
      id: 1,
      country: 'Dubai',
      flag: '🇦🇪',
    },
    {
      id: 2,
      country: 'Thailand',
      flag: '🇹🇭',
    },
    {
      id: 3,
      country: 'Singapore',
      flag: '🇸🇬',
    },
    {
      id: 4,
      country: 'Japan',
      flag: '🇯🇵',
    },
    {
      id: 5,
      country: 'Switzerland',
      flag: '🇨🇭',
    },
    {
      id: 6,
      country: 'United Kingdom',
      flag: '🇬🇧',
    },
    {
      id: 7,
      country: 'USA',
      flag: '🇺🇸',
    },
    {
      id: 8,
      country: 'Canada',
      flag: '🇨🇦',
    },
    {
      id: 9,
      country: 'Australia',
      flag: '🇦🇺',
    },
    {
      id: 10,
      country: 'France',
      flag: '🇫🇷',
    },
  ];

  return (
    <div className="visa-page">

      {/* Banner Section */}
      <div className="visa-banner">
        <div className="visa-overlay"></div>

        <div className="visa-banner-content">
          <h1>Apply Visa Online</h1>
          <p>
            Fast, secure and hassle-free visa processing for your dream destinations.
          </p>
        </div>
      </div>

      {/* Visa Cards */}
      <div className="visa-container">

        <div className="visa-heading-section">
          <h2>Popular Visa Destinations</h2>
          <p>Choose your preferred country and start your visa application today.</p>
        </div>

        <div className="visa-grid">

          {visaCountries.map((item) => (

            <div className="visa-card" key={item.id}>

              <div className="visa-flag">
                {item.flag}
              </div>

              <h3 className="visa-country-name">
                {item.country}
              </h3>

              <button className="visa-apply-btn">
                Apply Now
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default VisaPage;