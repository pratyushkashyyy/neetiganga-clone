import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

// Global Providers & Popups
import BciDisclaimer from './components/BciDisclaimer';
import CookieConsent from './components/CookieConsent';
import FloatingCallButton from './components/FloatingCallButton';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import WhoWeServe from './pages/WhoWeServe';
import Media from './pages/Media';
import Principles from './pages/Principles';
import ContactPage from './pages/ContactPage';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Preloader />
        <BciDisclaimer />
        <CookieConsent />
        <FloatingCallButton />
        
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/practice-areas" element={<Services />} />
            <Route path="/who-we-serve" element={<WhoWeServe />} />
            <Route path="/media" element={<Media />} />
            <Route path="/principles" element={<Principles />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-of-use" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
