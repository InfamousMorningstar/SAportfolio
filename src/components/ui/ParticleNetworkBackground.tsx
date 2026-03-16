"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

interface ParticleNetworkBackgroundProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export const ParticleNetworkBackground: React.FC<ParticleNetworkBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  // Refs for animation state (mutable without re-renders)
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const themeRef = useRef({ 
    isDark: true, 
    color: "255, 255, 255" // RGB string for easy alpha manipulation
  });

  // Update theme reference immediately when theme changes
  useEffect(() => {
    const isDark = theme === "dark";
    themeRef.current = {
      isDark,
      color: isDark ? "255, 255, 255" : "0, 0, 0"
    };
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId: number;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const initParticles = () => {
      const count = Math.min(100, (width * height) / 15000); // Responsive count
      particlesRef.current = [];
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3, // Slow drift
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      const { color } = themeRef.current;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update and Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse Repel
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseRadius = 150;

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          const push = force * 0.5;
          p.x += Math.cos(angle) * push;
          p.y += Math.sin(angle) * push;
        }

        // Draw Dot
        ctx.fillStyle = `rgba(${color}, ${p.size * 0.3})`; // Alpha based on size
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect Local Neighbors
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          const connectionDist = 120;

          if (dist2 < connectionDist) {
            const alpha = (1 - dist2 / connectionDist) * 0.15; // Max opacity 0.15
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []); // Run setup once

  return (
    <div className={`fixed inset-0 -z-10 bg-background transition-colors duration-500 ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
