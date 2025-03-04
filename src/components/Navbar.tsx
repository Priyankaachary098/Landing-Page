import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-orange-400 to-pink-500 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-white flex items-center hover-scale">
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm">+1-234-567-8901</span>
            </a>
            <a href="#" className="text-white flex items-center hover-scale">
              <Mail className="h-4 w-4 mr-1" />
              <span className="text-sm">contact@example.com</span>
            </a>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="text-white hover-scale">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover-scale">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover-scale">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="flex items-center hover-scale">
                  <div className="bg-purple-600 text-white p-2 rounded-md mr-2">
                    <span className="font-bold text-xl">LP</span>
                  </div>
                  <span className={`font-bold text-xl ${scrolled ? 'text-purple-600' : 'text-white'}`}>LANDING PAGE</span>
                </div>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a href="#" className={`border-transparent ${scrolled ? 'text-gray-700' : 'text-white'} hover:border-purple-500 hover:text-purple-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}>
                  Home
                </a>
                <a href="#" className={`border-transparent ${scrolled ? 'text-gray-700' : 'text-white'} hover:border-purple-500 hover:text-purple-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}>
                  Blog
                </a>
                <a href="#" className={`border-transparent ${scrolled ? 'text-gray-700' : 'text-white'} hover:border-purple-500 hover:text-purple-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}>
                  Page
                </a>
                <a href="#services" className={`border-transparent ${scrolled ? 'text-gray-700' : 'text-white'} hover:border-purple-500 hover:text-purple-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}>
                  Services
                </a>
                <a href="#testimonials" className={`border-transparent ${scrolled ? 'text-gray-700' : 'text-white'} hover:border-purple-500 hover:text-purple-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}>
                  Testimonials
                </a>
                <a href="#contact" className={`border-transparent ${scrolled ? 'text-gray-700' : 'text-white'} hover:border-purple-500 hover:text-purple-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}>
                  Contact
                </a>
              </div>
            </div>
            <div className="hidden md:flex md:items-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium hover-lift pulse-glow">
                Buy Now
              </button>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-8 pr-4 py-1 rounded-full text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 w-0 opacity-0 group-hover:w-40 group-hover:opacity-100 focus:w-40 focus:opacity-100"
                />
                <Search className={`absolute left-2 top-1.5 h-4 w-4 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-purple-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500`}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-purple-500 hover:text-purple-800 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-purple-500 hover:text-purple-800 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-purple-500 hover:text-purple-800 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Page
              </a>
              <a
                href="#services"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-purple-500 hover:text-purple-800 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-purple-500 hover:text-purple-800 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-purple-500 hover:text-purple-800 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="mt-4 pl-3 pr-4 flex items-center">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium hover-lift">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;