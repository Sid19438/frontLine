import React from 'react';
import './Header.css';

const Header = () => (
  <header className="sticky-header">
    <div className="header-content">
      <div className="logo-section">
        <span className="logo-icon">🌟</span>
        <span className="logo-text">Divya Jyotish</span>
      </div>
      <nav className="nav-section">
        <button className="talk-btn">Talk To Astrologer</button>
        <button className="chat-btn">Chat With Astrologer</button>
      </nav>
      <div className="profile-section">
        <select className="lang-select">
          <option>ENG</option>
          <option>HIN</option>
        </select>
        <span className="profile-icon">👤</span>
      </div>
    </div>
  </header>
);

export default Header;
