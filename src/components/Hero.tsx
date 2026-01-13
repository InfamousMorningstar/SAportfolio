'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-4 md:px-12 pt-20 transition-colors duration-500">
      
      {/* Background Noise/Gradient - Adapted for Theming */}
      <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Typography Container - Asymmetric */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto h-[70vh] flex flex-col justify-between">
        
        {/* Top/Left: Massive Name */}
        <motion.div style={{ y: y1 }} className="relative">
            <h1 className="text-[17vw] md:text-[min(11vw,210px)] font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/80 to-muted select-none">
                SALMAN<br/>
                <span className="ml-[15vw] md:ml-[min(15vw,290px)]">AHMAD</span>
            </h1>
        </motion.div>

        {/* Bottom/Right: Role & Intro - Offset */}
        <motion.div style={{ y: y2 }} className="self-end text-right max-w-lg md:max-w-2xl relative mt-auto">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
                Software <span className="font-serif italic text-accent">Engineer</span> &<br/>
                Creative <span className="font-serif italic text-accent2">Developer</span>
            </h2>
            <p className="text-muted text-lg md:text-xl leading-relaxed mb-8">
                Crafting digital experiences at the intersection of performance, aesthetics, and engineering. Specialized in Next.js, 
                distributed systems, and interactive design.
            </p>
            
            <div className="flex justify-end mb-8">
                <motion.button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-full bg-accent/5 border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300 backdrop-blur-sm font-medium tracking-wide text-sm"
                >
                    LET'S CONNECT
                </motion.button>
            </div>

            <div className="flex justify-end gap-6 text-2xl md:text-3xl text-muted-soft">
                <a href="https://github.com/InfamousMorningstar" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:scale-110 transition-all duration-300"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/salman-ahmad-6788811b6/" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:scale-110 transition-all duration-300"><FaLinkedin /></a>
                <a href="mailto:s.ahmad0147@gmail.com" className="hover:text-accent2 hover:scale-110 transition-all duration-300"><FaEnvelope /></a>
            </div>
        </motion.div>

      </div>

      {/* Scroll Indicator - Techno Guide */}
      <motion.div 
        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => {
          const nextSection = document.getElementById('about');
          if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-muted-soft/70 uppercase group-hover:text-accent group-hover:tracking-[0.4em] transition-all duration-500">
            Explore
        </span>
        
        {/* Animated Rail */}
        <div className="relative w-[1px] h-12 md:h-16 bg-gradient-to-b from-transparent via-muted/20 to-transparent overflow-hidden">
            <motion.div 
                className="absolute top-0 w-full bg-accent shadow-[0_0_10px_1px_rgba(var(--accent),0.5)]"
                style={{ height: '30%' }}
                animate={{ top: ['-100%', '100%'], opacity: [0, 1, 0] }}
                transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    repeatDelay: 0.1
                }}
            />
        </div>
      </motion.div>

    </section>
  );
}
