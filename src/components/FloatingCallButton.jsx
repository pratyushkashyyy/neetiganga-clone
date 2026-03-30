import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { Magnetic } from './MotionUtils';

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="floating-call-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Magnetic strength={0.4}>
            <a href="tel:+919876543210" className="floating-call-btn" aria-label="Call Us">
              <PhoneCall size={24} color="#000" />
            </a>
          </Magnetic>
          <div className="floating-call-tooltip">
            Call Us — Available 24/7
            <span>For general enquiries & consultations</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCallButton;
