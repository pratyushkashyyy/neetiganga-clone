import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Globe } from 'lucide-react';
import { CONTACT_EMAIL, OFFICES, getTelHref } from '../data/offices';

const Footer = () => {
  return (
    <footer style={{ background: '#07091B', paddingTop: '6rem', paddingBottom: '2rem', borderTop: '1px solid rgba(197, 160, 89, 0.15)' }}>
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-column brand-info">
            <motion.img 
              src="/logo.png" 
              alt="Neeti Ganga Logo" 
              className="footer-logo-main"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="footer-desc">
              Strategic, principled, and relentless legal representation acting across civil, criminal, and corporate domains.
            </p>
          </div>

          {/* Column 2: Firm Navigation */}
          <div className="footer-column links-column">
            <h4 className="footer-heading">The Firm</h4>
            <Link to="/about">Firm Profile & History</Link>
            <Link to="/practice-areas">Practice Areas</Link>
            <Link to="/who-we-serve">Who We Serve</Link>
            <Link to="/principles">Code of Conduct</Link>
            <Link to="/publications">Publications</Link>
          </div>

          {/* Column 3: 24/7 Availability & Direct Contact */}
          <div className="footer-column contact-column">
            <h4 className="footer-heading">Contact Central</h4>
            
            {/* 24x7 Highlight */}
            <div className="footer-availability-box">
              <Clock size={20} className="gold" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <span className="availability-label">Available 24/7, every day</span>
                <span className="availability-desc">Immediate response unit for urgent legal matters and bail.</span>
              </div>
            </div>

            <a href={getTelHref(OFFICES[0].phone)} className="footer-contact-link">
              <Phone size={16} /> {OFFICES[0].phone}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="footer-contact-link">
              <Mail size={16} /> {CONTACT_EMAIL}
            </a>
            <Link to="/contact" className="footer-contact-link">
              <Globe size={16} /> View Office Network
            </Link>
          </div>

          {/* Column 4: Compliance & Legal */}
          <div className="footer-column links-column">
            <h4 className="footer-heading">Legal & Compliance</h4>
            <Link to="/privacy-policy">Privacy Policy (DPDPA)</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <a href="#">Cookie Preferences</a>
            <a href="#">BCI Disclosures</a>
          </div>

        </div>

        <div className="footer-divider"></div>
        
        <div className="footer-bottom-bar">
          <p className="copyright" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>&copy; {new Date().getFullYear()} Neeti Ganga Legal Associates. All rights reserved.</p>
          
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '0.05em', marginRight: '0.5rem' }}>Follow Us</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#FFF', transition: '0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = '#FFF'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: '#FFF', transition: '0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = '#FFF'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#FFF', transition: '0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = '#FFF'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
