"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Terminal, Wifi, Cpu, Globe, Rocket } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXP", href: "#experience" },
  { name: "EDU", href: "#education" },
  { name: "BLOG", href: "/blog" },
];

// --- Utility Components ---

// 1. Scramble Text Effect Component
const DecryptText = ({ text, isActive }: { text: string; isActive: boolean }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    if (isActive) scramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive]);

  return (
    <span 
      onMouseEnter={scramble} 
      className="font-mono tracking-widest relative z-10 block cursor-default"
    >
      {displayText}
    </span>
  );
};

// 2. Magnetic Button Wrapper
const MagneticWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
        ref={ref}
        className={className}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
        {children}
    </motion.div>
  );
};

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Real-time system stats
  const [sysTime, setSysTime] = useState("--:--:--");
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  
  // Orbital Descent Telemetry
  const [altitude, setAltitude] = useState(100); // 100km to 0km
  const [missionStatus, setMissionStatus] = useState("ORBIT_STABLE");

  // Scroll detection
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Navbar Appearance
      setIsScrolled(currentScrollY > 50);

      // 2. Mission/Altitude Logic
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(currentScrollY / totalHeight, 0), 1);
      
      // Map 0-1 to 100km-0km (Linear descent)
      const currentAlt = Math.floor(100 * (1 - progress));
      setAltitude(currentAlt);

      if (progress < 0.05) {
        setMissionStatus("ORBIT_STABLE");
      } else if (progress > 0.95) {
        setMissionStatus("TOUCHDOWN");
      } else {
        setMissionStatus(currentScrollY > lastScrollY ? "DESCENT_SEQ" : "ASCENT_SEQ");
      }

      lastScrollY = currentScrollY;
      
      // 3. Active Section
      const sections = navLinks.map(l => l.href.substring(1));
      for (const section of sections) {
        if (section === "blog") continue; // Skip checking blog section on home page as it is a separate page
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Time & Coords updater
  useEffect(() => {
    const interval = setInterval(() => {
        const now = new Date();
        setSysTime(now.toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
        setCoordinates({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
        clearInterval(interval);
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* ---------------- DESKTOP HUD ---------------- */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center items-start pt-6 pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
      >
        <div className="pointer-events-auto relative">
            
            {/* The "Island" Container */}
            <motion.div 
                className={`
                    relative backdrop-blur-2xl border border-border-subtle shadow-lg
                    rounded-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                    flex items-center justify-between px-2
                    ${isScrolled ? "bg-background/80 w-[750px] h-14" : "bg-background/60 w-[850px] h-16"}
                `}
            >
                {/* 1. Left Wing: System Status */}
                <div className="flex items-center gap-4 pl-4 min-w-[110px]">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-accent">
                        <Terminal size={12} className="animate-pulse" />
                        <span className="tracking-wider">SYS.ONLINE</span>
                    </div>
                </div>

                {/* 2. Center: Navigation Links */}
                <div className="flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => {
                        // Handle internal links vs external/page links
                        const isInternal = link.href.startsWith("#");
                        const isActive = activeSection === link.href.substring(1);
                        
                        return (
                            <MagneticWrapper key={link.name}>
                                <Link href={link.href} className="relative group px-4 py-2 block">
                                    {isActive && isInternal && (
                                        <motion.div 
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-foreground/5 rounded-full border border-foreground/5"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className={`relative text-xs font-bold transition-colors duration-300 ${isActive ? "text-accent" : "text-muted hover:text-foreground"}`}>
                                        <DecryptText text={link.name} isActive={isActive} />
                                    </span>
                                    
                                    {/* Hover glow */}
                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-accent/5 blur-md transition-opacity duration-300" />
                                </Link>
                            </MagneticWrapper>
                        );
                    })}
                </div>

                {/* 3. Right Wing: Controls & Clock */}
                <div className="flex items-center gap-3 pr-4 min-w-[110px] justify-end">
                    
                    {/* Theme Toggle */}
                    <button 
                        onClick={toggleTheme}
                        className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 hover:text-accent transition-colors border border-foreground/5 text-foreground"
                    >
                        {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
                    </button>

                    <div className="h-4 w-[1px] bg-foreground/10" />

                    {/* Clock */}
                    <div className="text-[10px] font-mono text-foreground/60 tabular-nums">
                        {sysTime}
                    </div>
                </div>

                {/* Scanning Beam Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
                    <div className="absolute top-0 w-[20%] h-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent skew-x-12 animate-scan-slow" />
                </div>
                
                {/* Border Gradient */}
                <div className="absolute inset-0 rounded-full border border-foreground/5 pointer-events-none" />

            </motion.div>
        </div>
      </motion.nav>


      {/* ---------------- MOBILE HUD ---------------- */}
      <motion.nav 
          className="fixed top-0 left-0 right-0 z-50 md:hidden flex justify-between items-center px-6 py-6 pointer-events-none"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
      >
          {/* Logo / Home */}
          <Link href="/" className="relative z-50 pointer-events-auto">
             <div className="flex items-center gap-3 bg-background/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-border-subtle shadow-sm transition-all duration-300">
                {missionStatus === "TOUCHDOWN" ? (
                   <div className="w-2 h-2 bg-emerald-500 rounded-sm" /> 
                ) : missionStatus === "ASCENT_SEQ" ? (
                   <Rocket size={14} className="text-accent animate-pulse" />
                ) : (
                   <Globe size={14} className={`text-accent ${missionStatus === "DESCENT_SEQ" ? 'animate-spin-slow' : ''}`} />
                )}
                
                <div className="flex flex-col leading-none w-[70px]">
                    <span className="text-[10px] font-mono font-bold text-foreground tracking-tighter">
                       {missionStatus === "TOUCHDOWN" ? "SURFACE" : `FL: ${altitude.toString().padStart(3, '0')}`}
                    </span>
                    <span className="text-[8px] font-mono text-muted-soft tracking-widest">
                       {missionStatus}
                    </span>
                </div>
             </div>
          </Link>

          {/* Menu Trigger */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="relative z-50 pointer-events-auto bg-background/50 backdrop-blur-md p-2 rounded-full border border-border-subtle text-foreground active:scale-95 transition-transform shadow-sm"
          >
             <Menu size={20} />
          </button>
      </motion.nav>

      {/* Mobile Fullscreen Menu "Cyberdeck" */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-3xl flex flex-col items-center justify-center"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} 
          >
             {/* Background Grid */}
             <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

             {/* Theme Toggle (Mobile) */}
             <button 
                onClick={toggleTheme}
                className="absolute top-6 left-6 p-4 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors border border-foreground/10"
             >
                {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
             </button>

             {/* Close Button */}
             <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-4 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors border border-foreground/10"
             >
                <X size={24} />
             </button>

             {/* Navigation Items */}
             <div className="flex flex-col gap-6 text-center relative z-10 index-10">
                {navLinks.map((link, i) => (
                    <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
                    >
                        <Link 
                            href={link.href} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted hover:to-accent transition-all tracking-tighter"
                        >
                            {link.name}
                        </Link>
                    </motion.div>
                ))}
             </div>

             {/* Mobile Footer Status */}
             <div className="absolute bottom-12 w-full px-12 flex justify-between text-xs font-mono text-muted-soft">
                 <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2"><Wifi size={10} /> LINK_ESTABLISHED</span>
                    <span className="flex items-center gap-2"><Cpu size={10} /> MEM: OPTIMAL</span>
                 </div>
                 <div className="text-right">
                    <div>{sysTime}</div>
                    <div>{coordinates.x} . {coordinates.y}</div>
                 </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
