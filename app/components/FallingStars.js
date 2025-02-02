// app/components/FallingStars.js

'use client'; // Add this directive at the top to mark it as a client component

import { useEffect, useState } from 'react';
import styles from '../css/FallingStars.module.css';

const FallingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starCount = 100;
    const starsArray = Array.from({ length: starCount }).map((_, index) => ({
      id: index,
      animationDuration: `${Math.random() * 3 + 5}s`, // Random speed
      left: `${Math.random() * 100}%`, // Random horizontal position
      opacity: Math.random() * 0.5 + 0.5, // Random opacity
      delay: `${Math.random() * 5}s`, // Random delay
    }));
    setStars(starsArray);
  }, []);

  return (
    <div className={styles.starField}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.star}
          style={{
            left: star.left,
            opacity: star.opacity,
            animationDuration: star.animationDuration,
            animationDelay: star.delay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FallingStars;
