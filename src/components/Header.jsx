import React, { useState } from 'react';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-1">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/azaz.png" 
              alt="AZAZ Insurance Logo" 
              className="w-40 h-15 object-contain"
              onError={(e) => {
                // Fallback to SVG if PNG fails
                e.target.src = "/azaz.svg";
                e.target.onerror = () => {
                  // Final fallback to icon if both fail
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                };
              }}
            />
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center" style={{display: 'none'}}>
              <i className="fas fa-shield-alt text-white text-xl"></i>
            </div>
            
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">Home</a>
            <a href="#services" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">Services</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">About</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">Contact</a>
          </nav>
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <i className="fas fa-phone text-green-600"></i>
              <span className="text-sm">+254703797714</span>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
              Get Quote
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col py-4 space-y-4">
              <a href="#home" className="text-gray-700 hover:text-green-600 font-medium px-4">Home</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 font-medium px-4">Services</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 font-medium px-4">About</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium px-4">Contact</a>
              <div className="px-4 pt-2 border-t">
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 w-full">
                  Get Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;