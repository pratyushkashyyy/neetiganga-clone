import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Magnetic } from './MotionUtils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ gap: '2rem' }}>
        <Link to="/" className={`logo ${isHomePage ? 'logo' : ''}`}>
          <img src={isHomePage ? "/logo.png" : "/logo.png"} alt="Neeti Ganga Logo" />
        </Link>

        {/* Desktop Nav */}
        <div className="nav-right desktop-only">
          <ul className="nav-links" style={{ gap: '1rem' }}>
            <li><Magnetic strength={0.1}><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></Magnetic></li>
            <li><Magnetic strength={0.1}><Link to="/practice-areas" className={location.pathname === '/practice-areas' ? 'active' : ''}>Practice Areas</Link></Magnetic></li>
            <li><Magnetic strength={0.1}><Link to="/who-we-serve" className={location.pathname === '/who-we-serve' ? 'active' : ''}>Who We Serve</Link></Magnetic></li>
            <li><Magnetic strength={0.1}><Link to="/newsletter" className={location.pathname === '/newsletter' ? 'active' : ''}>Newsletter</Link></Magnetic></li>
            <li><Magnetic strength={0.1}><Link to="/publications" className={location.pathname === '/publications' ? 'active' : ''}>Publications</Link></Magnetic></li>
          </ul>
          <div className="nav-cta-wrapper" style={{ marginLeft: '0.1rem' }}>
             <Magnetic strength={0.25}>
               <Link to="/contact" className="btn btn-primary nav-cta">CONTACT US</Link>
             </Magnetic>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle mobile-only-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mobile-nav-overlay"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <ul className="mobile-nav-links">
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
                <li><Link to="/practice-areas" onClick={() => setIsOpen(false)}>Practice Areas</Link></li>
                <li><Link to="/who-we-serve" onClick={() => setIsOpen(false)}>Who We Serve</Link></li>
                <li><Link to="/newsletter" onClick={() => setIsOpen(false)}>Newsletter</Link></li>
                <li><Link to="/publications" onClick={() => setIsOpen(false)}>Publications</Link></li>
                <li>
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    FREE CONSULTATION
                  </Link>
                </li>
              </ul>
              
              <div className="mobile-nav-footer">
                <p>© 2025 Neeti Ganga Legal Associates</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
