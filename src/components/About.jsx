import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
    const { t } = useLanguage();
    const stats = [
        { number: '500+', label: t('statHappyClients') },
        { number: '5+', label: t('statYearsExperience') },
        { number: '24/7', label: t('statCustomerSupport') },
        { number: '100%', label: t('statSatisfactionGuaranteed') }
    ];

    const features = [
        {
            icon: '🌿',
            title: 'Eco-Friendly',
            description: 'We use only environmentally friendly cleaning products that are safe for your family and pets.'
        },
        {
            icon: '⚡',
            title: 'Fast & Efficient',
            description: 'Our trained professionals work quickly without compromising on quality and attention to detail.'
        },
        {
            icon: '🛡️',
            title: 'Insured & Certified',
            description: 'Fully licensed, bonded, and insured for your peace of mind and protection.'
        },
        {
            icon: '🎯',
            title: 'Custom Solutions',
            description: 'Tailored cleaning plans to meet your specific needs and schedule requirements.'
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue mb-4 font-chewy">
                        {t('aboutHeading')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        {t('aboutSubheading')}
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Content */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 font-chewy">{t('aboutWhyChoose')}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {t('aboutP1')}
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {t('aboutP2')}
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold text-blue mb-1 font-chewy">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-blue-200 transition-all duration-300 hover:scale-105 group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-xl">{feature.icon}</span>
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2 font-chewy">{feature.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 font-chewy">{t('aboutCtaTitle')}</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        {t('aboutCtaBody')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-400 text-white px-8 py-3 rounded-full font-chewy hover:bg-blue transition-all duration-300 transform hover:scale-105 shadow-lg">{t('aboutCtaPrimary')}</button>
                        <button className="border-2 border-blue text-blue px-8 py-3 rounded-full font-chewy hover:bg-blue hover:text-white transition-all duration-300">{t('learnMore')}</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutSection;