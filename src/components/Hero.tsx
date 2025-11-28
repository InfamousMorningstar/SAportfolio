'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Magnetic from './Magnetic';

// Rotating Hello World in multiple languages with Apple-style gradient animation
const RotatingHelloWorld = ({ isVisible }: { isVisible: boolean }) => {
  const greetings = [
    { hello: "Hello", world: "World" }, // English
    { hello: "你好", world: "世界" }, // Chinese
    { hello: "Hola", world: "Mundo" }, // Spanish
    { hello: "Bonjour", world: "Monde" }, // French
    { hello: "Hallo", world: "Welt" }, // German
    { hello: "Ciao", world: "Mondo" }, // Italian
    { hello: "こんにちは", world: "世界" }, // Japanese
    { hello: "안녕하세요", world: "세계" }, // Korean
    { hello: "Olá", world: "Mundo" }, // Portuguese
    { hello: "Привет", world: "Мир" }, // Russian
    { hello: "नमस्ते", world: "दुनिया" }, // Hindi
    { hello: "Merhaba", world: "Dünya" }, // Turkish
    { hello: "Sawubona", world: "Mhlaba" }, // Zulu
    { hello: "Hej", world: "Världen" }, // Swedish
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible, greetings.length]);

  const currentGreeting = greetings[currentIndex];
  const text = `${currentGreeting.hello}, ${currentGreeting.world}!`;
  const chars = text.split('');

  return (
    <div className="relative inline-block" style={{ padding: '2rem 2rem 2.5rem 2rem', overflow: 'visible' }}>
      <motion.div
        key={currentIndex}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          fontSize: 'clamp(2.2rem, 8vw, 5.5rem)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          overflow: 'visible',
          lineHeight: 1.4,
          paddingBottom: '0.5rem',
        }}
      >
        {chars.map((char, i) => (
          <motion.span
            key={`${currentIndex}-${i}`}
            initial={{ 
              opacity: 0,
              y: 30,
              filter: 'blur(20px) brightness(0.5)',
              scale: 0.8,
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              filter: 'blur(0px) brightness(1)',
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              filter: 'blur(15px) brightness(0.5)',
              scale: 0.9,
            }}
            transition={{
              duration: 0.9,
              delay: i * 0.04,
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            }}
            style={{
              display: 'inline-block',
              whiteSpace: 'pre',
              color: 'rgb(var(--foreground))',
              willChange: 'transform, opacity, filter',
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      
      {/* Ambient glow layer */}
      <motion.div
        key={`glow-${currentIndex}`}
        className="absolute inset-0 -z-10 pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: [0, 0.15, 0.1],
          scale: [0.9, 1.2, 1.1],
        }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          background: 'radial-gradient(ellipse at center, rgb(var(--foreground) / 0.08) 0%, rgb(var(--foreground) / 0.04) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  );
};

export default function Hero() {
  const [showLoader, setShowLoader] = useState(false);
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    // Always show loader for now
    setShowLoader(true);
    
    const loaderTimeout = setTimeout(() => {
      setLoaderComplete(true);
      setShowLoader(false);
    }, 3200);
    
    return () => clearTimeout(loaderTimeout);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {showLoader && (
        <motion.div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 4.0, ease: [0.33, 1, 0.68, 1] }}
          onAnimationComplete={() => setShowLoader(false)}
          style={{ pointerEvents: showLoader ? 'auto' : 'none' }}
        >
          <div className="relative w-full h-24 flex items-center justify-center">
            {/* DESIGN. - with glitch at 0.5s */}
            <motion.span
              className="absolute text-5xl md:text-6xl lg:text-7xl font-bold gradient-text tracking-tight"
              initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.95 }}
              animate={{ opacity: [0, 1, 1, 0], filter: ['blur(8px)', 'blur(0px)', 'blur(0px)', 'blur(8px)'], scale: [0.95, 1, 1, 0.95] }}
              transition={{ duration: 4.5, times: [0, 0.15, 0.35, 0.50], ease: [0.33, 1, 0.68, 1] }}
            >
              DESIGN.
              {/* Red channel glitch for DESIGN */}
              <motion.span
                className="absolute inset-0 gradient-text font-bold"
                initial={{ opacity: 0 }}
                animate={{
                  x: [0, -3, 2, 0],
                  y: [0, 1, -1, 0],
                  opacity: [0, 0.8, 0.7, 0],
                }}
                transition={{
                  duration: 0.15,
                  delay: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{ 
                  textShadow: '3px 0 #a855f7',
                  mixBlendMode: 'screen',
                }}
              >
                DESIGN.
              </motion.span>
              
              {/* Cyan channel glitch for DESIGN */}
              <motion.span
                className="absolute inset-0 gradient-text font-bold"
                initial={{ opacity: 0 }}
                animate={{
                  x: [0, 2, -3, 0],
                  y: [0, -1, 1, 0],
                  opacity: [0, 0.75, 0.7, 0],
                }}
                transition={{
                  duration: 0.15,
                  delay: 0.52,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{ 
                  textShadow: '-3px 0 #14b8a6',
                  mixBlendMode: 'screen',
                }}
              >
                DESIGN.
              </motion.span>
            </motion.span>
            
            {/* CODE. - with glitch at 2.2s */}
            <motion.span
              className="absolute text-5xl md:text-6xl lg:text-7xl font-bold gradient-text tracking-tight"
              initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.95 }}
              animate={{ opacity: [0, 0, 1, 1, 0], filter: ['blur(8px)', 'blur(8px)', 'blur(0px)', 'blur(0px)', 'blur(8px)'], scale: [0.95, 0.95, 1, 1, 0.95] }}
              transition={{ duration: 4.5, times: [0, 0.50, 0.60, 0.75, 0.85], ease: [0.33, 1, 0.68, 1] }}
            >
              CODE.
              {/* Red channel glitch for CODE */}
              <motion.span
                className="absolute inset-0 gradient-text font-bold"
                initial={{ opacity: 0 }}
                animate={{
                  x: [0, -3, 2, 0],
                  y: [0, 1, -1, 0],
                  opacity: [0, 0.8, 0.7, 0],
                }}
                transition={{
                  duration: 0.15,
                  delay: 2.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{ 
                  textShadow: '3px 0 #a855f7',
                  mixBlendMode: 'screen',
                }}
              >
                CODE.
              </motion.span>
              
              {/* Cyan channel glitch for CODE */}
              <motion.span
                className="absolute inset-0 gradient-text font-bold"
                initial={{ opacity: 0 }}
                animate={{
                  x: [0, 2, -3, 0],
                  y: [0, -1, 1, 0],
                  opacity: [0, 0.75, 0.7, 0],
                }}
                transition={{
                  duration: 0.15,
                  delay: 2.22,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{ 
                  textShadow: '-3px 0 #14b8a6',
                  mixBlendMode: 'screen',
                }}
              >
                CODE.
              </motion.span>
            </motion.span>
            
            {/* REPEAT. - with glitch at 3.5s */}
            <motion.span
              className="absolute text-5xl md:text-6xl lg:text-7xl font-bold gradient-text tracking-tight"
              initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.95 }}
              animate={{ opacity: [0, 0, 1, 1, 1], filter: ['blur(8px)', 'blur(8px)', 'blur(0px)', 'blur(0px)', 'blur(0px)'], scale: [0.95, 0.95, 1, 1, 1] }}
              transition={{ duration: 4.5, times: [0, 0.85, 0.92, 0.96, 1], ease: [0.33, 1, 0.68, 1] }}
            >
              REPEAT.
              {/* Red channel glitch for REPEAT */}
              <motion.span
                className="absolute inset-0 gradient-text font-bold"
                initial={{ opacity: 0 }}
                animate={{
                  x: [0, -3, 2, 0],
                  y: [0, 1, -1, 0],
                  opacity: [0, 0.8, 0.7, 0],
                }}
                transition={{
                  duration: 0.15,
                  delay: 3.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{ 
                  textShadow: '3px 0 #a855f7',
                  mixBlendMode: 'screen',
                }}
              >
                REPEAT.
              </motion.span>
              
              {/* Cyan channel glitch for REPEAT */}
              <motion.span
                className="absolute inset-0 gradient-text font-bold"
                initial={{ opacity: 0 }}
                animate={{
                  x: [0, 2, -3, 0],
                  y: [0, -1, 1, 0],
                  opacity: [0, 0.75, 0.7, 0],
                }}
                transition={{
                  duration: 0.15,
                  delay: 3.52,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{ 
                  textShadow: '-3px 0 #14b8a6',
                  mixBlendMode: 'screen',
                }}
              >
                REPEAT.
              </motion.span>
            </motion.span>
          </div>
        </motion.div>
      )}

      <motion.section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaderComplete ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 text-center py-20 lg:py-24">
            {/* Rotating Hello World in Multiple Languages */}
            <motion.div
              className="mb-8 relative w-full flex items-center justify-center"
              style={{ 
                minHeight: 'clamp(5rem, 14vw, 9rem)',
                padding: '2.5rem 0',
                overflow: 'visible',
                marginBottom: '2rem'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: loaderComplete ? 1 : 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              {loaderComplete && (
                <RotatingHelloWorld isVisible={loaderComplete} />
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: loaderComplete ? 1 : 0 }} transition={{ duration: 0.9, delay: 0.5 }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 font-head">
                <span>I am </span>
                <span className="gradient-text font-bold font-head">Salman </span>
                <span className="gradient-text font-bold font-head relative inline-block" style={{ display: 'inline-block' }}>
                  Ahmad.
                  {/* Red channel glitch */}
                  <motion.span
                    className="absolute inset-0 gradient-text font-bold font-head"
                    animate={{
                      x: [0, -3, 2, -2, 3, 0, -1, 0],
                      y: [0, 1, -1, 0, -1, 1, 0, 0],
                      opacity: [0, 0.8, 0.9, 0.7, 0.85, 0, 0.75, 0],
                      scaleX: [1, 1.02, 0.98, 1.01, 0.99, 1, 1.015, 1],
                    }}
                    transition={{
                      duration: 0.65,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: [0.25, 0.1, 0.25, 1],
                      times: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1]
                    }}
                    style={{ 
                      textShadow: '3px 0 #a855f7, -2px 0 transparent',
                      mixBlendMode: 'screen',
                      filter: 'blur(0.5px)',
                    }}
                  >
                    Ahmad.
                  </motion.span>
                  
                  {/* Cyan channel glitch */}
                  <motion.span
                    className="absolute inset-0 gradient-text font-bold font-head"
                    animate={{
                      x: [0, 2, -3, 3, -2, 0, 2, 0],
                      y: [0, -1, 1, -1, 0, 1, 0, 0],
                      opacity: [0, 0.75, 0.85, 0.7, 0.9, 0, 0.8, 0],
                      scaleX: [1, 0.98, 1.02, 0.99, 1.01, 1, 0.985, 1],
                    }}
                    transition={{
                      duration: 0.65,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: [0.25, 0.1, 0.25, 1],
                      times: [0, 0.15, 0.25, 0.4, 0.55, 0.7, 0.85, 1],
                      delay: 0.05
                    }}
                    style={{ 
                      textShadow: '-3px 0 #14b8a6, 2px 0 transparent',
                      mixBlendMode: 'screen',
                      filter: 'blur(0.5px)',
                    }}
                  >
                    Ahmad.
                  </motion.span>

                  {/* Noise texture overlay */}
                  <motion.span
                    className="absolute inset-0 gradient-text font-bold font-head pointer-events-none"
                    animate={{
                      opacity: [0, 0, 0.15, 0.25, 0.15, 0, 0, 0],
                    }}
                    transition={{
                      duration: 0.65,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "linear",
                      times: [0, 0.2, 0.35, 0.5, 0.65, 0.8, 0.9, 1]
                    }}
                    style={{ 
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                      mixBlendMode: 'overlay',
                      backgroundSize: '100px 100px',
                    }}
                  >
                    Ahmad.
                  </motion.span>

                  {/* Scanline effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                      y: ['-100%', '100%'],
                      opacity: [0, 0.3, 0.3, 0],
                    }}
                    transition={{
                      duration: 0.4,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "linear",
                    }}
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.3) 50%, transparent 100%)',
                      height: '30%',
                      filter: 'blur(2px)',
                    }}
                  />
                </span>
              </h2>
              
              <motion.p
                className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-accent via-accent2 to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: loaderComplete ? 1 : 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
              >
                <span className="inline-block">Full-stack Developer with a DevOps brain and automation DNA.</span>
              </motion.p>
              
              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-12">
                I engineer <span className="text-accent font-semibold">full-stack web applications</span> and <span className="text-accent2 font-semibold">infrastructure that scales</span> — from concept to production.
                <br />
                <span className="mt-2 inline-block">Whether it&apos;s a <span className="text-accent font-semibold">web application</span>, <span className="text-accent2 font-semibold">automated DevOps pipelines</span>, or <span className="text-secondary font-semibold">self-hosted infrastructure</span>, I build systems that <span className="text-accent font-semibold">just work</span>.</span>
                <br />
                <span className="mt-2 inline-block">Clean code. <span className="text-accent2 font-semibold">Secure architecture.</span> <span className="text-accent font-semibold">Zero compromises.</span></span>
              </p>
            </motion.div>

            <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: loaderComplete ? 1 : 0 }} transition={{ duration: 0.9, delay: 0.7 }}>
              <Magnetic strength={0.15}>
                <motion.a
                  href="/blog"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-accent border border-border/50 hover:border-accent/30 rounded-lg transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <span className="font-mono text-xs">💻</span>
                  <span className="font-mono">Read my technical logs</span>
                  <span className="text-accent font-mono text-xs">→</span>
                </motion.a>
              </Magnetic>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 min-h-[4.5rem] xs:min-h-[5.5rem] sm:min-h-[6.5rem]"
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: loaderComplete ? 1 : 0, y: loaderComplete ? 0 : 30 }} 
              transition={{ duration: 0.9, delay: 0.8, ease: [0.77, 0, 0.175, 1] }}
            >
              <Magnetic strength={0.2}>
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
                  <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent2 to-accent opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl" />
                  <span className="relative z-10">Explore My Work</span>
                </motion.button>
              </Magnetic>
              
              <Magnetic strength={0.2}>
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
              </Magnetic>
              
              <Magnetic strength={0.2}>
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
              </Magnetic>
            </motion.div>

            <motion.div
              className="cursor-pointer text-accent text-3xl"
              onClick={scrollToAbout}
              initial={{ opacity: 0, y: 0 }}
              animate={loaderComplete ? { opacity: 1, y: [0, 10, 0] } : { opacity: 0, y: 0 }}
              transition={{ 
                opacity: { duration: 0.7, delay: 0.9, ease: [0.77, 0, 0.175, 1] }, 
                y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } 
              }}
              whileHover={{ scale: 1.2 }}
              style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
            >
              ↓
            </motion.div>

            <div id="hero-floor" className="pointer-events-none absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-fuchsia-500/80 to-transparent" style={{ boxShadow: '0 0 20px rgba(217, 70, 239, 0.5)' }} />
          </div>
      </motion.section>
    </>
  );
}
