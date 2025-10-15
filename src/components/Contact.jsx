import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm = () => {
    const { t, currentLanguage } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const services = t('contactServicesList') || ['Home Cleaning', 'Car Cleaning', 'Garden Cleaning', 'Deep Cleaning', 'Other'];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            alert(t('contactThanksAlert'));
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue mb-4 font-chewy">
                        {t('contactHeading')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        {t('contactSubheading')}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-chewy">{t('contactInfoHeading')}</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {t('contactInfoBody')}
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xl">📧</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">{t('contactEmail')}</p>
                                        <p className="text-gray-800 font-semibold">info@cleanpro.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xl">📞</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">{t('contactPhone')}</p>
                                        <p className="text-gray-800 font-semibold">+385 99 123 4567</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xl">🕒</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">{t('contactAvailability')}</p>
                                        <p className="text-gray-800 font-semibold">{t('contactAvailabilityValue')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <h4 className="font-bold text-gray-800 mb-4 font-chewy">{t('contactWhyChoose')}</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">{t('contactResponseTime')}</span>
                                        <span className="text-blue font-semibold">{t('contactResponseTimeValue')}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">{t('contactFreeQuote')}</span>
                                        <span className="text-blue font-semibold">{t('contactFreeQuoteValue')}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">{t('contactSatisfaction')}</span>
                                        <span className="text-blue font-semibold">{t('contactSatisfactionValue')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-chewy">{t('contactFullName')}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300"
                                        placeholder={t('contactFullNamePlaceholder')}
                                    />
                                </div>

                                {/* Email & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-chewy">{t('contactEmailLabel')}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300"
                                            placeholder={t('contactEmailPlaceholder')}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-chewy">{t('contactPhoneLabel')}</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300"
                                            placeholder={t('contactPhonePlaceholder')}
                                        />
                                    </div>
                                </div>

                                {/* Service Selection */}
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2 font-chewy">{t('contactServiceInterested')}</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300"
                                    >
                                        <option value="">{t('contactSelectService')}</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-chewy">{t('contactMessage')}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder={t('contactMessagePlaceholder')}
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue text-white py-4 rounded-full font-chewy transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            {t('contactSending')}
                                        </span>
                                    ) : (
                                        t('contactSendMessage')
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;