'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check session storage for previous load
    const hasLoaded = typeof window !== 'undefined' ? sessionStorage.getItem('portfolio-loaded') : null;
    
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('portfolio-loaded', 'true');
            }
          }, 500); // Slight delay at 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1; // Random increment
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          {/* Cyberpunk grid background effect */}
          <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-10 pointer-events-none">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-accent/20" />
            ))}
          </div>

          <div className="relative z-10 w-full max-w-md px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center"
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">
                0x<span className="text-accent">PORTFOLIO</span>
              </h2>
              <div className="flex justify-between text-xs font-mono text-muted uppercase tracking-widest">
                <span>System Initialization</span>
                <span>v2.3.0</span>
              </div>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="h-2 w-full bg-surface-card border border-border-subtle rounded-full overflow-hidden relative">
              <motion.div 
                className="h-full bg-accent relative"
                style={{ width: `${progress}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
              >
                 {/* Glitch/Shine effect on bar */}
                 <div className="absolute inset-0 bg-white/30 w-full animate-pulse" />
              </motion.div>
            </div>

            {/* Status Text */}
            <div className="mt-4 flex justify-between items-end font-mono text-sm">
               <span className="text-accent min-w-[3ch] inline-block">
                 {progress}%
               </span>
               <AnimatePresence mode="wait">
                 <motion.span 
                    key={progress < 30 ? "boot" : progress < 70 ? "modules" : "ready"}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-muted-soft"
                 >
                   {progress < 30 ? "BOOTING KERNEL..." : progress < 70 ? "LOADING MODULES..." : "ESTABLISHING UPLINK..."}
                 </motion.span>
               </AnimatePresence>
            </div>

            {/* Mantra Sequence */}
            <div className="h-16 flex items-center justify-center mt-12 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                   key={progress < 40 ? "design" : progress < 70 ? "code" : "repeat"}
                   initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                   animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                   exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                   transition={{ duration: 0.3 }}
                   className="text-3xl md:text-4xl font-black tracking-[0.2em] text-foreground/80"
                >
                  {progress < 40 ? "DESIGN" : progress < 70 ? "CODE" : "REPEAT"}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-accent/50" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-accent/50" />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
