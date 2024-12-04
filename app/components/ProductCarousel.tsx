"use client";

import React, { useState } from "react";

const ProductCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return <p>No images available</p>;
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Show only one image */}
      {/* <img
        src={images[currentIndex] || "/placeholder.png"}
        alt={`Image ${currentIndex + 1}`}
        width="300"
        height="200"
      /> */}
      
      {/* Optional: buttons to navigate between images */}
    </div>
  );
};

export default ProductCarousel;
