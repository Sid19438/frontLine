// import React from 'react';
// import './AstroProfile.css';

// const profile = {
//   name: 'PriyankaP',
//   expertise: 'Tarot Reading',
//   languages: 'English, Hindi',
//   reviews: 11753,
//   rating: 5,
//   experience: 11,
//   avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//   plans: [
//     {
//       label: 'Super Saver Pack',
//       minutes: 15,
//       discount: '5% Off',
//       price: 1411,
//       oldPrice: 1485,
//       connect: 'Call',
//       rating: 5,
//     },
//     {
//       label: 'Mega Saver Pack',
//       minutes: 30,
//       discount: '10% Off',
//       price: 2673,
//       oldPrice: 2970,
//       connect: 'Chat',
//       rating: 5,
//     },
//   ],
//   specializations: [
//     'Break-Up & Divorce', 'Career & Job', 'Cheating & Affairs', 'Marital Life', 'Love & Relationship',
//     'Kids & Education', 'Vedic Astrology', 'Finance & Business', 'Psychic Reading', 'Tarot Reading',
//     'Numerology', 'Relationship Counseling'
//   ],
//   about: `Hey! I have been serving as a Tarot Reader and Intuitive Astrologer for more than a decade, counselling and resolving various life aspects, such as love, relationship and career issues using simple but highly efficient remedies. From a young age, I developed interest in Tarot reading, a journey that began through a meditation practice. Throughout these years I've offered healing and remedies on various life aspects such as love, relationships, career, finance, health, and much more. I have a keen expertise in resolving marital affairs, delayed marriages, relationship problems, and other family matters. When providing remedies, I make sure they are simple to implement yet highly effective in ensuring your success and personal growth. As a testament to my work, I have an excellent customer retention rate as the majority of my clients leave happy and fulfilled. For me, tarot cards and astrology are powerful tools that allow self-reflection and insight into one's life and environment. With my natural ability to connect with the energy and symbolism of the cards, I am able to guide my clients towards insight, clarity, and empowerment. Feel free to consult me if you have any issues in life.`,
//   gallery: [
//     'https://randomuser.me/api/portraits/women/44.jpg',
//     'https://randomuser.me/api/portraits/women/45.jpg',
//     'https://randomuser.me/api/portraits/women/46.jpg',
//     'https://randomuser.me/api/portraits/women/47.jpg',
//     'https://randomuser.me/api/portraits/women/48.jpg',
//   ]
// };

// const AstroProfile = () => (
//   <div className="astro-profile">
//     <div className="astro-header">
//       <img src={profile.avatar} alt={profile.name} className="astro-avatar" />
//       <div className="astro-info">
//         <h2>{profile.name}</h2>
//         <div className="astro-expertise">{profile.expertise}</div>
//         <div className="astro-languages">{profile.languages}</div>
//         <div className="astro-meta">
//           <span>Reviews : <b>{profile.reviews}</b></span>
//           <span>Rating : {'★'.repeat(profile.rating)}</span>
//           <span>Exp : <b>{profile.experience} Years</b></span>
//         </div>
//       </div>
//       <div className="astro-actions">
//         <button className="astro-chat-btn">Chat</button>
//         <button className="astro-call-btn">Call</button>
//       </div>
//     </div>
//     <div className="astro-plans">
//       <h3>Exclusive Plans & Discounts By <span>{profile.name}</span></h3>
//       <div className="plans-list">
//         {profile.plans.map((plan, idx) => (
//           <div className="plan-card" key={idx}>
//             <div className="plan-label">{plan.label}</div>
//             <div className="plan-discount">{plan.discount}</div>
//             <div className="plan-minutes">{plan.minutes} Minutes</div>
//             <div className="plan-session">Session</div>
//             <div className="plan-rating">{'★'.repeat(plan.rating)}</div>
//             <div className="plan-connect">Connect via <b>{plan.connect}</b></div>
//             <div className="plan-price">
//               ₹{plan.price} <span className="plan-oldprice">₹{plan.oldPrice}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className="astro-specialization">
//       <h3>Specialization</h3>
//       <div className="specialization-list">
//         {profile.specializations.map((spec, idx) => (
//           <span className="specialization-item" key={idx}>{spec}</span>
//         ))}
//       </div>
//     </div>
//     <div className="astro-about">
//       <h3>About My Services</h3>
//       <p>{profile.about}</p>
//     </div>
//     <div className="astro-gallery">
//       {profile.gallery.map((img, idx) => (
//         <img src={img} alt={`gallery-${idx}`} className="gallery-img" key={idx} />
//       ))}
//     </div>
//   </div>
// );

// export default AstroProfile;

// // Ensure this file is treated as a module
// export {}; 

import React from 'react';
import './AstroProfile.css';

const profile = {
  name: 'PriyankaP',
  expertise: 'Tarot Reading',
  languages: 'English, Hindi',
  reviews: 11753,
  rating: 5,
  experience: 11,
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  plans: [
    {
      label: 'Super Saver Pack',
      minutes: 15,
      discount: '5% Off',
      price: 1411,
      oldPrice: 1485,
      connect: 'Call',
      rating: 5,
    },
    {
      label: 'Mega Saver Pack',
      minutes: 30,
      discount: '10% Off',
      price: 2673,
      oldPrice: 2970,
      connect: 'Chat',
      rating: 5,
    },
  ],
  specializations: [
    'Break-Up & Divorce', 'Career & Job', 'Cheating & Affairs', 'Marital Life', 'Love & Relationship',
    'Kids & Education', 'Vedic Astrology', 'Finance & Business', 'Psychic Reading', 'Tarot Reading',
    'Numerology', 'Relationship Counseling'
  ],
  about: `Hey! I have been serving as a Tarot Reader and Intuitive Astrologer for more than a decade, counselling and resolving various life aspects, such as love, relationship and career issues using simple but highly efficient remedies. From a young age, I developed interest in Tarot reading, a journey that began through a meditation practice. Throughout these years I've offered healing and remedies on various life aspects such as love, relationships, career, finance, health, and much more. I have a keen expertise in resolving marital affairs, delayed marriages, relationship problems, and other family matters. When providing remedies, I make sure they are simple to implement yet highly effective in ensuring your success and personal growth. As a testament to my work, I have an excellent customer retention rate as the majority of my clients leave happy and fulfilled. For me, tarot cards and astrology are powerful tools that allow self-reflection and insight into one's life and environment. With my natural ability to connect with the energy and symbolism of the cards, I am able to guide my clients towards insight, clarity, and empowerment. Feel free to consult me if you have any issues in life.`,
  gallery: [
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/women/45.jpg',
    'https://randomuser.me/api/portraits/women/46.jpg',
    'https://randomuser.me/api/portraits/women/47.jpg',
    'https://randomuser.me/api/portraits/women/48.jpg',
  ]
};

const AstroProfile = () => (
  <div className="astro-profile">
    <div className="astro-header">
      <img src={profile.avatar} alt={profile.name} className="astro-avatar" />
      <div className="astro-info">
        <h2>{profile.name}</h2>
        <div className="astro-expertise">{profile.expertise}</div>
        <div className="astro-languages">{profile.languages}</div>
        <div className="astro-meta">
          <span>Reviews : <b>{profile.reviews}</b></span>
          <span>Rating : {'★'.repeat(profile.rating)}</span>
          <span>Exp : <b>{profile.experience} Years</b></span>
        </div>
      </div>
      <div className="astro-actions">
        <button className="astro-chat-btn">Chat</button>
        <button className="astro-call-btn">Call</button>
      </div>
    </div>
    <div className="astro-plans">
      <h3>Exclusive Plans & Discounts By <span>{profile.name}</span></h3>
      <div className="plans-list">
        {profile.plans.map((plan, idx) => (
          <div className="plan-card" key={idx}>
            <div className="plan-label">{plan.label}</div>
            <div className="plan-discount">{plan.discount}</div>
            <div className="plan-minutes">{plan.minutes} Minutes</div>
            <div className="plan-session">Session</div>
            <div className="plan-rating">{'★'.repeat(plan.rating)}</div>
            <div className="plan-connect">Connect via <b>{plan.connect}</b></div>
            <div className="plan-price">
              ₹{plan.price} <span className="plan-oldprice">₹{plan.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="astro-specialization">
      <h3>Specialization</h3>
      <div className="specialization-list">
        {profile.specializations.map((spec, idx) => (
          <span className="specialization-item" key={idx}>{spec}</span>
        ))}
      </div>
    </div>
    <div className="astro-about">
      <h3>About My Services</h3>
      <p>{profile.about}</p>
    </div>
    <div className="astro-gallery">
      {profile.gallery.map((img, idx) => (
        <img src={img} alt={`gallery-${idx}`} className="gallery-img" key={idx} />
      ))}
    </div>
  </div>
);

export default AstroProfile;
