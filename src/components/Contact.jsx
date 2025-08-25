import React from "react";
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Ready to protect what matters most? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-8 rounded-xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Insurance Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Select insurance type</option>
                  <option>Auto Insurance</option>
                  <option>Home Insurance</option>
                  <option>Life Insurance</option>
                  <option>Business Insurance</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your insurance needs"
                ></textarea>
              </div>
              
              <button className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <i className="fas fa-phone text-green-600 text-xl"></i>
                <h4 className="font-bold text-gray-800">Phone</h4>
              </div>
              <p className="text-gray-600">+254703797714</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <i className="fas fa-envelope text-green-600 text-xl"></i>
                <h4 className="font-bold text-gray-800">Email</h4>
              </div>
              <p className="text-gray-600">info@azaz.co.ke</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <i className="fas fa-share-alt text-green-600 text-xl"></i>
                <h4 className="font-bold text-gray-800">Follow Us</h4>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/azaz" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/azaz" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/company/azaz/" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;