import React, { useState } from 'react';

const Lightbox = ({ images, show, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!show) {
    return null;
  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <img src={images[currentIndex]} alt="" />
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Lightbox;
