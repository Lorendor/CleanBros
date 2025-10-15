import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const location = useLocation();
    const { currentLanguage, changeLanguage, t } = useLanguage();
    const navigate = useNavigate();

    const handleNavigation = (sectionId) => {
        if (location.pathname === '/') {
            // If already on home page, scrolling to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on a different page, navigate to home with hash
            window.location.href = `/#${sectionId}`;
        }
        setIsMenuOpen(false);
    };

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'hr', name: 'Croatian', flag: '🇭🇷' }
    ];

    const services = [
        { id: 1, name: t('homeCleaning'), icon: "🏠" },
        { id: 2, name: t('carCleaning'), icon: "🚗" }
    ];

    const handleServiceNavigation = (serviceId) => {
        navigate(`/services/${serviceId}`);
        setIsServicesDropdownOpen(false);
        setIsMenuOpen(false);
    };

    const handleLanguageChange = (language) => {
        changeLanguage(language.code);
        setIsLanguageDropdownOpen(false);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.services-dropdown') && !event.target.closest('.language-dropdown')) {
                setIsServicesDropdownOpen(false);
                setIsLanguageDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    
                    {/* Logo */}
                    <div className="flex items-center w-24">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center">
                                <img 
                                    src="/src/assets/logo1.jpg" 
                                    alt="CleanPro Logo" 
                                    className="w-24 h-16 object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                        <div className="flex gap-8">
                            <button onClick={() => handleNavigation('home')} className="text-black hover:text-white hover:bg-blue font-chewy py-2 px-4 rounded-lg transition-all duration-300">
                                {t('home')}
                            </button>
                            <button onClick={() => handleNavigation('about')} className="text-black hover:text-white hover:bg-blue font-chewy py-2 px-4 rounded-lg transition-all duration-300">
                                {t('about')}
                            </button>
                            
                            {/* Services Dropdown */}
                            <div className="relative services-dropdown">
                                <button 
                                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                    className="text-black hover:text-white hover:bg-blue font-chewy py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-1"
                                >
                                    <span>{t('services')}</span>
                                    <svg 
                                        className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Services Dropdown Menu */}
                                {isServicesDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                        <button
                                            onClick={() => handleNavigation('services')}
                                            className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors font-chewy text-gray-700"
                                        >
                                            <span>📋</span>
                                            <span>{t('allServices')}</span>
                                        </button>
                                        {services.map((service) => (
                                            <button
                                                key={service.id}
                                                onClick={() => handleServiceNavigation(service.id)}
                                                className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors font-chewy text-gray-700"
                                            >
                                                <span className="text-lg">{service.icon}</span>
                                                <span>{service.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button onClick={() => handleNavigation('contact')} className="text-black hover:text-white hover:bg-blue font-chewy py-2 px-4 rounded-lg transition-all duration-300">
                                {t('contact')}
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4 ml-auto">
                        {/* Language Selector */}
                        <div className="relative language-dropdown">
                            <button
                                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                                className="flex items-center gap-1 text-black hover:text-blue font-chewy py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 border border-gray-200 min-w-[88px] justify-center"
                            >
                                <span className="text-xl mr-2">🌐</span>
                                <span className="text-2xl">{languages.find(l => l.code === currentLanguage)?.flag || '🌐'}</span>
                                <svg 
                                    className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Language Dropdown */}
                            {isLanguageDropdownOpen && (
                                <div className="absolute top-full right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                    {languages.map((language) => (
                                        <button
                                            key={language.code}
                                            onClick={() => handleLanguageChange(language)}
                                            className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors font-chewy ${
                                                currentLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                            }`}
                                        >
                                            <span className="text-lg">{language.flag}</span>
                                            <span className="text-sm">{language.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Book NowButton */}
                        <button className="bg-blue rounded-full text-white ml-2 px-6 py-2 transition-all duration-300 transform hover:scale-110 font-chewy">
                            {t('bookNow')}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[80vh] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <nav className="pt-3 pb-2 ">
                        <div className="flex flex-col space-y-2">
                            <button 
                                onClick={() => handleNavigation('home')} 
                                className="text-black hover:text-white hover:bg-blue font-chewy py-3 px-4 rounded-lg transition-all duration-300 text-left"
                            >
                                {t('home')}
                            </button>
                            <button 
                                onClick={() => handleNavigation('about')} 
                                className="text-black hover:text-white hover:bg-blue font-chewy py-3 px-4 rounded-lg transition-all duration-300 text-left"
                            >
                                {t('about')}
                            </button>
                            
                            {/* Mobile Services Dropdown */}
                            <div className="services-dropdown">
                                <button 
                                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                    className="text-black hover:text-white hover:bg-blue font-chewy py-3 px-4 rounded-lg transition-all duration-300 text-left w-full flex items-center justify-between"
                                >
                                    <span>{t('services')}</span>
                                    <svg 
                                        className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Mobile Services Submenu */}
                                <div className={`overflow-hidden transition-all duration-300 ${isServicesDropdownOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex flex-col space-y-1 pl-8">
                                        <button 
                                            onClick={() => handleNavigation('services')} 
                                            className="text-black hover:text-white hover:bg-blue font-chewy py-2 px-4 rounded-lg transition-all duration-300 text-left flex items-center space-x-3"
                                        >
                                            <span>📋</span>
                                            <span>{t('allServices')}</span>
                                        </button>
                                        {services.map((service) => (
                                            <button
                                                key={service.id}
                                                onClick={() => handleServiceNavigation(service.id)}
                                                className="text-black hover:text-white hover:bg-blue font-chewy py-2 px-4 rounded-lg transition-all duration-300 text-left flex items-center space-x-3"
                                            >
                                                <span>{service.icon}</span>
                                                <span>{service.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button 
                                onClick={() => handleNavigation('contact')} 
                                className="text-black hover:text-white hover:bg-blue font-chewy py-3 px-4 rounded-lg transition-all duration-300 text-left"
                            >
                                {t('contact')}
                            </button>
                            
                            {/* Mobile Language Selector */}
                            <div className="px-4 py-2">
                                <div>
                                    <p className="font-chewy text-center text-black mb-5">Language</p>
                                    <div className="flex space-x-2">
                                        {languages.map((language) => (
                                            <button
                                                key={language.code}
                                                onClick={() => {
                                                    handleLanguageChange(language);
                                                }}
                                                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-lg border transition-all font-chewy ${
                                                    currentLanguage === language.name 
                                                        ? 'bg-blue-50 border-blue-200 text-blue-600' 
                                                        : 'bg-gray-50 border-gray-200 text-black hover:bg-gray-100'
                                                }`}
                                            >
                                                <span>{language.flag}</span>
                                                <span className="text-sm">{language.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button className="bg-blue rounded-full text-white px-4 py-3 transition-all duration-300 font-chewy mt-2">
                                {t('bookNow')}
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;