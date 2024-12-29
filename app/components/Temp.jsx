'use client';

import { useEffect, useState } from 'react';

export default function AlternatingLayout() {
  // States to track visibility for each section
  const [isFirstImageVisible, setFirstImageVisible] = useState(false);
  const [isFirstTextVisible, setFirstTextVisible] = useState(false);
  const [isSecondImageVisible, setSecondImageVisible] = useState(false);
  const [isSecondTextVisible, setSecondTextVisible] = useState(false);
  const [isThirdImageVisible, setThirdImageVisible] = useState(false);
  const [isThirdTextVisible, setThirdTextVisible] = useState(false);

  // Intersection observer callback for each section
  const observeSection = (setImageVisible, setTextVisible) => (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setImageVisible(true);
        observer.unobserve(entry.target); // Stop observing once it's in view
        setTimeout(() => setTextVisible(true), 1000); // Show text after a delay
      }
    });
  };

  useEffect(() => {
    const firstObserver = new IntersectionObserver(observeSection(setFirstImageVisible, setFirstTextVisible), { threshold: 0.5 });
    const secondObserver = new IntersectionObserver(observeSection(setSecondImageVisible, setSecondTextVisible), { threshold: 0.5 });
    const thirdObserver = new IntersectionObserver(observeSection(setThirdImageVisible, setThirdTextVisible), { threshold: 0.5 });

    const firstSection = document.querySelector("#firstSection");
    const secondSection = document.querySelector("#secondSection");
    const thirdSection = document.querySelector("#thirdSection");

    if (firstSection) firstObserver.observe(firstSection);
    if (secondSection) secondObserver.observe(secondSection);
    if (thirdSection) thirdObserver.observe(thirdSection);
  }, []);

  return (
    <div className="py-10 bg-gray-100">
      {/* Header Section */}
      <section className="bg-pink-400 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-center">
            Why The Beauty AFOC
          </h1>
        </div>
      </section>

      {/* First Section: Image on Left, Text on Right */}
      <section id="firstSection" className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0 px-6 mt-16">
        <div className="flex-1">
          <img
            src="https://thebeautybae.com/images/why3.jpg"
            alt="Genuine & Sealed Products"
            width={600}
            height={400}
            className={`w-full h-auto rounded-lg shadow-lg transition-opacity duration-1000 ${isFirstImageVisible ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        <div className="flex-1 text-center md:text-left relative">
          <div className="relative z-10">
            <div className="mb-4">
              <img
                src="/patta.png"
                alt="Patta Icon"
                className="w-24 h-24 mx-auto"
              />
            </div>
            <h2 className={`text-3xl font-semibold mb-4 transition-opacity duration-1000 ${isFirstTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              Genuine & Sealed Products
            </h2>
            <p className={`text-lg text-gray-700 leading-relaxed mb-6 md:text-left text-center transition-opacity duration-1000 ${isFirstTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              At The Beauty FOC, we are committed to using only authentic, sealed products to ensure the highest standards of quality and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section: Image on Right, Text on Left */}
      <section id="secondSection" className="flex flex-col md:flex-row-reverse items-center md:space-x-12 space-y-8 md:space-y-0 px-6 mt-16">
        <div className="flex-1">
          <img
            src="https://thebeautybae.com/images/why2.jpg"
            alt="Trained and Verified Beauticians"
            width={600}
            height={400}
            className={`w-full h-auto rounded-lg shadow-lg transition-opacity duration-1000 ${isSecondImageVisible ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        <div className="flex-1 text-center md:text-left relative">
          <div className="relative z-10">
            <div className="mb-4">
              <img
                src="/patta.png"
                alt="Patta Icon"
                className="w-24 h-24 mx-auto"
              />
            </div>
            <h2 className={`text-3xl font-semibold mb-4 transition-opacity duration-1000 ${isSecondTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              Trained and Verified Beauticians
            </h2>
            <p className={`text-lg text-gray-700 leading-relaxed mb-6 md:text-left text-center transition-opacity duration-1000 ${isSecondTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              Our beauticians are thoroughly trained and certified, ensuring they deliver exceptional results with care and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Third Section: Image on Left, Text on Right */}
      <section id="thirdSection" className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0 px-6 mt-16">
        <div className="flex-1">
          <img
            src="https://thebeautybae.com/images/why1.jpg"
            alt="Pocket Friendly Pricing"
            width={600}
            height={400}
            className={`w-full h-auto rounded-lg shadow-lg transition-opacity duration-1000 ${isThirdImageVisible ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        <div className="flex-1 text-center md:text-left relative">
          <div className="relative z-10">
            <div className="mb-4">
              <img
                src="/patta.png"
                alt="Patta Icon"
                className="w-24 h-24 mx-auto"
              />
            </div>
            <h2 className={`text-3xl font-semibold mb-4 transition-opacity duration-1000 ${isThirdTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              Pocket-Friendly Pricing
            </h2>
            <p className={`text-lg text-gray-700 leading-relaxed mb-6 md:text-left text-center transition-opacity duration-1000 ${isThirdTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              Experience premium beauty services at competitive prices with no compromise on quality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
