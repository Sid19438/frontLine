import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AstroProfile.css';
import { dummyAstrologers, type Astrologer, type Plan } from '../utils/dummyData';

const AstroProfile = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [astrologer, setAstrologer] = useState<Astrologer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isUsingDummyData, setIsUsingDummyData] = useState(false);

  useEffect(() => {
    if (name) {
      fetchAstrologerByName(decodeURIComponent(name));
    }
  }, [name]);

  const fetchAstrologerByName = async (astrologerName: string) => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch('http://localhost:5000/api/website/astrologers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(5000)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const astrologers = await response.json();
      
      // Find astrologer by name
      const foundAstrologer = astrologers.find((astro: Astrologer) => 
        astro.name.toLowerCase() === astrologerName.toLowerCase()
      );
      
      if (!foundAstrologer) {
        // Try to find in dummy data as fallback
        const dummyAstrologer = dummyAstrologers.find(astro => 
          astro.name.toLowerCase() === astrologerName.toLowerCase()
        );
        
        if (dummyAstrologer) {
          setAstrologer(dummyAstrologer);
          setIsUsingDummyData(true);
          console.log('Using dummy data for astrologer profile');
        } else {
          setError('Astrologer not found');
        }
        return;
      }
      
      setAstrologer(foundAstrologer);
      setIsUsingDummyData(false);
      console.log('Successfully loaded real astrologer data');
      
    } catch (err: any) {
      console.error('Error fetching astrologer:', err);
      
      // Try to find in dummy data as fallback
      if (name) {
        const dummyAstrologer = dummyAstrologers.find(astro => 
          astro.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
        );
        
        if (dummyAstrologer) {
          setAstrologer(dummyAstrologer);
          setIsUsingDummyData(true);
          console.log('Using dummy data due to backend error');
        } else {
          if (err.name === 'AbortError') {
            setError('Request timeout - please try again');
          } else if (err.message.includes('Failed to fetch')) {
            setError('Backend not available - please try again later');
          } else {
            setError('Failed to load astrologer profile');
          }
        }
      } else {
        setError('Invalid astrologer name');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleConsultation = () => {
    if (astrologer?.consultationUrl) {
      window.open(astrologer.consultationUrl, '_blank');
    } else {
      // Fallback to Google Form if no consultation URL is set
      const googleFormUrl = 'https://forms.gle/SsvcGuPiNvX5TP3SA';
      window.open(googleFormUrl, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="astro-profile">
        <div className="loading">
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <div style={{ fontSize: '24px', marginBottom: '20px' }}>🔄</div>
            <div>Loading astrologer profile...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !astrologer) {
    return (
      <div className="astro-profile">
        <div className="error">
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>⚠️</div>
            <h2>Astrologer Not Found</h2>
            <p>{error || 'The requested astrologer profile could not be found.'}</p>
            <button onClick={() => navigate('/')} className="back-btn">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="astro-profile">
      {/* Show demo mode indicator */}
      {isUsingDummyData && (
        <div style={{
          background: '#fff3cd',
          color: '#856404',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: '14px'
        }}>
          📱 Demo Mode: Showing sample astrologer profile
        </div>
      )}
      
      <div className="astro-header">
        <img 
          src={astrologer.avatar} 
          alt={astrologer.name} 
          className="astro-avatar"
          onError={(e) => {
            // Fallback avatar if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/300x300/4a90e2/ffffff?text=Astrologer';
          }}
        />
        <div className="astro-info">
          <h2>{astrologer.name}</h2>
          <div className="astro-expertise">{astrologer.expertise}</div>
          <div className="astro-languages">{astrologer.languages}</div>
          <div className="astro-meta">
            <span>Reviews : <b>{astrologer.reviews.toLocaleString()}</b></span>
            <span>Rating : {'★'.repeat(astrologer.rating)}</span>
            <span>Exp : <b>{astrologer.experience} Years</b></span>
          </div>
        </div>
        <div className="astro-actions">
          <button className="astro-consultation-btn" onClick={handleConsultation}>Consultation</button>
        </div>
      </div>
      
      {astrologer.plans && astrologer.plans.length > 0 && (
        <div className="astro-plans">
          <h3 style={{color:'#2955af'}} >Exclusive Plans & Discounts By <span>{astrologer.name}</span></h3>
          <div className="plans-list">
            {astrologer.plans.map((plan, idx) => (
              <div className="plan-card" key={idx}>
                
                {/* {plan.discount && plan.discount !== '' && (
                  <div className="plan-discount">{plan.discount}</div>
                )} */}
                <div className="plan-minutes">{plan.minutes} Minutes</div>
                <div className="plan-label">{plan.label}</div>
                {/* <div className="plan-session">Session</div> */}
                <div className="plan-rating">{'★'.repeat(plan.rating)}</div>
                {/* <div className="plan-connect">Connect via <b>{plan.connect}</b></div> */}
                <div className="plan-price">
                  ₹{plan.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {astrologer.specializations && astrologer.specializations.length > 0 && (
        <div className="astro-specialization">
          <h3>Specialization</h3>
          <div className="specialization-list">
            {astrologer.specializations.map((spec, idx) => (
              <span className="specialization-item" key={idx}>{spec}</span>
            ))}
          </div>
        </div>
      )}
      
      <div className="astro-about">
        <h3>About My Services</h3>
        <p>{astrologer.about}</p>
      </div>
      
      {astrologer.gallery && astrologer.gallery.length > 0 && (
        <div className="astro-gallery">
          <h3>Gallery</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {astrologer.gallery.map((img, idx) => (
              <img 
                src={img} 
                alt={`gallery-${idx}`} 
                className="gallery-img" 
                key={idx}
                onError={(e) => {
                  // Fallback image if gallery image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/300x200/4a90e2/ffffff?text=Gallery';
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Back button */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button onClick={() => navigate('/')} className="back-btn">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AstroProfile;
