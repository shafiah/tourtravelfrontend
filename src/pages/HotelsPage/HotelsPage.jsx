import React from 'react';
import './HotelsPage.css';

const HotelsPage = () => {

  const hotelsData = [
    {
      id: 1,
      name: 'Taj Lake Palace',
      location: 'Udaipur, India',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 2,
      name: 'Burj Al Arab',
      location: 'Dubai, UAE',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 3,
      name: 'Marina Bay Sands',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 4,
      name: 'The Oberoi',
      location: 'New Delhi, India',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 5,
      name: 'Atlantis The Palm',
      location: 'Dubai, UAE',
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 6,
      name: 'Hotel Everest View',
      location: 'Nepal',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop',
      rating: '★★★★☆',
    },
    {
      id: 7,
      name: 'Leela Palace',
      location: 'Bangalore, India',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 8,
      name: 'Hilton Tokyo',
      location: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 9,
      name: 'Swissôtel',
      location: 'Bangkok, Thailand',
      image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&h=400&fit=crop',
      rating: '★★★★☆',
    },
    {
      id: 10,
      name: 'Rambagh Palace',
      location: 'Jaipur, India',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 11,
      name: 'The Ritz Carlton',
      location: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 12,
      name: 'The Peninsula',
      location: 'Hong Kong',
      image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 13,
      name: 'ITC Grand Chola',
      location: 'Chennai, India',
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 14,
      name: 'Fairmont Hotel',
      location: 'Canada',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
      rating: '★★★★☆',
    },
    {
      id: 15,
      name: 'The Venetian',
      location: 'Las Vegas, USA',
      image: 'https://images.unsplash.com/photo-1578774204375-826dc5d996ed?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 16,
      name: 'Radisson Blu',
      location: 'Kashmir, India',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop',
      rating: '★★★★☆',
    },
    {
      id: 17,
      name: 'Four Seasons',
      location: 'Maldives',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 18,
      name: 'Sheraton Grand',
      location: 'Sydney, Australia',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 19,
      name: 'Hyatt Regency',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
      rating: '★★★★☆',
    },
    {
      id: 20,
      name: 'Grand Hyatt',
      location: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 21,
      name: 'JW Marriott',
      location: 'Goa, India',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 22,
      name: 'Mandarin Oriental',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
    {
      id: 23,
      name: 'W Hotel',
      location: 'Barcelona, Spain',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop',
      rating: '★★★★☆',
    },
    {
      id: 24,
      name: 'The Lalit',
      location: 'Kolkata, India',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=400&fit=crop',
      rating: '★★★★☆',
    },
    {
      id: 25,
      name: 'InterContinental',
      location: 'Rome, Italy',
      image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&h=400&fit=crop',
      rating: '★★★★★',
    },
  ];

  return (
    <div className="hotels-page">

      {/* Banner */}
      <div className="hotels-banner">
        <div className="hotels-overlay"></div>

        <div className="hotels-banner-content">
          <h1>Luxury Hotels & Resorts</h1>
          <p>
            Discover premium 4★ and 5★ hotels across domestic and international destinations.
          </p>
        </div>
      </div>

      {/* Hotels Section */}
      <div className="hotels-container">

        <div className="hotels-heading">
          <h2>Top Rated Hotels</h2>
          <p>Experience luxury stays with world-class hospitality and comfort.</p>
        </div>

        <div className="hotels-grid">

          {hotelsData.map((hotel) => (

            <div className="hotel-card" key={hotel.id}>

              <img
                src={hotel.image}
                alt={hotel.name}
                className="hotel-image"
              />

              <div className="hotel-content">

                <h3>{hotel.name}</h3>

                <p className="hotel-location">
                  📍 {hotel.location}
                </p>

                <div className="hotel-rating">
                  {hotel.rating}
                </div>

                <button className="hotel-btn">
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default HotelsPage;