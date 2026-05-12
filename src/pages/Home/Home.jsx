import React from 'react';
import './Home.css';
import Banner from '../../components/Banner/Banner';
import DestinationCard from '../../components/DestinationCard/DestinationCard';

const Home = () => {
  // Destination data with real image URLs
  const firstRowDestinations = [
    {
      id: 1,
      name: 'Kerala',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop',
      duration: '4 Nights / 5 Days',
    },
    {
      id: 2,
      name: 'Darjeeling',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      duration: '3 Nights / 4 Days',
    },
    {
      id: 3,
      name: 'Bali',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      duration: '5 Nights / 6 Days',
    },
    {
      id: 4,
      name: 'Kashmir',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      duration: '5 Nights / 6 Days',
    },
  ];

  const secondRowDestinations = [
    {
      id: 5,
      name: 'Goa',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
      duration: '3 Nights / 4 Days',
    },
    {
      id: 6,
      name: 'Dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      duration: '4 Nights / 5 Days',
    },
    {
      id: 7,
      name: 'Manali',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      duration: '4 Nights / 5 Days',
    },
    {
      id: 8,
      name: 'Thailand',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
      duration: '5 Nights / 6 Days',
    },
  ];

  // Special Deals Destinations
  const specialDealsDestinations = [
    {
      id: 9,
      name: 'Goa',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
      duration: '3 Nights / 4 Days',
    },
    {
      id: 10,
      name: 'Dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      duration: '4 Nights / 5 Days',
    },
    {
      id: 11,
      name: 'Switzerland',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=400&fit=crop',
      duration: '6 Nights / 7 Days',
    },
    {
      id: 12,
      name: 'Singapore',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
      duration: '3 Nights / 4 Days',
    },
    {
      id: 13,
      name: 'Paris',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=400&fit=crop',
      duration: '5 Nights / 6 Days',
    },
    {
      id: 14,
      name: 'Maldives',
      image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80',
      duration: '4 Nights / 5 Days',
    },
  ];

  // Featured Destinations
  const featuredDestinations = [
    {
      id: 15,
      name: 'Norway',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      duration: '5 Nights / 6 Days',
    },
    {
      id: 16,
      name: 'New Zealand',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=400&fit=crop',
      duration: '7 Nights / 8 Days',
    },
    {
      id: 17,
      name: 'Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
      duration: '6 Nights / 7 Days',
    },
    {
      id: 18,
      name: 'Rome',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
      duration: '4 Nights / 5 Days',
    },
  ];

  return (
    <main className="home">
      {/* Banner Section */}
      <Banner />

      {/* Trending Destinations Section */}
      <section className="trending-section">
        <div className="trending-container">
          <h2 className="trending-title">Top Trending Destinations</h2>
          <p className="trending-subtitle">Discover the most popular travel destinations</p>

          {/* First Row of Destinations */}
          <div className="destinations-grid">
            {firstRowDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                name={destination.name}
                image={destination.image}
                duration={destination.duration}
              />
            ))}
          </div>

          {/* Second Row of Destinations */}
          <div className="destinations-grid">
            {secondRowDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                name={destination.name}
                image={destination.image}
                duration={destination.duration}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Special Deals Section */}
      <section className="special-deals-section">
        <div className="special-deals-container">
          <h2 className="deals-title">Deals You Can't Miss</h2>
          <p className="deals-subtitle">Exclusive travel packages with amazing discounts</p>

          <div className="deals-grid">
            {specialDealsDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                name={destination.name}
                image={destination.image}
                duration={destination.duration}
              />
            ))}
          </div>
        </div>

        {/* Floating Plan Your Trip Button */}
        <button className="floating-plan-btn" title="Plan Your Trip">
          ✈️
        </button>
      </section>

      {/* Promotional Banner Section */}
      <section className="promo-banner-section">
        <div className="promo-banner-content">
          <div className="promo-overlay"></div>
          <div className="promo-text-container">
            <h2 className="promo-banner-title">Explore Your Dream Destination</h2>
            <button className="promo-book-btn">Book Now</button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=400&fit=crop"
            alt="Dream Destination"
            className="promo-banner-image"
          />
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="featured-section">
        <div className="featured-container">
          <h2 className="featured-title">Featured Experiences</h2>
          <p className="featured-subtitle">Curated travel experiences for unforgettable memories</p>

          <div className="featured-grid">
            {featuredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                name={destination.name}
                image={destination.image}
                duration={destination.duration}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
