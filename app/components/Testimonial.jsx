'use client';

import { useState, useEffect, useRef } from 'react';

export default function TestimonialSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Array of testimonial refs to handle staggered animation
  const testimonialRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInView(entry.isIntersecting); // Trigger when the section enters view
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

  // Function to add ref to testimonial items dynamically
  const addTestimonialRef = (el) => {
    if (el && !testimonialRefs.current.includes(el)) {
      testimonialRefs.current.push(el);
    }
  };

  return (
    <div className="py-10 bg-gradient-to-r from-blue-500 to-green-500">
      {/* Section Header */}
      <section className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">Our Testimonials</h2>
        <p className="text-lg text-white mt-4">
          See what our satisfied customers have to say about their experience with us.
        </p>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-16">
        <div
          ref={sectionRef}
          className={`flex flex-wrap justify-center gap-8 transition-all duration-700 ease-in-out transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Testimonial 1 */}
          <div
            ref={addTestimonialRef}
            className={`max-w-xs bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-lg shadow-lg text-center transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-xl opacity-0 transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: '0ms', // No delay for the first one
            }}
          >
            <img
              src="https://www.kindpng.com/picc/m/356-3567761_cartoon-avatar-women-hd-png-download.png"
              alt="Customer 1"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
            />
            <p className="text-xl text-white mb-4">"Absolutely love the results! Highly recommend the services to everyone."</p>
            <h3 className="font-semibold text-lg text-white">Priya Sharma</h3>
            <p className="text-sm text-white">Happy Client</p>
          </div>

          {/* Testimonial 2 */}
          <div
            ref={addTestimonialRef}
            className={`max-w-xs bg-gradient-to-r from-teal-400 to-indigo-500 p-6 rounded-lg shadow-lg text-center transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-xl opacity-0 transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: '100ms', // Delay for the second testimonial
            }}
          >
            <img
              src="https://www.kindpng.com/picc/m/356-3567761_cartoon-avatar-women-hd-png-download.png"
              alt="Customer 2"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
            />
            <p className="text-xl text-white mb-4">"I’m so impressed by the results, I’ll definitely be coming back!"</p>
            <h3 className="font-semibold text-lg text-white">Anjali Reddy</h3>
            <p className="text-sm text-white">Happy Customer</p>
          </div>

          {/* Testimonial 3 */}
          <div
            ref={addTestimonialRef}
            className={`max-w-xs bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg text-center transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-xl opacity-0 transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: '200ms', // Delay for the third testimonial
            }}
          >
            <img
              src="https://www.kindpng.com/picc/m/356-3567761_cartoon-avatar-women-hd-png-download.png"
              alt="Customer 3"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
            />
            <p className="text-xl text-white mb-4">"Amazing service! My skin feels amazing and I’ll definitely be back!"</p>
            <h3 className="font-semibold text-lg text-white">Sanya Kapoor</h3>
            <p className="text-sm text-white">Loyal Customer</p>
          </div>

          {/* Testimonial 4 */}
          <div
            ref={addTestimonialRef}
            className={`max-w-xs bg-gradient-to-r from-red-400 to-pink-600 p-6 rounded-lg shadow-lg text-center transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-xl opacity-0 transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: '300ms', // Delay for the fourth testimonial
            }}
          >
            <img
              src="https://www.kindpng.com/picc/m/356-3567761_cartoon-avatar-women-hd-png-download.png"
              alt="Customer 4"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
            />
            <p className="text-xl text-white mb-4">"Fantastic results! I feel refreshed and glowing after my session!"</p>
            <h3 className="font-semibold text-lg text-white">Neha Mehta</h3>
            <p className="text-sm text-white">Satisfied Client</p>
          </div>
        </div>
      </section>
    </div>
  );
}
