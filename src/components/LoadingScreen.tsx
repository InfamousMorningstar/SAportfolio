'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';

const BOOT_LINES = [
  '> ESTABLISHING SECURE UPLINK...',
  '> DECRYPTING IDENTITY [████████] OK',
  '> MOUNTING /dev/wayne_protocol',
  '> LOADING COMBAT SUBROUTINES...',
  '> ACCESS GRANTED',
];

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [bootIndex, setBootIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [glitchBurst, setGlitchBurst] = useState(false);

  useEffect(() => {
    const hasLoaded =
      typeof window !== 'undefined'
        ? sessionStorage.getItem('portfolio-loaded')
        : null;

    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Boot log lines
    const bootInterval = setInterval(() => {
      setBootIndex((i) => (i < BOOT_LINES.length ? i + 1 : i));
    }, 240);

    // Progress bar
    const progInterval = setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.random() * 14 + 4));
    }, 110);

    // Random glitch bursts
    const glitchInterval = setInterval(() => {
      setGlitchBurst(true);
      setTimeout(() => setGlitchBurst(false), 140);
    }, 700);

    const timer = setTimeout(() => {
      setIsLoading(false);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('portfolio-loaded', 'true');
      }
    }, 2000);

    return () => {
      clearInterval(bootInterval);
      clearInterval(progInterval);
      clearInterval(glitchInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: 'blur(8px) brightness(2)',
            transition: { duration: 0.5, ease: 'easeInOut' },
          }}
        >
          {/* ===== Background layers ===== */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Theme accent glow (violet + teal) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/20 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent2/20 rounded-full blur-[120px]" />

            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgb(var(--accent)/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--accent)/0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_30%,transparent_100%)]" />

            {/* Glitchy emblem */}
            <div
              className={`absolute inset-0 flex items-center justify-center mix-blend-screen ${
                glitchBurst ? 'ls-glitch-shift' : ''
              }`}
            >
              <Logo
                className="w-[78vw] h-[78vw] md:w-[62vh] md:h-[62vh] text-accent/[0.08]"
                variant="simple"
              />
            </div>

            {/* CRT scanlines */}
            <div className="absolute inset-0 ls-scanlines opacity-[0.18]" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.85)_100%)]" />
          </div>

          {/* ===== Foreground content ===== */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-2xl">
            {/* Status line */}
            <motion.div
              className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-accent/80 mb-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
              SYSTEM BREACH // AUTHORIZING
            </motion.div>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.35em] text-white/50 flex items-center gap-3 mb-8"
            >
              <span>VIGILANTE</span>
              <span className="text-accent/70">//</span>
              <span>ENGINEER</span>
              <span className="text-accent2/70">//</span>
              <span>OPERATOR</span>
            </motion.div>

            {/* Boot log */}
            <div className="font-mono text-[10px] md:text-xs text-accent/60 h-24 w-full max-w-md flex flex-col justify-end gap-1 mb-6">
              {BOOT_LINES.slice(0, bootIndex).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={
                    line.includes('GRANTED')
                      ? 'text-accent2 font-bold'
                      : ''
                  }
                >
                  {line}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-full max-w-md">
              <div className="flex justify-between font-mono text-[9px] text-white/40 mb-1.5 tracking-widest">
                <span>DECRYPTING</span>
                <span>{Math.floor(progress)}%</span>
              </div>
              <div className="h-[3px] w-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent via-secondary to-accent2"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
            </div>
          </div>

          {/* ===== Corner HUD ===== */}
          <div className="absolute inset-0 pointer-events-none z-10 font-mono text-[9px] text-accent/40">
            <div className="absolute top-6 left-6 flex flex-col gap-1">
              <div className="w-6 h-6 border-l border-t border-accent/40" />
              <span>NODE: GOTHAM-01</span>
            </div>
            <div className="absolute top-6 right-6 flex flex-col items-end gap-1">
              <div className="w-6 h-6 border-r border-t border-accent/40" />
              <span>ENC: AES-256</span>
            </div>
            <div className="absolute bottom-6 left-6 flex flex-col gap-1">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent2 rounded-full animate-pulse" />
                LINK STABLE
              </span>
              <div className="w-6 h-6 border-l border-b border-accent/40" />
            </div>
            <div className="absolute bottom-6 right-6 flex flex-col items-end gap-1">
              <span>VER 3.0.0</span>
              <div className="w-6 h-6 border-r border-b border-accent/40" />
            </div>
          </div>

          {/* ===== Scoped glitch / CRT styles ===== */}
          <style jsx>{`
            .ls-scanlines {
              background: repeating-linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 0px,
                rgba(0, 0, 0, 0) 2px,
                rgb(var(--accent) / 0.08) 3px,
                rgba(0, 0, 0, 0) 4px
              );
              animation: ls-flicker 3s steps(2) infinite;
            }

            @keyframes ls-flicker {
              0%,
              100% {
                opacity: 0.18;
              }
              48% {
                opacity: 0.18;
              }
              50% {
                opacity: 0.32;
              }
              52% {
                opacity: 0.14;
              }
            }

            .ls-glitch {
              position: relative;
            }
            .ls-glitch::before,
            .ls-glitch::after {
              content: attr(data-text);
              position: absolute;
              inset: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: var(--font-head), 'Space Grotesk', sans-serif;
              font-weight: 700;
              letter-spacing: -0.02em;
              line-height: 1;
              opacity: 0;
              pointer-events: none;
            }
            .ls-glitch::before {
              color: rgb(var(--accent2));
              z-index: -1;
            }
            .ls-glitch::after {
              color: rgb(var(--accent));
              z-index: -2;
            }
            .ls-glitch-active::before {
              opacity: 0.85;
              animation: ls-shift-x 0.14s steps(2) infinite;
              transform: translate(-3px, 1px);
            }
            .ls-glitch-active::after {
              opacity: 0.85;
              animation: ls-shift-y 0.14s steps(2) infinite;
              transform: translate(3px, -1px);
            }

            @keyframes ls-shift-x {
              0% {
                transform: translate(-3px, 1px);
                clip-path: inset(0 0 60% 0);
              }
              100% {
                transform: translate(-5px, -1px);
                clip-path: inset(40% 0 0 0);
              }
            }
            @keyframes ls-shift-y {
              0% {
                transform: translate(3px, -1px);
                clip-path: inset(50% 0 10% 0);
              }
              100% {
                transform: translate(5px, 1px);
                clip-path: inset(10% 0 50% 0);
              }
            }

            .ls-glitch-shift {
              animation: ls-jitter 0.14s steps(2) infinite;
            }
            @keyframes ls-jitter {
              0% {
                transform: translate(0, 0);
              }
              50% {
                transform: translate(-2px, 1px);
              }
              100% {
                transform: translate(2px, -1px);
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
