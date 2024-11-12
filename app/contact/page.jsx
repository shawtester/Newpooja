"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function ContactUsPage() {
  return (

    <>
    <Header/>
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center py-20 text-white"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-5xl font-semibold mb-4">Contact Us</h1>
          <p className="text-xl mb-8">We're here to help. Choose the best way to reach us.</p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            You can contact us via the following methods. We'll respond as soon as possible!
          </p>

          {/* Contact Methods */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Chat with us instantly on WhatsApp. Click the link below to start the conversation.</p>
              <a
                href="https://wa.me/8542838597"  // Replace with your WhatsApp number in international format
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
              >
                Start WhatsApp Chat
              </a>
            </div>

            {/* Phone Number */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Phone Number</h3>
              <p className="text-gray-600 mb-4">You can also reach us directly via phone at the number below:</p>
              <p className="text-xl font-semibold text-gray-800">+1 (123) 456-7890</p>  {/* Replace with your phone number */}
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email</h3>
              <p className="text-gray-600 mb-4">Feel free to send us an email at the address below, and we'll get back to you as soon as possible:</p>
              <a
                href="mailto:your-email@example.com"  // Replace with your email address
                className="inline-block py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 text-white text-center">
        <p className="text-lg">© 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
    <Footer/>
    </>
  );
}
