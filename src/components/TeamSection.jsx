import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const TeamSection = () => {
  const team = [
    { name: "Advocate Ritu Singh", role: "" },
    { name: "Advocate Raj Singh", role: "" },
    { name: "Advocate Avinash Sadaphule", role: "" },
    { name: "Paralegal Shivansh Singh", role: "" },
    { name: "Paralegal Shantanu", role: "" }
  ];

  return (
    <section className="team" id="team">
      <div className="container">
        <motion.p 
          className="eyebrow centered"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px 80px 0px" }}
        >
          MEET OUR TEAM
        </motion.p>
        <motion.h2 
          className="section-title-alt centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 80px 0px" }}
          transition={{ duration: 0.8 }}
        >
          Experienced <span className="gold">Counsel</span>
        </motion.h2>
        <div className="team-grid-refined">
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className="team-card-minimal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 80px 0px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5, borderColor: 'rgba(197, 160, 89, 0.4)' }}
            >
              <div className="team-avatar-box">
                <User size={28} className="muted-icon" />
              </div>
              <h3>{member.name}</h3>
              <p className="gold" style={{ fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600 }}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
