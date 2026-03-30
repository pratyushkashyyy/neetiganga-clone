import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

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
              {[
                { icon: <Mail size={18} />, label: "EMAIL ADDRESS", value: "neetiganga@hotmail.com" },
                { icon: <Phone size={18} />, label: "PHONE NUMBER", value: "+91 82619 93747\n+91 84214 55111" },
                { icon: <MapPin size={18} />, label: "OFFICE LOCATION", value: "Sai Shradha, Next to Jai Mangal Karyalay, Manjri Budruk, Pune, 412307" }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="info-icon-box">{item.icon}</div>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <p style={{ whiteSpace: 'pre-line' }}>{item.value}</p>
                  </div>
                </motion.li>
              ))}
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
