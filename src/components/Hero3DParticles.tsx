'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import Hero3DParticle from './Hero3DParticle';

interface Particle3D {
  id: number;
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  speed: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  angle: number;
  delay: number;
}

export default function Hero3DParticles() {
  const [particles, setParticles] = useState<Particle3D[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    setIsMounted(true);
    
    // Generate stars with realistic variety
    const starColors = [
      '#ffffff', '#ffffff', '#ffffff', '#ffffff', // Most stars are white
      '#e0e7ff', // Blue-white (hot stars)
      '#fef3c7', // Yellow-white (sun-like)
      '#fff7ed', // Warm white
    ];
    
    const generated = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 100,
      size: Math.random() < 0.95 ? Math.random() * 1.5 + 0.5 : Math.random() * 2.5 + 2, // Mostly small, few large
      color: starColors[Math.floor(Math.random() * starColors.length)],
      speed: Math.random() * 30 + 20,
    }));
    setParticles(generated);

    // Generate shooting stars at random intervals
    const createShootingStar = () => {
      const newStar: ShootingStar = {
        id: Date.now(),
        startX: Math.random() * 80 + 10,
        startY: Math.random() * 40,
        angle: Math.random() * 30 - 15, // -15 to 15 degrees
        delay: 0,
      };
      
      setShootingStars(prev => [...prev, newStar]);
      
      // Remove after animation completes
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== newStar.id));
      }, 2000);
    };

    // Create shooting stars at random intervals (5-15 seconds)
    const scheduleNextStar = () => {
      const delay = Math.random() * 10000 + 5000; // 5-15 seconds
      setTimeout(() => {
        createShootingStar();
        scheduleNextStar();
      }, delay);
    };

    scheduleNextStar();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Don't render on server or mobile
  if (!isMounted || window.innerWidth < 768) {
    return null;
  }

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ 
        perspective: '1000px',
        perspectiveOrigin: 'center center',
      }}
    >
      {/* Distant galaxy - subtle spiral */}
      <motion.div
        className="absolute top-1/4 right-1/4 opacity-20"
        style={{
          width: '400px',
          height: '400px',
          background: `
            radial-gradient(ellipse at center, 
              rgba(147, 197, 253, 0.15) 0%, 
              rgba(99, 102, 241, 0.08) 30%, 
              transparent 70%)
          `,
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, -2000],
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          x: { duration: 300, repeat: Infinity, ease: 'linear' },
          rotate: { duration: 200, repeat: Infinity, ease: 'linear' },
          scale: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Space dust clouds - nebula effect */}
      <motion.div
        className="absolute top-0 left-0 w-[200%] h-full opacity-10"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.18) 0%, transparent 50%)
          `,
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -1000],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          x: { duration: 400, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Stars - infinite loop with wrapping */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [`${particle.x}%`, `${particle.x - 200}%`],
          }}
          transition={{
            duration: 250 + particle.z * 2, // Parallax: farther stars move slower
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          <Hero3DParticle
            particle={particle}
            smoothMouseX={smoothMouseX}
            smoothMouseY={smoothMouseY}
          />
        </motion.div>
      ))}
      
      {/* Duplicate stars for seamless loop */}
      {particles.map((particle) => (
        <motion.div
          key={`dup-${particle.id}`}
          className="absolute"
          style={{
            left: `${particle.x + 100}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [`${particle.x + 100}%`, `${particle.x - 100}%`],
          }}
          transition={{
            duration: 250 + particle.z * 2,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          <Hero3DParticle
            particle={particle}
            smoothMouseX={smoothMouseX}
            smoothMouseY={smoothMouseY}
          />
        </motion.div>
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            width: '120px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(147, 197, 253, 0.9) 50%, transparent 100%)',
            boxShadow: '0 0 4px rgba(147, 197, 253, 0.6)',
            rotate: `${star.angle}deg`,
            transformOrigin: 'left center',
          }}
          initial={{ 
            opacity: 0, 
            x: 0, 
            y: 0,
            scaleX: 0,
          }}
          animate={{ 
            opacity: [0, 0.8, 0.8, 0],
            x: [0, 250],
            y: [0, 125],
            scaleX: [0, 1, 1, 0.3],
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}

      {/* Subtle milky way band - drifting */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          background: `
            linear-gradient(135deg, 
              transparent 0%, 
              rgba(147, 197, 253, 0.3) 30%, 
              rgba(191, 219, 254, 0.4) 50%, 
              rgba(147, 197, 253, 0.3) 70%, 
              transparent 100%)
          `,
          transform: 'rotate(-25deg) scale(1.5)',
          filter: 'blur(80px)',
          width: '200%',
        }}
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 350,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Deep space gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(3, 7, 18, 0.3) 100%)',
        }}
      />
    </div>
  );
}
