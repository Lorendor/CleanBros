import React from 'react';
import cleaningImage from '../assets/clean1.png';
import pjenaImage from '../assets/pjena.png';

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 mt-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 relative">
            {/* Blue half circle */}
            <div className="absolute -left-96 -top-40 w-[1200px] h-140 bg-blue rounded-r-full -z-10"></div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Trusted and Reliable Deep Cleaning Services
            </h1>
            <p className="text-lg text-white mb-8 leading-relaxed">
              We provide top-notch cleaning services to shine your home, car, garden etc.
              Our professional team is dedicated to delivering exceptional results with every visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-md">
                Contact Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src={cleaningImage} 
                alt="Professional Cleaning Service" 
                className="w-full max-w-md"
              />
            </div>
            <div >
                <img
                  src={pjenaImage}
                  alt="Professional Cleaning Service"
                  className="w-60 h-60 absolute -top-35 left-320"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;