'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#education', label: 'EDUCATION' },
  { href: '#contact', label: 'CONTACT' },
];

const smoothScroll = (targetId: string) => {
  const element = document.querySelector(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mdtTime, setMdtTime] = useState<string>('');
  const [utcTime, setUtcTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking nav links
  const handleNavClick = (href: string) => {
    smoothScroll(href);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-3
        backdrop-blur-lg bg-neutral-900/40 border-b border-white/10
        shadow-[0_4px_30px_rgba(0,0,0,0.1)] ring-1 ring-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Desktop Layout - min-w-0 prevents flex-shrink issues */}
        <div className="hidden xl:grid xl:grid-cols-[auto_1fr_auto] xl:gap-6 xl:items-center py-4 min-w-0">
          
          {/* Left: Logo - Fixed Width */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => handleNavClick('#home')}
              className="text-2xl font-bold text-white/90 tracking-wider 
                transition-all duration-300 hover:text-white 
                hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]
                px-3 py-2 rounded-full
                bg-white/5 hover:bg-white/10 transition-colors duration-300
                shadow-inner border border-white/10 backdrop-blur"
            >
              SA
            </button>
          </motion.div>

          {/* Center: Navigation Links - Flex container with centering */}
          <div className="flex justify-center min-w-0">
            <ul className="flex gap-2 lg:gap-4 items-center">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`
                      px-4 py-1 rounded-full text-sm font-medium
                      bg-white/5 hover:bg-white/10 transition-colors duration-300
                      shadow-inner border border-white/10 backdrop-blur
                      ${activeSection === link.href.substring(1)
                        ? 'ring-2 ring-purple-500/40 text-white' 
                        : 'text-white/80'
                      }
                    `}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: Actions - Fixed Width, No Wrap */}
          <div className="flex items-center gap-3 flex-shrink-0">
            
            {/* Social Icons */}
            <div className="flex items-center gap-1">
              <motion.a
                href="https://github.com/InfamousMorningstar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10 backdrop-blur text-white/80 hover:text-white"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title="GitHub"
              >
                <FaGithub size={18} />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/salman-ahmad-6788811b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10 backdrop-blur text-white/80 hover:text-white"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </motion.a>
              
              <motion.a
                href="mailto:s.ahmad0147@gmail.com"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10 backdrop-blur text-white/80 hover:text-white"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title="Email"
              >
                <FaEnvelope size={18} />
              </motion.a>
            </div>

            {/* Resume Button */}
            <motion.a
              href="/Salman_Ahmad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 rounded-full text-xs font-semibold
                bg-gradient-to-tr from-purple-600/20 to-blue-400/10
                hover:from-purple-700/30 hover:to-blue-500/20
                ring-1 ring-inset ring-white/10 backdrop-blur shadow-md text-white transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>

            {/* Dual-Time Clock */}
            {mounted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-white/80 border border-white/10 backdrop-blur flex gap-1 items-center shadow-inner"
              >
                <span className="text-purple-300 font-semibold">{mdtTime}</span>
                <span className="text-white/40">|</span>
                <span className="text-cyan-300 font-semibold">{utcTime}</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Large Desktop Simplified Layout - for screens with nav + clock */}
        <div className="hidden lg:flex xl:hidden justify-between items-center py-4 gap-4">
          
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('#home')}
            className="text-xl font-bold text-white/90 tracking-wider flex-shrink-0
              px-3 py-2 rounded-full
              bg-white/5 hover:bg-white/10 transition-colors duration-300
              shadow-inner border border-white/10 backdrop-blur"
            whileHover={{ scale: 1.05 }}
          >
            SA
          </motion.button>

          {/* Navigation Links - Compact */}
          <div className="flex gap-3 flex-shrink min-w-0">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-1 rounded-full text-sm font-medium
                  bg-white/5 hover:bg-white/10 transition-colors duration-300
                  shadow-inner border border-white/10 backdrop-blur
                  ${activeSection === link.href.substring(1)
                    ? 'ring-2 ring-purple-500/40 text-white' 
                    : 'text-white/80'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Side - Compact */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Resume */}
            <motion.a
              href="/Salman_Ahmad_Resume.pdf"
              className="px-4 py-1 rounded-full text-xs font-semibold
                bg-gradient-to-tr from-purple-600/20 to-blue-400/10
                hover:from-purple-700/30 hover:to-blue-500/20
                ring-1 ring-inset ring-white/10 backdrop-blur shadow-md text-white transition"
              whileHover={{ scale: 1.05 }}
            >
              Resume
            </motion.a>
            
            {/* Clock - Compact */}
            {mounted && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full 
                bg-white/5 text-xs font-mono text-white/80 border border-white/10 backdrop-blur shadow-inner">
                <span className="text-purple-300">{mdtTime.slice(0, 5)}</span>
                <span className="text-white/40">|</span>
                <span className="text-cyan-300">{utcTime.slice(0, 5)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Medium Screen Layout - Navigation priority */}
        <div className="hidden md:flex lg:hidden justify-between items-center py-4 gap-3">
          
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('#home')}
            className="text-lg font-bold text-white/90 tracking-wider flex-shrink-0
              px-2 py-1 rounded-lg
              bg-white/5 hover:bg-white/10 transition-colors duration-300
              shadow-inner border border-white/10 backdrop-blur"
            whileHover={{ scale: 1.05 }}
          >
            SA
          </motion.button>

          {/* Core Navigation */}
          <div className="flex gap-2 flex-shrink min-w-0">
            {navLinks.slice(0, 4).map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-2 py-2 rounded-full text-xs font-medium uppercase tracking-wider
                  transition-all duration-300 whitespace-nowrap
                  ${activeSection === link.href.substring(1)
                    ? 'text-purple-400 bg-purple-400/20' 
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Essential Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <motion.a
              href="/Salman_Ahmad_Resume.pdf"
              className="px-4 py-1 rounded-full text-xs font-semibold
                bg-gradient-to-tr from-purple-600/20 to-blue-400/10
                hover:from-purple-700/30 hover:to-blue-500/20
                ring-1 ring-inset ring-white/10 backdrop-blur shadow-md text-white transition"
              whileHover={{ scale: 1.05 }}
            >
              Resume
            </motion.a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-neutral-400 hover:text-white 
                transition-all duration-300 hover:bg-white/10"
            >
              <FaBars size={16} />
            </button>
          </div>
        </div>

        {/* Mobile Layout - Minimal, No Overlap */}
        <div className="md:hidden flex justify-between items-center py-4">
          {/* Mobile Logo */}
          <motion.button
            onClick={() => handleNavClick('#home')}
            className="text-lg font-bold text-white/90 tracking-wider
              px-2 py-1 rounded-xl
              bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/15
              shadow-[0_2px_8px_rgba(0,0,0,0.10)] hover:bg-white/15 transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            SA
          </motion.button>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3">
            {/* Resume */}
            <motion.a
              href="/Salman_Ahmad_Resume.pdf"
              className="px-4 py-1 rounded-full text-xs font-semibold
                bg-gradient-to-tr from-purple-600/30 via-blue-500/20 to-white/10
                hover:from-purple-700/40 hover:to-blue-500/30
                ring-2 ring-inset ring-white/20 shadow-[0_2px_8px_rgba(80,80,255,0.10)]
                backdrop-blur-md text-white transition-all duration-300
                border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              Resume
            </motion.a>
            
            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-white/80 hover:text-white
                bg-gradient-to-br from-white/15 via-white/5 to-black/10
                border border-white/15 shadow-[0_2px_8px_rgba(0,0,0,0.10)]
                backdrop-blur-md transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-purple-400/40"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-gradient-to-br from-black/60 via-black/40 to-black/20 backdrop-blur-2xl border-t border-white/10 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              {/* Mobile Navigation Links */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-center px-4 py-3 rounded-full transition-all duration-300 text-sm font-medium
                      bg-gradient-to-br from-white/10 to-white/5 shadow-inner border border-white/10 backdrop-blur
                      ${activeSection === link.href.substring(1)
                        ? 'ring-2 ring-purple-400/50 text-white bg-white/10 shadow-[0_0_8px_2px_rgba(168,85,247,0.15)]' 
                        : 'text-white/80 hover:bg-white/10'
                      }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Mobile Actions Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Social Icons */}
                <div className="flex justify-center gap-3">
                  <a href="https://github.com/InfamousMorningstar" 
                     className="p-3 rounded-full text-white/80 hover:text-white 
                       bg-gradient-to-br from-white/10 to-white/5 shadow-inner border border-white/10 backdrop-blur"
                    title="GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/salman-ahmad-6788811b6/" 
                     className="p-3 rounded-full text-white/80 hover:text-white 
                       bg-gradient-to-br from-white/10 to-white/5 shadow-inner border border-white/10 backdrop-blur"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a href="mailto:s.ahmad0147@gmail.com" 
                     className="p-3 rounded-full text-white/80 hover:text-white 
                       bg-gradient-to-br from-white/10 to-white/5 shadow-inner border border-white/10 backdrop-blur"
                    title="Email"
                  >
                    <FaEnvelope size={18} />
                  </a>
                </div>

                {/* Mobile Clock */}
                {mounted && (
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full 
                      bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-inner backdrop-blur font-mono text-xs text-white/80">
                      <div className="text-center">
                        <div className="text-purple-300 font-semibold drop-shadow">{mdtTime}</div>
                        <div className="text-white/60 text-xs">MDT</div>
                      </div>
                      <span className="text-white/40">|</span>
                      <div className="text-center">
                        <div className="text-cyan-300 font-semibold drop-shadow">{utcTime}</div>
                        <div className="text-white/60 text-xs">UTC</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
