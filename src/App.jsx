import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero' 
import Services from './components/Services'
import About from './components/About'
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
         <div id="services">
          <Services />
        </div>
          {/*<Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Routes> */}
        <div id="contact">
          <Contact />
        </div>
        <Footer />
    </div>
  </BrowserRouter>
)
}

export default App
