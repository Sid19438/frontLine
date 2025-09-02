import React from 'react';
import './Footer.css';

const footerLinks = [
  {
    heading: 'Get Advice On',
    links: [
      'Finance & Business',  'Break-Up & Divorce',  'Marital Life', 'Love & Relationships', 'Career & Job', 'Cheating & Affairs', 'Relationship Counseling'
    ]
  },
  {
    heading: 'Muhurat',
    links: ['Choghadiya', 'Rahu Kaal', 'Shubha Hora', 'Gowri Panchangam']
  },
  {
    heading: 'Horoscope',
    links: ['Daily Horoscope', 'Monthly Horoscope', 'Yearly Horoscope']
  },
  {
    heading: 'Astrology',
    links: ['Kundali Matching', 'Free Janam Kundali']
  }
];

const socialLinks = [
  { href: '#', icon: <i className="fab fa-facebook-f" aria-label="Facebook" /> },
  { href: '#', icon: <i className="fab fa-x-twitter" aria-label="X" /> },
  { href: '#', icon: <i className="fab fa-linkedin-in" aria-label="LinkedIn" /> },
  { href: '#', icon: <i className="fab fa-instagram" aria-label="Instagram" /> },
  { href: '#', icon: <i className="fab fa-youtube" aria-label="YouTube" /> },
  { href: '#', icon: <i className="fab fa-pinterest-p" aria-label="Pinterest" /> }
];

const Footer = () => (
  <footer className="footer-section luxury-bg">
    <div className="footer-columns">
      <div className="footer-col-group">
        <div className="footer-col">
          <h4>Get Advice On</h4>
          <ul>
            {footerLinks[0].links.map(link => <li key={link}><a href="/">{link}</a></li>)}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Muhurat</h4>
          <ul>
            {footerLinks[1].links.map(link => <li key={link}><a href="/">{link}</a></li>)}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Horoscope</h4>
          <ul>
            {footerLinks[2].links.map(link => <li key={link}><a href="/">{link}</a></li>)}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Astrology</h4>
          <ul>
            {footerLinks[3].links.map(link => <li key={link}><a href="/">{link}</a></li>)}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
            {/* <li><a href="/refund-policy">Refund Policy</a></li> */}
          </ul>
        </div>
      </div>
      <div className="footer-col-apps">
        <h4>Follow Us</h4>
        <div className="footer-social-icons">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.href} className="footer-social-icon" target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-legal-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <span className="separator">|</span>
        <a href="/terms-conditions">Terms & Conditions</a>
        <span className="separator">|</span>
        {/* <a href="/refund-policy">Refund Policy</a> */}
      </div>
      <div className="footer-copyright">
        Copyright &copy; {new Date().getFullYear()} Innovana Astro Services Ltd. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 