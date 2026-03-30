import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#07091B', paddingTop: '6rem', paddingBottom: '2rem', borderTop: '1px solid rgba(197, 160, 89, 0.15)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <motion.img 
              src="https://neetiganga.com/logo.png" 
              alt="Neeti Ganga Logo" 
              className="footer-logo"
              style={{ height: '55px', marginBottom: '2rem', filter: 'brightness(1.1)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
            />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Strategic, principled, and relentless legal representation acting across civil, criminal, and corporate domains.
            </p>
            <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em' }}>ISO 9001:2015 CERTIFIED</p>
          </div>

          {/* Column 2: Firm Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h4 style={{ color: '#FFF', fontSize: '1.2rem', fontFamily: '"Playfair Display", serif', marginBottom: '0.8rem' }}>The Firm</h4>
            <Link to="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s', fontSize: '0.95rem' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Firm Profile & History</Link>
            <Link to="/practice-areas" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s', fontSize: '0.95rem' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Practice Areas</Link>
            <Link to="/who-we-serve" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s', fontSize: '0.95rem' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Who We Serve</Link>
            <Link to="/principles" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s', fontSize: '0.95rem' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Code of Conduct</Link>
            <Link to="/media" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s', fontSize: '0.95rem' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Media & Insights</Link>
          </div>

          {/* Column 3: 24/7 Availability & Direct Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h4 style={{ color: '#FFF', fontSize: '1.2rem', fontFamily: '"Playfair Display", serif', marginBottom: '0.8rem' }}>Contact Central</h4>
            
            {/* 24x7 Highlight */}
            <div style={{ background: 'rgba(197, 160, 89, 0.05)', border: '1px solid rgba(197, 160, 89, 0.2)', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <Clock size={20} className="gold" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <span style={{ display: 'block', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>Available 24/7 All Day</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.4' }}>Immediate response unit for urgent legal matters and bail.</span>
              </div>
            </div>

            <a href="tel:+911123384321" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s', fontSize: '0.95rem' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
              <Phone size={16} /> +91 11 2338 4321
            </a>
            <a href="mailto:admin@neetiganga.com" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s', fontSize: '0.95rem' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
              <Mail size={16} /> admin@neetiganga.com
            </a>
            <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s', fontSize: '0.95rem' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
              <Globe size={16} /> View Office Network
            </Link>
          </div>

          {/* Column 4: Compliance & Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h4 style={{ color: '#FFF', fontSize: '1.2rem', fontFamily: '"Playfair Display", serif', marginBottom: '0.8rem' }}>Legal & Compliance</h4>
            <Link to="/privacy-policy" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s', fontSize: '0.95rem' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Privacy Policy (DPDPA)</Link>
            <Link to="/terms-of-use" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s', fontSize: '0.95rem' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Terms of Use</Link>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s', fontSize: '0.95rem' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Cookie Preferences</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s', fontSize: '0.95rem' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>BCI Disclosures</a>
          </div>

        </div>

        <div style={{ margin: '0', opacity: 1, borderTop: '1px solid rgba(255,255,255,0.05)' }}></div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', padding: '2rem 0 1rem' }}>
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
