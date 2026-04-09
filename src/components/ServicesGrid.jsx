import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Building2, Gavel, Users2, Landmark, 
  Briefcase, Coins, Landmark as Bank, Lightbulb,
  Hammer, Handshake, FileText, ShieldAlert 
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    { icon: <Building2 />, title: "Civil Law", desc: "Property disputes, contractual matters, injunctions, and civil litigation." },
    { icon: <Hammer />, title: "Criminal Law", desc: "Defence and prosecution across bail, trials, appeals, and white-collar crimes." },
    { icon: <Users2 />, title: "Family Law", desc: "Divorce, custody, maintenance, domestic violence, and succession matters." },
    { icon: <Landmark />, title: "Real Estate & Property", desc: "Property verification, documentation, title search, and registration services." },
    { icon: <Briefcase />, title: "Corporate & Commercial", desc: "Company incorporation, compliance, mergers, contracts, and corporate governance." },
    { icon: <Coins />, title: "Taxation", desc: "Income tax, GST, tax planning, assessments, and appellate tribunal matters." },
    { icon: <Bank />, title: "Banking & Finance", desc: "Loan recovery, SARFAESI, DRT matters, banking regulations, and financial disputes." },
    { icon: <Lightbulb />, title: "Intellectual Property", desc: "Trademarks, copyrights, patents, trade secrets, and IP enforcement." },
    { icon: <Gavel />, title: "Labour & Employment", desc: "Employment contracts, workplace disputes, labour court proceedings, and compliance." },
    { icon: <Handshake />, title: "Alternate Dispute Resolution", desc: "Mediation, arbitration, negotiation, and conciliation for faster resolution." },
    { icon: <FileText />, title: "Property Registration", desc: "End-to-end support for property registration, stamp duty, and documentation." },
    { icon: <ShieldAlert />, title: "Consumer Protection", desc: "Consumer complaints, product liability, unfair trade practices, and redressal." }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.p 
          className="eyebrow centered"
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          Our Expertise
        </motion.p>
        <motion.h2 
          className="section-title-alt centered"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Comprehensive <span className="gold">Legal Solutions in India</span>
        </motion.h2>
        
        <div className="services-grid-12">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="premium-service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 100px 0px" }}
              transition={{ 
                delay: (index % 4) * 0.15, 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ 
                y: -12, 
                backgroundColor: '#162044', 
                borderColor: 'rgba(197, 160, 89, 0.5)'
              }}
            >
              <div className="service-icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
