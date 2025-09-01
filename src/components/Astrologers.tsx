import React, { useState, useEffect } from 'react';
import './Astrologers.css';
import { useNavigate } from 'react-router-dom';
import { dummyAstrologers, type Astrologer } from '../utils/dummyData';

const Astrologers = () => {
  const navigate = useNavigate();
  const [astrologers, setAstrologers] = useState<Astrologer[]>(dummyAstrologers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isUsingDummyData, setIsUsingDummyData] = useState(true);

  useEffect(() => {
    fetchAstrologers();
  }, []);

  const fetchAstrologers = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL || 'https://csbackend-xr99.onrender.com/api'}/website/astrologers`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Add timeout to prevent long waits
        signal: AbortSignal.timeout(5000)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Only show active astrologers on the website
      const activeAstrologers = data.filter((astro: Astrologer) => astro.isActive);
      
      if (activeAstrologers.length > 0) {
        setAstrologers(activeAstrologers);
        setIsUsingDummyData(false);
        console.log('Successfully loaded real astrologer data');
      } else {
        console.log('No active astrologers found, using dummy data');
        setIsUsingDummyData(true);
      }
    } catch (err: any) {
      console.error('Error fetching astrologers:', err);
      
      if (err.name === 'AbortError') {
        setError('Request timeout - using demo data');
      } else if (err.message.includes('Failed to fetch')) {
        setError('Backend not available - using demo data');
      } else {
        setError('Error loading data - using demo data');
      }
      
      // Keep dummy data when backend is not available
      setIsUsingDummyData(true);
    } finally {
      setLoading(false);
    }
  };

  // Show only top 4 astrologers
  const topAstrologers = astrologers.slice(0, 4);

  return (
    <section className="astrologers-section">
      <h2>Our Astrologers</h2>
      <p style={{color: '#7a7a7a', padding: '0rem 0.5rem'}} >Get in touch with the best Online Astrologers, anytime & anywhere!</p>
      
      {/* Show status indicator */}
      {/* {isUsingDummyData && (
        <div style={{
          background: '#fff3cd',
          color: '#856404',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: '14px'
        }}>
          📱 Demo Mode: Showing sample astrologer profiles
        </div>
      )} */}
      
      {loading && (
        <div style={{
          background: '#d1ecf1',
          color: '#0c5460',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: '14px'
        }}>
          🔄 Loading astrologer profiles...
        </div>
      )}
      
      {error && !isUsingDummyData && (
        <div style={{
          background: '#f8d7da',
          color: '#721c24',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: '14px'
        }}>
          ⚠️ {error}
        </div>
      )}
      
      <div className="astrologers-list">
        {topAstrologers.map((astro) => (
          <div
            className="astrologer-card"
            key={astro._id}
            onClick={() => navigate(`/astrologer/${encodeURIComponent(astro.name)}`)}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={astro.avatar} 
              alt={astro.name} 
              className="astro-avatar"
              onError={(e) => {
                // Fallback avatar if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/150x150/4a90e2/ffffff?text=Astrologer';
              }}
            />
            <div className="astro-name">{astro.name}</div>
            <div className="astro-expertise">{astro.expertise}</div>
            <div className="astro-reviews">Reviews : <span className="review-count">{astro.reviews.toLocaleString()}</span></div>
            <div className="astro-rating">{'★'.repeat(astro.rating)}</div>
            <div className="astro-experience">{astro.experience} years experience</div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="see-all-container">
        <button 
          className="see-all-btn"
          onClick={() => navigate('/all-astrologers')}
        >
          See All Astrologers
        </button>
      </div>
    </section>
  );
};

export default Astrologers;
