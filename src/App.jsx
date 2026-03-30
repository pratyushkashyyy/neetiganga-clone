import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesGrid from './components/ServicesGrid';
import TeamSection from './components/TeamSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  return (
    <div className="app-container">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        {/* Stats are now part of Hero section */}
        <AboutSection />
        <ServicesGrid />
        <TeamSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
