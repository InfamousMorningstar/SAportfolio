// Final layout fix with Apple-style pill clock and proper alignment

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const links = ["Home", "About", "Projects", "Experience", "Education", "Contact"];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [time, setTime] = useState({ mdt: "--:--:--", utc: "--:--:--" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const mdt = now.toLocaleTimeString("en-US", { hour12: false, timeZone: "America/Edmonton" });
      const utc = now.toUTCString().split(" ")[4];
/*
 * ███╗░░░███╗░█████╗░██████╗░██████╗░██╗░░░██╗███████╗██████╗░██████╗░
 * ████╗░░████║██╔══██╗██╔══██╗██╔══██╗██║░░░██║██╔════╝██╔══██╗██╔══██╗
 * ██╔████╔██║███████║██████╔╝██████╔╝██║░░░██║█████╗░░██████╔╝██████╔╝
 * ██║╚██╔╝██║██╔══██║██╔══██╗██╔══██╗██║░░░██║██╔══╝░░██╔══██╗██╔══██╗
 * ██║░╚═╝░██║██║░░██║██║░░██║██║░░██║╚██████╔╝███████╗██║░░██║██║░░██║
 * ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝
 *
 * 👤 Author  : Salman Ahmad
 * 🌐 URL     : https://portfolio.ahmxd.net
 * 📧 Contact : s.ahmad0147@gmail.com
 * 📝 License : MIT (Educational/Personal Use)
 * 📁 File    : Navbar.tsx
 * 🕒 Updated : Jul 11, 2025
 */

      setTime({ mdt, utc });
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    const handleScroll = () => {
      document.documentElement.classList.add('scrolling');
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.documentElement.classList.remove('scrolling');
      }, 300);

      const currentY = window.scrollY;
      setHidden(currentY > scrollY);
      setScrollY(currentY);
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      document.documentElement.classList.remove('scrolling');
    };
  }, [scrollY, isMobileMenuOpen]);

  return (
    <AnimatePresence mode="wait">
      {!hidden && (
        <motion.nav
          key="navbar"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0, pointerEvents: 'none' }}
          transition={{ duration: 0.65, ease: [0.77, 0, 0.175, 1] }}
          className="fixed top-0 w-full z-50 shadow-lg border border-border bg-black/60 dark:bg-background/80 backdrop-blur-2xl backdrop-saturate-150 rounded-b-2xl transition-none"
          style={{ WebkitBackdropFilter: 'blur(32px) saturate(150%)', backdropFilter: 'blur(32px) saturate(150%)', willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full px-4 sm:px-6 lg:px-8">
            {/* LED strip effect */}
            <div className="absolute left-0 right-0 -bottom-2 h-6 pointer-events-none z-10">
              <div className="w-full h-full bg-gradient-to-b from-accent/60 via-accent2/40 to-transparent blur-2xl opacity-80"></div>
            </div>

            <div className="flex items-center justify-between h-16 relative">
              {/* Left */}
              <Link href="#home">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-4 text-accent font-bold text-xl cursor-pointer" aria-label="Go to Home">SA</div>
              </Link>

              {/* Center */}
              <div className="hidden lg:flex mx-auto space-x-3">
                {links.map((link) => (
                  <Link key={link} href={`#${link.toLowerCase()}`}>
                <motion.div
                  className="px-4 py-1 border border-border rounded-full text-sm font-medium text-neutral-200 hover:text-white hover:border-accent/80 focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:outline-none shadow-md hover:shadow-lg transition-all duration-150 will-change-transform backdrop-blur-md bg-black/30 hover:scale-105 font-sans"
                  whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(6,182,212,0.13)', backgroundColor: 'rgba(34,211,238,0.10)', filter: 'brightness(1.10)' }}
                  whileTap={{ scale: 0.96, boxShadow: '0 1.5px 6px 0 rgba(6,182,212,0.08)', backgroundColor: 'rgba(34,211,238,0.16)', filter: 'brightness(0.97)' }}
                  transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                  style={{ WebkitTapHighlightColor: 'transparent', outline: 'none', backfaceVisibility: 'hidden' }}
                  tabIndex={0}
                >
                  {link}
                </motion.div>
                  </Link>
                ))}
              </div>

              {/* Right */}
              <div className="absolute right-0 pr-4 flex items-center space-x-3">
                <motion.a
                  href="/resume.pdf"
                  className="px-4 py-1 rounded-full border-2 border-accent text-accent text-sm font-semibold shadow-lg hover:bg-accent hover:text-white will-change-transform transition-all duration-150"
                  whileHover={{ scale: 1.07, boxShadow: '0 4px 16px 0 rgba(6,182,212,0.13)', backgroundColor: 'rgba(34,211,238,0.08)', filter: 'brightness(1.08)' }}
                  whileTap={{ scale: 0.97, boxShadow: '0 1.5px 6px 0 rgba(6,182,212,0.08)', backgroundColor: 'rgba(34,211,238,0.14)', filter: 'brightness(0.98)' }}
                  transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                  style={{ WebkitTapHighlightColor: 'transparent', backfaceVisibility: 'hidden' }}
                >
                  Resume
                </motion.a>
                {/* Desktop Clock */}
                <div className="hidden lg:flex items-center px-3 py-1 rounded-full border border-neutral-800 text-sm font-mono backdrop-blur-md bg-black/30">
                  <span className="text-accent font-mono mr-1">{time.mdt}</span>
                  <span className="text-white/50 text-xs">MDT</span>
                  <span className="mx-2 text-white/30">|</span>
                  <span className="text-accent2 font-mono mr-1">{time.utc}</span>
                  <span className="text-white/50 text-xs">UTC</span>
                </div>
                <motion.button
                  layout
                  className="lg:hidden rounded-full"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  whileHover={{ scale: 1.07, boxShadow: '0 4px 24px 0 rgba(6,182,212,0.13)', backgroundColor: 'rgba(34,211,238,0.08)', filter: 'brightness(1.08)' }}
                  whileTap={{ scale: 0.97, boxShadow: '0 1.5px 6px 0 rgba(6,182,212,0.08)', backgroundColor: 'rgba(34,211,238,0.14)', filter: 'brightness(0.98)' }}
                  transition={{ type: 'spring', stiffness: 420, damping: 18, mass: 1.05 }}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {isMobileMenuOpen ? <X className="text-white" size={24} /> : <Menu className="text-accent" size={24} />}
                </motion.button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -20 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                style={{ transitionProperty: 'opacity, transform', willChange: 'opacity, transform' }}
                className="lg:hidden bg-black/80 backdrop-blur-md px-4 pt-4 pb-8 space-y-4 text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
                  className="lg:hidden flex flex-col items-center space-y-3 md:flex-row md:space-y-0 md:space-x-4 md:justify-center md:items-center"
                >
                  {links.map((link) => (
                    <Link key={link} href={`#${link.toLowerCase()}`}>
                      <div
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-4 py-1 border border-neutral-800 rounded-full text-sm font-medium text-neutral-200 hover:text-white hover:border-accent transition duration-300 backdrop-blur-md bg-black/30 hover:scale-[1.08] will-change-transform"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }}
                      >
                        {link}
                      </div>
                    </Link>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
                  className="flex justify-center gap-4 pt-2"
                >
                  <a href="https://github.com" target="_blank"><Github className="text-white" size={20} /></a>
                  <a href="https://linkedin.com" target="_blank"><Linkedin className="text-white" size={20} /></a>
                  <a href="mailto:s.ahmad0147@gmail.com"><Mail className="text-white" size={20} /></a>
                </motion.div>
                {/* Mobile Clock */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.19, ease: [0.4, 0, 0.2, 1] }}
                  className="mt-4 px-3 py-1 inline-block rounded-full border border-neutral-800 text-sm font-mono backdrop-blur-md bg-black/30"
                >
                  <span className="text-accent font-mono mr-1">{time.mdt}</span>
                  <span className="text-white/50 text-xs">MDT</span>
                  <span className="mx-2 text-white/30">|</span>
                  <span className="text-accent2 font-mono mr-1">{time.utc}</span>
                  <span className="text-white/50 text-xs">UTC</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}