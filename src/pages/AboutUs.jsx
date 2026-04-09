import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/MotionUtils';
import PhilosophySection from '../components/PhilosophySection';
import { Award, Building, Landmark, Scale, Users } from 'lucide-react';
import { CONTACT_EMAIL, OFFICES, getMapEmbedUrl, getMapSearchUrl, getTelHref } from '../data/offices';

const AboutUs = () => {
  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      
      {/* Page Header */}
      <section className="page-header" style={{ padding: '6rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <Reveal delay={0.1}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>FIRM HISTORY & IDENTITY</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="section-title-alt">About <span className="gold">Neeti Ganga</span></h1>
          </Reveal>
        </div>
      </section>

      {/* Narrative Section */}
      <section style={{ padding: '2rem 0 6rem' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal delay={0.4}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '2rem' }}>
                Neeti Ganga Legal Associates was founded on a singular premise: to provide unyielding, results-oriented legal representation without compromising on professional integrity. What began as a focused litigation chamber has grown into a formidable full-service law firm with offices in Pune, Delhi, and Patna.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.9', marginBottom: '4rem' }}>
                We believe that the law is not meant to be a barrier, but a bridge. Our multi-disciplinary team of partners, associates, and technical experts work cohesively to decode complex legal challenges, transforming them into clear, actionable strategies for individuals, startups, and massive corporate entities alike.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy Component Re-use */}
      <PhilosophySection />

      {/* Operational Excellence */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="about-split-grid" style={{ alignItems: 'center' }}>
            <div className="about-column-left">
              <Reveal delay={0.2}>
                <span className="eyebrow">QUALITY ASSURANCE</span>
              </Reveal>
              <Reveal delay={0.3}>
                <h2 className="section-title-small">Process-Driven <br/><span className="gold">Legal Excellence</span></h2>
              </Reveal>
              <Reveal delay={0.4}>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                  Neeti Ganga Legal Associates operates with globally benchmarked practice-management systems built for consistency, accountability, and precision.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  This guarantees that our clients receive consistent, process-driven, and highly accountable legal services. From the secure handling of confidential documents to the systematic tracking of litigation timelines, our infrastructure is built to protect your interests at every level.
                </p>
              </Reveal>
            </div>
            
            <div className="about-column-right" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <Reveal delay={0.4}>
                <div className="benefit-card">
                  <div className="benefit-icon-box"><Landmark size={24} /></div>
                  <h4>Three Hubs</h4>
                  <p>Pune, Delhi & Patna</p>
                </div>
              </Reveal>
              <Reveal delay={0.5}>
                <div className="benefit-card">
                  <div className="benefit-icon-box"><Users size={24} /></div>
                  <h4>Pro Bono</h4>
                  <p>Dedicated Access</p>
                </div>
              </Reveal>
              <Reveal delay={0.6}>
                <div className="benefit-card">
                  <div className="benefit-icon-box"><Scale size={24} /></div>
                  <h4>Full Service</h4>
                  <p>Comprehensive Law</p>
                </div>
              </Reveal>
              <Reveal delay={0.7}>
                <div className="benefit-card">
                  <div className="benefit-icon-box"><Building size={24} /></div>
                  <h4>Corporate</h4>
                  <p>Enterprise Advisory</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Offices Preview (Maps on Contact Page) */}
      <section style={{ padding: '4rem 0 8rem' }}>
        <div className="container">
          <Reveal delay={0.1}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>OUR PRESENCE</span>
              <h2 className="section-title-small">Strategic <span className="gold">Locations</span></h2>
            </div>
          </Reveal>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {OFFICES.map((loc, idx) => (
              <Reveal key={loc.city} delay={0.2 + (idx * 0.1)}>
                <div className="premium-service-card" style={{ padding: '0', overflow: 'hidden', textAlign: 'left', alignItems: 'stretch' }}>
                  
                  {/* Google Map Embed */}
                  <div style={{ width: '100%', height: '200px', background: 'rgba(255,255,255,0.05)' }}>
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

                  {/* Office Details */}
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

                    <a 
                      href={getMapSearchUrl(loc.address)}
                      target="_blank" 
                      rel="noreferrer"
                      className="btn btn-outline" 
                      style={{ marginTop: '2rem', width: '100%', justifyContent: 'center', borderColor: 'rgba(197, 160, 89, 0.3)', color: 'var(--primary)' }}
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
