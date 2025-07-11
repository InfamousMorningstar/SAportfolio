'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingShape = ({ 
  className, 
  delay = 0 
}: { 
  className: string; 
  delay?: number; 
}) => (
  <motion.div
    className={`floating-shape ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: 'easeInOut'
    }}
  />
);

const DecryptText = ({ text, isVisible }: { text: string; isVisible: boolean }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    setIsDecrypting(true);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(current => 
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsDecrypting(false);
      }

      iteration += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, [text, isVisible]);

  return (
    <span
      className={`font-mono transition-colors duration-[1800ms] ${isDecrypting ? 'text-accent' : 'text-foreground'}`}
    >
      {displayText}
    </span>
  );
};

const BlinkingCursor = () => (
  <motion.span
    className="text-accent font-mono text-5xl md:text-7xl font-bold"
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 1, repeat: Infinity }}
  >
    &gt;
  </motion.span>
);

export default function Hero() {
  const [showDecrypt, setShowDecrypt] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowDecrypt(true), 1000);
    const timer2 = setTimeout(() => setShowSubtext(true), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Floating Geometric Shapes */}
      <FloatingShape 
        className="w-20 h-20 border-2 border-accent rounded-lg top-20 left-20" 
        delay={0} 
      />
      <FloatingShape 
        className="w-16 h-16 bg-accent2 rounded-full top-32 right-32" 
        delay={2} 
      />
      <FloatingShape 
        className="w-24 h-24 border-2 border-secondary transform rotate-45 bottom-32 left-32" 
        delay={4} 
      />
      <FloatingShape 
        className="w-12 h-12 bg-accent rounded-lg bottom-20 right-20" 
        delay={6} 
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4 text-5xl md:text-7xl">
            <BlinkingCursor />
            <motion.div
              className="ml-4 text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <DecryptText text="Hello World" isVisible={showDecrypt} />
            </motion.div>
          </div>
        </div>

        {/* Subtitle */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showSubtext ? 1 : 0, y: showSubtext ? 0 : 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-xl md:text-2xl text-muted mb-4 font-mono">
            I&apos;m{' '}
            <span className="gradient-text font-bold">
              Salman Ahmad
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            DevOps Engineer & Full-Stack Developer passionate about{' '}
            <span className="text-accent">automation</span>,{' '}
            <span className="text-accent2">infrastructure</span>, and{' '}
            <span className="text-secondary">innovative solutions</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showSubtext ? 1 : 0, y: showSubtext ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="btn-primary px-8 py-3 text-lg font-semibold rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
          
          <motion.a
            href="mailto:s.ahmad0147@gmail.com"
            className="btn-primary px-8 py-3 text-lg font-semibold rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <motion.div
            className="cursor-pointer text-accent text-3xl"
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.2 }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
