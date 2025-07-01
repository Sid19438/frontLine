import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Astrologers from './components/Astrologers';
import LivePuja from './components/LivePuja';
import Footer from './components/Footer';
import AstroProfile from './components/AstroProfile';
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
              <Astrologers />
              <LivePuja />
            </>
          } />
          <Route path="/astrologer/:name" element={<AstroProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
