'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full py-12 px-6 border-t border-neutral-800"
    >
      <div className="max-w-4xl mx-auto text-center space-y-3">
        {/* Latin Quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-1"
        >
          <h3 className="text-xl md:text-2xl font-mono font-bold text-neutral-300 tracking-wide">
            Fortes fortuna adiuvat
          </h3>
          <p className="text-base italic text-neutral-400">
            "Fortune favours the bold."
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-mono text-neutral-500 pt-2"
        >
          Built with Next.js, Tailwind CSS, and Framer Motion • Deployed on Vercel
        </motion.p>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs font-mono text-neutral-500 tracking-wider"
        >
          © 2025 — All rights reserved. Trademark of Salman Ahmad / ahmxd.net
        </motion.p>
      </div>
    </motion.footer>
  );
}
