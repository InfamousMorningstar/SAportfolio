'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function Footer() {
  const [showLegalNotice, setShowLegalNotice] = useState(false);
  const legalNoticeRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to footer when legal notice opens
  useEffect(() => {
    if (showLegalNotice) {
      // Multiple scroll attempts with different timings to ensure it works
      const scrollToContent = () => {
        // First try scrolling to the legal notice panel itself
        if (legalNoticeRef.current) {
          legalNoticeRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          });
        } else {
          // Fallback: scroll to footer
          const footerElement = document.getElementById('footer');
          if (footerElement) {
            footerElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'end',
              inline: 'nearest'
            });
          }
        }
      };

      // Immediate scroll
      setTimeout(scrollToContent, 100);
      // Backup scroll after animation starts
      setTimeout(scrollToContent, 400);
      // Final scroll after animation completes
      setTimeout(scrollToContent, 800);
    }
  }, [showLegalNotice]);

  return (
    <motion.footer
      id="footer"
      className="relative overflow-hidden bg-background"
      layout
      transition={{
        layout: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
      }}
    >
      {/* Animated Background Grid - Same as Hero */}
      <div className="absolute inset-0 grid-bg opacity-20 z-[-2]" />
      
      {/* Floating Shapes Container - Mimicking Hero with Background Blur */}
      <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden pointer-events-none z-[1] px-6">
        
        {/* Animated Floating Shapes - Exact Hero Layout with Full Visibility */}
        <FloatingShape 
          className="w-20 h-20 border-2 border-accent rounded-lg hidden lg:block"
          delay={0}
        />
        
        <FloatingShape 
          className="w-16 h-16 bg-accent2 rounded-full hidden lg:block"
          delay={2}
        />
        
        <FloatingShape 
          className="w-24 h-24 border-2 border-secondary transform rotate-45 hidden xl:block"
          delay={4}
        />
        
        <FloatingShape 
          className="w-12 h-12 bg-accent rounded-lg hidden lg:block"
          delay={6}
        />
      </div>      {/* Brand Monogram */}
      <div className="absolute left-4 lg:left-6 bottom-4 lg:bottom-6 text-2xl lg:text-3xl xl:text-4xl font-black opacity-10 select-none pointer-events-none hidden sm:block gradient-text z-[-1] animate-pulse">
        SA
      </div>

      {/* Footer Content Container - Enhanced with proper constraints */}
      <div className="relative z-[20] max-w-7xl mx-auto px-6 py-12 bg-background/80 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-neutral-300 text-sm">
          
          {/* LEFT COLUMN - Site Info */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
              SITE INFO
            </h3>
            
            <div className="space-y-3">
              <p className="font-mono tracking-wide text-neutral-200">
                — Salman Ahmad · ahmxd.net · © 2025 —
              </p>
              <p className="text-xs">
                <span className="text-red-400 font-medium">All Rights Reserved.</span> <span className="italic">Unauthorized use is prohibited.</span>
              </p>
              
              <div className="space-y-1">
                <p className="italic text-teal-400 text-sm font-medium">
                  Aut viam inveniam aut faciam
                </p>
                <p className="text-xs italic text-neutral-500">
                  I shall either find a way or make one.
                </p>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN - Built With Excellence */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
              BUILT WITH EXCELLENCE
            </h3>
            
            <div className="space-y-4">            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-neutral-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium hover:ring-2 hover:ring-purple-500/50 hover:bg-neutral-700/80 transition-all duration-300 border border-neutral-700/50 hover:border-purple-500/30 hover:text-purple-300"
              >
                ⚡ Next.js 15
              </a>
              
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-neutral-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium hover:ring-2 hover:ring-cyan-500/50 hover:bg-neutral-700/80 transition-all duration-300 border border-neutral-700/50 hover:border-cyan-500/30 hover:text-cyan-300"
              >
                🎨 Tailwind CSS
              </a>
              
              <a
                href="https://www.framer.com/motion"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-neutral-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium hover:ring-2 hover:ring-teal-500/50 hover:bg-neutral-700/80 transition-all duration-300 border border-neutral-700/50 hover:border-teal-500/30 hover:text-teal-300"
              >
                🚀 Framer Motion
              </a>
            </div>
                  <p className="text-xs uppercase tracking-wide text-neutral-400">
              ⚡ Deployed on{' '}
              <a 
                href="https://vercel.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition underline text-neutral-300 hover:text-purple-300 font-medium"
              >
                🔺 Vercel
              </a>
              {' '}· Powered by{' '}
              <a 
                href="https://www.typescriptlang.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition underline text-neutral-300 hover:text-blue-300 font-medium"
              >
                📘 TypeScript
              </a>
            </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Legal Framework */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
              LEGAL FRAMEWORK
            </h3>
            
            <div className="space-y-4">            <motion.button
              onClick={() => setShowLegalNotice(!showLegalNotice)}
              className="group text-xs bg-gradient-to-r from-neutral-800/90 via-purple-900/20 to-neutral-800/90 backdrop-blur-sm px-4 py-2 rounded-full hover:ring-2 hover:ring-purple-400/60 hover:bg-gradient-to-r hover:from-purple-800/30 hover:via-purple-700/40 hover:to-purple-800/30 transition-all duration-300 border border-neutral-700/60 hover:border-purple-400/50 hover:text-purple-300 font-medium shadow-lg hover:shadow-purple-500/20"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(168, 85, 247, 0.2)",
                y: -2
              }}
              whileTap={{ 
                scale: 0.98,
                y: 0,
                transition: { duration: 0.1, ease: "easeOut" }
              }}
              animate={{
                y: showLegalNotice ? 3 : 0,
                boxShadow: showLegalNotice 
                  ? "0 5px 15px rgba(168, 85, 247, 0.15)" 
                  : "0 4px 8px rgba(0, 0, 0, 0.1)"
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                mass: 0.6,
                duration: 0.4
              }}
            >
              <motion.span 
                className="flex items-center gap-2"
                animate={{
                  gap: showLegalNotice ? "0.75rem" : "0.5rem"
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <motion.span 
                  className="text-purple-400"
                  animate={{
                    rotate: showLegalNotice ? 180 : 0,
                    scale: showLegalNotice ? 1.1 : 1
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 0.5
                  }}
                >
                  ⚖️
                </motion.span>
                
                <motion.span
                  animate={{
                    x: showLegalNotice ? 2 : 0
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                >
                  {showLegalNotice ? 'Hide' : 'View'} Legal Notice
                </motion.span>
                
                <motion.span 
                  className="text-xs opacity-60"
                  animate={{
                    rotate: showLegalNotice ? 180 : 0,
                    opacity: showLegalNotice ? 0.8 : 0.6,
                    scale: showLegalNotice ? 1.1 : 1
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    mass: 0.3
                  }}
                >
                  ({showLegalNotice ? '▲' : '▼'})
                </motion.span>
              </motion.span>
            </motion.button>
              
              <AnimatePresence mode="wait">
                {showLegalNotice && (
                  <motion.div
                    ref={legalNoticeRef}
                    initial={{ 
                      opacity: 0, 
                      height: 0,
                      scale: 0.92,
                      y: -20,
                      filter: "blur(4px)"
                    }}
                    animate={{ 
                      opacity: 1, 
                      height: "auto",
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)"
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      scale: 0.92,
                      y: -20,
                      filter: "blur(4px)"
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      opacity: { duration: 0.4, ease: "easeOut" },
                      scale: { 
                        duration: 0.4, 
                        ease: [0.34, 1.56, 0.64, 1],
                        delay: 0.1
                      },
                      height: { 
                        duration: 0.5, 
                        ease: [0.25, 0.46, 0.45, 0.94] 
                      },
                      y: { 
                        duration: 0.4, 
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.05
                      },
                      filter: { 
                        duration: 0.3, 
                        ease: "easeOut",
                        delay: 0.15
                      }
                    }}
                    className="text-xs text-neutral-300 space-y-3 p-5 bg-gradient-to-br from-neutral-900/90 via-purple-950/30 to-neutral-900/90 backdrop-blur-md rounded-xl border border-purple-500/20 shadow-2xl shadow-purple-500/10 overflow-hidden"
                  >
                    
                    {/* Header Section */}
                    <motion.div 
                      className="flex items-center gap-2 pb-2 border-b border-purple-500/20"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                    >
                      <span className="text-purple-400 text-sm">🛡️</span>
                      <span className="font-semibold text-purple-300 text-sm">Intellectual Property Notice</span>
                    </motion.div>
                    
                    {/* Main Content */}
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <p className="leading-relaxed">
                        <span className="text-purple-300 font-medium">🏠 Ownership:</span>{' '}
                        This website and its source code are the intellectual property of{' '}
                        <span className="text-cyan-300 font-semibold">Salman Ahmad</span>{' '}
                        <span className="text-purple-400">(ahmxd.net)</span>.{' '}
                        <span className="text-red-300 font-medium">⚠️ Unauthorized reproduction, distribution, or modification is strictly prohibited</span>{' '}
                        under applicable intellectual property laws.
                      </p>
                      
                      <p className="leading-relaxed">
                        <span className="text-blue-300 font-medium">📜 Legal Protection:</span>{' '}
                        This portfolio is protected under the{' '}
                        <span className="text-yellow-300 font-medium">Copyright Act, R.S.C., 1985, c. C-42 (Canada)</span>, and{' '}
                        <span className="text-green-300 font-medium">international IP treaties</span>.
                      </p>
                      
                      <p className="leading-relaxed">
                        <span className="text-orange-300 font-medium">👁️ Monitoring:</span>{' '}
                        Activity on this site may be monitored for{' '}
                        <span className="text-red-400 font-medium">security</span> and{' '}
                        <span className="text-blue-400 font-medium">compliance</span> purposes.
                      </p>
                      
                      {/* Contact Section */}
                      <div className="pt-3 border-t border-purple-500/20">
                        <p className="leading-relaxed">
                          <span className="text-green-300 font-medium">🤝 Licensing & Collaboration:</span>{' '}
                          For licensing, collaboration, or educational use, contact:{' '}
                          <a 
                            href="mailto:s.ahmad0147@gmail.com?subject=PERMISSION REQUEST"
                            className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
                          >
                            s.ahmad0147@gmail.com
                          </a>
                          {' '}with subject line:{' '}
                          <span className="text-accent font-medium">PERMISSION REQUEST</span>
                        </p>
                      </div>
                      
                      {/* Footer Note */}
                      <div className="border-t border-neutral-700/40 my-3 w-full" />
                      <div className="text-center pt-2 opacity-70">
                        <span className="text-xs text-neutral-400 italic">If you copy, bring a lawyer. If you ask, bring coffee.</span>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-neutral-800/50 mt-8">
          <div
            className="inline-block cursor-pointer text-accent text-3xl animate-bounce hover:scale-110 transition-transform duration-200"
          >
            <a 
              href="#top" 
              className="block"
            >
              ↑
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
