import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('English');
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'hr', name: 'Croatian', flag: '🇭🇷' }
    ];

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language.name);
        setIsLanguageDropdownOpen(false);
    };

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
                            <a href="#home" className="text-black hover:text-white hover:bg-blue font-chewy py-2 px-4 rounded-lg transition-all duration-300">
                                Home
                            </a>
                            <a href="#about" className="text-black hover:text-white hover:bg-blue font-chewy py-2 px-4 rounded-lg transition-all duration-300">
                                About
                            </a>
                            <a href="#services" className="text-black hover:text-white hover:bg-blue font-chewy py-2 px-4 rounded-lg transition-all duration-300">
                                Services
                            </a>
                            <a href="#contact" className="text-black hover:text-white hover:bg-blue font-chewy py-2 px-4 rounded-lg transition-all duration-300">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Right side - Language selector and button */}
                    <div className="hidden md:flex items-center space-x-4 ml-auto">

                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                                className="flex items-center justify-between text-black hover:text-blue font-chewy py-2 px-3 rounded-lg hover:bg-gray-100 transition-all duration-300 border border-gray-200 w-[140px]"
                            >
                                <div className="flex items-center space-x-2 flex-1 min-w-0">
                                    <span>🌐</span>
                                    <span className="text-sm truncate">{currentLanguage}</span>
                                </div>
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
                                <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                    {languages.map((language) => (
                                        <button
                                            key={language.code}
                                            onClick={() => handleLanguageChange(language)}
                                            className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors font-chewy ${
                                                currentLanguage === language.name ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                            }`}
                                        >
                                            <span className="text-lg">{language.flag}</span>
                                            <span className="text-sm">{language.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* CTA Button */}
                        <button className="bg-blue rounded-full text-white ml-2 px-6 py-2 transition-all duration-300 transform hover:scale-110 font-chewy">
                            Book Now
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

                {/* Mobile Navigation Menu - unchanged */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[80vh] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <nav className="pt-3 pb-2 ">
                        <div className="flex flex-col space-y-2">
                            <a 
                                href="#home" 
                                className="text-black hover:text-white hover:bg-blue font-chewy py-3 px-4 rounded-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </a>
                            <a 
                                href="#about" 
                                className="text-black hover:text-white hover:bg-blue font-chewy py-3 px-4 rounded-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a 
                                href="#services" 
                                className="text-black hover:text-white hover:bg-blue font-chewy py-3 px-4 rounded-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </a>
                            <a 
                                href="#contact" 
                                className="text-black hover:text-white hover:bg-blue font-chewy py-3 px-4 rounded-lg transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                            
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
                                Book Now
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;