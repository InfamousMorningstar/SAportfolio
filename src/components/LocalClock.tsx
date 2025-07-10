'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LocalClock() {
  const [mdtTime, setMdtTime] = useState<string>('');
  const [utcTime, setUtcTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      
      // MDT time (Mountain Daylight Time - UTC-6)
      const mdtTimeString = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Denver',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      
      // UTC time
      const utcTimeString = now.toLocaleTimeString('en-US', {
        timeZone: 'UTC',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      
      setMdtTime(mdtTimeString);
      setUtcTime(utcTimeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="font-mono text-sm">
            <span className="text-accent">{mdtTime} MDT</span>
            <span className="text-foreground/60 mx-1">|</span>
          </span>
          <div className="w-2 h-2 bg-accent2 rounded-full animate-pulse" />
          <span className="font-mono text-sm">
            <span className="text-accent2">{utcTime} UTC</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
