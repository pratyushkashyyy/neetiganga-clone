import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Reveal main site after 2.8s
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        setTimeout(onComplete, 800); // 800ms for exit animation to finish
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Generate 20 random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 2,
    opacity: Math.random() * 0.5 + 0.1
  }));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Subtle Particles Canvas */}
          <div className="preloader-particles">
            {particles.map(p => (
              <motion.div
                key={p.id}
                className="particle"
                style={{
                  width: p.size,
                  height: p.size,
                  left: p.left,
                  top: p.top,
                  opacity: p.opacity
                }}
                animate={{
                  y: [0, -100, -200],
                  x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50]
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          <motion.div 
            className="preloader-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/logo.png" alt="Neeti Ganga Logo" className="preloader-logo" />
            <motion.p 
              className="preloader-tagline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            >
              PROFESSIONAL <span className="dot">·</span> ETHICAL <span className="dot">·</span> EFFECTIVE
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
