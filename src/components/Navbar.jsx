import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Magnetic } from './MotionUtils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="logo">
          <img src="https://neetiganga.com/logo.png" alt="Neeti Ganga Logo" />
        </a>

        {/* Desktop Nav */}
        <div className="nav-right desktop-only">
          <ul className="nav-links">
            <li><Magnetic strength={0.1}><a href="#about">About</a></Magnetic></li>
            <li><Magnetic strength={0.1}><a href="#services">Services</a></Magnetic></li>
            <li><Magnetic strength={0.1}><a href="#team">Team</a></Magnetic></li>
            <li><Magnetic strength={0.1}><a href="#contact">Contact</a></Magnetic></li>
          </ul>
          <div className="nav-cta-wrapper">
             <Magnetic strength={0.25}>
               <a href="#contact" className="btn btn-primary nav-cta">CONTACT</a>
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
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#team" onClick={() => setIsOpen(false)}>Team</a></li>
            <li><a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
