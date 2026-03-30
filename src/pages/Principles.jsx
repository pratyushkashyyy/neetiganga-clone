import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/MotionUtils';
import { Scale, Lock, ShieldCheck, BadgeCheck } from 'lucide-react';

const Principles = () => {
  const principles = [
    {
      title: 'Uncompromising Ethics',
      icon: <Scale size={28} className="gold" />,
      desc: 'Our primary allegiance is to the rule of law. We do not engage in, endorse, or tolerate any practices that compromise the integrity of the judicial process. We believe that true legal victory is achieved through superior strategy and exhaustive preparation, never through ethical shortcuts.'
    },
    {
      title: 'Absolute Transparency',
      icon: <Lock size={28} className="gold" />,
      desc: 'Clients are kept fully informed of both the strengths and weaknesses of their case. We provide realistic risk assessments, transparent billing structures, and regular operational updates. There are no false promises; only calculated probabilities.'
    },
    {
      title: 'Client-First Approach',
      icon: <ShieldCheck size={28} className="gold" />,
      desc: 'Every legal strategy we design is reverse-engineered from the client’s ultimate objective. Whether it is a swift out-of-court settlement or a protracted Supreme Court battle, our actions are entirely dictated by what optimally serves the client’s commercial or personal interests.'
    },
    {
      title: 'Zero Tolerance for Corruption',
      icon: <BadgeCheck size={28} className="gold" />,
      desc: 'Neeti Ganga Legal Associates operates under a strict anti-corruption mandate. We refuse to facilitate, participate in, or represent clients seeking to secure outcomes through illicit means. Our reputation is our most valuable asset, and we protect it ferociously.'
    }
  ];

  return (
    <div className="page-container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      
      {/* Page Header */}
      <section className="page-header" style={{ padding: '6rem 0 3rem', textAlign: 'center' }}>
        <div className="container">
          <Reveal delay={0.1}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>CODE OF CONDUCT</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="section-title-alt">Firm <span className="gold">Principles</span></h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '1rem auto 0' }}>
              We govern our practice by a rigid framework of ethical standards. These are not merely aspirations; they are the non-negotiable rules by which we operate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles Grid */}
      <section style={{ padding: '2rem 0 6rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {principles.map((pr, idx) => (
              <Reveal key={pr.title} delay={0.2 + (idx * 0.1)}>
                <div className="premium-service-card" style={{ padding: '3rem 2.5rem', alignItems: 'flex-start', textAlign: 'left', height: '100%' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(197, 160, 89, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(197, 160, 89, 0.2)', marginBottom: '1.5rem' }}>
                    {pr.icon}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: '"Playfair Display", serif' }}>{pr.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
                    {pr.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Principles;
