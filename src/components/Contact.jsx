import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const services = [
        'Home Cleaning',
        'Car Cleaning',
        'Garden Cleaning',
        'Deep Cleaning',
        'Other'
    ];

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
            alert('Thank you for your message! We will get back to you soon.');
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
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Ready to transform your space? Contact us for a free quote and let us handle the cleaning!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-chewy">
                                    Contact Information
                                </h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Fill out the form and our team will get back to you within 24 hours. 
                                    Or reach out directly through any of the channels below.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xl">📧</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">Email</p>
                                        <p className="text-gray-800 font-semibold">info@cleanpro.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xl">📞</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">Phone</p>
                                        <p className="text-gray-800 font-semibold">+385 99 123 4567</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xl">🕒</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">Availability</p>
                                        <p className="text-gray-800 font-semibold">24/7 Customer Support</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <h4 className="font-bold text-gray-800 mb-4 font-chewy">Why Choose Us?</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Response Time</span>
                                        <span className="text-blue font-semibold">Within 24h</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Free Quote</span>
                                        <span className="text-blue font-semibold">Yes</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Satisfaction</span>
                                        <span className="text-blue font-semibold">Guaranteed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-chewy">
                                        Full Name 
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                {/* Email & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-chewy">
                                            Email 
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-chewy">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300"
                                            placeholder="+385 99 123 4567"
                                        />
                                    </div>
                                </div>

                                {/* Service Selection */}
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2 font-chewy">
                                        Service Interested In
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300"
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-chewy">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell us about your cleaning needs..."
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
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
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