import React from 'react';
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Azaz Insurance?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              With years of experience in the insurance industry, Azaz Insurance has been 
              protecting families and businesses across Kenya with reliable, affordable coverage.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <i className="fas fa-award text-white text-sm"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Award-Winning Service</h4>
                  <p className="text-gray-600">Recognized for excellence in customer service and claims processing.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <i className="fas fa-clock text-white text-sm"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">24/7 Support</h4>
                  <p className="text-gray-600">Round-the-clock customer support and claims assistance when you need it most.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <i className="fas fa-shield-alt text-white text-sm"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Trusted Protection</h4>
                  <p className="text-gray-600">Comprehensive coverage options tailored to your specific needs and budget.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
              <i className="fas fa-phone mr-2"></i>
              Contact Us Today
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Claims Approved</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;