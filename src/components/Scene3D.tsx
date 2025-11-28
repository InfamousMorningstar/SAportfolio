'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

export default function Scene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 700;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15; // Spread
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create circular texture for round particles
    const getCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.arc(16, 16, 15, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    // Material
    const material = new THREE.PointsMaterial({
      size: 0.03,
      color: theme === 'dark' ? 0x8b5cf6 : 0x6366f1, // Purple/Indigo based on theme
      transparent: true,
      opacity: 0.8,
      map: getCircleTexture(),
      alphaTest: 0.1,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const animateParticles = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    document.addEventListener('mousemove', animateParticles);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = elapsedTime * 0.02;

      if (mouseX > 0) {
        particlesMesh.rotation.x += (mouseY * 0.00005);
        particlesMesh.rotation.y += (mouseX * 0.00005);
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', animateParticles);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      material.dispose();
    };
  }, [theme]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
