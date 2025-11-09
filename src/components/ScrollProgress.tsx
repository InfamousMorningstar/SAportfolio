'use client';

import { motion, useScroll, useSpring, useVelocity, useTransform } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Velocity-based color change
  const scrollVelocity = useVelocity(scrollYProgress);
  const velocityAbs = useTransform(scrollVelocity, (v) => Math.abs(v));
  
  const backgroundColor = useTransform(
    velocityAbs,
    [0, 0.5, 1],
    ['rgba(139, 92, 246, 0.8)', 'rgba(20, 184, 166, 0.9)', 'rgba(168, 85, 247, 1)']
  );

  const height = useTransform(velocityAbs, [0, 1], [3, 5]);

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[9999] origin-left"
        style={{
          scaleX,
          height,
          background: backgroundColor,
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[9998] origin-left pointer-events-none"
        style={{
          scaleX,
          height: 20,
          background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.3) 0%, transparent 100%)',
          filter: 'blur(10px)',
        }}
      />
    </>
  );
}
