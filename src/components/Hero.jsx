import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const images = [
    { src: '/azaz-1.jpg', alt: 'AZAZ Insurance Background 1' },
    { src: '/azaz-2.jpg', alt: 'AZAZ Insurance Background 2' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageChange = (index) => {
    if (index !== currentImage) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImage(index);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Images with Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImage 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.log(`Failed to load ${image.src}`,e);
              }}
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-green-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-green-300/40 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content Section */}
          <div className={`space-y-8 transform transition-all duration-700 ${
            isAnimating ? 'translate-x-[-20px] opacity-80' : 'translate-x-0 opacity-100'
          }`}>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                Protect What 
                <span className="text-green-400 animate-pulse"> Matters</span> Most
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-lg">
                Comprehensive insurance solutions tailored for your life, business, and future. 
                Get the coverage you need with the service you deserve.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-green-500 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-green-600 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 transform">
                <i className="fas fa-calculator mr-3 group-hover:animate-bounce"></i>
                Get Free Quote
              </button>
              <button className="group border-3 border-white/80 backdrop-blur-sm bg-white/10 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl hover:scale-105 transform">
                <i className="fas fa-play mr-3 group-hover:animate-pulse"></i>
                Learn More
              </button>
            </div>

            {/* Image Navigation Dots */}
            <div className="flex space-x-3 pt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'bg-green-400 scale-125' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Interactive Card Section */}
          <div className={`relative transform transition-all duration-700 ${
            isAnimating ? 'translate-x-[20px] opacity-80 rotate-1' : 'translate-x-0 opacity-100 rotate-0'
          }`}>
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-10 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
              <div className="space-y-8">
                <div className="text-center pb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Services</h3>
                  <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
                </div>
                
                {[
                  { icon: 'fa-car', label: 'Auto Insurance', delay: '0s' },
                  { icon: 'fa-home', label: 'Home Insurance', delay: '0.1s' },
                  { icon: 'fa-heart', label: 'Life Insurance', delay: '0.2s' },
                  { icon: 'fa-briefcase', label: 'Business Insurance', delay: '0.3s' }
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="group flex items-center space-x-6 p-4 rounded-xl hover:bg-green-50 transition-all duration-300 cursor-pointer transform hover:translate-x-2"
                    style={{animationDelay: service.delay}}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <i className={`fas ${service.icon} text-white text-2xl`}></i>
                    </div>
                    <span className="text-gray-800 font-semibold text-lg group-hover:text-green-600 transition-colors duration-300">
                      {service.label}
                    </span>
                    <div className="flex-1"></div>
                    <i className="fas fa-arrow-right text-gray-400 group-hover:text-green-500 group-hover:translate-x-2 transition-all duration-300"></i>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-2xl shadow-xl animate-bounce">
              <div className="text-center">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-2xl shadow-xl animate-pulse">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;