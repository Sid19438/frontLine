import React, { useRef, useState } from 'react';
import './LivePuja.css';

const pujas = [
  { name: 'Krishna & Arjuna', price: 5100, oldPrice: 10100, img: 'https://c8.alamy.com/comp/A5A4KC/hindu-gods-krishna-arjuna-and-chariot-vishnu-and-other-indian-gods-A5A4KC.jpg' },
  { name: 'Shiv Parivar', price: 21000, img: 'https://i.pinimg.com/564x/e5/c3/b7/e5c3b7330cf756bd7cbb42755a4e81c9.jpg' },
  { name: 'Shri Ram', price: 9000, img: 'https://render.fineartamerica.com/images/rendered/default/poster/6/8/break/images/artworkimages/medium/1/hindu-god-lord-shri-ram-magdalena-walulik.jpg' },
  { name: 'Radha Krishna', price: 18000, img: 'https://i.pinimg.com/originals/1d/04/b9/1d04b96ec726f2bc13279eeb753b5cbf.jpg' },
  { name: 'Hindu Mythology', price: 25000, img: 'https://truewondererblog.files.wordpress.com/2017/01/mythmithya-decoding-the-hindu-enigma.jpg' },
  { name: 'Krishna & Arjuna 2', price: 15000, img: 'https://c8.alamy.com/comp/A5A4KC/hindu-gods-krishna-arjuna-and-chariot-vishnu-and-other-indian-gods-A5A4KC.jpg' },
];

const CARD_WIDTH = 200 + 24; // card width + gap

const LivePuja = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [startIdx, setStartIdx] = useState(0);

  const visibleCards = 2;

  const handleScroll = (dir: 'left' | 'right') => {
    let newIdx = startIdx + (dir === 'right' ? 1 : -1);
    if (newIdx < 0) newIdx = 0;
    if (newIdx > pujas.length - visibleCards) newIdx = pujas.length - visibleCards;
    setStartIdx(newIdx);
    if (listRef.current) {
      listRef.current.scrollTo({
        left: newIdx * CARD_WIDTH,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="livepuja-section">
      <h2 className="livepuja-title">BOOK ONLINE PUJA & ANUSHTHAN</h2>
      <div className="livepuja-content">
        <div className="livepuja-left">
          <h3>Bring Peace, Prosperity, And Positivity Into Your Life!</h3>
          <p>
            Explore our diverse range of online Pujas and Anushthans to find the perfect spiritual ritual that resonates with your goals and aspirations.Let us guide you through this sacred journey, helping you connect with the divine and experience the transformative benefits of these ancient practices. We are here to ensure that your spiritual endeavors are accessible, affordable, and completely personalized!
          </p>
          <button className="browse-puja-btn">Browse All Puja</button>
        </div>
        <div className="livepuja-right">
          <button className="puja-scroll-btn left" onClick={() => handleScroll('left')} disabled={startIdx === 0}>&lt;</button>
          <div className="puja-list" ref={listRef} style={{scrollbarWidth: 'none'}}>
            {pujas.slice(0, 2).map((puja, idx) => (
              <div className="puja-card" key={idx} style={{ minWidth: 200, maxWidth: 200 }}>
                <img src={puja.img} alt={puja.name} className="puja-img" />
                <div className="puja-name">{puja.name}</div>
                <div className="puja-details">
                  <div className="puja-price">
                    ₹{puja.price}
                  </div>
                  <button className="book-puja-btn">Book Puja</button>
                </div>
              </div>
            ))}
          </div>
          <button className="puja-scroll-btn right" onClick={() => handleScroll('right')} disabled={startIdx >= pujas.length - visibleCards}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default LivePuja;
