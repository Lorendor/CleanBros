import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header'
import Hero from './components/Hero' 
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import ServicePage from './components/Service'
import Loader from './components/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div>
          {isLoading && <Loader />}
          <Header />
          <Routes>
            {/* Home route with all sections */}
            <Route path="/" element={
              <div>
                <div id="home">
                  <Hero />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="services">
                  <Services />
                </div>
                <div id="contact">
                  <Contact />
                </div>
              </div>
            } />
          
            <Route path="/services/:serviceId" element={<ServicePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App