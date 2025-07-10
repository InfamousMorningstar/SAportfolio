'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full py-16 px-6 border-t border-neutral-800 overflow-hidden"
    >
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Circle - Top Left - Continuous rotation and scale pulse */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 180 }}
          viewport={{ once: true }}
          animate={{ 
            rotate: [180, 540, 180],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            whileInView: { duration: 2, ease: 'easeOut' },
            animate: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }
          }}
          className="absolute -top-8 -left-8 w-24 h-24 border border-accent/20 rounded-full"
        />
        
        {/* Triangle - Top Right - Floating and color shifting */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            whileInView: { duration: 1.5, delay: 0.2, ease: 'easeOut' },
            animate: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.7 }
          }}
          className="absolute top-4 right-12 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-accent2/30"
        />
        
        {/* Small Square - Rotating and moving */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ 
            rotate: [45, 225, 45],
            x: [0, 5, 0],
            y: [0, -3, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            whileInView: { duration: 1, delay: 0.4 },
            animate: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }
          }}
          className="absolute bottom-8 left-16 w-3 h-3 bg-accent/40"
        />
        
        {/* Small Circle - Pulsing and drifting */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, -8, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            whileInView: { duration: 1, delay: 0.6 },
            animate: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }
          }}
          className="absolute bottom-12 right-20 w-2 h-2 bg-accent2/50 rounded-full"
        />
        
        {/* Hexagon - Bottom Center - Spinning and morphing */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 60 }}
          viewport={{ once: true }}
          animate={{ 
            rotate: [60, 420, 60],
            scale: [1, 1.1, 0.9, 1],
            y: [0, -5, 0]
          }}
          transition={{ 
            whileInView: { duration: 2, delay: 0.3, ease: 'easeOut' },
            animate: { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2.3 }
          }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-8 border border-secondary/30 transform rotate-45" style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
          }} />
        </motion.div>
        
        {/* Floating Line - Extending and contracting */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          animate={{ 
            scaleX: [1, 1.3, 0.7, 1],
            opacity: [0.6, 1, 0.4, 0.6]
          }}
          transition={{ 
            whileInView: { duration: 1.5, delay: 0.5 },
            animate: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }
          }}
          className="absolute top-1/2 right-8 w-16 h-px bg-gradient-to-r from-accent/60 to-accent2/60 transform -translate-y-1/2"
        />
        
        {/* Additional floating elements for more life */}
        <motion.div
          animate={{ 
            x: [0, 20, -10, 0],
            y: [0, -15, 5, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: 'easeInOut'
          }}
          className="absolute top-8 left-1/4 w-1 h-1 bg-secondary/40 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, -15, 10, 0],
            y: [0, 10, -5, 0],
            scale: [1, 1.5, 0.8, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute bottom-6 right-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full"
        />
      </div>

      <div className="relative max-w-2xl mx-auto text-center space-y-8">
        {/* Latin Quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-2"
        >
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-neutral-300 tracking-wide">
            <span className="relative">
              Aut viam inveniam aut faciam.
              {/* Accent underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-accent2 to-accent origin-left"
              />
            </span>
          </h2>
          <p className="text-lg italic text-neutral-400">
            I shall either find a way or make one.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-mono text-neutral-500"
        >
          Built with{' '}
          <span className="text-accent font-semibold">Next.js</span>,{' '}
          <span className="text-accent2 font-semibold">Tailwind CSS</span>, and{' '}
          <span className="text-secondary font-semibold">Framer Motion</span> •{' '}
          Deployed on <span className="text-accent font-semibold">Vercel</span>
        </motion.p>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center space-x-2 text-sm font-mono text-neutral-500 tracking-wider"
        >
          <div className="w-3 h-px bg-accent/50" />
          <span>© 2025 — All rights reserved. Trademark of Salman Ahmad / ahmxd.net</span>
          <div className="w-3 h-px bg-accent2/50" />
        </motion.div>

        {/* Legal Notice */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 pt-6 border-t border-neutral-800"
          aria-labelledby="legal-notice"
        >
          <h3 id="legal-notice" className="sr-only">Legal Notice</h3>
          
          <div className="space-y-3 text-xs leading-relaxed text-neutral-400 font-mono">
            <p className="font-semibold text-neutral-300">
              LEGAL NOTICE
            </p>
            
            <p>
              This website and its source code are the intellectual property of Salman Ahmad (ahmxd.net).
            </p>
            
            <p>
              Unauthorized reproduction, distribution, or modification is strictly prohibited under applicable intellectual property laws.
            </p>
            
            <p>
              This portfolio is protected under the Copyright Act, R.S.C., 1985, c. C-42 (Canada), and international IP treaties.
            </p>
            
            <p>
              Activity on this site may be monitored for security and compliance purposes.
            </p>
            
            <p className="pt-2 border-t border-neutral-800">
              For licensing, collaboration, or educational use, contact:{' '}
              <a 
                href="mailto:s.ahmad0147@gmail.com?subject=PERMISSION REQUEST"
                className="text-accent hover:text-accent2 transition-colors underline decoration-accent/50 hover:decoration-accent2 font-medium"
                aria-label="Contact for permissions via email"
              >
                s.ahmad0147@gmail.com
              </a>
              {' '}with subject line: <span className="text-accent font-semibold">PERMISSION REQUEST</span>.
            </p>
          </div>
        </motion.section>
      </div>
    </motion.footer>
  );
}
