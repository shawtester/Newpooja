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
        // Section is in view
        setImageVisible(true); // Fade in image
        observer.unobserve(entry.target); // Stop observing once it's in view
        setTimeout(() => setTextVisible(true), 1000); // Show text after image with delay
      } else {
        // Section is not in view, reset opacity
        setImageVisible(false);
        setTextVisible(false);
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
    <div className="py-10">
      {/* Why The Beauty FOC Header Section */}
      <section className="bg-pink-400 text-white py-8 h-[100px] w-full mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Why The Beauty FOC</h1>
        </div>
      </section>

      {/* First Section: Image on Left, Text on Right */}
      <section id="firstSection" className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0 px-6 mt-16">
        <div className="flex-1">
          {/* Lazy Load Image with Intersection Observer */}
          <img
            src="https://thebeautybae.com/images/why3.jpg"
            alt="Image 1"
            width={600}
            height={400}
            className={`w-full h-auto rounded-lg shadow-lg transition-opacity duration-2000 ${isFirstImageVisible ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        <div className="flex-1 text-center md:text-left relative">
          {/* Background image behind paragraph */}
          <div
            className={`absolute inset-0 bg-cover bg-center opacity-30 rounded-lg`}
            style={{ backgroundImage: `url('/Background.jpg')` }} // Replace with the desired image URL
          ></div>
          <div className="relative z-10">
            {/* Add Patta Image above the heading */}
            <div className="mb-4">
              <img
                src="/patta.png"  // Path to your Patta image
                alt="Patta Image"
                className="w-24 h-24 mx-auto" // Adjust size and margin as needed
              />
            </div>

            {/* Show description after image is loaded */}
            <h2 className={`text-3xl font-semibold mb-4 transition-opacity duration-2000 ${isFirstTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              Genuine & Sealed Products
            </h2>
            <p className={`text-lg text-gray-700 leading-relaxed mb-6 md:text-left text-center transition-opacity duration-2000 ${isFirstTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              At The Beauty FOC, we are committed to using only authentic, sealed products to ensure the highest standards of quality and safety. Your skin deserves nothing less than the best, which is why we strive for 100% satisfaction in every treatment. We’ve partnered with top-tier brands and industry leaders to bring you the finest products, ensuring that every experience is tailored to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section: Image on Left, Text on Right */}
      <section id="secondSection" className="flex flex-col md:flex-row-reverse items-center md:space-x-12 space-y-8 md:space-y-0 px-6 mt-16">
        <div className="flex-1">
          <img
            src="https://thebeautybae.com/images/why2.jpg"
            alt="Image 2"
            width={600}
            height={400}
            className={`w-full h-auto rounded-lg shadow-lg transition-opacity duration-2000 ${isSecondImageVisible ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        <div className="flex-1 text-center md:text-left relative">
          {/* Background image behind paragraph */}
          <div
            className={`absolute inset-0 bg-cover bg-center opacity-30 rounded-lg`}
            style={{ backgroundImage: `url('/Background.jpg')` }} // Replace with the desired image URL
          ></div>
          <div className="relative z-10">
            {/* Add Patta Image above the heading */}
            <div className="mb-4">
              <img
                src="/patta.png"  // Path to your Patta image
                alt="Patta Image"
                className="w-24 h-24 mx-auto" // Adjust size and margin as needed
              />
            </div>

            <h2 className={`text-3xl font-semibold mb-4 transition-opacity duration-2000 ${isSecondTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              Trained and Verified Beauticians
            </h2>
            <p className={`text-lg text-gray-700 leading-relaxed mb-6 md:text-left text-center transition-opacity duration-2000 ${isSecondTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              At The Beauty FOC, we deeply care about our clients and their well-being, which is why we never compromise on any aspect of our service. Our beauticians are thoroughly trained and certified by top-tier institutes, ensuring they possess the expertise to deliver exceptional results. Additionally, we conduct comprehensive background checks on all our beauticians, so you can feel confident that you’re in safe, capable hands. Your satisfaction and trust are our top priorities 😊.
            </p>
          </div>
        </div>
      </section>

      {/* Third Section: Image on Left, Text on Right */}
      <section id="thirdSection" className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0 px-6 mt-16">
        <div className="flex-1">
          <img
            src="https://thebeautybae.com/images/why1.jpg"
            alt="Image 3"
            width={600}
            height={400}
            className={`w-full h-auto rounded-lg shadow-lg transition-opacity duration-2000 ${isThirdImageVisible ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        <div className="flex-1 text-center md:text-left relative">
          {/* Background image behind paragraph */}
          <div
            className={`absolute inset-0 bg-cover bg-center opacity-30 rounded-lg`}
            style={{ backgroundImage: `url('/Background.jpg')` }} // Replace with the desired image URL
          ></div>
          <div className="relative z-10">
            {/* Add Patta Image above the heading */}
            <div className="mb-4">
              <img
                src="/patta.png"  // Path to your Patta image
                alt="Patta Image"
                className="w-24 h-24 mx-auto" // Adjust size and margin as needed
              />
            </div>

            <h2 className={`text-3xl font-semibold mb-4 transition-opacity duration-2000 ${isThirdTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              Pocket Friendly and Satisfactory in Pricing
            </h2>
            <p className={`text-lg text-gray-700 leading-relaxed mb-6 md:text-left text-center transition-opacity duration-2000 ${isThirdTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              Whether you visit our salon or opt for our convenient home service, we ensure that our pricing reflects the exceptional quality we deliver. We’ve carefully structured our prices based on the latest industry trends, offering you the best value without compromising on service. At The Beauty FOC, we pride ourselves on providing premium experiences at prices that are more competitive than any other salon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
