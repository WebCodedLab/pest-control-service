import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Toronto Pest Control</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for pest control solutions in Toronto.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-gray-300">123 Pest Control St, Toronto, ON</span>
            </div>
             <div className="flex items-center space-x-2 mb-2">
              <Phone className="w-4 h-4 text-gray-500" />
              <span className="text-gray-300">(416) 123-4567</span>
            </div>
             <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-500" />
               <span className="text-gray-300">info@torontopestcontrol.com</span>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

         {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
             <div className="flex space-x-4">
                 <a href="#" className="text-gray-300 hover:text-primary transition-colors"><Facebook /></a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors"><Twitter /></a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors"><Instagram /></a>
              </div>
          </div>

          {/* Newsletter */}
          <div>
              <h4 className="text-lg font-semibold mb-4">Join Our Newsletter</h4>
              <p className="text-gray-300 mb-4">Stay updated with our latest news and offers.</p>
              <div className="flex">
                  <input
                      type="email"
                      placeholder="Your email address"
                      className="bg-gray-700 text-white p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-md transition-colors">Subscribe</button>
              </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Toronto Pest Control. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;