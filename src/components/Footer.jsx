import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigation = {
    main: [
      { name: 'Home', href: '#home' },
      { name: 'Services', href: '#services' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Home Cleaning', href: '#home-cleaning' },
      { name: 'Car Cleaning', href: '#car-cleaning' },
      { name: 'Garden Cleaning', href: '#garden-cleaning' },
      { name: 'Deep Cleaning', href: '#deep-cleaning' },
    ]
  };

  const social = [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.189-1.551-.741-.94-.741-2.111-.741-3.451s0-2.511.741-3.451c.741-.94 1.892-1.551 3.189-1.551s2.448.611 3.189 1.551c.741.94.741 2.111.741 3.451s0 2.511-.741 3.451c-.741.94-1.892 1.551-3.189 1.551z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-blue relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-6 xl:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">✨</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-chewy">
                  CleanPro
                </span>
                <span className="text-xs text-white -mt-1">Services</span>
              </div>
            </div>
            <p className="text-white text-base leading-relaxed">
              Professional cleaning services that transform your space. 
              Eco-friendly products, trained professionals, and guaranteed satisfaction.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">
            {/* Main Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase font-chewy">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-white hover:text-blue-600 transition-colors font-chewy"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase font-chewy">
                Our Services
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-white hover:text-blue-600 transition-colors font-chewy"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase font-chewy">
                Contact Info
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:info@cleanpro.com"
                    className="text-base text-white hover:text-blue-600 transition-colors"
                  >
                    info@cleanpro.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+385991234567"
                    className="text-base text-white hover:text-blue-600 transition-colors"
                  >
                    +385 99 123 4567
                  </a>
                </li>
                <li>
                  <span className="text-base text-white">
                    Available 24/7
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-white text-center font-chewy">
            &copy; {currentYear} CleanPro Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;