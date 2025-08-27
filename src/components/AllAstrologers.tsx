import React, { useState, useEffect } from 'react';
import './Astrologers.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

// Dummy data for when backend is not available (extended to 15 for this page)
const dummyAstrologers: Astrologer[] = [
  {
    _id: '1',
    name: 'Pandit Rajesh Kumar',
    expertise: 'Vedic Astrology & Palmistry',
    languages: 'Hindi, English, Sanskrit',
    reviews: 1247,
    rating: 5,
    experience: 25,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    about: 'Expert in Vedic astrology with 25+ years of experience',
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
    expertise: 'Numerology & Astrology',
    languages: 'Hindi, English, Gujarati',
    reviews: 892,
    rating: 5,
    experience: 18,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    about: 'Specialized in numerology and modern astrology',
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
    expertise: 'Jyotish & Vastu Shastra',
    languages: 'Hindi, English, Marathi',
    reviews: 1567,
    rating: 5,
    experience: 22,
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    about: 'Expert in traditional Jyotish and Vastu consultation',
    specializations: ['Property', 'Career', 'Family'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '4',
    name: 'Smt. Meera Desai',
    expertise: 'Tarot Reading & Astrology',
    languages: 'Hindi, English, Bengali',
    reviews: 734,
    rating: 5,
    experience: 15,
    avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
    about: 'Combines tarot with traditional astrology',
    specializations: ['Love', 'Career', 'Spiritual Growth'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '5',
    name: 'Pandit Suresh Verma',
    expertise: 'Classical Vedic Astrology',
    languages: 'Hindi, English, Sanskrit',
    reviews: 2034,
    rating: 5,
    experience: 30,
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    about: 'Master of classical Vedic astrology techniques',
    specializations: ['Marriage', 'Career', 'Health', 'Education'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '6',
    name: 'Dr. Anjali Kapoor',
    expertise: 'Modern Astrology & Psychology',
    languages: 'Hindi, English, Punjabi',
    reviews: 567,
    rating: 5,
    experience: 12,
    avatar: 'https://randomuser.me/api/portraits/women/78.jpg',
    about: 'Combines modern astrology with psychological insights',
    specializations: ['Mental Health', 'Relationships', 'Career'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '7',
    name: 'Guru Mahesh Tiwari',
    expertise: 'Spiritual Astrology & Meditation',
    languages: 'Hindi, English, Sanskrit',
    reviews: 1456,
    rating: 5,
    experience: 28,
    avatar: 'https://randomuser.me/api/portraits/men/89.jpg',
    about: 'Spiritual guide combining astrology with meditation',
    specializations: ['Spiritual Growth', 'Peace of Mind', 'Life Purpose'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '8',
    name: 'Smt. Kavita Singh',
    expertise: 'Relationship Astrology',
    languages: 'Hindi, English, Urdu',
    reviews: 987,
    rating: 5,
    experience: 16,
    avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
    about: 'Specialized in relationship and compatibility analysis',
    specializations: ['Marriage', 'Dating', 'Family Harmony'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '9',
    name: 'Acharya Ramesh Kumar',
    expertise: 'Business Astrology & Feng Shui',
    languages: 'Hindi, English, Chinese',
    reviews: 1234,
    rating: 5,
    experience: 20,
    avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
    about: 'Expert in business astrology and Feng Shui',
    specializations: ['Business Success', 'Wealth', 'Career Growth'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '10',
    name: 'Dr. Sunita Reddy',
    expertise: 'Medical Astrology & Wellness',
    languages: 'Hindi, English, Telugu',
    reviews: 678,
    rating: 5,
    experience: 14,
    avatar: 'https://randomuser.me/api/portraits/women/92.jpg',
    about: 'Combines medical astrology with wellness guidance',
    specializations: ['Health', 'Wellness', 'Lifestyle'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '11',
    name: 'Pandit Deepak Sharma',
    expertise: 'Muhurat & Electional Astrology',
    languages: 'Hindi, English, Sanskrit',
    reviews: 1890,
    rating: 5,
    experience: 26,
    avatar: 'https://randomuser.me/api/portraits/men/93.jpg',
    about: 'Expert in auspicious timing and muhurat selection',
    specializations: ['Marriage Timing', 'Business Launch', 'Travel'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '12',
    name: 'Smt. Rekha Verma',
    expertise: 'Child Astrology & Parenting',
    languages: 'Hindi, English, Marathi',
    reviews: 456,
    rating: 5,
    experience: 11,
    avatar: 'https://randomuser.me/api/portraits/women/94.jpg',
    about: 'Specialized in child astrology and parenting guidance',
    specializations: ['Child Development', 'Education', 'Parenting'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '13',
    name: 'Guru Arvind Joshi',
    expertise: 'Karma Astrology & Life Purpose',
    languages: 'Hindi, English, Gujarati',
    reviews: 1345,
    rating: 5,
    experience: 24,
    avatar: 'https://randomuser.me/api/portraits/men/95.jpg',
    about: 'Guides through karma analysis and life purpose discovery',
    specializations: ['Life Purpose', 'Karma', 'Spiritual Path'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '14',
    name: 'Dr. Neha Gupta',
    expertise: 'Career & Education Astrology',
    languages: 'Hindi, English, Bengali',
    reviews: 789,
    rating: 5,
    experience: 13,
    avatar: 'https://randomuser.me/api/portraits/women/96.jpg',
    about: 'Specialized in career and educational guidance',
    specializations: ['Career Choice', 'Education', 'Skill Development'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '15',
    name: 'Acharya Vijay Malhotra',
    expertise: 'Traditional & Modern Astrology',
    languages: 'Hindi, English, Sanskrit, Punjabi',
    reviews: 2100,
    rating: 5,
    experience: 32,
    avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
    about: 'Master of both traditional and modern astrology',
    specializations: ['Comprehensive Analysis', 'Life Guidance', 'Remedies'],
    plans: [],
    gallery: [],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
];

const AllAstrologers = () => {
  const navigate = useNavigate();
  const [astrologers, setAstrologers] = useState<Astrologer[]>(dummyAstrologers);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllAstrologers();
  }, []);

  const fetchAllAstrologers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/website/astrologers');
      if (!response.ok) {
        throw new Error('Failed to fetch astrologers');
      }
      const data = await response.json();
      const activeAstrologers = data.filter((astro: Astrologer) => astro.isActive);
      if (activeAstrologers.length > 0) {
        setAstrologers(activeAstrologers);
      }
    } catch (err) {
      console.error('Error fetching astrologers:', err);
      // Keep dummy data when backend is not available
    }
  };

  return (
    <div className="App">
      <Header />
      <section className="astrologers-section">
        <h2>All Our Astrologers</h2>
        <p style={{color: '#7a7a7a'}} >Discover our complete team of expert astrologers ready to guide you</p>

        <div className="astrologers-carousel-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={14}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="astrologers-swiper"
          >
            {astrologers.map((astro) => (
              <SwiperSlide key={astro._id}>
                <div
                  className="astrologer-card"
                  onClick={() => navigate(`/astrologer/${encodeURIComponent(astro.name)}`)}
                  style={{ cursor: 'pointer', marginTop: '1rem', marginBottom: '3rem' }}
                >
                  <img src={astro.avatar} alt={astro.name} className="astro-avatar" />
                  <div className="astro-name">{astro.name}</div>
                  <div className="astro-expertise">{astro.expertise}</div>
                  <div className="astro-reviews">Reviews: <span className="review-count">{astro.reviews}</span></div>
                  <div className="astro-rating">{'★'.repeat(astro.rating)}</div>
                  <div className="astro-experience">{astro.experience} years experience</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="see-all-container" style={{marginBottom: '2rem'}} >
          <button
            className="see-all-btn"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllAstrologers;
