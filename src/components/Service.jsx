// pages/ServicePage.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceInfo from '../../data/ServiceInfo';

const ServicePage = () => {
  const { serviceId } = useParams();
  const { t } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Find the service by ID or index
  const service = ServiceInfo.find(service => 
    service.id === parseInt(serviceId) || service.id === serviceId
  );

  // If service not found
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('serviceNotFound')}</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            {t('returnToHome')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Service Hero Section */}
      <section className="pt-35 pb-16 bg-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-chewy">
              {service.serviceName}
            </h1>
            <p className="text-2xl text-white mb-8 font-chewy leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Service Images */}
            <div className="space-y-6">
              {service.photos && service.photos.map((photo, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={photo} 
                    alt={`${service.serviceName} - Image ${index + 1}`}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Service Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-chewy">
                  {t('serviceDetails')}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.longDescription || service.description}
                </p>
              </div>

              {/* Features/Included Services */}
              {service.features && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-chewy">
                    {t('whatsIncluded')}
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}


              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-15">
                <button className="flex-1 bg-yellow-500 text-white py-4 rounded-full font-chewy hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                  {t('bookThisService')}
                </button>
                <Link 
                  to="/"
                  className="flex-1 border-2 border-blue text-blue py-4 rounded-full font-chewy hover:bg-blue hover:text-white transition-all duration-300 text-center block"
                >
                  {t('backToAllServices')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-chewy">
            {t('otherServices')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ServiceInfo.filter(s => s.id !== service.id).slice(0, 3).map(relatedService => (
              <Link 
                key={relatedService.id}
                to={`/services/${relatedService.id}`}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-blue-200 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{relatedService.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-chewy">
                  {relatedService.serviceName}
                </h3>
                <p className="text-gray-600 text-sm">
                  {relatedService.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;