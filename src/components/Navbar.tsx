"use client";
// Final layout fix with Apple-style pill clock and proper alignment

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Moon, Sun, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = ["Home", "About", "Projects", "Experience", "Education", "Blog", "Contact"];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [time, setTime] = useState({ mdt: "--:--:--", utc: "--:--:--" });
  const [isTabletMode, setIsTabletMode] = useState(typeof window !== 'undefined' ? window.innerWidth < 1600 : false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const baseHamburgerColor = isDarkMode ? '#BFC2C7' : '#475569';

  // Tablet/Desktop mode resize listener with animation triggers
  const [justSwitchedToTablet, setJustSwitchedToTablet] = useState(false);
  const [justSwitchedToDesktop, setJustSwitchedToDesktop] = useState(false);
  useEffect(() => {
    let prevTablet = typeof window !== 'undefined' ? window.innerWidth < 1600 : false;
    const handleResize = () => {
      const nowTablet = window.innerWidth < 1600;
      setIsTabletMode(nowTablet);
      if (!prevTablet && nowTablet) {
        setJustSwitchedToTablet(true);
        setTimeout(() => setJustSwitchedToTablet(false), 700); // animation duration
      } else if (prevTablet && !nowTablet) {
        setJustSwitchedToDesktop(true);
        setTimeout(() => setJustSwitchedToDesktop(false), 700); // animation duration
      }
      prevTablet = nowTablet;
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Time updater
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
      // Always show navbar at the very top (Safari/macOS fix)
      if (currentY <= 0) {
        setHidden(false);
      } else {
        setHidden(currentY > scrollY);
      }
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
          className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-border-subtle/60 rounded-b-3xl transition-none shadow-lg shadow-accent/15 text-foreground"
          style={{ 
            willChange: 'transform, opacity', 
            backfaceVisibility: 'hidden',
            background: 'var(--navbar-background)',
            boxShadow: 'var(--motion-box-shadow)',
          }}
        >
          <div className="relative w-full px-4 sm:px-6 lg:px-8">
            {/* Enhanced LED strip with purple accent */}
            <div className="absolute left-0 right-0 -bottom-2 h-8 pointer-events-none z-10">
              <div className="w-full h-full bg-gradient-to-b from-accent/70 via-accent2/50 to-transparent blur-3xl opacity-90"></div>
            </div>

            <div className="flex items-center justify-between h-16 relative">
              {/* Left */}
              <Link href="#home">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-4 text-accent font-bold text-xl cursor-pointer" aria-label="Go to Home">SA</div>
              </Link>

              {/* Center - Desktop nav only if !isTabletMode */}
              <AnimatePresence>
                {!isTabletMode && (
                  <motion.div
                    className="flex mx-auto space-x-3"
                    initial={justSwitchedToDesktop ? { opacity: 0, x: 60, z: -40, scale: 0.7, rotateY: 30 } : false}
                    animate={justSwitchedToDesktop ? { opacity: 1, x: 0, z: 0, scale: 1, rotateY: 0 } : { opacity: 1, x: 0, z: 0, scale: 1, rotateY: 0 }}
                    exit={justSwitchedToTablet ? { opacity: 0, x: 60, z: -40, scale: 0.7, rotateY: 30 } : { opacity: 0, x: 60, z: -40, scale: 0.7, rotateY: 30 }}
                    transition={justSwitchedToDesktop ? { duration: 0.9, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.13, delayChildren: 0.13, staggerDirection: -1 } : justSwitchedToTablet ? { duration: 0.9, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.13, delayChildren: 0.13, staggerDirection: 1 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    style={{ perspective: 1200 }}
                  >
                    {links.map((link, i) => (
                      <Link key={link} href={link === 'Blog' ? '/blog' : `#${link.toLowerCase()}`}>
                        <motion.div
                          className="navbar-btn-desktop px-4 py-1 border rounded-full text-sm font-medium text-text-soft border-border-subtle/60 transition-all duration-150 will-change-transform backdrop-blur-md bg-[color:var(--navbar-pill-background)] hover:text-foreground hover:border-accent2 focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-strong)] focus-visible:outline-none shadow-md font-sans"
                          tabIndex={0}
                          initial={justSwitchedToDesktop ? { opacity: 0, x: 60, z: -40, scale: 0.7, rotateY: 30, boxShadow: '0 0 0 rgba(0,0,0,0)' } : false}
                          animate={justSwitchedToDesktop ? { opacity: [0.7, 1], x: 0, z: 0, scale: [0.7, 1.08, 1], rotateY: [30, 0], boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 6px 32px 0 rgba(139,92,246,0.13)', '0 0 0 rgba(0,0,0,0)'], transition: { duration: 0.7 + i * 0.13, ease: [0.4, 0, 0.2, 1] } } : { opacity: 1, x: 0, z: 0, scale: 1, rotateY: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' }}
                          exit={justSwitchedToTablet ? { opacity: [1, 0.7, 0], x: 60, z: -40, scale: [1, 0.7], rotateY: [0, 30], boxShadow: ['0 6px 32px 0 rgba(139,92,246,0.13)', '0 0 0 rgba(0,0,0,0)'], transition: { duration: 0.7 + i * 0.13, ease: [0.4, 0, 0.2, 1] } } : { opacity: 0, x: 60, z: -40, scale: 0.7, rotateY: 30, boxShadow: '0 0 0 rgba(0,0,0,0)' }}
                          transition={{ duration: 0.7 + i * 0.13, ease: [0.4, 0, 0.2, 1] }}
                          style={{ boxShadow: 'var(--motion-box-shadow)' }}
                        >
                          {link}
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Right */}
              <div className="absolute right-0 pr-4 flex items-center space-x-3">
                {/* Social Icons Desktop */}
                <AnimatePresence>
                  {!isTabletMode && (
                    <motion.div
                      className="flex items-center gap-3"
                      initial={justSwitchedToDesktop ? { opacity: 0, x: 60, z: -40, scale: 0.7, rotateY: 30 } : false}
                      animate={justSwitchedToDesktop ? { opacity: 1, x: 0, z: 0, scale: 1, rotateY: 0 } : { opacity: 1, x: 0, z: 0, scale: 1, rotateY: 0 }}
                      exit={justSwitchedToTablet ? { opacity: 0, x: 60, z: -40, scale: 0.7, rotateY: 30 } : { opacity: 0, x: 60, z: -40, scale: 0.7, rotateY: 30 }}
                      transition={justSwitchedToDesktop ? { duration: 0.9, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.15, delayChildren: 0.18, staggerDirection: -1 } : justSwitchedToTablet ? { duration: 0.9, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.15, delayChildren: 0.18, staggerDirection: 1 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      style={{ perspective: 1200 }}
                    >
                      <motion.button
                        key="theme-toggle"
                        type="button"
                        onClick={toggleTheme}
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                        whileHover={{ scale: 1.1, rotate: isDarkMode ? 3 : -3, boxShadow: '0 4px 18px rgba(148,163,184,0.22)' }}
                        whileTap={{ scale: 0.96, rotate: 0 }}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle/60 bg-[color:var(--navbar-pill-background)] text-text-soft transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-strong)]"
                        style={{ WebkitTapHighlightColor: 'transparent', backfaceVisibility: 'hidden', boxShadow: 'var(--motion-box-shadow)' }}
                      >
                        {isDarkMode ? <Sun size={18} className="text-text-soft" /> : <Moon size={18} className="text-text-soft" />}
                      </motion.button>
                      {[{
                        href: "https://github.com/InfamousMorningstar",
                        label: "GitHub",
                        icon: <Github className="text-accent2" size={20} />,
                        ring: "focus-visible:ring-accent/70"
                      }, {
                        href: "https://www.linkedin.com/in/salman-ahmad-6788811b6/",
                        label: "LinkedIn",
                        icon: <Linkedin className="text-accent2" size={20} />,
                        ring: "focus-visible:ring-accent2/70"
                      }, {
                        href: "mailto:s.ahmad0147@gmail.com",
                        label: "Email",
                        icon: <Mail className="text-accent2" size={20} />,
                        ring: "focus-visible:ring-secondary/70"
                      }].map((item, i) => (
                        <motion.a
                          key={item.label}
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          aria-label={item.label}
                          whileHover={{ scale: 1.18, boxShadow: '0 2px 16px 0 rgba(168,85,247,0.32)' }}
                          whileTap={{ scale: 0.93, boxShadow: '0 1px 6px 0 rgba(168,85,247,0.18)' }}
                          className={`transition-all duration-150 rounded-full ${item.ring} focus-visible:outline-none`}
                          style={{ WebkitTapHighlightColor: 'transparent', backfaceVisibility: 'hidden', boxShadow: 'var(--motion-box-shadow)' }}
                          initial={justSwitchedToDesktop ? { opacity: 0, x: 60, z: -40, scale: 0.7, rotateY: 30, boxShadow: '0 0 0 rgba(0,0,0,0)' } : false}
                          animate={justSwitchedToDesktop ? { opacity: [0.7, 1], x: 0, z: 0, scale: [0.7, 1.08, 1], rotateY: [30, 0], boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 6px 32px 0 rgba(139,92,246,0.13)', '0 0 0 rgba(0,0,0,0)'], transition: { duration: 0.7 + i * 0.15, ease: [0.4, 0, 0.2, 1] } } : { opacity: 1, x: 0, z: 0, scale: 1, rotateY: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' }}
                          exit={justSwitchedToTablet ? { opacity: [1, 0.7, 0], x: 60, z: -40, scale: [1, 0.7], rotateY: [0, 30], boxShadow: ['0 6px 32px 0 rgba(139,92,246,0.13)', '0 0 0 rgba(0,0,0,0)'], transition: { duration: 0.7 + i * 0.15, ease: [0.4, 0, 0.2, 1] } } : { opacity: 0, x: 60, z: -40, scale: 0.7, rotateY: 30, boxShadow: '0 0 0 rgba(0,0,0,0)' }}
                          transition={{ duration: 0.7 + i * 0.15, ease: [0.4, 0, 0.2, 1] }}
                        >
                          {item.icon}
                          <span className="sr-only">{item.label}</span>
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Resume button always visible, with micro-animation for navbar transitions */}
                <AnimatePresence>
                  <motion.a
                    href="/resume.pdf"
                    className="px-4 py-1 rounded-full border-2 border-accent text-accent text-sm font-semibold shadow-lg hover:bg-accent hover:text-white will-change-transform transition-all duration-150"
                    aria-label="Download Resume PDF"
                    whileHover={{ scale: 1.04, boxShadow: '0 4px 16px 0 rgba(6,182,212,0.13)', backgroundColor: 'rgba(34,211,238,0.08)', filter: 'brightness(1.04)' }}
                    whileTap={{ scale: 0.98, boxShadow: '0 1.5px 6px 0 rgba(6,182,212,0.08)', backgroundColor: 'rgba(34,211,238,0.14)', filter: 'brightness(0.98)' }}
                    initial={justSwitchedToDesktop ? { opacity: 0, x: 32, scale: 0.92 } : justSwitchedToTablet ? { opacity: 1, x: 0, scale: 1 } : false}
                    animate={justSwitchedToDesktop ? { opacity: 1, x: 0, scale: [0.92, 1], transition: { duration: 0.48, ease: [0.5, 0, 0.2, 1] } } : { opacity: 1, x: 0, scale: 1 }}
                    exit={justSwitchedToTablet ? { opacity: [1, 0.7, 0], x: 32, scale: [1, 0.92], transition: { duration: 0.38, ease: [0.5, 0, 0.2, 1] } } : { opacity: 0, x: 32, scale: 0.92 }}
                    style={{ WebkitTapHighlightColor: 'transparent', backfaceVisibility: 'hidden', boxShadow: 'var(--motion-box-shadow)' }}
                  >
                    <span className="sr-only">Download Resume PDF</span>
                    Resume
                  </motion.a>
                </AnimatePresence>
                {/* Desktop Clock */}
                <AnimatePresence>
                  {!isTabletMode && (
                    <motion.div
                      className="flex items-center px-3 py-1 rounded-full border border-border-subtle/60 text-sm font-mono backdrop-blur-md bg-[color:var(--navbar-pill-background)] text-text-soft"
                      initial={justSwitchedToDesktop ? { opacity: 0, x: 60, z: -40, scale: 0.7, rotateY: 30, boxShadow: '0 0 0 rgba(0,0,0,0)' } : false}
                      animate={justSwitchedToDesktop ? { opacity: [0.7, 1], x: 0, z: 0, scale: [0.7, 1.08, 1], rotateY: [30, 0], boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 6px 32px 0 rgba(139,92,246,0.13)', '0 0 0 rgba(0,0,0,0)'], transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } } : { opacity: 1, x: 0, z: 0, scale: 1, rotateY: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' }}
                      exit={justSwitchedToTablet ? { opacity: [1, 0.7, 0], x: 60, z: -40, scale: [1, 0.7], rotateY: [0, 30], boxShadow: ['0 6px 32px 0 rgba(139,92,246,0.13)', '0 0 0 rgba(0,0,0,0)'], transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } } : { opacity: 0, x: 60, z: -40, scale: 0.7, rotateY: 30, boxShadow: '0 0 0 rgba(0,0,0,0)' }}
                      transition={justSwitchedToDesktop || justSwitchedToTablet ? { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.22 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      style={{ perspective: 1200, boxShadow: 'var(--motion-box-shadow)' }}
                    >
                      <span className="text-accent font-mono mr-1">{time.mdt}</span>
                      <span className="text-text-soft/80 text-xs">MDT</span>
                      <span className="mx-2 text-text-soft/50">|</span>
                      <span className="text-accent2 font-mono mr-1">{time.utc}</span>
                      <span className="text-text-soft/80 text-xs">UTC</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Tablet/Mobile menu button */}
                <AnimatePresence>
                  {isTabletMode && (
                    <motion.button
                      className="rounded-full"
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                      whileHover={{ scale: 1.13, filter: 'brightness(1.25)' }}
                      whileTap={{ scale: 0.97, filter: 'brightness(1.05)' }}
                      style={{ WebkitTapHighlightColor: 'transparent', background: 'transparent', boxShadow: 'none' }}
                      initial={justSwitchedToTablet ? { scale: 1.1, opacity: 0, x: 0, z: -40, rotateY: 0 } : false}
                      animate={justSwitchedToTablet ? { scale: [1, 1.18, 1], opacity: 1, x: 0, z: 0, rotateY: 0 } : {}}
                      transition={justSwitchedToTablet ? { duration: 1.05, ease: [0.4, 0, 0.2, 1], delay: 0.36, scale: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } } : { type: 'spring', stiffness: 420, damping: 18, mass: 1.05 }}
                    >
                      <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
                      {isMobileMenuOpen
                        ? <X className="text-foreground drop-shadow-[0_1px_6px_rgba(34,211,238,0.7)]" size={24} />
                        : (
                          <motion.svg
                            key="hamburger-animated"
                            width="28" height="28" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ background: 'transparent', display: 'block' }}
                          >
                            <motion.line
                              x1="4" y1="7" x2="20" y2="7" strokeWidth="2.5" strokeLinecap="round"
                              animate={isMobileMenuOpen ? {
                                stroke: 'url(#hamburger-gradient)'
                              } : {
                                stroke: baseHamburgerColor
                              }}
                              whileHover={{ stroke: 'url(#hamburger-gradient)' }}
                              whileFocus={{ stroke: 'url(#hamburger-gradient)' }}
                              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            />
                            <motion.line
                              x1="4" y1="12" x2="20" y2="12" strokeWidth="2.5" strokeLinecap="round"
                              animate={isMobileMenuOpen ? {
                                stroke: 'url(#hamburger-gradient)'
                              } : {
                                stroke: baseHamburgerColor
                              }}
                              whileHover={{ stroke: 'url(#hamburger-gradient)' }}
                              whileFocus={{ stroke: 'url(#hamburger-gradient)' }}
                              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            />
                            <motion.line
                              x1="4" y1="17" x2="20" y2="17" strokeWidth="2.5" strokeLinecap="round"
                              animate={isMobileMenuOpen ? {
                                stroke: 'url(#hamburger-gradient)'
                              } : {
                                stroke: baseHamburgerColor
                              }}
                              whileHover={{ stroke: 'url(#hamburger-gradient)' }}
                              whileFocus={{ stroke: 'url(#hamburger-gradient)' }}
                              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            />
                            <defs>
                              <linearGradient id="hamburger-gradient" x1="4" y1="7" x2="20" y2="17" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#9B51E0" />
                                <stop offset="100%" stopColor="#2DD4BF" />
                              </linearGradient>
                            </defs>
                          </motion.svg>
                        )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isTabletMode && isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -20 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                style={{ transitionProperty: 'opacity, transform', willChange: 'opacity, transform' }}
                className="bg-surface-overlay/90 backdrop-blur-md px-4 pt-4 pb-8 space-y-4 text-center text-foreground"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
                  className="flex flex-col items-center space-y-3 md:flex-row md:space-y-0 md:space-x-4 md:justify-center md:items-center"
                >
                  {links.map((link) => (
                    <Link key={link} href={link === 'Blog' ? '/blog' : `#${link.toLowerCase()}`}>
                      <div
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="navbar-btn-mobile px-4 py-1 border rounded-full text-sm font-medium text-text-soft border-border-subtle/60 transition duration-300 backdrop-blur-md bg-[color:var(--navbar-pill-background)] active:text-foreground active:border-accent2 will-change-transform"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }}
                        tabIndex={0}
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
                  <a href="https://github.com/InfamousMorningstar" target="_blank" aria-label="GitHub">
                    <Github className="text-text-soft" size={20} />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/salman-ahmad-6788811b6/" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="text-text-soft" size={20} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="mailto:s.ahmad0147@gmail.com" aria-label="Email">
                    <Mail className="text-text-soft" size={20} />
                    <span className="sr-only">Email</span>
                  </a>
                </motion.div>
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.16, ease: [0.4, 0, 0.2, 1] }}
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle/60 bg-[color:var(--navbar-pill-background)] px-4 py-2 text-sm font-medium text-text-soft backdrop-blur-md transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ WebkitTapHighlightColor: 'transparent', backfaceVisibility: 'hidden', boxShadow: 'var(--motion-box-shadow)' }}
                >
                  {isDarkMode ? <Sun size={18} className="text-text-soft" /> : <Moon size={18} className="text-text-soft" />}
                  <span>{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
                </motion.button>
                {/* Mobile Clock */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.19, ease: [0.4, 0, 0.2, 1] }}
                  className="mt-4 px-3 py-1 inline-block rounded-full border border-border-subtle/60 text-sm font-mono backdrop-blur-md bg-[color:var(--navbar-pill-background)] text-text-soft"
                >
                  <span className="text-accent font-mono mr-1">{time.mdt}</span>
                  <span className="text-text-soft/80 text-xs">MDT</span>
                  <span className="mx-2 text-text-soft/50">|</span>
                  <span className="text-accent2 font-mono mr-1">{time.utc}</span>
                  <span className="text-text-soft/80 text-xs">UTC</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}