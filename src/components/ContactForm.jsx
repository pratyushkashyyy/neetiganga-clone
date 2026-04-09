import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_EMAIL, OFFICES, getTelHref } from '../data/offices';

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid-refined">
          <motion.div 
            className="contact-info-refined"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">CONTACT US</p>
            <h2 className="section-title-small">Let's Discuss Your <span className="gold">Legal Needs</span></h2>
            <ul className="info-list-refined">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
              >
                <div className="info-icon-box"><Mail size={18} /></div>
                <div>
                  <span className="info-label">EMAIL ADDRESS</span>
                  <p>{CONTACT_EMAIL}</p>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <div className="info-icon-box"><MapPin size={18} /></div>
                <div>
                  <span className="info-label">OFFICE CONTACTS</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {OFFICES.map((office) => (
                      <div key={office.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.9rem' }}>
                        <p style={{ margin: 0, color: '#FFF', fontWeight: 600 }}>{office.city}</p>
                        <p style={{ margin: '0.25rem 0 0', color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '0.95rem' }}>{office.address}</p>
                        <a
                          href={getTelHref(office.phone)}
                          style={{
                            marginTop: '0.35rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            textDecoration: 'none',
                            color: 'var(--primary)',
                            fontWeight: 600
                          }}
                        >
                          <Phone size={14} />
                          {office.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div 
            className="contact-form-refined"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group-refined">
                <label>FULL NAME</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="form-group-refined">
                <label>EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  required 
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
              <div className="form-group-refined">
                <label>MESSAGE</label>
                <textarea 
                  rows="4" 
                  required 
                  placeholder="How can we help you?"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
                {status === 'sending' ? 'SENDING...' : status === 'success' ? 'SENT!' : 'SEND DISCOVERY REQUEST'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
