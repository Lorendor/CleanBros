import React from 'react';

const AboutSection = () => {
    const stats = [
        { number: '500+', label: 'Happy Clients' },
        { number: '5+', label: 'Years Experience' },
        { number: '24/7', label: 'Customer Support' },
        { number: '100%', label: 'Satisfaction Guaranteed' }
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
                        About CleanPro
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Trusted by hundreds of families and businesses for professional cleaning services that exceed expectations
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Content */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 font-chewy">
                            Why Choose CleanPro?
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            With over 5 years of experience in the cleaning industry, CleanPro has established itself 
                            as the go-to choice for homeowners and businesses seeking exceptional cleaning services. 
                            Our commitment to quality, reliability, and customer satisfaction sets us apart.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We believe that a clean space transforms not just your environment, but your mood and 
                            productivity. That's why we pour our passion into every detail, ensuring your space 
                            sparkles from corner to corner.
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
                                <h4 className="text-lg font-bold text-gray-800 mb-2 font-chewy">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 font-chewy">
                        Ready to Experience the CleanPro Difference?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Join hundreds of satisfied customers who trust us with their cleaning needs. 
                        Book your first service today and see why we're the preferred choice.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-chewy hover:bg-blue transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Book Your Service
                        </button>
                        <button className="border-2 border-blue text-blue px-8 py-3 rounded-full font-chewy hover:bg-blue hover:text-white transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutSection;