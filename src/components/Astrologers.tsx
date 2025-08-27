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

// Dummy data for when backend is not available
const dummyAstrologers: Astrologer[] = [
  {
    _id: '1',
    name: 'Pandit Rajesh Kumar',
    expertise: 'Vedic Astrology & Palmistry',
    languages: 'Hindi, English',
    reviews: 1247,
    rating: 5,
    experience: 15,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    about: 'Expert in Vedic astrology with 15+ years of experience',
    specializations: ['Marriage', 'Career', 'Health'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '2',
    name: 'Dr. Priya Sharma',
    expertise: 'Numerology & Gemstone Therapy',
    languages: 'Hindi, English, Sanskrit',
    reviews: 892,
    rating: 5,
    experience: 12,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    about: 'Specialist in numerology and gemstone remedies',
    specializations: ['Business', 'Education', 'Relationships'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '3',
    name: 'Acharya Amit Patel',
    expertise: 'Kundli Analysis & Remedies',
    languages: 'Hindi, English, Gujarati',
    reviews: 1563,
    rating: 5,
    experience: 18,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    about: 'Master of Kundli analysis and spiritual remedies',
    specializations: ['Marriage', 'Family', 'Spiritual Growth'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '4',
    name: 'Mataji Sunita Devi',
    expertise: 'Tantra & Spiritual Healing',
    languages: 'Hindi, English, Bengali',
    reviews: 2034,
    rating: 5,
    experience: 22,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    about: 'Renowned spiritual healer and tantra expert',
    specializations: ['Spiritual Healing', 'Protection', 'Peace'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
];

const Astrologers = () => {
  const navigate = useNavigate();
  const [astrologers, setAstrologers] = useState<Astrologer[]>(dummyAstrologers); // Initialize with dummy data
  const [loading, setLoading] = useState(false); // Start with false since we have dummy data
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAstrologers();
  }, []);

  const fetchAstrologers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/website/astrologers');
      if (!response.ok) {
        throw new Error('Failed to fetch astrologers');
      }
      const data = await response.json();
      // Only show active astrologers on the website
      const activeAstrologers = data.filter((astro: Astrologer) => astro.isActive);
      if (activeAstrologers.length > 0) {
        setAstrologers(activeAstrologers); // Replace with real data if available
      }
      // Keep dummy data if no real astrologers found
    } catch (err) {
      console.error('Error fetching astrologers:', err);
      // Keep dummy data when backend is not available
    }
  };

  // Show only top 4 astrologers
  const topAstrologers = astrologers.slice(0, 4);

  return (
    <section className="astrologers-section">
      <h2>Our Astrologers</h2>
      <p style={{color: '#7a7a7a'}} >Get in touch with the best Online Astrologers, anytime & anywhere!</p>
      
      <div className="astrologers-list">
        {topAstrologers.map((astro) => (
          <div
            className="astrologer-card"
            key={astro._id}
            onClick={() => navigate(`/astrologer/${encodeURIComponent(astro.name)}`)}
            style={{ cursor: 'pointer' }}
          >
            <img src={astro.avatar} alt={astro.name} className="astro-avatar" />
            <div className="astro-name">{astro.name}</div>
            {/* <div className="astro-expertise">{astro.expertise}</div> */}
            <div className="astro-reviews">Reviews : <span className="review-count">{astro.reviews}</span></div>
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
