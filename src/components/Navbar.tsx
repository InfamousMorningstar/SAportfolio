'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-accent/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => smoothScroll('#home')}
            className="text-2xl font-bold font-mono gradient-text hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SA
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                onClick={() => smoothScroll(link.href)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === link.href.substring(1)
                    ? 'text-accent text-glow'
                    : 'text-muted hover:text-foreground'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent glow"
                    layoutId="activeTab"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Social Links & Resume */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/InfamousMorningstar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/salman-ahmad-6788811b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent2 transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:s.ahmad0147@gmail.com"
              className="text-muted hover:text-secondary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={20} />
            </motion.a>
            
            {/* Resume Button */}
            <motion.a
              href="/Salman_Ahmad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border border-purple-500 text-sm text-white rounded hover:bg-purple-600 hover:text-white transition duration-300 ml-2"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-accent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-current"></div>
              <div className="w-full h-0.5 bg-current"></div>
              <div className="w-full h-0.5 bg-current"></div>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
