import React from 'react';
import './Banner.css';

const Banner = () => (
  <section className="banner-section">
    <div className="diya-container">
      <div className="diya-base">
        <div className="diya-body">
          <div className="diya-oil"></div>
          <div className="diya-wick"></div>
          <div className="diya-flame">
            <div className="flame-core"></div>
            <div className="flame-outer"></div>
            <div className="flame-sparkles">
              <div className="sparkle sparkle-1"></div>
              <div className="sparkle sparkle-2"></div>
              <div className="sparkle sparkle-3"></div>
              <div className="sparkle sparkle-4"></div>
            </div>
          </div>
          <div className="diya-glow"></div>
        </div>
        <div className="diya-shadow"></div>
      </div>
      
      <div className="diya-text">
        <h1 className="diya-title">Divya Jyotish</h1>
        <p className="diya-subtitle">Illuminate Your Path with Divine Wisdom</p>
        <div className="diya-buttons">
          <button className="diya-btn primary">Begin Your Journey</button>
          <button className="diya-btn secondary">Learn More</button>
        </div>
      </div>
      
      <div className="floating-elements">
        <div className="floating-om">ॐ</div>
        <div className="floating-star">⭐</div>
        <div className="floating-lotus">🌸</div>
        <div className="floating-mandala">🕉️</div>
      </div>
    </div>
  </section>
);

export default Banner;
