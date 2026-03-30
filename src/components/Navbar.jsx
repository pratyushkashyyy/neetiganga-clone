import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Magnetic } from './MotionUtils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
        <Link to="/" className="logo">
          <img src="https://neetiganga.com/logo.png" alt="Neeti Ganga Logo" />
        </Link>

        {/* Desktop Nav */}
        <div className="nav-right desktop-only">
          <ul className="nav-links" style={{ gap: '1.5rem' }}>
            <li><Magnetic strength={0.1}><Link to="/about">About Us</Link></Magnetic></li>
            <li><Magnetic strength={0.1}><Link to="/practice-areas">Practice Areas</Link></Magnetic></li>
            <li><Magnetic strength={0.1}><Link to="/who-we-serve">Who We Serve</Link></Magnetic></li>
            <li><Magnetic strength={0.1}><Link to="/media">Media</Link></Magnetic></li>
            <li><Magnetic strength={0.1}><Link to="/principles">Principles</Link></Magnetic></li>
          </ul>
          <div className="nav-cta-wrapper" style={{ marginLeft: '1rem' }}>
             <Magnetic strength={0.25}>
               <Link to="/contact" className="btn btn-primary nav-cta">CONTACT</Link>
             </Magnetic>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle mobile-only-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        {isOpen && (
          <ul className="nav-links mobile-nav-active">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/practice-areas">Practice Areas</Link></li>
            <li><Link to="/who-we-serve">Who We Serve</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/principles">Principles</Link></li>
            <li><Link to="/contact" className="btn btn-primary">Contact</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
