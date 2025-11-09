'use client';

import { motion, useTransform, type MotionValue } from 'framer-motion';

interface Particle3D {
  id: number;
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  speed: number;
}

interface Hero3DParticleProps {
  particle: Particle3D;
  smoothMouseX: MotionValue<number>;
  smoothMouseY: MotionValue<number>;
}

export default function Hero3DParticle({ particle, smoothMouseX, smoothMouseY }: Hero3DParticleProps) {
  // Calculate screen positions once
  const particleScreenX = typeof window !== 'undefined' 
    ? (particle.x / 100) * window.innerWidth 
    : particle.x * 19.2;
  const particleScreenY = typeof window !== 'undefined' 
    ? (particle.y / 100) * window.innerHeight 
    : particle.y * 10.8;

  // Calculate magnetic pull based on mouse position
  const distanceX = useTransform(
    smoothMouseX,
    (x) => {
      const distance = x - particleScreenX;
      const maxDistance = 300;
      return Math.max(-maxDistance, Math.min(maxDistance, distance)) * 0.15;
    }
  );

  const distanceY = useTransform(
    smoothMouseY,
    (y) => {
      const distance = y - particleScreenY;
      const maxDistance = 300;
      return Math.max(-maxDistance, Math.min(maxDistance, distance)) * 0.15;
    }
  );

  // Z-depth creates parallax effect - stars twinkle based on depth
  const scale = 0.5 + (particle.z / 100) * 0.8;
  const opacity = 0.4 + (particle.z / 100) * 0.6;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: particle.size * scale,
        height: particle.size * scale,
        x: distanceX,
        y: distanceY,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Star - twinkling effect */}
      <motion.div
        className="w-full h-full rounded-full"
        style={{
          background: 'radial-gradient(circle, #ffffff 0%, #e0e7ff 30%, transparent 70%)',
          boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
        }}
        animate={{
          opacity: [opacity * 0.3, opacity, opacity * 0.5, opacity],
          scale: [0.8, 1, 0.9, 1],
        }}
        transition={{
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: Math.random() * 2,
        }}
      />
    </motion.div>
  );
}
