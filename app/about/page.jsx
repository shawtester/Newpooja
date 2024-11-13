import React from 'react';
import Header from '../components/Header';

export default function About() {
  return (
    <>
      <Header />

      <div className="bg-gray-50" style={{ backgroundImage: "url('/Background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        {/* Hero Section with Background Image */}
        <section
          className="relative py-20 text-white"
        >
          <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
          <div className="container mx-auto text-center relative z-10 px-4">
            <h1 className="text-5xl font-semibold mb-4">About Us</h1>
            <p className="text-xl mb-8">
              Discover who we are, what we offer, and why we’re passionate about enhancing your beauty.
            </p>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-16 px-6 md:px-16 text-center bg-white bg-opacity-80">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              Welcome to [Your Salon Name], a haven for relaxation, beauty, and self-care. Our journey began with a passion for helping people feel their most beautiful, confident selves. 
            </p>
            <p className="text-lg text-gray-600">
              For years, we've been committed to offering exceptional beauty services in a warm and inviting atmosphere. Whether it's a fresh haircut, a luxurious facial, or a complete makeover, we’re here to help you look and feel your best.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-16 px-6 md:px-16 text-center text-white">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg mb-4">
              Our mission is to provide a personalized beauty experience that empowers every individual. From the moment you walk through our doors, our goal is to make you feel pampered and rejuvenated. We pride ourselves on exceptional customer service, using the best products and techniques in the beauty industry.
            </p>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="py-16 px-6 md:px-16 text-center bg-white bg-opacity-80">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Hair Styling</h3>
                <p>From trendy cuts to elegant styles, our expert stylists make sure your hair looks its best.</p>
              </div>
              <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Makeup Artistry</h3>
                <p>Enhance your features and glow with our professional makeup services for any occasion.</p>
              </div>
              <div className="bg-gradient-to-r from-indigo-400 to-pink-600 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Skincare & Facials</h3>
                <p>Relax and rejuvenate your skin with our luxurious facials and skincare treatments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-6 md:px-16 text-center">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-gradient-to-r from-pink-400 to-orange-500 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
                <p>We are committed to providing the highest level of service, making sure each visit exceeds your expectations.</p>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Care</h3>
                <p>We care about your well-being and your beauty. Our team takes the time to understand your needs and deliver the best results.</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                <p>We stay ahead of beauty trends, offering the latest techniques and treatments to keep you looking your best.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 py-12 text-white text-center">
          <p className="text-lg">© 2024 [Your Salon Name]. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}
