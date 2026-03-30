import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const statsData = [
    { number: "10+", label: "Practice Areas" },
    { number: "20+", label: "Years Experience" },
    { number: "1000+", label: "Cases Resolved" }
  ];

  return (
    <section className="stats">
      <div className="container stats-grid">
        {statsData.map((stat, index) => (
          <motion.div 
            key={index} 
            className={`stat-item ${index > 0 ? 'border-left' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
