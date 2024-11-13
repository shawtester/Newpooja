'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image URLs in the public folder
  const images = [
    '/img1.png',
    '/img2.png',
    '/img3.png',
    '/img4.png',
    '/img5.png',
    '/img6.png',
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Autoplay functionality using useEffect
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds (3000ms)

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(autoplayInterval);
  }, []);

  return (
    <div className="relative w-full max-w-screen-lg lg:max-w-7xl mx-auto overflow-hidden">
      {/* Carousel wrapper */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Each slide */}
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {/* Padding added to the container */}
            <div className="relative w-full h-full overflow-hidden rounded-lg p-4">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={1920} // Adjust width as needed
                height={1080} // Adjust height as needed
                className="object-cover w-full h-full" // Ensures the image fills the container
              />
            </div>
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        &#10094;
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        &#10095;
      </button>

      {/* Dot navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
