'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, ArrowUpRight, Github, Linkedin, Mail, Cloud } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa'; 
import Link from 'next/link';
import { CardWrapper } from './ui/CardWrapper';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [isHoveringEmail, setIsHoveringEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showLegal, setShowLegal] = useState(false);

  // Close legal section when scrolling up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (!showLegal) return;
      
      const currentScrollY = window.scrollY;
      // If scrolling UP significantly (more than 20px delta to prevent sensitive triggering), close formatting
      if (lastScrollY > currentScrollY + 20) {
        setShowLegal(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showLegal]);

  // Real-time clock for "Calgary" timezone (MST/MDT)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'America/Edmonton' // Calgary Timezone
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch Weather for Calgary via Open-Meteo (No API Key needed)
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=51.0447&longitude=-114.0719&current=temperature_2m'
        );
        const data = await response.json();
        if (data.current) {
          setTemperature(`${Math.round(data.current.temperature_2m)}°C`);
        }
      } catch (error) {
        console.error('Failed to fetch weather:', error);
        setTemperature('12°C'); // Fallback purely for aesthetic if API fails
      }
    };
    fetchWeather();
    // Refresh weather every 15 minutes
    const interval = setInterval(fetchWeather, 900000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('s.ahmad0147@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/InfamousMorningstar', icon: <Github className='w-5 h-5' /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/salman-ahmad-698b6a18b', icon: <Linkedin className='w-5 h-5' /> },
    { name: 'Discord', url: 'https://discord.com/users/699763177315106836', icon: <FaDiscord className='w-5 h-5' /> },
  ];

  return (
    <footer id="contact" className="relative w-full z-40 mt-32 pb-6 px-4 md:px-12 overflow-hidden transition-colors duration-500">
      
      <CardWrapper>
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Say <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2">Hello</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto mb-8" />
        </motion.div>

        <div className="relative z-10 flex flex-col md:grid md:grid-cols-12 gap-12">
          
          {/* LEFT: Call to Action + Status */}
          <div className="col-span-12 md:col-span-7 flex flex-col justify-between h-full space-y-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <h3 className="text-xs font-mono text-muted uppercase tracking-widest">Comms Link</h3>
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground/90">
                Let's simplify <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2/80">
                  the complex.
                </span>
              </h2>
            </div>
            
            <div className="flex flex-col space-y-4">
              <p className="text-muted max-w-md text-sm md:text-base">
                Specializing in cloud infrastructure, responsive design, and building the digital future one commit at a time.
              </p>
              
              {/* Email Interaction */}
              <button 
                onClick={handleCopyEmail}
                onMouseEnter={() => setIsHoveringEmail(true)}
                onMouseLeave={() => setIsHoveringEmail(false)}
                className="relative group w-fit cursor-pointer outline-none"
              >
                <div className="flex items-center space-x-3 bg-surface-card hover:bg-surface-strong border border-border-subtle px-5 py-3 rounded-xl transition-all duration-300">
                  <Mail className="w-5 h-5 text-muted-soft" />
                  <span className="text-foreground font-mono text-sm">s.ahmad0147@gmail.com</span>
                  <div className="w-px h-4 bg-border-subtle mx-2" />
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-green-500 text-xs font-bold"
                      >
                        COPIED!
                      </motion.span>
                    ) : (
                      <motion.div
                        key="copy-icon"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <Copy className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT: Navigation & Meta Data */}
          <div className="col-span-12 md:col-span-5 flex flex-col justify-between items-start md:items-end space-y-12">
            
            {/* Clock & Location */}
            <div className="text-right hidden md:block">
              <p className="text-4xl font-mono text-foreground/20 font-light tracking-tighter tabular-nums mb-1">
                {time}
              </p>
              
              {/* Weather & Location Tag */}
               <div className="flex items-center justify-end space-x-2 text-muted text-xs font-mono uppercase">
                  {temperature && (
                    <>
                      <span className="flex items-center text-text-soft">
                        <Cloud className="w-3 h-3 mr-1" />
                        {temperature}
                      </span>
                      <span></span>
                    </>
                  )}
                  <span className="hidden md:inline text-text-soft">51.0447 N, 114.0719 W </span>
                  <span>Calgary, CA. Terra (Sol III)</span>
               </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 w-full md:w-auto">
              <div className="flex flex-col space-y-4">
                 <h3 className="text-xs font-mono text-muted uppercase tracking-widest mb-1">Uplinks</h3>
                 {socialLinks.map((link) => (
                   <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 text-foreground/70 hover:text-foreground transition-colors"
                   >
                     <span className="flex">{link.icon} &nbsp; {link.name}</span>
                     <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                   </a>
                 ))}
              </div>
              
              <div className="flex flex-col space-y-4">
                 <h3 className="text-xs font-mono text-muted uppercase tracking-widest mb-1">Systems</h3>
                 <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">Home</Link>
                 <Link href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">Projects</Link>
                 <Link href="#education" className="text-foreground/70 hover:text-foreground transition-colors">Education</Link>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM: Copyright & Legal */}
        <div className="relative mt-20 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center text-xs text-text-soft font-mono">
            <div className="mb-4 md:mb-0 flex items-center gap-2">
               <span> {currentYear} Salman Ahmad.</span>
               <span className="hidden md:inline text-muted">|</span>
               <span className="text-muted">Mission Status: Nominal</span>
            </div>
            <div className="flex space-x-6">
               <button onClick={() => setShowLegal(!showLegal)} className="hover:text-foreground cursor-pointer transition-colors outline-none">
                 Legal & Terms
               </button>
               <Link href="/sitemap.xml" className="hover:text-foreground cursor-pointer transition-colors">Sitemap</Link>
            </div>
        </div>
        
        {/* Expanded Legal Section */}
        <AnimatePresence>
          {showLegal && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-8 mt-8 border-t border-border-subtle grid grid-cols-1 md:grid-cols-2 gap-8 text-text-soft text-sm font-mono leading-relaxed">
                <div>
                   <h4 className="text-foreground mb-2">Terms of Service</h4>
                   <p>
                     By accessing this portfolio, you agree that the content is provided "as-is" for demonstration purposes. 
                     The design and code implementation are the intellectual property of Salman Ahmad, unless otherwise noted. 
                     Commercial reproduction without permission is prohibited.
                   </p>
                </div>
                <div>
                   <h4 className="text-foreground mb-2">Privacy Policy</h4>
                   <p>
                     This site does not collect personal data beyond anonymous usage analytics (Vercel) to improve performance. 
                     No cookies are used for ad tracking. Any information sent via email is strictly confidential.
                   </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardWrapper>
      
      {/* Decorative "Wire" connecting to bottom */}
      <div className="absolute bottom-0 left-1/2 w-px h-6 bg-gradient-to-b from-transparent to-border-subtle -translate-x-1/2" />
    </footer>
  );
}
