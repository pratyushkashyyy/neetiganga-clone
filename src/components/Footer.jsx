import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer-minimal">
      <div className="container">
        <motion.img 
          src="https://neetiganga.com/logo.png" 
          alt="Neeti Ganga Logo" 
          className="footer-logo"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
        />
        <p className="footer-tagline">Providing ethical, dependable, and effective legal solutions.</p>
        <div style={{ margin: '2rem 0', opacity: 0.1, borderTop: '1px solid currentColor' }}></div>
        <p className="copyright">&copy; {new Date().getFullYear()} Neeti Ganga Legal Associates. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
