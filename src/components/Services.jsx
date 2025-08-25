import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-car',
      title: 'Auto Insurance',
      description: 'Comprehensive coverage for your vehicle with competitive rates and excellent customer service.',
      features: ['Collision Coverage', 'Liability Protection', '24/7 Claims Support']
    },
    {
      icon: 'fas fa-home',
      title: 'Home Insurance',
      description: 'Protect your home and belongings with our comprehensive homeowners insurance policies.',
      features: ['Property Protection', 'Personal Belongings', 'Liability Coverage']
    },
    {
      icon: 'fas fa-heart',
      title: 'Life Insurance',
      description: 'Secure your family\'s financial future with our flexible life insurance options.',
      features: ['Term Life', 'Whole Life', 'Universal Life']
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Business Insurance',
      description: 'Comprehensive business protection to keep your company running smoothly.',
      features: ['General Liability', 'Property Coverage', 'Workers Comp']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Insurance Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of insurance products designed to protect you, 
            your family, and your business from life's uncertainties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-green-600 font-semibold hover:text-green-700 transition duration-300">
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;