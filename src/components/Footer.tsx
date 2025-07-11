'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const [showLegalNotice, setShowLegalNotice] = useState(false);

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative border-t border-neutral-800 bg-black/90 backdrop-blur-sm before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-tr before:from-purple-700/10 before:to-emerald-700/10 before:blur-2xl before:z-[-1]"
    >
      {/* Brand Monogram */}
      <div className="absolute left-6 bottom-6 text-4xl font-black opacity-10 blur-sm select-none pointer-events-none hidden md:block">
        SA
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start max-w-7xl mx-auto px-6 py-12 relative text-neutral-300 text-sm">
        
        {/* LEFT COLUMN - Site Info */}
        <div className="text-center md:text-left space-y-2">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs uppercase tracking-widest text-neutral-500 mb-4"
          >
            SITE INFO
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="font-mono tracking-wide">
              — Salman Ahmad · ahmxd.net · © 2025 —
            </p>
            
            <p className="text-xs">
              <span className="text-red-400">All Rights Reserved.</span> Unauthorized use is prohibited.
            </p>
            
            <div className="space-y-1">
              <p className="italic text-teal-400 text-sm">
                Aut viam inveniam aut faciam
              </p>
              <p className="text-xs italic text-neutral-500">
                I shall either find a way or make one.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CENTER COLUMN - Built With Excellence */}
        <div className="text-center md:text-left space-y-2">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs uppercase tracking-widest text-neutral-500 mb-4"
          >
            BUILT WITH EXCELLENCE
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <motion.a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neutral-800 px-3 py-1 rounded-full text-xs font-medium hover:ring-2 hover:ring-purple-500/50 transition"
              >
                Next.js 15
              </motion.a>
              
              <motion.a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neutral-800 px-3 py-1 rounded-full text-xs font-medium hover:ring-2 hover:ring-purple-500/50 transition"
              >
                Tailwind CSS
              </motion.a>
              
              <motion.a
                href="https://www.framer.com/motion"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neutral-800 px-3 py-1 rounded-full text-xs font-medium hover:ring-2 hover:ring-purple-500/50 transition"
              >
                Framer Motion
              </motion.a>
            </div>
            
            <p className="text-xs uppercase tracking-wide text-neutral-400 flex flex-col gap-y-1 items-center justify-center sm:flex-row sm:gap-x-2">
              <span className="w-full text-center">&nbsp;&nbsp;&nbsp;&nbsp;⚡ Deployed on <span className="inline-block align-middle">🔺</span> Vercel</span>
              <span className="w-full text-center">· Powered by <span className="inline-block align-middle">📘</span> TypeScript</span>
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - Legal Framework */}
        <div className="text-center md:text-left space-y-2">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs uppercase tracking-widest text-neutral-500 mb-4"
          >
            LEGAL FRAMEWORK
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.button
              onClick={() => setShowLegalNotice(!showLegalNotice)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-xs bg-neutral-800 px-3 py-1 rounded-full hover:ring-2 hover:ring-purple-500/50 transition"
            >
              📄 View Full Legal Notice
            </motion.button>
            
            <AnimatePresence>
              {showLegalNotice && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs text-neutral-400 space-y-2 p-4 bg-neutral-900/50 rounded-lg border border-neutral-800"
                >
                  <p>
                    This website and its source code are the intellectual property of Salman Ahmad (ahmxd.net).
                    Unauthorized reproduction, distribution, or modification is strictly prohibited under applicable intellectual property laws.
                  </p>
                  
                  <p>
                    This portfolio is protected under the Copyright Act, R.S.C., 1985, c. C-42 (Canada), and international IP treaties.
                  </p>
                  
                  <p>
                    Activity on this site may be monitored for security and compliance purposes.
                  </p>
                  
                  <p className="pt-2 border-t border-neutral-700">
                    For licensing, collaboration, or educational use, contact:{' '}
                    <a 
                      href="mailto:s.ahmad0147@gmail.com?subject=PERMISSION REQUEST"
                      className="text-purple-400 hover:text-purple-300 transition underline"
                    >
                      s.ahmad0147@gmail.com
                    </a>
                    {' '}with subject line: PERMISSION REQUEST.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Back to Top */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center pb-6"
      >
        <a 
          href="#top" 
          className="text-xs text-neutral-400 hover:text-white transition underline"
        >
          ↑ Back to Top
        </a>
      </motion.div>
    </motion.footer>
  );
}
