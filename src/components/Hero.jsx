import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Reveal, Magnetic } from './MotionUtils';

const Hero = () => {
  const stats = [
    { value: "10+", label: "PRACTICE AREAS" },
    { value: "20+", label: "YEARS EXPERIENCE" },
    { value: "1000+", label: "CASES RESOLVED" }
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const ringsY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scaleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  return (
    <section className="hero" id="home" ref={targetRef}>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <Reveal delay={0.2}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                <span className="hero-eyebrow" style={{ marginBottom: 0 }}>NEETI GANGA LEGAL ASSOCIATES</span>
                <div className="iso-badge">
                  <span className="iso-icon">ISO</span>
                  <span className="iso-text">9001:2015<br/>Certified</span>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.4} duration={1.2}>
              <h1 className="hero-title">
                Trusted Legal Counsel.<br/>
                <span className="gold">Strategic. Principled. Relentless.</span>
              </h1>
            </Reveal>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <strong>Neeti Ganga Legal Associates</strong> — Practising across Civil, Criminal, Corporate, 
              and Specialised Law from offices in Pune, Delhi, and Patna.
            </motion.p>
            
            <div className="hero-actions">
              <Magnetic strength={0.2}>
                <a href="#services" className="btn btn-primary">
                  Our Expertise <ChevronRight size={16} style={{ marginLeft: '8px' }} />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="#about" className="btn btn-outline">
                  See More About Us <ChevronRight size={16} style={{ marginLeft: '8px' }} />
                </a>
              </Magnetic>
            </div>
            
            <motion.div 
              className="hero-stats-bottom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="hero-stat-item">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div className="hero-visual" style={{ y: ringsY, opacity: scaleOpacity }}>
            <div className="rings-container">
              {[1, 2, 3].map((r) => (
                <motion.div 
                  key={r}
                  className={`ring ring-${r}`}
                  animate={{ 
                    opacity: [0.1, 0.25, 0.1],
                    scale: [1, 1.05, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ 
                    duration: 10 + r * 2, 
                    repeat: Infinity, 
                    delay: r * 0.5,
                    ease: "linear"
                  }}
                />
              ))}
              <motion.div
                className="scale-animation-box"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src="https://neetiganga.com/logo.png" 
                  alt="Neeti Ganga Logo" 
                  className="hero-logo-scale"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
