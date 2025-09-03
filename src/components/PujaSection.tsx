import React, { useState } from 'react';
import { getAllPujas, Puja } from '../utils/dummyData';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './PujaSection.css';

const PujaSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const pujas = getAllPujas();
  const navigate = useNavigate();
  
  const categories = ['All', ...Array.from(new Set(pujas.map(puja => puja.category)))];
  
  const filteredPujas = selectedCategory === 'All' 
    ? pujas 
    : pujas.filter(puja => puja.category === selectedCategory);

  const handleBookNow = (puja: Puja) => {
    // TODO: Implement booking functionality
    console.log('Booking puja:', puja.name);
    alert(`Booking ${puja.name} for ₹${puja.price}`);
  };

  const handleViewDetails = (pujaId: string) => {
    navigate(`/puja/${pujaId}`);
  };

  return (
    <div className="puja-section">
      <Header />
      <div className="puja-header">
        <h1 className="puja-title">Sacred Pujas & Rituals</h1>
        <p className="puja-subtitle">
          Experience the power of ancient Vedic rituals performed by expert priests. 
          Each puja is designed to bring specific benefits and remove obstacles from your life.
        </p>
      </div>

      {/* Category Filter */}
      <div className="puja-categories">
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Pujas Grid */}
      <div className="pujas-grid">
        {filteredPujas.map((puja) => (
          <div key={puja._id} className="puja-card">
            <div className="puja-image-container">
              <img src={puja.image} alt={puja.name} className="puja-image" />
              {puja.isPopular && <div className="popular-badge">Popular</div>}
              <div className="puja-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-text">{puja.rating} ({puja.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="puja-content">
              <h3 className="puja-name">{puja.name}</h3>
              <p className="puja-description">{puja.description}</p>
              
              <div className="puja-details">
                <div className="puja-duration">
                  <span className="duration-icon">⏱️</span>
                  <span>{puja.duration}</span>
                </div>
                <div className="puja-category">
                  <span className="category-icon">🏷️</span>
                  <span>{puja.category}</span>
                </div>
              </div>

              <div className="puja-benefits">
                <h4>Benefits:</h4>
                <ul className="benefits-list">
                  {puja.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="benefit-item">
                      <span className="benefit-icon">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="puja-pricing">
                <div className="price-container">
                  <span className="current-price">₹{puja.price}</span>
                  <span className="original-price">₹{puja.originalPrice}</span>
                  <span className="discount">
                    {Math.round(((puja.originalPrice - puja.price) / puja.originalPrice) * 100)}% OFF
                  </span>
                </div>
              </div>

              <button 
                className="book-now-btn"
                onClick={() => handleViewDetails(puja._id)}
              >
                Book Now
              </button>
              {/* <button 
                className="view-details-btn"
                onClick={() => handleViewDetails(puja._id)}
              >
                View Details
              </button> */}
            </div>
          </div>
        ))}
      </div>

      {filteredPujas.length === 0 && (
        <div className="no-pujas">
          <p>No pujas found for the selected category.</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PujaSection;
