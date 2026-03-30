import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/MotionUtils';
import { Scale, Shield, Briefcase, ChevronRight } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('civil');

  const categories = [
    { id: 'civil', label: 'Civil Litigation', icon: <Scale size={20} /> },
    { id: 'criminal', label: 'Criminal Litigation', icon: <Shield size={20} /> },
    { id: 'corporate', label: 'Corporate & Commercial', icon: <Briefcase size={20} /> }
  ];

  const servicesData = {
    civil: [
      { title: 'Banking & Finance Disputes', desc: 'Representation in DRT, NCLT, and complex multi-jurisdictional financial recovery litigation.' },
      { title: 'Real Estate & RERA', desc: 'Comprehensive property dispute resolution, RERA compliance, and real estate structuring.' },
      { title: 'Family & Matrimonial Law', desc: 'High-net-worth divorce proceedings, custody battles, and delicate family dispute resolution.' },
      { title: 'Consumer Protection', desc: 'Strategic defense and prosecution under the Consumer Protection Act across all commissions.' },
      { title: 'Testamentary & Succession', desc: 'Drafting of wills, probate of estates, and resolution of complex inheritance disputes.' },
      { title: 'Intellectual Property', desc: 'Enforcement of trademarks, copyrights, and patents, including anti-counterfeiting actions.' }
    ],
    criminal: [
      { title: 'White-Collar Crimes', desc: 'Defense against allegations of corporate fraud, money laundering, and economic offenses.' },
      { title: 'Cyber Crimes', desc: 'Navigating complex digital forensics, data breaches, and IT Act violations.' },
      { title: 'Bail & Anticipatory Bail', desc: 'Urgent and strategic interventions for securing liberty across trial courts and High Courts.' },
      { title: 'Trials & Appeals', desc: 'Rigorous criminal defense and appellate advocacy from District Courts to the Supreme Court.' }
    ],
    corporate: [
      { title: 'Contracts & Agreements', desc: 'Drafting and negotiating complex commercial contracts, NDAs, and licensing agreements.' },
      { title: 'Start-up Registration & Funding', desc: 'End-to-end legal structuring for startups, equity financing, and regulatory compliance.' },
      { title: 'Labour & Employment', desc: 'Advisory on workplace policies, employee disputes, and statutory labor compliances.' },
      { title: 'Mergers & Acquisitions', desc: 'Due diligence, transaction structuring, and execution of complex M&A deals.' },
      { title: 'Tax Advisory', desc: 'Strategic counsel on direct and indirect taxation, including GST compliance and litigation.' }
    ]
  };

  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      
      {/* Page Header */}
      <section className="page-header" style={{ padding: '6rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <Reveal delay={0.1}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>OUR EXPERTISE</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="section-title-alt">Practice <span className="gold">Areas</span></h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '1rem auto 0' }}>
              We provide comprehensive legal counsel across three primary pillars of law, combining deep technical knowledge with aggressive litigation strategies.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section style={{ padding: '2rem 0 8rem' }}>
        <div className="container">
          
          {/* Tab Headers */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
            {categories.map((cat, idx) => (
              <Reveal key={cat.id} delay={0.2 + (idx * 0.1)}>
                <button
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '1rem 2rem',
                    background: activeTab === cat.id ? 'var(--primary)' : 'rgba(14, 16, 48, 0.5)',
                    color: activeTab === cat.id ? '#000' : '#FFF',
                    border: `1px solid ${activeTab === cat.id ? 'var(--primary)' : 'var(--border)'}`,
                    borderRadius: '8px',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== cat.id) {
                      e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.5)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== cat.id) {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.background = 'rgba(14, 16, 48, 0.5)';
                    }
                  }}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              </Reveal>
            ))}
          </div>

          {/* Tab Content (Animated Grid) */}
          <div style={{ minHeight: '400px', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}
              >
                {servicesData[activeTab].map((service, index) => (
                  <div key={index} className="premium-service-card" style={{ textAlign: 'left', alignItems: 'flex-start', padding: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                      <ChevronRight size={20} className="gold" style={{ marginTop: '3px', flexShrink: 0 }} />
                      {service.title}
                    </h3>
                    <p style={{ margin: 0, paddingLeft: '2rem' }}>{service.desc}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '0 0 6rem' }}>
        <div className="container">
          <div className="about-bottom-cta-box" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <Reveal delay={0.2}>
              <h2 className="section-title-small" style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Require Specialist Legal Counsel?</h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Schedule a consultation with our partners to discuss your specific legal requirements in complete confidence.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <a href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', padding: '1rem 3rem' }}>
                Schedule a Consultation
              </a>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
