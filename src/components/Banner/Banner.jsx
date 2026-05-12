import React, { useState, useEffect } from 'react';
import './Banner.css';
import { FaSearch } from 'react-icons/fa';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=500&fit=crop',
      title: 'Explore the World',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=500&fit=crop',
      title: 'Adventure Awaits',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=500&fit=crop',
      title: 'Beach Paradise',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&h=500&fit=crop',
      title: 'Mountain Escape',
    },
  ];

  // Auto-rotate banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="banner-section">
      <div className="banner-container">
        {/* Slider */}
        <div className="banner-slider">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={banner.image} alt={banner.title} />
              <div className="banner-overlay"></div>
            </div>
          ))}
        </div>

        {/* Search Box */}
        <div className="banner-search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter your dream destination"
              className="search-input"
            />
            <button className="search-btn">
              <FaSearch className="search-icon" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="banner-dots">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="banner-arrow prev-arrow"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
        >
          ❮
        </button>
        <button
          className="banner-arrow next-arrow"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Banner;
