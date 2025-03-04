import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2">ABOUT US</h2>
            <div className="w-20 h-1 bg-purple-600 mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              15 years, we passionate about achieving better results for our clients.
            </h3>
            <p className="text-gray-600 mb-6">
              we specialize in delivering innovative digital solutions tailored to your needs. Whether you're looking for custom software development, scalable web applications, or seamless cloud integrations, we have the expertise to bring your vision to life.
            </p>
            <p className="text-gray-600 mb-8">
              we help businesses unlock their full potential through cutting-edge technology and custom digital solutions. From AI-driven applications to scalable cloud platforms, we deliver efficiency, security, and growth.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 hover-lift"
            >
              READ MORE <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="relative reveal-on-scroll">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-purple-200 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-orange-200 rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Business professional" 
              className="relative z-10 w-full h-auto rounded-lg shadow-xl hover-rotate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;