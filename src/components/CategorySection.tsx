import React, { useRef, useState, useEffect } from 'react';
import './CategorySection.css';

const categories = [
  { name: 'Love', icon: '💖' },
  { name: 'Marriage', icon: '💍' },
  { name: 'Education', icon: '📚' },
  { name: 'Business', icon: '💼' },
  { name: 'Health', icon: '🩺' },
  { name: 'Career', icon: '🚀' },
  { name: 'Family', icon: '👨‍👩‍👧‍👦' },
];

const CategorySection = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (el && el.scrollWidth > el.clientWidth) {
      setShowHint(true);
    } else {
      setShowHint(false);
    }
  }, []);

  return (
    <section className="category-section">
      <h2 className="category-title">We Solve All Kinds of Life Issues</h2>
      {showHint && <div className="category-scroll-hint">Scroll to see more categories &rarr;</div>}
      <div className="category-list scrollable" ref={listRef}>
        {categories.map((cat, idx) => (
          <div className="category-card" key={cat.name} style={{ animationDelay: `${0.1 * idx}s` }}>
            <span className="category-icon" role="img" aria-label={cat.name}>{cat.icon}</span>
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection; 