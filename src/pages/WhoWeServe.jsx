import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/MotionUtils';
import { User, Building2, Lightbulb } from 'lucide-react';

const WhoWeServe = () => {
  const demographics = [
    {
      title: 'Individuals & Families',
      icon: <User size={32} className="gold" />,
      desc: 'We recognize that for individuals, litigation is often deeply personal and stressful. We provide discreet, strategic counsel for high-net-worth family disputes, complex property litigation, and aggressive criminal defense. Our priority is insulating our clients from the procedural weight of the court system.',
      points: ['High-Net-Worth Divorce & Alimony', 'Testamentary & Estate Planning', 'Private Criminal Defense']
    },
    {
      title: 'Corporations & Enterprises',
      icon: <Building2 size={32} className="gold" />,
      desc: 'From established conglomerates to modern enterprise operations, we act as both external counsel and litigation defense. We handle everything from high-stakes arbitration and NCLT recovery to intricate labor law compliance and multi-jurisdictional contract disputes.',
      points: ['Insolvency & Bankruptcy (NCLT)', 'Commercial Arbitration', 'Workplace & Labor Law Defense']
    },
    {
      title: 'Startups & Innovators',
      icon: <Lightbulb size={32} className="gold" />,
      desc: 'The modern economy moves faster than the law. We help founders, innovators, and investors navigate the regulatory grey areas. From structuring initial equity deals to defending flagship intellectual property, we provide the legal scaffolding for high-growth ventures.',
      points: ['Founder Agreements & Equity', 'IP Registration & Defense', 'Regulatory Compliance Structuring']
    }
  ];

  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      
      {/* Page Header */}
      <section className="page-header" style={{ padding: '6rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <Reveal delay={0.1}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>OUR CLIENTELE</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="section-title-alt">Who We <span className="gold">Serve</span></h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '750px', margin: '1rem auto 0', lineHeight: '1.8' }}>
              Legal strategy is rarely one-size-fits-all. Our litigation and advisory approach is uniquely tailored to the specific risk-tolerance, operational scale, and ultimate objectives of the entity we represent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Demographics Grid */}
      <section style={{ padding: '2rem 0 8rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {demographics.map((demo, idx) => (
              <Reveal key={demo.title} delay={0.2 + (idx * 0.1)}>
                <div 
                  className={`demographic-card ${idx % 2 === 0 ? '' : 'reverse'}`}
                  style={{
                    background: 'rgba(14, 16, 48, 0.4)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '3rem',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ flex: '0 0 100px', height: '100px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
                    {demo.icon}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: '"Playfair Display", serif' }}>{demo.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                      {demo.desc}
                    </p>
                    
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                      {demo.points.map((pt, i) => (
                        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#FFF', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '4px' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></span>
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded CTA */}
      <section style={{ padding: '0 0 6rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal delay={0.2}>
            <a href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', padding: '1rem 3rem' }}>
              Engage Our Services
            </a>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default WhoWeServe;
