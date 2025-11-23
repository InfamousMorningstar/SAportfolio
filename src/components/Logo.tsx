'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-accent via-accent2 to-secondary overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent via-accent2 to-secondary opacity-0"
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Initials */}
      <span className="relative z-10 text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
        SA
      </span>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </motion.div>
  );
}
