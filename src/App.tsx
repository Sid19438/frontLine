import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Astrologers from './components/Astrologers';
import LivePuja from './components/LivePuja';
import Footer from './components/Footer';
import AstroProfile from './components/AstroProfile';
import ReviewSection from './components/ReviewSection';
import WhyAstrology from './components/WhyAstrology';
import CategorySection from './components/CategorySection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <CategorySection />
              <Astrologers />
              {/* Services Info Section Start */}
              <section className="services-info-section">
                <h2 className="services-title">Our Services</h2>
                <div className="services-list">
                  <div className="service-card">
                    <h3>Puja</h3>
                    <p>
                      Our expert priests perform authentic Vedic pujas and rituals to help you overcome life's obstacles and attract positive energies. <br/>
                      <b>Issues addressed:</b> Health problems, financial difficulties, career obstacles, planetary doshas, peace and harmony, protection from negative influences, and more. <br/>
                      Book a personalized puja and join live from anywhere for blessings and prosperity.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3>Consultation</h3>
                    <p>
                      Connect with experienced astrologers for in-depth guidance and remedies tailored to your unique birth chart. <br/>
                      <b>Issues addressed:</b> Career and job, marriage and relationships, love life, education, business, health, family matters, and astrological remedies. <br/>
                      Get clarity and solutions for your concerns with a confidential, personalized consultation.
                    </p>
                  </div>
                </div>
              </section>
              {/* Services Info Section End */}
              <ReviewSection />
              <LivePuja />
              <WhyAstrology />
              <Footer />
            </>
          } />
          <Route path="/astrologer/:name" element={<AstroProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
