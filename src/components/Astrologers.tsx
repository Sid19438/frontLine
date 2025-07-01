import React from 'react';
import './Astrologers.css';
import { useNavigate } from 'react-router-dom';

const astrologers = [
  { name: 'Poonam Astrotarot', reviews: 12204, rating: 5, avatar: 'https://randomuser.me/api/portraits/women/40.jpg' },
  { name: 'Neetesh', reviews: 9375, rating: 5, avatar: 'https://randomuser.me/api/portraits/men/41.jpg' },
  { name: 'PriyankaP', reviews: 11753, rating: 5, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Vaibhavi Tarot', reviews: 8789, rating: 5, avatar: 'https://randomuser.me/api/portraits/women/42.jpg' },
  { name: 'ChayaS', reviews: 2466, rating: 5, avatar: 'https://randomuser.me/api/portraits/women/43.jpg' },
];

const Astrologers = () => {
  const navigate = useNavigate();
  return (
    <section className="astrologers-section">
      <h2>Our Astrologers</h2>
      <p>Get in touch with the best Online Astrologers, anytime & anywhere!</p>
      <div className="astrologers-list">
        {astrologers.map((astro, idx) => (
          <div
            className="astrologer-card"
            key={idx}
            onClick={() => navigate(`/astrologer/${encodeURIComponent(astro.name)}`)}
            style={{ cursor: 'pointer' }}
          >
            <img src={astro.avatar} alt={astro.name} className="astro-avatar" />
            <div className="astro-name">{astro.name}</div>
            <div className="astro-reviews">Reviews : <span className="review-count">{astro.reviews}</span></div>
            <div className="astro-rating">{'★'.repeat(astro.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Astrologers;
