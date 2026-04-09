import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, PhoneCall, X } from 'lucide-react';
import { Magnetic } from './MotionUtils';
import { OFFICES, getTelHref, getWhatsAppHref } from '../data/offices';

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOfficeId, setSelectedOfficeId] = useState(null);

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

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
        setSelectedOfficeId(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const selectedOffice = OFFICES.find((office) => office.id === selectedOfficeId) || null;

  return (
    <>
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
              <button
                type="button"
                className="floating-call-btn"
                aria-label="Choose Office Contact Option"
                onClick={() => setIsModalOpen(true)}
              >
                <PhoneCall size={22} color="#000" />
                <span className="mobile-call-label">Call or WhatsApp</span>
              </button>
            </Magnetic>
            <div className="floating-call-tooltip">
              Contact an Office
              <span>Select call or WhatsApp</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="office-contact-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsModalOpen(false);
              setSelectedOfficeId(null);
            }}
          >
            <motion.div
              className="office-contact-modal"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="office-contact-header">
                <h3>Choose an Office</h3>
                <button
                  type="button"
                  className="office-contact-close"
                  aria-label="Close Office Contact Modal"
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedOfficeId(null);
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <p className="office-contact-subtitle">
                Select an office to continue with a call or WhatsApp message.
              </p>

              <div className="office-contact-list">
                {OFFICES.map((office) => (
                  <button
                    key={office.id}
                    type="button"
                    className={`office-contact-item ${selectedOfficeId === office.id ? 'active' : ''}`}
                    onClick={() => setSelectedOfficeId(office.id)}
                  >
                    <span className="office-contact-city">{office.city}</span>
                    <span className="office-contact-address">{office.address}</span>
                    <span className="office-contact-phone">{office.phone}</span>
                  </button>
                ))}
              </div>

              {selectedOffice ? (
                <div className="office-contact-actions">
                  <a className="btn btn-primary office-action-btn" href={getTelHref(selectedOffice.phone)}>
                    <PhoneCall size={16} />
                    Call {selectedOffice.city}
                  </a>
                  <a
                    className="btn btn-outline office-action-btn"
                    href={getWhatsAppHref(selectedOffice.phone, selectedOffice.city)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={16} />
                    WhatsApp {selectedOffice.city}
                  </a>
                </div>
              ) : (
                <p className="office-contact-hint">Choose any office above to view the contact actions.</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingCallButton;
