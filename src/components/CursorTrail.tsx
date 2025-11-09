'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CursorTrail() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; timestamp: number }>>([]);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const smoothX = useSpring(cursorX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(cursorY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    let lastEmit = Date.now();
    
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Emit particle every 50ms when moving
      const now = Date.now();
      if (now - lastEmit > 50) {
        lastEmit = now;
        setParticles(prev => [
          ...prev.slice(-15), // Keep last 15 particles
          { id: Math.random(), x: e.clientX, y: e.clientY, timestamp: now }
        ]);
      }
    };

    // Clean up old particles
    const cleanup = setInterval(() => {
      const now = Date.now();
      setParticles(prev => prev.filter(p => now - p.timestamp < 1000));
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanup);
    };
  }, [cursorX, cursorY]);

  // Hide on mobile/tablet
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997]" style={{ mixBlendMode: 'screen' }}>
      {/* Main cursor glow */}
      <motion.div
        className="absolute w-8 h-8 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
      
      {/* Particle trail */}
      {particles.map((particle, index) => {
        const age = Date.now() - particle.timestamp;
        const progress = age / 1000;
        
        return (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full"
            initial={{ 
              x: particle.x,
              y: particle.y,
              scale: 1,
              opacity: 0.6
            }}
            animate={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1]
            }}
            style={{
              background: index % 2 === 0 
                ? 'rgba(139, 92, 246, 0.8)' 
                : 'rgba(20, 184, 166, 0.8)',
              boxShadow: `0 0 8px ${index % 2 === 0 ? 'rgba(139, 92, 246, 0.6)' : 'rgba(20, 184, 166, 0.6)'}`,
            }}
          />
        );
      })}
    </div>
  );
}
