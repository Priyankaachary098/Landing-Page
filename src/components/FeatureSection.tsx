import React from 'react';
import { Globe, Shield, MessageSquare, Users } from 'lucide-react';

const features = [
  {
    name: 'Global Reach',
    description: 'Connect with customers around the world with our powerful platform that scales to meet your needs.',
    icon: Globe,
  },
  {
    name: 'Advanced Security',
    description: 'Rest easy knowing your data is protected with enterprise-grade security features and compliance standards.',
    icon: Shield,
  },
  {
    name: 'Real-time Communication',
    description: 'Engage with your audience through instant messaging, notifications, and interactive elements.',
    icon: MessageSquare,
  },
  {
    name: 'Team Collaboration',
    description: 'Work seamlessly with your team members with built-in collaboration tools and role-based permissions.',
    icon: Users,
  },
];

const FeatureSection = () => {
  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive suite of tools and features designed to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;