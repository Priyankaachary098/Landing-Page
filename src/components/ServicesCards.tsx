import React from 'react';
import { Monitor, Smartphone, Layout } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Monitor className="h-8 w-8 text-white" />,
    title: 'USER EXPERIENCE',
    description: 'We create intuitive user experiences that delight your customers and keep them coming back for more.',
    color: 'from-pink-500 to-purple-500',
    delay: 0
  },
  {
    id: 2,
    icon: <Layout className="h-8 w-8 text-white" />,
    title: 'CREATIVE DESIGN',
    description: 'Our designs are not just beautiful, theyre strategic and aligned with your brand objectives.',
    color: 'from-purple-500 to-indigo-500',
    delay: 0.2
  },
  {
    id: 3,
    icon: <Smartphone className="h-8 w-8 text-white" />,
    title: 'RETINA READY',
    description: 'All our designs are optimized for high-resolution displays, ensuring your site looks crisp on any device.',
    color: 'from-orange-500 to-pink-500',
    delay: 0.4
  }
];

const ServicesCards = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-3xl font-bold mb-2">OUR SERVICES</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a wide range of services to help your business succeed in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="reveal-on-scroll"
              style={{ animationDelay: `${service.delay}s` }}
            >
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-lg transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2`}></div>
                <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-all duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
                  <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;