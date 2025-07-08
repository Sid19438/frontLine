import React from 'react';

const reviews = [
  {
    name: 'Rashami Desai',
    title: 'TV Actress',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    stars: 5,
    text: 'Koi bhi problem ho love, career ya marriage aap bhi meri tarah India ki most trusted app Anytime Astro, jaha par 1000 se jyada certified astrologers se consult kar sakte hai. I can’t be more grateful to Anytime Astro and their Astrologers.'
  },
  {
    name: 'Priya Singh',
    title: 'Sports Personality',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    stars: 5,
    text: 'Mai Anytime Astro aur unke Astrologers ka tahe dil se shukriya karna chahti hun kyuki ye meri har mushkil mein sathi banke chala hai. Yaha bhut hi experienced Astrologers hai jinse aap instantly chat ya call pe baat kar sakte hain.'
  },
  {
    name: 'Falak Naaz',
    title: 'TV Actress',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    stars: 5,
    text: 'Humara acha-bura, humare life ke utaar chadav sab kuch taro pe depend karta hai. Taro ko smjhna humare bas ki baat nahi hai, iske liye I trust Anytime Astro and their Astrologers. Zindagi ki har problem ka solution apko yaha mil jaega.'
  }
];

const ReviewSection = () => {
  return (
    <section className="review-section">
      <h2 className="review-title">CUSTOMER STORIES</h2>
      <div className="review-subtitle">See why our users love us and how Anytime Astro helped them find their path to happiness!</div>
      <div className="review-carousel">
        <button className="carousel-arrow left" aria-label="Previous">&#60;</button>
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <img className="review-avatar" src={r.avatar} alt={r.name} />
            <div className="review-stars">{'★'.repeat(r.stars)}</div>
            <div className="review-name">{r.name}</div>
            <div className="review-title-small">{r.title}</div>
            <div className="review-text">{r.text}</div>
          </div>
        ))}
        <button className="carousel-arrow right" aria-label="Next">&#62;</button>
      </div>
    </section>
  );
};

export default ReviewSection; 