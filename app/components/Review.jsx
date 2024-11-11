'use client';

import { useState } from 'react';
import { db, collection, setDoc, doc, Timestamp } from '@/lib/firebase';  // Ensure correct import here

export default function AddReviewSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);

    try {
      // Prepare the review data to be added to Firestore
      const reviewData = {
        name,
        email,
        rating,
        review,
        timestamp: Timestamp.now(),  // Correct usage of Timestamp.now()
      };

      // Generate a unique document ID (you can also use something like a random ID or a UUID)
      const reviewRef = doc(collection(db, 'reviews'));

      // Set the document in Firestore
      await setDoc(reviewRef, reviewData);

      // Show success message after submission
      setIsSubmitted(true);

      // Reset form values
      setName('');
      setEmail('');
      setRating(5);
      setReview('');
    } catch (error) {
      console.error('Error adding review: ', error);
    } finally {
      setIsLoading(false); // Set loading to false after submission
    }
  };

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">Add Your Review</h2>
        <p className="text-lg text-gray-600 mb-8">We value your feedback! Please share your experience with us.</p>

        {isSubmitted && (
          <div className="text-green-600 mb-6">
            <p className="font-semibold">Thank you for your review! It has been submitted successfully.</p>
          </div>
        )}

        {/* Review Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6 mx-auto max-w-2xl"
        >
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* Name Field */}
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 bg-gray-100 text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-gray-100 text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Rating Field */}
          <div className="flex flex-col mb-6">
            <label htmlFor="rating" className="block text-sm text-gray-700 mb-2">
              Your Rating
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-2xl ${rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Review Text */}
          <div>
            <label htmlFor="review" className="block text-sm text-gray-700 mb-2">
              Your Review
            </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-3 bg-gray-100 text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="5"
              placeholder="Write your review here..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>
    </section>
  );
}
