'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface ImageParticle {
  id: number;
  x: number;
  y: number;
  z: number;
  originX: number;
  originY: number;
  size: number;
  color: string;
  alpha: number;
}

interface ImageParticle3DProps {
  particle: ImageParticle;
  smoothMouseX: ReturnType<typeof useSpring>;
  smoothMouseY: ReturnType<typeof useSpring>;
  containerWidth: number;
  containerHeight: number;
}

function ImageParticle3D({ particle, smoothMouseX, smoothMouseY, containerWidth, containerHeight }: ImageParticle3DProps) {
  const particleScreenX = (particle.originX / 100) * containerWidth;
  const particleScreenY = (particle.originY / 100) * containerHeight;

  const distanceX = useTransform(
    smoothMouseX,
    (x: number) => {
      const distance = x - particleScreenX;
      const maxDistance = 200;
      return Math.max(-maxDistance, Math.min(maxDistance, distance)) * 0.25;
    }
  );

  const distanceY = useTransform(
    smoothMouseY,
    (y: number) => {
      const distance = y - particleScreenY;
      const maxDistance = 200;
      return Math.max(-maxDistance, Math.min(maxDistance, distance)) * 0.25;
    }
  );

  const scale = 0.6 + (particle.z / 100) * 0.6;
  const opacity = particle.alpha * (0.3 + (particle.z / 100) * 0.7);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${particle.originX}%`,
        top: `${particle.originY}%`,
        width: particle.size * scale,
        height: particle.size * scale,
        x: distanceX,
        y: distanceY,
        opacity,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
      animate={{
        scale: [scale, scale * 1.1, scale],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 2,
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
          boxShadow: `0 0 ${particle.size}px ${particle.color}80`,
        }}
      />
    </motion.div>
  );
}

export default function ImageParticles3D() {
  const [particles, setParticles] = useState<ImageParticle[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    setIsMounted(true);

    const loadImageAndCreateParticles = () => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = '/images/3danimation.jpg';

      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        // Set canvas size - larger for better detail
        const maxSize = 800;
        const aspectRatio = img.width / img.height;
        let canvasWidth = maxSize;
        let canvasHeight = maxSize;

        if (aspectRatio > 1) {
          canvasHeight = maxSize / aspectRatio;
        } else {
          canvasWidth = maxSize * aspectRatio;
        }

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        setDimensions({ width: canvasWidth, height: canvasHeight });

        // Draw image
        ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

        // Sample pixels
        const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
        const pixels = imageData.data;
        const generatedParticles: ImageParticle[] = [];

        // Higher sampling rate for more accurate logo representation
        const samplingRate = 4;

        for (let y = 0; y < canvasHeight; y += samplingRate) {
          for (let x = 0; x < canvasWidth; x += samplingRate) {
            const index = (y * canvasWidth + x) * 4;
            const r = pixels[index];
            const g = pixels[index + 1];
            const b = pixels[index + 2];
            const a = pixels[index + 3];

            // Only create particles for visible pixels (alpha > 100)
            // Skip very light/white pixels (background)
            if (a > 100) {
              const brightness = (r + g + b) / 3;
              const isBackground = r > 230 && g > 230 && b > 230;
              
              // Higher density for logo, skip background
              if (!isBackground) {
                generatedParticles.push({
                  id: generatedParticles.length,
                  x: (x / canvasWidth) * 100,
                  y: (y / canvasHeight) * 100,
                  z: Math.random() * 100,
                  originX: (x / canvasWidth) * 100,
                  originY: (y / canvasHeight) * 100,
                  size: Math.random() * 2.5 + 1.5,
                  color: `rgb(${r}, ${g}, ${b})`,
                  alpha: a / 255,
                });
              }
            }
          }
        }

        setParticles(generatedParticles);
      };

      img.onerror = () => {
        console.error('Failed to load image');
      };
    };

    loadImageAndCreateParticles();
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      const container = document.querySelector('.image-particles-container');
      if (container) {
        const rect = container.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMounted, mouseX, mouseY]);

  if (!isMounted || (typeof window !== 'undefined' && window.innerWidth < 768)) {
    return null;
  }

  return (
    <>
      {/* Hidden canvas for image processing */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* Particle container - right aligned */}
      <div 
        className="image-particles-container absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
        style={{
          width: dimensions.width,
          height: dimensions.height,
          perspective: '1000px',
          perspectiveOrigin: 'center center',
        }}
      >
        <div className="relative w-full h-full">
          {particles.map((particle) => (
            <ImageParticle3D
              key={particle.id}
              particle={particle}
              smoothMouseX={smoothMouseX}
              smoothMouseY={smoothMouseY}
              containerWidth={dimensions.width}
              containerHeight={dimensions.height}
            />
          ))}

          {/* Subtle glow overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            }}
          />
        </div>
      </div>
    </>
  );
}
