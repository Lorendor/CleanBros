import React from 'react';
import cleaningImage from '../assets/clean1.png';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-16 md:py-24 mt-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 relative">
            {/* Blue half circle */}
            <div className="absolute -left-200 -top-40 w-[1600px] h-140 bg-blue rounded-r-full -z-10"></div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-lg text-white mb-8 leading-relaxed">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col font-chewy sm:flex-row gap-4">
              <button className="bg-yellow-400 hover:bg-blue-700 text-white font-chewy py-4 px-8 rounded-full transition-all duration-300 shadow-lg text-lg font-bold transform hover:scale-105">
                {t('contactUs')}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;