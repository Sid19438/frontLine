import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/client';
import Header from './Header';
import Footer from './Footer';
import './PujaDetail.css';

interface Puja {
  _id: string;
  name: string;
  description: string;
  benefits: string[];
  duration: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  isPopular: boolean;
  rating: number;
  reviews: number;
  isActive: boolean;
}

const PujaDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [puja, setPuja] = useState<Puja | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch puja from API
  const fetchPuja = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`/website/pujas/${id}`);
      setPuja(response.data);
    } catch (err) {
      console.error('Error fetching puja:', err);
      setError('Failed to load puja details');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchPuja();
    }
  }, [id, fetchPuja]);

  const handleBookNow = () => {
    // TODO: Implement booking functionality
    console.log('Booking puja:', puja?.name);
    alert(`Booking ${puja?.name} for ₹${puja?.price}`);
  };

  const handleBackToPujas = () => {
    navigate('/pujas');
  };

  if (!puja && !loading) {
    return (
      <div className="puja-detail">
        <Header />
        <div className="not-found">
          <h2>{error || 'Puja not found'}</h2>
          <button onClick={handleBackToPujas} className="back-btn">
            Back to Pujas
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="puja-detail">
        <Header />
        <div className="loading">
          <h2>Loading puja details...</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="puja-detail">
      <Header />
      <div className="detail-container">
        <button onClick={handleBackToPujas} className="back-btn">
          ← Back to Pujas
        </button>
        
        <div className="detail-content">
          <div className="detail-left">
            <div className="detail-image-container">
              <img src={puja!.image} alt={puja!.name} className="detail-image" />
              {puja!.isPopular && <div className="popular-badge">Popular</div>}
              <div className="detail-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-text">{puja!.rating} ({puja!.reviews} reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="detail-right">
            <h1 className="detail-title">{puja!.name}</h1>
            <p className="detail-description">{puja!.description}</p>
            
            <div className="detail-info">
              <div className="info-item">
                <span className="info-icon">⏱️</span>
                <span className="info-label">Duration:</span>
                <span className="info-value">{puja!.duration}</span>
              </div>
              <div className="info-item">
                <span className="info-icon">🏷️</span>
                <span className="info-label">Category:</span>
                <span className="info-value">{puja!.category}</span>
              </div>
            </div>

            <div className="detail-benefits">
              <h3>Benefits:</h3>
              <ul className="benefits-list">
                {puja!.benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-pricing">
              <div className="price-info">
                <span className="current-price">₹{puja!.price}</span>
                <span className="original-price">₹{puja!.originalPrice}</span>
                <span className="discount">
                  {Math.round(((puja!.originalPrice - puja!.price) / puja!.originalPrice) * 100)}% OFF
                </span>
              </div>
              <p className="price-note">* Prices include all materials and priest fees</p>
            </div>

            <div className="detail-actions">
              <button className="book-now-btn" onClick={handleBookNow}>
                Book This Puja
              </button>
              <button className="consult-btn">
                Consult with Priest
              </button>
            </div>
          </div>
        </div>

        <div className="detail-additional">
          <div className="what-included">
            <h3>What's Included:</h3>
            <ul>
              <li>✓ Professional priest with experience</li>
              <li>✓ All required materials and items</li>
              <li>✓ Live streaming of the ceremony</li>
              <li>✓ Digital certificate of completion</li>
              <li>✓ Follow-up consultation</li>
            </ul>
          </div>
          
          <div className="how-it-works">
            <h3>How It Works:</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Book Your Puja</h4>
                  <p>Select your preferred date and time</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Preparation</h4>
                  <p>We prepare all materials and arrange the priest</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Live Ceremony</h4>
                  <p>Join the ceremony live from anywhere</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Completion</h4>
                  <p>Receive certificate and follow-up guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PujaDetail;
