'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full py-12 px-6 border-t border-neutral-800 overflow-hidden"
    >
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Circle - Top Left */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 180 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute -top-8 -left-8 w-24 h-24 border border-accent/20 rounded-full"
        />
        
        {/* Triangle - Top Right */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
          className="absolute top-4 right-12 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-accent2/30"
        />
        
        {/* Small Squares */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-8 left-16 w-3 h-3 bg-accent/40 rotate-45"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-12 right-20 w-2 h-2 bg-accent2/50 rounded-full"
        />
        
        {/* Hexagon - Bottom Center */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-8 border border-secondary/30 transform rotate-45" style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
          }} />
        </motion.div>
        
        {/* Floating Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/2 right-8 w-16 h-px bg-gradient-to-r from-accent/60 to-accent2/60 transform -translate-y-1/2"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-3">
        {/* Latin Quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-1"
        >
          <h3 className="text-xl md:text-2xl font-mono font-bold text-neutral-300 tracking-wide">
            <span className="relative">
              Fortes fortuna adiuvat
              {/* Accent underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-accent2 to-accent origin-left"
              />
            </span>
          </h3>
          <p className="text-base italic text-neutral-400">
            "Fortune favours the bold."
          </p>
        </motion.div>

        {/* Tech Stack with accent colors */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-mono text-neutral-500 pt-2"
        >
          Built with{' '}
          <span className="text-accent font-semibold">Next.js</span>,{' '}
          <span className="text-accent2 font-semibold">Tailwind CSS</span>, and{' '}
          <span className="text-secondary font-semibold">Framer Motion</span> •{' '}
          Deployed on <span className="text-accent font-semibold">Vercel</span>
        </motion.p>

        {/* Copyright with decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center space-x-2 text-xs font-mono text-neutral-500 tracking-wider pt-2"
        >
          <div className="w-2 h-px bg-accent/50" />
          <span>© 2025 — All rights reserved. Trademark of Salman Ahmad / ahmxd.net</span>
          <div className="w-2 h-px bg-accent2/50" />
        </motion.div>
      </div>
    </motion.footer>
  );
}
