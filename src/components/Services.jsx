import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesMenu = () => {
  const [activeService, setActiveService] = useState(null);
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: "Deep Cleaning Furniture",
      description: "Complete deep cleaning for all types of furniture.",
      icon: "🏠",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      features: ["Eco-friendly products", "All rooms included", "Surface sanitization"]
    },
    {
      id: 2,
      title: "Car Cleaning",
      description: "Interior and exterior car cleaning with premium products and attention to detail.",
      icon: "🚗",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      features: ["Interior & exterior", "Premium products", "Detail-oriented"]
    },
    {
      id: 3,
      title: "Garden Cleaning",
      description: "Garden maintenance and cleaning for beautiful outdoor spaces and landscapes.",
      icon: "🌿",
      color: "from-lime-500 to-green-500",
      bgColor: "bg-lime-50",
      features: ["Landscape maintenance", "Weed removal", "Seasonal cleanup"]
    },
    {
      id: 4,
      title: "Deep Cleaning",
      description: "Intensive cleaning for move-in/move-out or seasonal deep cleaning services.",
      icon: "✨",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      features: ["Move-in/out", "Seasonal cleaning", "Intensive sanitization"]
    }
  ];

  return (
    <section className="py-20 bg-blue relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-chewy mb-4">{t('servicesHeading')}</h2>
          <p className="text-lg text-white font-chewy max-w-2xl mx-auto leading-relaxed">{t('servicesSubheading')}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative group cursor-pointer ${service.bgColor} rounded-3xl p-8 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl border-2 border-white hover:border-opacity-50`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Main Content */}
              <div className="flex items-start space-x-6">
                {/* Icon Container */}
                <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white bg-opacity-80 rounded-full text-xs font-medium text-gray-700 border border-white shadow-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link to={`/services/${service.id}`}>
                  <button className="group/btn inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full font-semibold text-gray-800 hover:text-white transition-all duration-300 hover:shadow-lg border border-gray-200 hover:border-transparent relative overflow-hidden">
                      <span className="relative z-10">{t('servicesLearnMore')}</span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left`}></div>
                      <svg
                        className="w-4 h-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMenu;