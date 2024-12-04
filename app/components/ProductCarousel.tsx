"use client";

import React, { useState } from "react";

const ProductCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div>
      <button onClick={prevImage}>Previous</button>
      <img
        src={images[currentIndex] || "/placeholder.png"}
        alt={`Image ${currentIndex + 1}`}
        width="100"
      />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ProductCarousel;
