import React from 'react';
import './Banner.css';

const Banner = () => (
  <section className="banner-section">
    <div className="banner-media">
      {/* Replace with actual video or image as needed */}
      <img src="https://anytimeastro.com/assets/images/banner-img.png" alt="Astro Banner" className="banner-img" />
    </div>
    <div className="banner-content">
      <h2>Trusted By 1Cr+ Users</h2>
      <p>For Right Guidance & Accurate Predictions</p>
      <button className="chat-now-btn">Chat Now</button>
      <div className="app-links">
        <span>App Available on:</span>
        <a href="#" className="app-link">Android</a>
        <a href="#" className="app-link">iOS</a>
      </div>
    </div>
  </section>
);

export default Banner;
