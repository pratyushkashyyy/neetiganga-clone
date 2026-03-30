import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import { Magnetic } from './MotionUtils';

const BciDisclaimer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer in this session
    const hasAccepted = sessionStorage.getItem('bci_disclaimer_accepted');
    if (!hasAccepted) {
      // Small delay for dramatic effect after preloader
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem('bci_disclaimer_accepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="bci-modal-overlay">
          <motion.div 
            className="bci-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bci-header">
              <ShieldAlert size={28} className="gold" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', color: '#FFF' }}>
                Disclaimer <span className="gold">— Bar Council of India</span>
              </h3>
            </div>
            
            <div className="bci-content">
              <p>
                As per the rules of the Bar Council of India, Neeti Ganga Legal Associates is not permitted to solicit work or advertise in any manner. By proceeding past this notice, you acknowledge that you are seeking information about this firm on your own accord, and that no solicitation or advertisement has been made by us.
              </p>
              <p>
                The information provided on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is created by accessing this website. For advice specific to your situation, please consult a qualified legal professional.
              </p>
            </div>

            <div className="bci-actions">
              <Magnetic strength={0.1}>
                <button onClick={handleDecline} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                  Exit Website
                </button>
              </Magnetic>
              <Magnetic strength={0.1}>
                <button onClick={handleAccept} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  I Understand & Agree
                </button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BciDisclaimer;
