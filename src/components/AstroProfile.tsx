import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AstroProfile.css';

interface Plan {
  label: string;
  minutes: number;
  discount: string;
  price: number;
  oldPrice: number;
  connect: string;
  rating: number;
}

interface Astrologer {
  _id: string;
  name: string;
  expertise: string;
  languages: string;
  reviews: number;
  rating: number;
  experience: number;
  avatar: string;
  about: string;
  specializations: string[];
  plans: Plan[];
  gallery: string[];
  isActive: boolean;
  consultationUrl?: string;
  createdAt: string;
  updatedAt: string;
}

const AstroProfile = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [astrologer, setAstrologer] = useState<Astrologer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (name) {
      fetchAstrologerByName(decodeURIComponent(name));
    }
  }, [name]);

  const fetchAstrologerByName = async (astrologerName: string) => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/website/astrologers');
      if (!response.ok) {
        throw new Error('Failed to fetch astrologers');
      }
      const astrologers = await response.json();
      
      // Find astrologer by name
      const foundAstrologer = astrologers.find((astro: Astrologer) => 
        astro.name.toLowerCase() === astrologerName.toLowerCase()
      );
      
      if (!foundAstrologer) {
        setError('Astrologer not found');
        return;
      }
      
      setAstrologer(foundAstrologer);
    } catch (err) {
      console.error('Error fetching astrologer:', err);
      setError('Failed to load astrologer profile');
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
        <div className="loading">Loading astrologer profile...</div>
      </div>
    );
  }

  if (error || !astrologer) {
    return (
      <div className="astro-profile">
        <div className="error">
          <h2>Astrologer Not Found</h2>
          <p>{error || 'The requested astrologer profile could not be found.'}</p>
          <button onClick={() => navigate('/')} className="back-btn">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="astro-profile">
      <div className="astro-header">
        <img src={astrologer.avatar} alt={astrologer.name} className="astro-avatar" />
        <div className="astro-info">
          <h2>{astrologer.name}</h2>
          <div className="astro-expertise">{astrologer.expertise}</div>
          <div className="astro-languages">{astrologer.languages}</div>
          <div className="astro-meta">
            <span>Reviews : <b>{astrologer.reviews}</b></span>
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
          <h3>Exclusive Plans & Discounts By <span>{astrologer.name}</span></h3>
          <div className="plans-list">
            {astrologer.plans.map((plan, idx) => (
              <div className="plan-card" key={idx}>
                <div className="plan-label">{plan.label}</div>
                <div className="plan-discount">{plan.discount}</div>
                <div className="plan-minutes">{plan.minutes} Minutes</div>
                <div className="plan-session">Session</div>
                <div className="plan-rating">{'★'.repeat(plan.rating)}</div>
                <div className="plan-connect">Connect via <b>{plan.connect}</b></div>
                <div className="plan-price">
                  ₹{plan.price} <span className="plan-oldprice">₹{plan.oldPrice}</span>
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
          {astrologer.gallery.map((img, idx) => (
            <img src={img} alt={`gallery-${idx}`} className="gallery-img" key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AstroProfile;
