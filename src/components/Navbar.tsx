// Final layout fix with Apple-style pill clock and proper alignment

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const links = ["HOME", "ABOUT", "PROJECTS", "EXPERIENCE", "EDUCATION", "CONTACT"];

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
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed top-0 w-full z-50 shadow-sm border border-neutral-800 bg-black/40 backdrop-blur-2xl backdrop-saturate-150"
      style={{ WebkitBackdropFilter: 'blur(32px) saturate(150%)', backdropFilter: 'blur(32px) saturate(150%)' }}
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
                <div className="px-4 py-1 border border-neutral-800 rounded-full text-sm font-medium text-neutral-200 hover:text-white hover:border-accent transition duration-200 backdrop-blur-md bg-black/30 hover:scale-105 font-sans">
                  {link}
                </div>
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="absolute right-0 pr-4 flex items-center space-x-3">
            <a
              href="/resume.pdf"
              className="px-4 py-1 rounded-full border-2 border-accent text-accent text-sm font-semibold shadow-md hover:bg-accent hover:text-white transition"
            >
              Resume
            </a>
            {/* Desktop Clock */}
            <div className="hidden lg:flex items-center px-3 py-1 rounded-full border border-neutral-800 text-sm font-mono backdrop-blur-md bg-black/30">
              <span className="text-accent font-mono mr-1">{time.mdt}</span>
              <span className="text-white/50 text-xs">MDT</span>
              <span className="mx-2 text-white/30">|</span>
              <span className="text-accent2 font-mono mr-1">{time.utc}</span>
              <span className="text-white/50 text-xs">UTC</span>
            </div>
            <button
              className="lg:hidden rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="text-white" size={24} /> : <Menu className="text-accent" size={24} />}
            </button>
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
                    className="px-4 py-1 border border-neutral-800 rounded-full text-sm font-medium text-neutral-200 hover:text-white hover:border-accent transition duration-200 backdrop-blur-md bg-black/30 hover:scale-105 font-sans"
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
  );
}