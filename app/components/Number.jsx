'use client';  // Ensure the component runs client-side

import { useEffect, useState, useRef } from "react";

export default function Number() {
  // States to hold the counter values
  const [customerCount, setCustomerCount] = useState(0);
  const [expertCount, setExpertCount] = useState(0);
  const [facecareCount, setFacecareCount] = useState(0);
  const [skincareCount, setSkincareCount] = useState(0);

  // State to check if the section is in view
  const [inView, setInView] = useState(false);

  // Ref for the section to observe
  const sectionRef = useRef(null);

  // Function to animate the counting
  const countUp = (setter, target) => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setter(count);
      if (count === target) {
        clearInterval(interval);
      }
    }, 100); // Slow down the counter speed by increasing the interval (100ms)
  };

  useEffect(() => {
    // Create an intersection observer to track when the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInView(entry.isIntersecting); // Set inView to true when section is in view
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef); // Start observing the section
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Cleanup observer
      }
    };
  }, []);

  // Start counting when the section is in view
  useEffect(() => {
    if (inView) {
      countUp(setCustomerCount, 1000);
      countUp(setExpertCount, 12);
      countUp(setFacecareCount, 500);
      countUp(setSkincareCount, 500);
    }
  }, [inView]); // Run the counting animation when inView changes to true

  return (
    <div ref={sectionRef} className="flex flex-col justify-start items-center bg-gray-100 px-4 py-6">
      <div className="w-full max-w-screen-xl text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 uppercase">OUR CORS</h1> {/* Added heading text */}
      </div>
      <div className="max-w-screen-xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center mb-3">
            <img src="/Satis.png" alt="Satisfied Customers" className="w-20 h-20 mr-4" />
            <img src="/zepto.png" alt="Zepto" className="w-20 h-20" />
          </div>
          <div className="text-3xl font-bold text-green-500">{customerCount}+</div>
          <div className="text-lg text-gray-600">Satisfied Customers</div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center mb-3">
            <img src="/Expert.png" alt="Well Trained Experts" className="w-20 h-20 mr-4" />
            <img src="/zepto.png" alt="Zepto" className="w-20 h-20" />
          </div>
          <div className="text-3xl font-bold text-green-500">{expertCount}+</div>
          <div className="text-lg text-gray-600">Well Trained Experts</div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center mb-3">
            <img src="/Face.png" alt="Facecare Treatments" className="w-20 h-20 mr-4" />
            <img src="/zepto.png" alt="Zepto" className="w-20 h-20" />
          </div>
          <div className="text-3xl font-bold text-green-500">{facecareCount}+</div>
          <div className="text-lg text-gray-600">Facecare Treatments</div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center mb-3">
            <img src="/skin.png" alt="Skincare Treatments" className="w-20 h-20 mr-4" />
            <img src="/zepto.png" alt="Zepto" className="w-20 h-20" />
          </div>
          <div className="text-3xl font-bold text-green-500">{skincareCount}+</div>
          <div className="text-lg text-gray-600">Skincare Treatments</div>
        </div>
      </div>
    </div>
  );
}
