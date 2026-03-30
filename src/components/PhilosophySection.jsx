import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './MotionUtils';

const PhilosophySection = () => {
  return (
    <section className="philosophy-premium" style={{ background: 'var(--background)', padding: '6rem 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal delay={0.1}>
            <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>OUR PHILOSOPHY</span>
          </Reveal>
          
          <Reveal delay={0.2} duration={1.2}>
            <h2 className="section-title-small" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.2rem)', marginBottom: '3rem' }}>
              The Confluence of <br/><span className="gold">Strategy & Justice</span>
            </h2>
          </Reveal>
        </div>

        <div className="philosophy-content-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '800px', margin: '0 auto' }}>
          
          <Reveal delay={0.4}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.9', textAlign: 'center' }}>
              At Neeti Ganga Legal Associates, our name is our mission. Just as the Ganga is a timeless, purifying force that carves its own path, we believe the law should be a relentless flow toward the truth. But a river without banks is a flood; it needs <strong style={{color: 'var(--text)'}}>Neeti</strong> — the ancient art of strategic wisdom — to guide its power.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <blockquote style={{ 
              fontFamily: '"Playfair Display", serif', 
              fontSize: '2rem', 
              color: 'var(--primary)', 
              fontStyle: 'italic',
              textAlign: 'center',
              padding: '2rem 0',
              borderTop: '1px solid rgba(197, 160, 89, 0.1)',
              borderBottom: '1px solid rgba(197, 160, 89, 0.1)'
            }}>
              "Justice is not a destination, but a constant flow."
            </blockquote>
          </Reveal>

          <Reveal delay={0.6}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.9', textAlign: 'center' }}>
              We operate on the principle that to remove the debris of legal complexity so that the path to a solution becomes clear.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
