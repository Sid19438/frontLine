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
  const [selectedPackage, setSelectedPackage] = useState<Plan | null>(null);

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

  const handlePackageSelection = (plan: Plan) => {
    setSelectedPackage(plan);
  };

  const handleBooking = () => {
    if (selectedPackage) {
      // In a real application, you would redirect to a booking page
      // For now, we'll just show a message
      alert(`Booking for ${selectedPackage.minutes} min ${selectedPackage.label} (₹${selectedPackage.price})`);
      // Example: navigate(`/booking/${astrologer?.id}?package=${selectedPackage.id}`);
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
          <div className="astro-expertise" style={{textAlign:'left', color:'gray'}} >{astrologer.expertise}</div>
          <div className="astro-languages" style={{ color:'gray'}} >{astrologer.languages}</div>
          <div className="astro-meta">
            <span style={{ color:'gray'}} >Reviews : <b style={{ color:'gray'}} >{astrologer.reviews.toLocaleString()}</b></span>
            <span style={{ color:'gray'}} >Rating : {'★'.repeat(astrologer.rating)}</span>
            <span style={{ color:'gray'}} >Exp : <b style={{ color:'gray'}} >{astrologer.experience} Years</b></span>
          </div>
        </div>
       
      </div>
      
      {astrologer.plans && astrologer.plans.length > 0 && (
        <div className="astro-plans">
          <h3 style={{color:'gray'}} >Exclusive Plans & Discounts </h3>
          <div className="plans-list">
            {astrologer.plans.map((plan, idx) => (
              <div 
                className="plan-card" 
                key={idx}
                onClick={() => handlePackageSelection(plan)}
                style={{ 
                  cursor: 'pointer',
                  background: selectedPackage === plan ? 'rgba(255, 214, 0, 0.15)' : 'rgba(255, 255, 255, 0.1)',
                  border: selectedPackage === plan ? '2px solid #ffd600' : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: selectedPackage === plan 
                    ? '0 20px 40px rgba(255, 214, 0, 0.3), 0 0 0 1px rgba(255, 214, 0, 0.4)' 
                    : '0 15px 35px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  transform: selectedPackage === plan ? 'translateY(-5px)' : 'none',
                  transition: 'all 0.4s ease',
                  position: 'relative'
                }}
              >
                {selectedPackage === plan && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#43a047',
                    color: 'white',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    zIndex: 10
                  }}>
                    ✓
                  </div>
                )}
                <div className="plan-minutes" style={{
                  color: selectedPackage === plan ? '#ffd600' : '#764ba2',
                  textShadow: selectedPackage === plan ? '0 2px 10px rgba(255, 214, 0, 0.4)' : 'none'
                }} >{plan.minutes} Minutes</div>
                <div className="plan-label" style={{
                  color: selectedPackage === plan ? '#ffd600' : (plan.label == 'Audio Call' ? 'gray' : 'green'),
                  textShadow: selectedPackage === plan ? '0 2px 8px rgba(255, 214, 0, 0.4)' : 'none'
                }}  >{plan.label}</div>
                <div className="plan-rating" style={{color:'gray'}} >{'★'.repeat(plan.rating)}</div>
                <div className="plan-price" style={{
                  color: selectedPackage === plan ? '#ffd600' : 'green',
                  textShadow: selectedPackage === plan ? '0 2px 8px rgba(255, 214, 0, 0.4)' : 'none'
                }} >
                  ₹{plan.price}
                </div>
              </div>
            ))}
          </div>
          
          {/* Book Now Button */}
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button 
              onClick={handleBooking}
              disabled={!selectedPackage}
              style={{
                background: selectedPackage 
                  ? 'linear-gradient(135deg, #43a047 0%, #66bb6a 100%)' 
                  : 'linear-gradient(135deg, #9e9e9e 0%, #757575 100%)',
                color: 'white',
                border: '2px solid transparent',
                padding: '18px 40px',
                borderRadius: '50px',
                fontSize: '1.2rem',
                fontWeight: '700',
                cursor: selectedPackage ? 'pointer' : 'not-allowed',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: selectedPackage 
                  ? '0 10px 30px rgba(67, 160, 71, 0.5)' 
                  : '0 4px 15px rgba(158, 158, 158, 0.3)',
                minWidth: '320px',
                position: 'relative',
                overflow: 'hidden',
                textTransform: 'uppercase' as const,
                letterSpacing: '1px',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                opacity: selectedPackage ? 1 : 0.7,
                transform: selectedPackage ? 'translateY(-2px)' : 'none'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                if (selectedPackage) {
                  target.style.transform = 'translateY(-5px)';
                  target.style.boxShadow = '0 20px 40px rgba(67, 160, 71, 0.7)';
                }
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                if (selectedPackage) {
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 10px 30px rgba(67, 160, 71, 0.5)';
                }
              }}
            >
              {selectedPackage ? `Book Now - ${selectedPackage.minutes} min ${selectedPackage.label} (₹${selectedPackage.price})` : 'Select a package to book'}
            </button>
          </div>
        </div>
      )}
      
      {astrologer.specializations && astrologer.specializations.length > 0 && (
        <div className="astro-specialization">
          <h3 style={{color:'gray'}} >Specialization</h3>
          <div className="specialization-list">
            {astrologer.specializations.map((spec, idx) => (
              <span className="specialization-item" style={{color:'#fff'}} key={idx}>{spec}</span>
            ))}
          </div>
        </div>
      )}
      
      <div className="astro-about">
        <h3 style={{color:'gray', }} >About My Services</h3>
        <p style={{color:'gray', }} >{astrologer.about}</p>
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
