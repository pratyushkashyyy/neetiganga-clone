import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * REVEAL COMPONENT
 * Creates a 'mask-reveal' effect where content slides into view from a hidden container.
 */
export const Reveal = ({ children, delay = 0, duration = 0.8 }) => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: 'fit-content' }}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "0px 0px 50px 0px" }}
        transition={{ 
          delay, 
          duration, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

/**
 * MAGNETIC COMPONENT
 * Adds a physical 'pull' effect to an element based on mouse proximity.
 */
export const Magnetic = ({ children, strength = 0.3 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * strength);
    y.set(middleY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};
