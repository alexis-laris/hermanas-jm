import React, { useEffect, useState } from 'react';
import '../styles/FloatingStars.css';

const FloatingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starIcons = ['⭐', '🌟', '✨', '💖', '🎀', '🌸'];
    const generatedStars = [];

    for (let i = 0; i < 15; i++) {
      generatedStars.push({
        id: i,
        icon: starIcons[Math.floor(Math.random() * starIcons.length)],
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3
      });
    }

    setStars(generatedStars);
  }, []);

  return (
    <>
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`
          }}
        >
          {star.icon}
        </div>
      ))}
    </>
  );
};

export default FloatingStars;
