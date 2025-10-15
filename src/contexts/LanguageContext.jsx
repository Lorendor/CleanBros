import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    allServices: "All Services",
    contact: "Contact",
    bookNow: "Book Now",
    contactUs: "Contact Us",
    learnMore: "Learn More",
    
    // Hero Section
    heroTitle: "Trusted and Reliable Deep Cleaning Services",
    heroDescription: "We provide top-notch cleaning services to shine your home, car, garden etc. Our professional team is dedicated to delivering exceptional results with every visit.",
    
    // Services (labels)
    homeCleaning: "Home Cleaning",
    carCleaning: "Car Cleaning",
    
    // Service Page
    serviceDetails: "Service Details",
    whatsIncluded: "What's Included",
    pricing: "Pricing",
    bookThisService: "Book This Service",
    backToAllServices: "Back to All Services",
    otherServices: "Other Services You Might Like",
    serviceNotFound: "Service Not Found",
    returnToHome: "Return to Home",

    // About Section
    aboutHeading: "About CleanPro",
    aboutSubheading: "Trusted by hundreds of families and businesses for professional cleaning services that exceed expectations",
    aboutWhyChoose: "Why Choose CleanPro?",
    aboutP1: "With over 5 years of experience in the cleaning industry, CleanPro has established itself as the go-to choice for homeowners and businesses seeking exceptional cleaning services. Our commitment to quality, reliability, and customer satisfaction sets us apart.",
    aboutP2: "We believe that a clean space transforms not just your environment, but your mood and productivity. That's why we pour our passion into every detail, ensuring your space sparkles from corner to corner.",
    statHappyClients: "Happy Clients",
    statYearsExperience: "Years Experience",
    statCustomerSupport: "Customer Support",
    statSatisfactionGuaranteed: "Satisfaction Guaranteed",
    featureEcoTitle: "Eco-Friendly",
    featureEcoDesc: "We use only environmentally friendly cleaning products that are safe for your family and pets.",
    featureFastTitle: "Fast & Efficient",
    featureFastDesc: "Our trained professionals work quickly without compromising on quality and attention to detail.",
    featureInsuredTitle: "Insured & Certified",
    featureInsuredDesc: "Fully licensed, bonded, and insured for your peace of mind and protection.",
    featureCustomTitle: "Custom Solutions",
    featureCustomDesc: "Tailored cleaning plans to meet your specific needs and schedule requirements.",
    aboutCtaTitle: "Ready to Experience the CleanPro Difference?",
    aboutCtaBody: "Join hundreds of satisfied customers who trust us with their cleaning needs. Book your first service today and see why we're the preferred choice.",
    aboutCtaPrimary: "Book Your Service",

    // Services Section
    servicesHeading: "Our Premium Services",
    servicesSubheading: "Experience the difference with our professional cleaning services tailored to your needs",
    servicesLearnMore: "Learn More",

    // Contact Section
    contactHeading: "Get In Touch",
    contactSubheading: "Ready to transform your space? Contact us for a free quote and let us handle the cleaning!",
    contactInfoHeading: "Contact Information",
    contactInfoBody: "Fill out the form and our team will get back to you within 24 hours. Or reach out directly through any of the channels below.",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactAvailability: "Availability",
    contactAvailabilityValue: "24/7 Customer Support",
    contactWhyChoose: "Why Choose Us?",
    contactResponseTime: "Response Time",
    contactResponseTimeValue: "Within 24h",
    contactFreeQuote: "Free Quote",
    contactFreeQuoteValue: "Yes",
    contactSatisfaction: "Satisfaction",
    contactSatisfactionValue: "Guaranteed",
    contactFullName: "Full Name",
    contactFullNamePlaceholder: "Enter your full name",
    contactEmailLabel: "Email",
    contactEmailPlaceholder: "your@email.com",
    contactPhoneLabel: "Phone",
    contactPhonePlaceholder: "+385 99 123 4567",
    contactServiceInterested: "Service Interested In",
    contactSelectService: "Select a service",
    contactMessage: "Message",
    contactMessagePlaceholder: "Tell us about your cleaning needs...",
    contactSending: "Sending...",
    contactSendMessage: "Send Message",
    contactThanksAlert: "Thank you for your message! We will get back to you soon.",
    contactServicesList: ["Home Cleaning", "Car Cleaning", "Garden Cleaning", "Deep Cleaning", "Other"]
  },
  hr: {
    // Navigation
    home: "Početna",
    about: "O nama",
    services: "Usluge",
    allServices: "Sve usluge",
    contact: "Kontakt",
    bookNow: "Rezerviraj",
    contactUs: "Kontaktirajte nas",
    learnMore: "Saznajte više",
    
    // Hero Section
    heroTitle: "Pouzdane i profesionalne usluge dubinskog čišćenja",
    heroDescription: "Pružamo vrhunske usluge čišćenja za vaš dom, automobil, vrt itd. Naš profesionalni tim posvećen je pružanju izvrsnih rezultata sa svakim posjetom.",
    
    // Services (labels)
    homeCleaning: "Čišćenje doma",
    carCleaning: "Čišćenje automobila",
    
    // Service Page
    serviceDetails: "Detalji usluge",
    whatsIncluded: "Što je uključeno",
    pricing: "Cijene",
    bookThisService: "Rezerviraj ovu uslugu",
    backToAllServices: "Natrag na sve usluge",
    otherServices: "Ostale usluge koje bi vas mogle zanimati",
    serviceNotFound: "Usluga nije pronađena",
    returnToHome: "Povratak na početnu",

    // About Section
    aboutHeading: "O CleanPro",
    aboutSubheading: "Stotine obitelji i tvrtki povjerava nam se za profesionalne usluge čišćenja koje nadmašuju očekivanja",
    aboutWhyChoose: "Zašto odabrati CleanPro?",
    aboutP1: "S više od 5 godina iskustva u industriji čišćenja, CleanPro se nametnuo kao prvi izbor za vlasnike domova i tvrtke koje traže izvrsne usluge čišćenja. Naša predanost kvaliteti, pouzdanosti i zadovoljstvu klijenata izdvaja nas od drugih.",
    aboutP2: "Vjerujemo da čist prostor mijenja ne samo vaš okoliš, već i raspoloženje i produktivnost. Zato ulažemo strast u svaki detalj kako bi vaš prostor zablistaо iz kuta u kut.",
    statHappyClients: "Zadovoljnih klijenata",
    statYearsExperience: "Godina iskustva",
    statCustomerSupport: "Korisnička podrška",
    statSatisfactionGuaranteed: "Zajamčeno zadovoljstvo",
    featureEcoTitle: "Ekološki prihvatljivo",
    featureEcoDesc: "Koristimo samo ekološki prihvatljive proizvode za čišćenje koji su sigurni za vašu obitelj i kućne ljubimce.",
    featureFastTitle: "Brzo i učinkovito",
    featureFastDesc: "Naši obučeni profesionalci rade brzo bez kompromisa u pogledu kvalitete i pažnje prema detaljima.",
    featureInsuredTitle: "Osigurano i certificirano",
    featureInsuredDesc: "Potpuno licencirani, osigurani i provjereni za vaš mir i zaštitu.",
    featureCustomTitle: "Prilagođena rješenja",
    featureCustomDesc: "Planovi čišćenja prilagođeni vašim specifičnim potrebama i zahtjevima rasporeda.",
    aboutCtaTitle: "Spremni ste iskusiti CleanPro razliku?",
    aboutCtaBody: "Pridružite se stotinama zadovoljnih klijenata koji nam vjeruju. Rezervirajte svoju prvu uslugu i saznajte zašto smo prvi izbor.",
    aboutCtaPrimary: "Rezervirajte uslugu",

    // Services Section
    servicesHeading: "Naše premium usluge",
    servicesSubheading: "Iskusite razliku uz naše profesionalne usluge čišćenja prilagođene vašim potrebama",
    servicesLearnMore: "Saznajte više",

    // Contact Section
    contactHeading: "Kontaktirajte nas",
    contactSubheading: "Spremni za transformaciju prostora? Kontaktirajte nas za besplatnu ponudu i prepustite čišćenje nama!",
    contactInfoHeading: "Kontakt informacije",
    contactInfoBody: "Ispunite obrazac i naš tim će vam se javiti u roku od 24 sata. Ili nas kontaktirajte izravno putem nekog od kanala u nastavku.",
    contactEmail: "E-pošta",
    contactPhone: "Telefon",
    contactAvailability: "Dostupnost",
    contactAvailabilityValue: "Podrška 24/7",
    contactWhyChoose: "Zašto mi?",
    contactResponseTime: "Vrijeme odgovora",
    contactResponseTimeValue: "Unutar 24h",
    contactFreeQuote: "Besplatna ponuda",
    contactFreeQuoteValue: "Da",
    contactSatisfaction: "Zadovoljstvo",
    contactSatisfactionValue: "Zajamčeno",
    contactFullName: "Ime i prezime",
    contactFullNamePlaceholder: "Unesite vaše ime i prezime",
    contactEmailLabel: "E-pošta",
    contactEmailPlaceholder: "vas@email.com",
    contactPhoneLabel: "Telefon",
    contactPhonePlaceholder: "+385 99 123 4567",
    contactServiceInterested: "Usluga koja vas zanima",
    contactSelectService: "Odaberite uslugu",
    contactMessage: "Poruka",
    contactMessagePlaceholder: "Recite nam vaše potrebe za čišćenjem...",
    contactSending: "Slanje...",
    contactSendMessage: "Pošaljite poruku",
    contactThanksAlert: "Hvala na poruci! Javit ćemo vam se uskoro.",
    contactServicesList: ["Čišćenje doma", "Čišćenje automobila", "Čišćenje vrta", "Dubinsko čišćenje", "Ostalo"]
  }
};
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('language');
      return saved === 'en' || saved === 'hr' ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode);
    try {
      localStorage.setItem('language', languageCode);
    } catch {}
  };

  const t = (key) => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
