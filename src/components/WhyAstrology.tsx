import React, { useState } from 'react';

const WhyAstrology = () => {
  const [open, setOpen] = useState(true);

  return (
    <section className="why-astrology-section">
      <div className="why-astrology-block">
        <div className="why-astrology-header" onClick={() => setOpen(o => !o)}>
          <span className="why-astrology-title">WHAT IS ASTROLOGY?</span>
          <button className={`dropdown-arrow${open ? ' open' : ''}`} aria-label="Toggle details">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="#e48ab8" strokeWidth="2" fill="none"/>
              <path d="M11 14l5 5 5-5" stroke="#e48ab8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="why-astrology-underline" />
        {open && (
          <div className="why-astrology-content medium-font">
            <h3>Astrology Is The Language Of The Universe</h3>
            <p>Astrology predictions are based on the position and movements of planets and celestial bodies in the Universe that impact our life quality. This can be studied by creating an offline or online horoscope of individuals. This affects not only the people but also controls the occurrence of certain events happening in the sublunar world.</p>
            <p>Some may call it pseudo-science, and others call it predictive science. The science that is Astrology inspires people to know the various aspects of their life and take it in the right direction. From making life predictions on the basis of a detailed Kundali or telling you about the near future through daily, weekly and monthly horoscopes, Astrology is the medium through which you can get a glimpse of what the future will bring for you.</p>
            <p>There is one aspect of offline and online Astrology prediction where the impacts of planetary transition can be seen. And when it is related to the Zodiacs, it happens as various planets cross the sectors of each zodiac in the sky. It impacts the natives of different zodiacs differently. And one more way is by analyzing the planetary position in various houses of one's Kundli.</p>
            <p>Astrology reading is quite extensive. It is all about studying the 9 planets placed in the twelve houses of one's Kundli and their impact on their life. These planets are the Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Rahu, and Ketu. Some of these planets positively impact human life, and others affect it adversely. It depends on their house placement.</p>
            <p>For example, it is not always a compulsion that Saturn will bring negative impacts or Jupiter will be a positive one.</p>
            <p>Every house in the Kundli represents a different aspect of one's life. Similarly, Sun Signs, Moon Signs, Ascendants, and Descendants have their own significance. So it is not a confined subject, and the best way to know your future through the power of Astrology is to talk to an online Astrologer and get a detailed analysis of your online horoscope covering every aspect of your life.</p>
            <h3>Astrology Predictions And Its Benefits</h3>
            <p>Offline and online Astrology predictions have the power to forecast the future by analyzing the positions of the planets as they move and studying their impact on your life.</p>
            <p>An online horoscope is essentially a blueprint of your life that can help you gain clarity about the different aspects of your life, your personality and your future. Although there are several benefits of Astrological predictions, the best one remains timely guidance, and remedial suggestions to help avoid any unfavorable events coming your way. Or even if not eliminate them altogether, the offline and online Astro remedies can at least minimize their impacts. It is best if the guidance comes from the best Astrologer in India.</p>
            <p>You can take advantage of staying a step ahead of time in every aspect of your life, be it love, money, career, marriage, family, or anything else. Online Astrology has the power to show you the right path that will lead you towards a successful and happy life.</p>
            <h3>How Online Astrology Services Can Benefit You</h3>
            <p>How Online Astrology Services Can Benefit You</p>
            <ul>
              <li>It is the most hassle-free way to connect with the best Astrologers.</li>
              <li>Online Astrology services are the most time-saving and affordable way to connect with top Astrologers and get consultations, anytime and anywhere.</li>
              <li>It makes it convenient for people to talk to an Astrologer openly as your privacy and confidentiality is strictly maintained.</li>
              <li>You can choose the best Astrologer online among nearly 100+ Astrologers that you think matches your requirements perfectly.</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyAstrology; 