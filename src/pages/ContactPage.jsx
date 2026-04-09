import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/MotionUtils';
import ContactForm from '../components/ContactForm';
import { Building } from 'lucide-react';
import { CONTACT_EMAIL, OFFICES, getMapEmbedUrl, getTelHref } from '../data/offices';

const ContactPage = () => {
  const offices = OFFICES;

  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      
      {/* Page Header */}
      <section className="page-header" style={{ padding: '6rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <Reveal delay={0.1}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>GET IN TOUCH</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="section-title-alt">Contact <span className="gold">Us</span></h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '1rem auto 0' }}>
              Neeti Ganga Legal Associates operates across three primary hubs in India, providing seamless legal representation and corporate advisory services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Offices Grid */}
      <section style={{ padding: '2rem 0 6rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {offices.map((loc, idx) => (
              <Reveal key={loc.city} delay={0.2 + (idx * 0.1)}>
                <div className="premium-service-card" style={{ padding: '0', overflow: 'hidden', textAlign: 'left', alignItems: 'stretch' }}>
                  
                  <div style={{ width: '100%', height: '250px', background: 'rgba(255,255,255,0.05)' }}>
                    <iframe
                      src={getMapEmbedUrl(loc.address)}
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${loc.city} Office Map`}
                    ></iframe>
                  </div>

                  <div style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <Building size={24} className="gold" />
                      <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{loc.city} Office</h3>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        <strong>Address:</strong><br/>{loc.address}
                      </p>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        <strong>Phone:</strong> <a href={getTelHref(loc.phone)} style={{ color: 'var(--primary)', textDecoration: 'none' }}>{loc.phone}</a>
                      </p>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        <strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--primary)', textDecoration: 'none' }}>{CONTACT_EMAIL}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Contact Form */}
      <ContactForm />

    </div>
  );
};

export default ContactPage;
