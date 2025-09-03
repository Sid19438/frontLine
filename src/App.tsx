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
import Dashboard from './components/Dashboard';
import AllAstrologers from './components/AllAstrologers';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import RefundPolicy from './components/RefundPolicy';
import PujaSection from './components/PujaSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import the service images
import bestPuja from './assests/icons/bestPuja.jpg';
import bestGem from './assests/icons/bestGem.jpg';
import images from './assests/icons/images.jpg';

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
                    <img src={bestPuja} alt="Puja Service" className="service-image" />
                    <h3>Puja</h3>
                    <p>
                      Our expert priests perform authentic Vedic pujas and rituals to help you overcome life's obstacles and attract positive energies. <br/>
                      <b>Issues addressed:</b> Health problems, financial difficulties, career obstacles, planetary doshas, peace and harmony, protection from negative influences, and more. <br/>
                      Book a personalized puja and join live from anywhere for blessings and prosperity.
                    </p>
                    <button 
                      className="browse-all-btn"
                      onClick={() => window.location.href = '/pujas'}
                    >
                      Browse All Pujas
                    </button>
                  </div>
                  <div className="service-card">
                    <img src={images} alt="Consultation Service" className="service-image" />
                    <h3>Consultation</h3>
                    <p>
                      Connect with experienced astrologers for in-depth guidance and remedies tailored to your unique birth chart. <br/>
                      <b>Issues addressed:</b> Career and job, marriage and relationships, love life, education, business, health, family matters, and astrological remedies. <br/>
                      Get clarity and solutions for your concerns with a confidential, personalized consultation.
                    </p>
                  </div>
                  <div className="service-card">
                    <img src={bestGem} alt="E-Commerce Service" className="service-image" />
                    <h3>E-Commerce</h3>
                    <p>
                      Discover authentic gemstones, rudraksha, yantras, and other powerful astrological remedies to enhance your life. <br/>
                      <b>Products available:</b> Natural gemstones, rudraksha beads, yantras, crystals, incense, sacred items, and more. <br/>
                      Each product is carefully selected and energized for maximum effectiveness in your spiritual journey.
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
          <Route path="/all-astrologers" element={<AllAstrologers />} />
          <Route path="/pujas" element={<PujaSection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
