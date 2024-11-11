"use client"; // Mark this file as a client component

import React, { useState, useEffect } from "react";

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs
  const images = [
    "https://thebeautybae.com/uploads/images/img__17__1727956719.png",
    "https://thebeautybae.com/uploads/images/img__4__1658320812.jpg",
  ];

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Go to a specific slide based on clicked dot
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Automatic slide transition using useEffect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="carousel-container relative max-w-full overflow-hidden rounded-xl p-4 shadow-lg">
      {/* Image Wrapper */}
      <div className="carousel-wrapper relative w-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out"
        />

        {/* Left and Right Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="carousel-button absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 text-2xl cursor-pointer rounded-full z-10 hidden sm:block"
        >
          &#10094;
        </button>

        <button
          onClick={nextSlide}
          className="carousel-button absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 text-2xl cursor-pointer rounded-full z-10 hidden sm:block"
        >
          &#10095;
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="carousel-dots flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot w-2.5 h-2.5 mx-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${currentIndex === index ? "bg-black" : "bg-gray-400"}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
