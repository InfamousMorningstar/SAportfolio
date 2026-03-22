'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const fullText = "BOOTING PORTFOLIO_OS";

  useEffect(() => {
    // Check if already loaded in this session
    const hasLoaded = typeof window !== 'undefined' ? sessionStorage.getItem('portfolio-loaded') : null;
    
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Phase 1: Text Scramble Effect
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30); // Speed of typing

    // Complete loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('portfolio-loaded', 'true');
      }
    }, 1600); // Total duration ~2.0s incl. exit

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: { 
        duration: 0.6, 
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        delay: 0.5, 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 10, letterSpacing: "0.1em" },
    visible: { 
      opacity: 1, 
      y: 0,
      letterSpacing: "0.2em",
      transition: { 
        delay: 0.8, 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "120px", 
      opacity: 1,
      transition: { 
        delay: 0.8, 
        duration: 0.8, 
        ease: "easeInOut" 
      } 
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] text-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          {/* Subtle Background Effects */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Soft Ambient Glow - Purple/Cyan mix */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] mix-blend-screen animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-[128px] mix-blend-screen animate-pulse" />
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] opacity-20" />
            
            {/* Scanline Texture */}

             {/* Background Emblem - The Abstract Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none mix-blend-overlay">
               <Logo className="w-[80vw] h-[80vw] md:w-[60vh] md:h-[60vh] text-white animate-pulse-slow" variant="simple" />
            </div>
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 50%)", backgroundSize: "100% 4px" }} />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center p-4">
            
            {/* Phase 1: System Boot Text */}
            <div className="h-6 mb-8 flex items-center justify-center overflow-hidden">
               <motion.div 
                 className="font-mono text-xs md:text-sm text-cyan-500/90 tracking-widest flex items-center gap-2"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
               >
                 <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" />
                 {text}
                 <motion.span 
                   animate={{ opacity: [0, 1, 0] }} 
                   transition={{ duration: 0.8, repeat: Infinity }}
                   className="font-bold text-cyan-400"
                 >_</motion.span>
               </motion.div>
            </div>

            {/* Phase 2: Name Reveal with Shine */}
            <div className="relative mb-4 group">
              <motion.h1 
                className="font-head text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white text-center mix-blend-overlay"
                variants={nameVariants}
                initial="hidden"
                animate="visible"
              >
                SALMAN AHMAD
              </motion.h1>
              
              {/* Duplicate for "Glow" effect */}
              <motion.h1 
                className="absolute inset-0 font-head text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-white/80 via-white to-white/60 blur-[1px] select-none pointer-events-none"
                variants={nameVariants}
                initial="hidden"
                animate="visible"
              >
                SALMAN AHMAD
              </motion.h1>

              {/* Energy Sweep */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                initial={{ x: '-150%' }}
                animate={{ x: '150%' }}
                transition={{ delay: 1.0, duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            {/* Separator Line */}
             <motion.div 
              className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-6"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Phase 3: Role Reveal */}
            <motion.div 
              className="font-mono text-[10px] md:text-xs text-white/60 uppercase tracking-widest flex items-center gap-3"
              variants={subheadingVariants}
              initial="hidden"
              animate="visible"
            >
              <span>ENGINEER</span>
              <span className="text-cyan-500/60">//</span>
              <span>BUILDER</span>
              <span className="text-violet-500/60">//</span>
              <span>OPERATOR</span>
            </motion.div>

          </div>

          {/* Bottom HUD Details */}
          <div className="absolute bottom-10 inset-x-0 px-10 flex justify-between items-end pointer-events-none">
             <motion.div 
               className="font-mono text-[9px] text-white/20 flex flex-col gap-1"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 1.2 } }}
             >
                <div className="flex items-center gap-2">
                   <div className="w-1 h-1 bg-green-500 rounded-full" />
                   <span>SYSTEM: ONLINE</span>
                </div>
                <div>VER 2.5.0</div>
             </motion.div>

             <motion.div 
               className="font-mono text-[9px] text-white/20 text-right"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 1.4 } }}
             >
                <div>EST. LATENCY: 12ms</div>
                <div className="text-cyan-500/40">SECURE CONNECTION</div>
             </motion.div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
