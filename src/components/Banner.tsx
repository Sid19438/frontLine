import React, { useEffect, useState } from 'react';
import './Banner.css';
import api from '../api/client';
import firstBanner from '../assests/banners/firstBanner.jpg';
import secondBanner from '../assests/banners/secondBanner.jpg';
import thirdBanner from '../assests/banners/thirdBanner.jpg';

interface BannerItem {
  _id: string;
  title: string;
  imageUrl: string;
}

const Banner: React.FC = () => {
  const [items, setItems] = useState<BannerItem[]>([]);
  const [index, setIndex] = useState(0);

  // Fallback banner data with local images
  const fallbackBanners: BannerItem[] = [
    {
      _id: 'fallback-1',
      title: 'Discover Your Destiny',
      imageUrl: firstBanner
    },
    {
      _id: 'fallback-2',
      title: 'Expert Astrology Guidance',
      imageUrl: secondBanner
    },
    {
      _id: 'fallback-3',
      title: 'Transform Your Life',
      imageUrl: thirdBanner
    }
  ];

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await api.get('/website/banners');
        // Check if the response data is valid and has items
        if (data && Array.isArray(data) && data.length > 0) {
          setItems(data);
        } else {
          // Use fallback banners if API response is empty or invalid
          setItems(fallbackBanners);
        }
      } catch (error) {
        // Use fallback banners if API call fails (database issue, network error, etc.)
        console.log('Using fallback banners due to API/database error:', error);
        setItems(fallbackBanners);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  // Always show banners since we have fallback images
  if (items.length === 0) {
    return null;
  }

  const current = items[index];

  return (
    <section className="banner-section">
      <div className="banner-container">
        {/* Main Banner */}
        <div className="main-banner" style={{ backgroundImage: `url(${current.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="banner-content">
            <div className="banner-text">
              <h2>200+ Celebs recommend Astrotalk</h2>
              <h1>Chat With Astrologer</h1>
              <button className="chat-now-btn">Chat Now</button>
            </div>
          </div>

          {items.length > 1 && (
            <div className="carousel-dots" style={{ position: 'absolute', bottom: 16, left: 0, right: 0, textAlign: 'center' }}>
              {items.map((_, i) => (
                <span key={i} style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', margin: '0 4px', background: i === index ? '#fff' : 'rgba(255,255,255,0.5)' }} />
              ))}
            </div>
          )}
        </div>

        {/* Service Cards */}
        <div className="service-cards">
          <div className="service-card">
            <div className="service-icon chat-icon">💬</div>
            <span>Chat with Astrologer</span>
          </div>
          <div className="service-card">
            <div className="service-icon call-icon">📞</div>
            <span>Talk to Astrologer</span>
          </div>
          <div className="service-card">
            <div className="service-icon shop-icon">🛒</div>
            <span>Astromall Shop</span>
          </div>
          <div className="service-card">
            <div className="service-icon pooja-icon">🕉️</div>
            <span>Book A Pooja</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
