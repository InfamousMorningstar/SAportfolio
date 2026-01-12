'use client';

import React, { useEffect, useRef } from 'react';

interface ParticleNetworkProps {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  interactive?: boolean;
}

export const ParticleNetworkBackground = ({
  className = '',
  particleCount = 70,
  connectionDistance = 150,
  interactive = true,
}: ParticleNetworkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<any[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = container.clientWidth;
    let h = container.clientHeight;

    const init = () => {
      w = container.clientWidth || window.innerWidth;
      h = container.clientHeight || window.innerHeight;
      canvas.width = w;
      canvas.height = h;

      particlesRef.current = [];
      const pCount = Math.min(particleCount, (w * h) / 9000); // Responsive count

      for (let i = 0; i < pCount; i++) {
        particlesRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Update and Draw Particles
      particlesRef.current.forEach((p, i) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Draw Point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 100, 255, 0.3)'; // Primary Color
        ctx.fill();

        // Connect
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 100, 255, ${0.15 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Mouse Interaction
        if (interactive) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(150, 255, 255, ${0.2 * (1 - dist / 200)})`;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
            
            // Gentle push
            if (dist < 100) {
                p.x += dx * 0.01;
                p.y += dy * 0.01;
            }
          }
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
       const rect = canvas.getBoundingClientRect();
       mouseRef.current = {
         x: e.clientX - rect.left,
         y: e.clientY - rect.top
       };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Initial setup
    init();
    animate();
    // Safety init for weird layout shifts
    setTimeout(init, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [particleCount, connectionDistance, interactive]);

  return (
    <div ref={containerRef} className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
        {/* CSS Gradient Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black opacity-90" />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
