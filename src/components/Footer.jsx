import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-green-400">AZAZ</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Protecting what matters most to you and your family. Comprehensive insurance 
              solutions with exceptional service and competitive rates.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/azaz" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/azaz" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/azaz/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-green-400 transition duration-300">Home</a></li>
              <li><a href="#services" className="hover:text-green-400 transition duration-300">Services</a></li>
              <li><a href="#about" className="hover:text-green-400 transition duration-300">About</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-green-400 transition duration-300">Claims</a></li>
              <li><a href="#" className="hover:text-green-400 transition duration-300">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-green-400"></i>
                <span>+254 703 797 714</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-green-400"></i>
                <span>info@azaz.co.ke</span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-green-400 mt-1"></i>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025     Azaz Insurance Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;