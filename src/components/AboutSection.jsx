import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Hammer, Briefcase, Shield, Scale, ChevronRight } from 'lucide-react';
import { Reveal, Magnetic } from './MotionUtils';

const AboutSection = () => {
  const leftItems = [
    { icon: <ShieldCheck size={18} />, title: "Integrity", desc: "Highest standards of professional integrity and honesty in all dealings." },
    { icon: <Hammer size={18} />, title: "Commitment", desc: "Dedicated to every matter entrusted to us with effective strategic planning." },
    { icon: <Users size={18} />, title: "Client-Centric", desc: "Providing competent legal advice and effective solutions tailored to your needs." }
  ];

  const rightCards = [
    { icon: <Briefcase size={20} />, title: "Expert Counsel", desc: "Seasoned advocates delivering strategic legal guidance across all practice areas." },
    { icon: <Shield size={20} />, title: "Ethical Practice", desc: "Unwavering commitment to honesty, transparency, and the highest moral standards." },
    { icon: <Users size={20} />, title: "Client First", desc: "Every strategy is crafted around your unique needs and desired outcomes." },
    { icon: <Scale size={20} />, title: "Proven Results", desc: "A track record of favourable outcomes across civil, criminal, and corporate matters." }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-split-grid">
          {/* Left Column */}
          <div className="about-column-left">
            <motion.p 
              className="eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              WHO WE ARE
            </motion.p>
            <Reveal delay={0.2}>
              <h2 className="section-title-small">Dedicated to<br/>Professional<br/><span className="gold">Excellence</span></h2>
            </Reveal>
            <motion.p 
              className="about-main-desc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Founded on the objective of delivering dependable legal representation across 
              all areas of law, Neeti Ganga Legal Associates maintains an uncompromising 
              approach towards customer satisfaction.
            </motion.p>
            
            <div className="about-simple-list">
              {leftItems.map((item, i) => (
                <motion.div 
                  key={i} 
                  className="simple-list-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="simple-icon gold">{item.icon}</div>
                  <div className="simple-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="about-column-right">
            <motion.p 
              className="eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              WHY CHOOSE US
            </motion.p>
            <Reveal delay={0.2}>
              <h2 className="section-title-small">Benefits of Choosing <span className="gold">Neeti Ganga</span></h2>
            </Reveal>
            
            <div className="benefits-grid">
              {rightCards.map((card, i) => (
                <motion.div 
                  key={i} 
                  className="benefit-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.3)', borderColor: 'rgba(197, 160, 89, 0.3)' }}
                >
                  <div className="benefit-icon-box">{card.icon}</div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="about-bottom-cta-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p>With over two decades of experience, our team has successfully navigated complex legal challenges across diverse practice areas — from high-stakes litigation and corporate advisory to family disputes and property matters.</p>
              <Magnetic strength={0.2}>
                <a href="#contact" className="btn btn-primary cta-gold">
                  <span>SCHEDULE A CONSULTATION</span> <ChevronRight size={16} />
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
