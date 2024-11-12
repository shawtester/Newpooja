'use client';

import { useState, useEffect, useRef } from 'react';
import { db } from '@/lib/firebase';  // Make sure this is pointing to your firebase instance
import { collection, onSnapshot } from 'firebase/firestore'; // Use onSnapshot for real-time updates

export default function TestimonialSection() {
  const [inView, setInView] = useState(false);
  const [testimonials, setTestimonials] = useState([]);  // State to store testimonials
  const [showAll, setShowAll] = useState(false);  // State to control showing all testimonials
  const sectionRef = useRef(null);

  // Array of testimonial refs to handle staggered animation
  const testimonialRefs = useRef([]);

  useEffect(() => {
    // Listen to real-time changes in Firestore using onSnapshot
    const unsubscribe = onSnapshot(collection(db, 'reviews'), (querySnapshot) => {
      const fetchedTestimonials = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Log the fetched testimonials to see if the data is correct
      console.log('Fetched Testimonials:', fetchedTestimonials);

      setTestimonials(fetchedTestimonials);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);  // Empty dependency array to run only once when component mounts

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

  // Function to generate star rating
  const generateStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-xl ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}>
        ★
      </span>
    ));
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
          {testimonials.length > 0 ? (
            testimonials
              .slice(0, showAll ? testimonials.length : 6) // Limit to 6 initially, then show all if `showAll` is true
              .map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  ref={addTestimonialRef}
                  className={`w-72 h-96 flex flex-col justify-between bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-lg shadow-lg text-center transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-xl opacity-0 transform ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`, // Delay for staggered animation
                  }}
                >
                  <img
                    src="https://www.kindpng.com/picc/m/356-3567761_cartoon-avatar-women-hd-png-download.png"
                    alt={`Customer ${index + 1}`}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
                  />
                  <p
                    className="text-xl text-white mb-4"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      WebkitLineClamp: 5, // Limit to 5 lines
                    }}
                  >
                    "{testimonial.review}"
                  </p>
                  <h3 className="font-semibold text-lg text-white">{testimonial.name}</h3>
                  <div className="flex justify-center space-x-1">{generateStars(testimonial.rating)}</div>
                </div>
              ))
          ) : (
            <p className="text-white">No testimonials available.</p>
          )}
        </div>

        {/* Show "View More" or "Show Less" Button */}
        {testimonials.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}  // Toggle between showing all or the first 6 testimonials
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {showAll ? 'Show Less' : 'View More'}  {/* Toggle text */}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
