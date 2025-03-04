import React from 'react';
import { Rocket, Monitor, Users } from 'lucide-react';

const services = [
  {
    title: 'LAUNCH BUSINESS',
    description: 'Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s when an unknown printer took a galley.',
    icon: Rocket,
    color: 'from-orange-400 to-pink-500',
  },
  {
    title: 'ONLINE SUPPORT TEAM',
    description: 'Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s when an unknown printer took a galley.',
    icon: Users,
    color: 'from-purple-400 to-indigo-500',
  },
  {
    title: 'TIME MANAGEMENT',
    description: 'Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s when an unknown printer took a galley.',
    icon: Monitor,
    color: 'from-blue-400 to-teal-500',
  },
];

const ServicesSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="reveal-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`bg-gradient-to-r ${service.color} p-8 rounded-lg text-white hover-lift card-3d`}>
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-3 rounded-full">
                    <service.icon className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{service.title}</h3>
                <p className="text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;