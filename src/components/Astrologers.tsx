import React, { useState, useEffect } from 'react';
import './Astrologers.css';
import { useNavigate } from 'react-router-dom';

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
  plans: any[];
  gallery: string[];
  isActive: boolean;
  consultationUrl?: string;
  createdAt: string;
  updatedAt: string;
}

const Astrologers = () => {
  const navigate = useNavigate();
  const [astrologers, setAstrologers] = useState<Astrologer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAstrologers();
  }, []);

  const fetchAstrologers = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/website/astrologers');
      if (!response.ok) {
        throw new Error('Failed to fetch astrologers');
      }
      const data = await response.json();
      // Only show active astrologers on the website
      const activeAstrologers = data.filter((astro: Astrologer) => astro.isActive);
      setAstrologers(activeAstrologers);
    } catch (err) {
      console.error('Error fetching astrologers:', err);
      setError('Failed to load astrologers');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="astrologers-section">
        <h2>Our Astrologers</h2>
        <p>Loading astrologers...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="astrologers-section">
        <h2>Our Astrologers</h2>
        <p>Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="astrologers-section">
      <h2>Our Astrologers</h2>
      <p>Get in touch with the best Online Astrologers, anytime & anywhere!</p>
      {astrologers.length === 0 ? (
        <div className="no-astrologers">
          <p>No astrologers available at the moment. Please check back later!</p>
        </div>
      ) : (
        <div className="astrologers-list">
          {astrologers.map((astro) => (
            <div
              className="astrologer-card"
              key={astro._id}
              onClick={() => navigate(`/astrologer/${encodeURIComponent(astro.name)}`)}
              style={{ cursor: 'pointer' }}
            >
              <img src={astro.avatar} alt={astro.name} className="astro-avatar" />
              <div className="astro-name">{astro.name}</div>
              <div className="astro-expertise">{astro.expertise}</div>
              <div className="astro-reviews">Reviews : <span className="review-count">{astro.reviews}</span></div>
              <div className="astro-rating">{'★'.repeat(astro.rating)}</div>
              <div className="astro-experience">{astro.experience} years experience</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Astrologers;
