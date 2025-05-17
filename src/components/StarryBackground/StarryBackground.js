import React, { useState, useEffect } from 'react';

const StarryBackground = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const generateStars = () => {
      const starCount = 150; // Yıldız sayısı
      const newStars = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 2 + 1}px`,
          duration: `${Math.random() * 5 + 3}s`,
          delay: `${Math.random() * 5}s`
        });
      }
      
      setStars(newStars);
    };
    
    generateStars();
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden" style={{ zIndex: -1 }}>
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-70 animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
