'use client';

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Import social icons

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-semibold text-green-500 mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              We are a forward-thinking company dedicated to providing the best services to our clients.
              Passionate about quality, we strive to exceed expectations in every project we undertake.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-green-500 mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/about" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-semibold text-green-500 mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.instagram.com/a_face_of_change_f.o.c._/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
        
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12 border-t border-gray-600 pt-6">
          <p className="text-sm text-gray-400">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
