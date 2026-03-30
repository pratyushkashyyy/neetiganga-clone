import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/MotionUtils';
import ContactForm from '../components/ContactForm';
import { Building } from 'lucide-react';

const ContactPage = () => {
  const offices = [
    {
      city: 'New Delhi',
      address: 'Chamber 14B, Delhi High Court Block, Sher Shah Road, New Delhi, 110003',
      phone: '+91 11 2338 4321',
      email: 'delhi@neetiganga.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112061.09262725458!2d77.158221!3d28.6436846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2cfb14c335%3A0xe54930bd127161b5!2sDelhi%20High%20Court!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
    },
    {
      city: 'Pune',
      address: 'Level 4, Platinum Estate, Near Pune District Court, Shivaji Nagar, Pune, 411005',
      phone: '+91 20 2553 9876',
      email: 'pune@neetiganga.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.242319409395!2d73.84758!3d18.52697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzM3LjEiTiA3M8KwNTAnNTEuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
    },
    {
      city: 'Patna',
      address: 'Suite 201, Law Chambers, Near Patna High Court, Bailey Road, Patna, 800001',
      phone: '+91 612 222 3456',
      email: 'patna@neetiganga.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.689369941913!2d85.1276!!3d25.6083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzI5LjkiTiA4NcKwMDcnMzkuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
    }
  ];

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
                      src={loc.mapUrl}
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
                        <strong>Phone:</strong> <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--primary)', textDecoration: 'none' }}>{loc.phone}</a>
                      </p>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        <strong>Email:</strong> <a href={`mailto:${loc.email}`} style={{ color: 'var(--primary)', textDecoration: 'none' }}>{loc.email}</a>
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
