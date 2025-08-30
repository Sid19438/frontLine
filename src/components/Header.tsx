import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo-section">
          <span className="logo-icon">🌟</span>
          <span className="logo-text">Divya Jyotish</span>
        </div>
        {/* <nav className="nav-section">
          <button className="talk-btn">Talk To Astrologer</button>
          <button className="chat-btn">Chat With Astrologer</button>
          <Link to="/dashboard" className="dashboard-link">Dashboard</Link>
        </nav> */}
        {/* <div className="profile-section">
          <select className="lang-select">
            <option>ENG</option>
            <option>HIN</option>
          </select>
          <span className="profile-icon">👤</span>
        </div> */}
        <Link to="/dashboard" className="dashboard-link">Dashboard</Link>
      </div>
    </header>
  );
};

export default Header;
