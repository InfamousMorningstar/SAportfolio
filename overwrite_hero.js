const fs = require('fs');
const path = require('path');

const content = `'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-4 md:px-12 pt-20 bg-background transition-colors duration-500">
      
      {/* Background Noise/Gradient - Adapted for Theming */}
      <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Typography Container - Asymmetric */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto h-[70vh] flex flex-col justify-between">
        
        {/* Top/Left: Massive Name */}
        <motion.div style={{ y: y1 }} className="relative">
            <h1 className="text-[12vw] md:text-[11vw] font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/80 to-muted select-none">
                SALMAN<br/>
                <span className="ml-[10vw] md:ml-[15vw]">AHMAD</span>
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
            
            <div className="flex justify-end gap-6 text-2xl md:text-3xl text-muted-soft">
                <a href="#" className="hover:text-foreground hover:scale-110 transition-all duration-300"><FaGithub /></a>
                <a href="#" className="hover:text-accent hover:scale-110 transition-all duration-300"><FaLinkedin /></a>
                <a href="#" className="hover:text-accent2 hover:scale-110 transition-all duration-300"><FaEnvelope /></a>
            </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-soft flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-[0.2em] font-medium">SCROLL</span>
        <FaChevronDown />
      </motion.div>

    </section>
  );
}
`;

fs.writeFileSync(path.join(process.cwd(), 'src/components/Hero.tsx'), content);
