import React, { useState } from 'react';

const reviews = [
  {
    name: 'Rashami Desai',
    title: 'TV Actress',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    stars: 5,
    text: 'Koi bhi problem ho love, career ya marriage aap bhi meri tarah India ki most trusted app Anytime Astro, jaha par 1000 se jyada certified astrologers se consult kar sakte hai. I can\'t be more grateful to Anytime Astro and their Astrologers.'
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
  },
  {
    name: 'Arjun Kapoor',
    title: 'Business Owner',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    stars: 5,
    text: 'Anytime Astro ne meri business life mein bahut help ki hai. Unke expert astrologers ne meri career decisions mein perfect guidance di hai. Ab mai confident feel karta hun har decision lene mein. Highly recommended!'
  },
  {
    name: 'Meera Patel',
    title: 'Software Engineer',
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    stars: 5,
    text: 'As a working professional, I was struggling with work-life balance. Anytime Astro ke astrologers ne meri life ko completely transform kar diya hai. Ab mai apne career aur personal life dono ko perfectly manage kar pa rahi hun.'
  },
  {
    name: 'Rajesh Kumar',
    title: 'Teacher',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    stars: 5,
    text: 'Mere family ke health issues ke liye Anytime Astro ne perfect solutions provide kiye hain. Unke remedies aur guidance se meri family ki health improve hui hai. Ye app har family ke liye blessing hai.'
  },
  {
    name: 'Anjali Sharma',
    title: 'Marketing Manager',
    avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
    stars: 5,
    text: 'Mere career mein stagnation aa gaya tha. Anytime Astro ke astrologers ne meri kundli analyze karke perfect timing suggest ki. Ab meri career growth exponential hai. Thank you Anytime Astro!'
  },
  {
    name: 'Vikram Malhotra',
    title: 'Entrepreneur',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    stars: 5,
    text: 'Business expansion ke liye Anytime Astro ne meri life mein perfect timing suggest ki. Unke guidance se mera business 3x grow hua hai. Ye app har entrepreneur ke liye must-have hai.'
  },
  {
    name: 'Sneha Reddy',
    title: 'Doctor',
    avatar: 'https://randomuser.me/api/portraits/women/78.jpg',
    stars: 5,
    text: 'Medical field mein stress bahut hota hai. Anytime Astro ke astrologers ne meri mental health ke liye perfect remedies suggest kiye. Ab mai apne patients ko better care de pa rahi hun.'
  }
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= reviews.length ? 0 : prevIndex + 3
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, reviews.length - 3) : prevIndex - 3
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index * 3);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <section className="review-section">
      <h2 className="review-title">CUSTOMER STORIES</h2>
      <div className="review-subtitle">See why our users love us and how Anytime Astro helped them find their path to happiness!</div>
      
      <div className="review-carousel">
        <button 
          className="carousel-arrow left" 
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Previous"
        >
          &#60;
        </button>
        
        <div className={`review-cards-container ${isTransitioning ? 'transitioning' : ''}`}>
          {visibleReviews.map((review, index) => (
            <div className="review-card" key={currentIndex + index}>
              <img className="review-avatar" src={review.avatar} alt={review.name} />
              <div className="review-stars">{'★'.repeat(review.stars)}</div>
              <div className="review-name">{review.name}</div>
              <div className="review-title-small">{review.title}</div>
              <div className="review-text">{review.text}</div>
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-arrow right" 
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Next"
        >
          &#62;
        </button>
      </div>
      
      <div className="carousel-dots">
        {Array.from({ length: Math.ceil(reviews.length / 3) }, (_, i) => (
          <button
            key={i}
            className={`dot ${i === Math.floor(currentIndex / 3) ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection; 