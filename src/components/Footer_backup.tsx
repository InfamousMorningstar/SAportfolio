'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer_backup() {
  const [showLegalNotice, setShowLegalNotice] = useState(false);

  return (
    <footer className="relative w-full bg-neutral-900 text-neutral-300 text-sm overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900 to-neutral-900/95" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
      </div>

      {/* Floating accent dots */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: 'easeInOut'
        }}
        className="absolute top-6 left-12 w-1 h-1 bg-accent rounded-full"
      />
      
      <motion.div
        animate={{ 
          y: [0, 8, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute bottom-8 right-16 w-1.5 h-1.5 bg-accent2 rounded-full"
      />

      <motion.div
        animate={{ 
          y: [0, -6, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: 'easeInOut',
          delay: 4
        }}
        className="absolute top-12 right-24 w-0.5 h-0.5 bg-secondary rounded-full"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 py-10">
        
        {/* Left Section - Copyright & Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-3 md:text-left text-center"
        >
          <div className="space-y-1">
            <motion.p 
              className="font-mono text-neutral-300 relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative">
                — Salman Ahmad · ahmxd.net · © 2025 —
              </span>
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent origin-center"
            />
            <p className="text-neutral-400 font-medium italic flex items-center justify-center md:justify-start space-x-2">
              <span className="w-1 h-1 bg-red-400 rounded-full animate-pulse" />
              <span><span className="text-red-400">All Rights Reserved.</span> Unauthorized use is prohibited.</span>
            </p>
          </div>
          
          <div className="space-y-1 pt-2 relative">
            <motion.p 
              className="italic text-neutral-300 font-medium tracking-wide"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-accent/80">Aut viam inveniam</span>{' '}
              <span className="text-accent2/80">aut faciam</span>
            </motion.p>
            <motion.p 
              className="text-xs italic text-neutral-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-neutral-500">»</span> I shall either find a way or make one.
            </motion.p>
          </div>
        </motion.div>

        {/* Center Section - Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="space-y-4 text-center"
        >
          <motion.h3 
            className="text-xs font-bold uppercase tracking-wider text-neutral-200 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="relative">
              BUILT WITH EXCELLENCE
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-px bg-gradient-to-r from-accent/60 via-accent2/60 to-secondary/60"
              />
            </span>
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-2">
            {['Next.js 15', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.3 + index * 0.1,
                  hover: { duration: 0.2 }
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)'
                }}
                className="px-3 py-1 bg-neutral-800 rounded-full text-xs font-medium text-neutral-200 border border-neutral-700 cursor-default relative overflow-hidden group"
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
                />
                <span className="relative z-10">{tech}</span>
              </motion.span>
            ))}
          </div>
          
          <motion.p 
            className="text-xs uppercase tracking-wide text-neutral-400 font-medium relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-neutral-500">⚡</span> Deployed on{' '}
            <span className="text-accent2/80 font-semibold">Vercel</span> ·{' '}
            Powered by <span className="text-secondary/80 font-semibold">TypeScript</span>
          </motion.p>
        </motion.div>

        {/* Right Section - Legal Framework */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="space-y-4 md:text-right text-center"
        >
          <motion.button
            onClick={() => setShowLegalNotice(!showLegalNotice)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center space-x-2 text-neutral-300 hover:text-neutral-100 transition-all duration-300 font-medium mx-auto md:mx-0 md:ml-auto relative overflow-hidden rounded-lg px-4 py-2 border border-neutral-700/30 hover:border-neutral-600/50 bg-gradient-to-r from-accent/10 via-accent2/10 to-secondary/10 hover:from-accent/20 hover:via-accent2/20 hover:to-secondary/20"
          >
            {/* Security Shield Icon */}
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="relative z-10"
              initial={{ color: 'rgb(163, 163, 163)' }}
              whileHover={{ color: 'rgb(239, 68, 68)' }}
              transition={{ duration: 0.3 }}
            >
              <path
                d="M12 2L3 7V12C3 16.97 6.84 21.26 12 22C17.16 21.26 21 16.97 21 12V7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="currentColor"
                fillOpacity="0.1"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
            <span className="relative z-10">Legal Framework</span>
            <motion.span
              animate={{ rotate: showLegalNotice ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="text-xs relative z-10 text-accent2"
            >
              ▾
            </motion.span>
          </motion.button>

          <AnimatePresence mode="wait">
            {showLegalNotice && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="text-xs text-neutral-400 border-l-2 border-gradient-to-b from-accent/50 via-accent2/50 to-secondary/50 pl-4 space-y-2 relative"
                style={{
                  borderImage: 'linear-gradient(to bottom, rgb(139, 92, 246, 0.5), rgb(20, 184, 166, 0.5), rgb(6, 182, 212, 0.5)) 1'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  This website and its source code are protected under the{' '}
                  <strong className="text-neutral-300">Copyright Act, R.S.C., 1985, c. C-42 (Canada)</strong>.
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  Unauthorized reproduction, redistribution, or modification is strictly prohibited.
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  The Digital Millennium Copyright Act (DMCA) and international IP treaties may also apply.
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Activity on this site may be monitored for security and compliance.
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="pt-1 border-t border-neutral-700/50"
                >
                  For licensing or legal inquiries, contact:{' '}
                  <motion.a 
                    href="mailto:s.ahmad0147@gmail.com?subject=PERMISSION REQUEST" 
                    className="text-neutral-300 hover:text-accent2 underline transition-colors duration-200 relative group"
                    whileHover={{ scale: 1.02 }}
                  >
                    s.ahmad0147@gmail.com
                  </motion.a>{' '}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="absolute -bottom-0.5 left-0 w-full h-px bg-accent2 origin-left"
                  />
                  with subject line <strong className="text-accent">"PERMISSION REQUEST"</strong>.
                </motion.div>
                
                {/* Vertical gradient bar moved here, outside of <motion.p> tags */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-accent/50 via-accent2/50 to-secondary/50 origin-top"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </footer>
  );
}
