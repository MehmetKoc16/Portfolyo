import React, { useState, useEffect, useMemo } from 'react';

const TypeWriter = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  // Değiştirilecek metin dizisi
  const textArray = useMemo(() => ["Mobil Yazılım Geliştirici", "Web Geliştirici", "Bilgisayar Mühendisliği Öğrencisi"], []);
  const typingDelay = 150;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next text

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, currentIndex - 1) 
        : fullText.substring(0, currentIndex + 1)
      );

      setCurrentIndex(isDeleting ? currentIndex - 1 : currentIndex + 1);

      if (!isDeleting && currentIndex === fullText.length) {
        // Yazma tamamlandı, silme başlasın
        setTimeout(() => setIsDeleting(true), newTextDelay);
      } else if (isDeleting && currentIndex === 0) {
        // Silme tamamlandı, sonraki kelimeye geç
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(
      handleTyping, 
      isDeleting ? erasingDelay : typingDelay
    );

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, textArray, erasingDelay, typingDelay, newTextDelay]);

  return (
    <div className="typewriter">
      <span className="text-primary">{displayText}</span>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypeWriter;