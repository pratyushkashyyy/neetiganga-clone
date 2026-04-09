import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Advocate Ritu Singh",
      description: "Handles civil and family litigation with a strong focus on strategy, documentation, and courtroom advocacy."
    },
    {
      name: "Advocate Raj Singh",
      description: "Leads criminal and trial-side matters, including bail, anticipatory bail, and appellate representation."
    },
    {
      name: "Advocate Avinash Sadaphule",
      description: "Advises on corporate and commercial disputes, contract risk, and business-side legal structuring."
    },
    {
      name: "Paralegal Shivansh Singh",
      description: "Supports filings, case tracking, and evidence coordination across high-volume litigation matters."
    },
    {
      name: "Paralegal Shantanu",
      description: "Manages legal research, document review, and drafting support for day-to-day case preparation."
    }
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
              <p className="team-member-description">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
