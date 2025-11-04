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
 * 📁 File    : Hero.tsx
 * 🕒 Updated : Jun 12, 2025
 */
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingShape = ({ 
  className, 
  delay = 0 
}: { 
  className: string; 
  delay?: number; 
}) => (
  <motion.div
    className={`floating-shape ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: 'easeInOut'
    }}
  />
);

const DecryptText = ({ text, isVisible }: { text: string; isVisible: boolean }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [fullyDecrypted, setFullyDecrypted] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    setIsDecrypting(true);
    setFullyDecrypted(false);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(current =>
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              // Decrypted: purple, will fade to white
              return `<span class='decrypted-fade'>${letter}</span>`;
            }
            // Start decrypting chars as purple
            return `<span style=\"color:#a855f7\">${chars[Math.floor(Math.random() * chars.length)]}</span>`;
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsDecrypting(false);
        setFullyDecrypted(true);
      }

      iteration += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, [text, isVisible]);

  // Add fade-to-white animation when fully decrypted
  return (
    <span
      className={`${isDecrypting ? 'text-accent' : 'text-foreground'}`}
      dangerouslySetInnerHTML={{ __html: displayText }}
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        transition: fullyDecrypted ? 'color 1.5s cubic-bezier(0.77,0,0.175,1)' : undefined
      }}
    />
  );
// Fade-to-white animation for decrypted text
if (typeof window !== 'undefined') {
  const styleId = 'decrypted-fade-style';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      .decrypted-fade {
        color: #a855f7;
        transition: color 1.5s cubic-bezier(0.77,0,0.175,1);
      }
      .fully-decrypted .decrypted-fade {
        color: #fff !important;
      }
    `;
    document.head.appendChild(style);
  }
}
};


const CinematicCursor = ({ onComplete }: { onComplete: () => void }) => (
  <motion.span
    className="text-accent font-mono font-bold fixed left-1/2 top-1/2 z-50 text-[clamp(2.2rem,8vw,5.5rem)] px-0 whitespace-nowrap w-full max-w-full overflow-hidden text-center align-middle leading-none"
    initial={{
      opacity: 0,
      x: '-50%',
      y: '-50%',
      scale: 0.7,
    }}
    animate={{
      opacity: [1, 1, 0],
      scale: [0.7, 1, 1],
      y: ['-50%', '-160%'],
      x: '-50%',
    }}
    transition={{
      opacity: { duration: 1.15, times: [0, 0.7, 1], ease: [0.77, 0, 0.175, 1] },
      scale: { duration: 0.7, times: [0, 1, 1], ease: 'easeInOut' },
      y: { duration: 1.15, ease: [0.77, 0, 0.175, 1] },
      x: { duration: 1.15 },
    }}
    onAnimationComplete={onComplete}
    style={{ pointerEvents: 'none', fontSize: 'clamp(2.2rem, 8vw, 5.5rem)' }}
  >
    &gt;
  </motion.span>
);

const BlinkingCursor = () => (
  <motion.span
    className="text-accent font-mono font-bold text-[clamp(2.2rem,8vw,5.5rem)] px-0 whitespace-nowrap w-full max-w-full overflow-hidden text-center align-middle leading-none"
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 1, repeat: Infinity }}
    style={{ fontSize: 'clamp(2.2rem, 8vw, 5.5rem)' }}
  >
    &gt;
  </motion.span>
);


export default function Hero() {
  const [hasMounted, setHasMounted] = useState(false);
  const [showCinematicCursor, setShowCinematicCursor] = useState(true);
  const [showDecrypt, setShowDecrypt] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Show loader for 1.2s, then mount content
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
      setHasMounted(true);
    }, 1200);
    return () => clearTimeout(loaderTimeout);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    let timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setShowCinematicCursor(false), 1200));
    timers.push(setTimeout(() => setShowDecrypt(true), 1300));
    timers.push(setTimeout(() => setShowSubtext(true), 3300));
    timers.push(setTimeout(() => setShowArrow(true), 4100));
    return () => timers.forEach(clearTimeout);
  }, [hasMounted]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to Featured Projects
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to Contact/Get In Touch
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showLoader) {
    // Loader: three dots in accent color, centered, fade out
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 lg:pt-36">
        <motion.div
          className="flex items-center justify-center h-32"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: [0.77, 0, 0.175, 1] }}
        >
          <span className="dot-loader">
            <motion.span
              className="inline-block w-3 h-3 mx-1 rounded-full bg-accent"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: 0 }}
            />
            <motion.span
              className="inline-block w-3 h-3 mx-1 rounded-full bg-accent"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: 0.2 }}
            />
            <motion.span
              className="inline-block w-3 h-3 mx-1 rounded-full bg-accent"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: 0.4 }}
            />
          </span>
        </motion.div>
      </section>
    );
  }

  // Main content slide-up animation
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 lg:pt-36"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 60, damping: 18, mass: 1.1 }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      {/* Floating Geometric Shapes - hidden on mobile */}
      <div className="hidden sm:block">
        <FloatingShape className="w-20 h-20 border-2 border-accent rounded-lg top-20 left-20" delay={0} />
        <FloatingShape className="w-16 h-16 bg-accent2 rounded-full top-32 right-32" delay={2} />
        <FloatingShape className="w-24 h-24 border-2 border-secondary transform rotate-45 bottom-32 left-32" delay={4} />
        <FloatingShape className="w-12 h-12 bg-accent rounded-lg bottom-20 right-20" delay={6} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center" style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}>
        {/* Main Heading */}
        <div className="mb-8 min-h-[3.5rem] xs:min-h-[4.5rem] sm:min-h-[5.5rem] md:min-h-[6.5rem] flex items-center justify-center">
          <div className="flex items-center justify-center mb-4 w-full whitespace-nowrap" style={{ minHeight: '2.5em' }}>
            <span className="flex items-center w-full justify-center">
              <motion.span
                className="text-center leading-none align-middle whitespace-nowrap w-full max-w-full overflow-hidden text-[clamp(2.2rem,8vw,5.5rem)] px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.77, 0, 0.175, 1] }}
                style={{
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  maxWidth: '100vw',
                  width: '100%',
                  backfaceVisibility: 'hidden',
                  willChange: 'opacity, transform',
                  fontSize: 'clamp(2.2rem, 8vw, 5.5rem)',
                  whiteSpace: 'nowrap',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 'bold',
                }}
              >
                {hasMounted && showCinematicCursor ? (
                  <span className="text-accent font-mono font-bold">&gt;</span>
                ) : hasMounted && showDecrypt ? (
                  <span className="text-accent font-mono font-bold animate-blink">&gt;</span>
                ) : null}
                {hasMounted ? <DecryptText text="Hello, World!" isVisible={showDecrypt} /> : <span style={{ opacity: 0 }}>Hello World</span>}
              </motion.span>
            </span>
          </div>
        </div>
        {/* Subtitle with Terminal Typing Effect & Tagline */}
        <motion.div
          className="mb-12 min-h-[5.5rem] xs:min-h-[6.5rem] sm:min-h-[7.5rem] md:min-h-[8.5rem] flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showSubtext ? 1 : 0, y: showSubtext ? 0 : 30 }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 font-head">
            I am{' '}
            <span className="gradient-text font-bold font-head">Salman Ahmad</span>
          </h2>
          
          {/* Standout Tagline with Glitch Effect */}
          <motion.p 
            className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-accent via-accent2 to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: showSubtext ? 1 : 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span className="inline-block hover:animate-glitch">Systems thinker.</span>{' '}
            <span className="inline-block hover:animate-glitch">Self-host evangelist.</span>{' '}
            <span className="inline-block hover:animate-glitch">Data whisperer.</span>
          </motion.p>
          
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            <span className="text-accent2 font-semibold">DevOps</span>-inclined <span className="text-accent font-semibold">Full-Stack Developer</span>.<br />
            Studying Computer Information Systems. Solving problems. Occasionally breaking things — on purpose.<br />
            Already automating what people do manually.<br />
            Not a pro (yet), but building like one — from <span className="text-accent font-semibold">automation workflows</span> to <span className="text-accent2 font-semibold">scalable systems</span>.
          </p>
        </motion.div>
        
        {/* Blog Hint */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showSubtext ? 1 : 0, y: showSubtext ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.77, 0, 0.175, 1] }}
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-accent border border-border/50 hover:border-accent/30 rounded-lg transition-all duration-300 backdrop-blur-sm bg-background/10 hover:bg-background/20"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <span className="font-mono text-xs">💻</span>
            <span className="font-mono">Read my technical logs</span>
            <span className="text-accent font-mono text-xs">→</span>
          </motion.a>
        </motion.div>
        
        {/* CTA Buttons with Glow & Download Resume */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 min-h-[4.5rem] xs:min-h-[5.5rem] sm:min-h-[6.5rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showSubtext ? 1 : 0, y: showSubtext ? 0 : 30 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
          style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
        >
          {/* Primary CTA with Enhanced Glow */}
          <motion.button
            onClick={scrollToProjects}
            className="btn-primary px-8 py-3 text-lg font-semibold rounded-full will-change-transform relative overflow-hidden group"
            aria-label="Explore My Work section"
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 420, damping: 18, mass: 1.05 }}
            style={{
              background: 'linear-gradient(90deg, #8b5cf6, #14b8a6)',
              color: '#fff',
              WebkitTapHighlightColor: 'transparent',
              backfaceVisibility: 'hidden',
              willChange: 'transform',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)'
            }}
          >
            {/* Hover Glow Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent2 to-accent opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl" />
            <span className="relative z-10">Explore My Work</span>
          </motion.button>
          
          {/* Secondary CTA - Download Resume */}
          <motion.a
            href="/resume.pdf"
            download="Salman_Ahmad_Resume.pdf"
            className="btn-border-pure px-8 py-3 text-lg font-semibold rounded-full will-change-transform relative overflow-hidden group flex items-center gap-2"
            aria-label="Download Resume"
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 420, damping: 18, mass: 1.05 }}
            style={{ 
              WebkitTapHighlightColor: 'transparent', 
              backfaceVisibility: 'hidden', 
              willChange: 'transform',
              boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)'
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="relative z-10">Download Resume</span>
          </motion.a>
          
          {/* Tertiary CTA - Contact */}
          <motion.button
            onClick={scrollToContact}
            className="btn-border-pure px-8 py-3 text-lg font-semibold rounded-full will-change-transform"
            aria-label="Contact Me section"
            whileHover={{ scale: 1.07, y: -2, boxShadow: '0 4px 24px 0 #a855f733', backgroundColor: 'rgba(168, 85, 247, 0.05)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 420, damping: 18, mass: 1.05 }}
            style={{ 
              WebkitTapHighlightColor: 'transparent', 
              backfaceVisibility: 'hidden', 
              willChange: 'transform' 
            }}
          >
            <span className="relative z-10">Contact Me</span>
          </motion.button>
        </motion.div>
        <motion.div
          className="cursor-pointer text-accent text-3xl"
          onClick={scrollToAbout}
          initial={{ opacity: 0, y: 0 }}
          animate={showArrow ? { opacity: 1, y: [0, 10, 0] } : { opacity: 0, y: 0 }}
          transition={{ opacity: { duration: 0.7, delay: 0, ease: [0.77, 0, 0.175, 1] }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
          whileHover={{ scale: 1.2 }}
          style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
        >
          ↓
        </motion.div>
      </div>
    </motion.section>
  );
}