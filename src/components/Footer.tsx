import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-content">
      <div className="footer-links">
        <a href="#about">About Company</a>
        <a href="#privacy">Privacy & Policy</a>
        <a href="#terms">Terms & Conditions</a>
      </div>
      <div className="footer-social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">📸</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">📘</a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon">💬</a>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} Anytime Astro. All rights reserved.
    </div>
  </footer>
);

export default Footer; 