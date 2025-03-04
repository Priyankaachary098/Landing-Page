import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    content: "Implementing this platform transformed our business. We've seen a 40% increase in customer engagement and our sales have doubled in just six months.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "The customer support team is exceptional. They helped us customize the platform to our specific needs, and the results have exceeded our expectations.",
    author: "Michael Chen",
    role: "Marketing Director, Global Solutions",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "As a small business owner, I was looking for an affordable solution that wouldn't compromise on quality. This platform delivered exactly what I needed and more.",
    author: "Emily Rodriguez",
    role: "Founder, Artisan Crafts",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="testimonials" className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase">Testimonials</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Trusted by businesses worldwide
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Hear from our satisfied customers about how our platform has helped them grow and succeed.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto reveal-on-scroll" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden p-8 transition-all duration-500 transform hover-lift">
            <div className="relative text-lg font-medium text-gray-700">
              <svg
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-purple-200"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative pl-10">{testimonials[activeIndex].content}</p>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex-shrink-0">
                <img 
                  className="h-14 w-14 rounded-full border-2 border-purple-300 p-1" 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author} 
                />
              </div>
              <div className="ml-4">
                <p className="text-lg font-bold text-gray-900">{testimonials[activeIndex].author}</p>
                <p className="text-base text-purple-600">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-purple-100 transition-colors duration-200 hover-scale"
            >
              <ChevronLeft className="h-6 w-6 text-purple-600" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-purple-100 transition-colors duration-200 hover-scale"
            >
              <ChevronRight className="h-6 w-6 text-purple-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                  index === activeIndex ? 'bg-purple-600' : 'bg-purple-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;