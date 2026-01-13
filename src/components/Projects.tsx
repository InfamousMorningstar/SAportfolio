'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Starlight Tours',
    category: 'Interactive Education',
    description: 'An immersive educational platform documenting documented cases of systemic racism. Features WebGL animations, verified academic research, and interactive timelines.',
    tech: ['React 19', 'Three.js', 'WebGL', 'Vite'],
    github: 'https://github.com/InfamousMorningstar/starlight',
    demo: 'https://starlight-eight-ruby.vercel.app/',
    gradient: 'from-blue-600 to-cyan-500',
    number: '01'
  },
  {
    id: 2,
    title: 'Inter-Freight Auto',
    category: 'Enterprise Production',
    description: 'A premium automotive dealership platform with intelligent inquiry tracking, CARFAX integration, and a secure admin dashboard. Built for scale.',
    tech: ['Next.js 15', 'Supabase', 'PostgreSQL', 'Zod'],
    github: '',
    demo: 'https://interfreightautosales.ca',
    gradient: 'from-orange-500 to-red-600',
    number: '02'
  },
  {
    id: 3,
    title: 'Portfolio V2',
    category: 'Personal Brand',
    description: 'High-performance personal site built with Next.js. Features immersive aurora backgrounds, bento-grid layouts, magnetic interactions, and a custom markdown blog engine.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind', 'Vercel'],
    github: 'https://github.com/InfamousMorningstar/portfolio',
    demo: '',
    gradient: 'from-purple-500 to-pink-500',
    number: '03'
  }
];

export default function Projects() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-surface-strong transition-colors duration-500">
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
        </div>

        {/* Section Title - Fixed Position until scroll passes */}
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
            className="absolute top-12 left-6 md:left-12 z-20"
        >
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-foreground">
                SELECTED<br/><span className="text-muted-soft">WORKS</span>
            </h2>
            <div className="mt-4 flex items-center gap-2 text-muted">
                <span className="w-12 h-[1px] bg-muted-soft"></span>
                <span>SCROLL TO EXPLORE</span>
            </div>
        </motion.div>

        {/* Horizontal Scroll Track */}
        <motion.div style={{ x }} className="flex gap-6 md:gap-24 px-6 md:px-24">
          
          {/* Spacer to push first card visible after title fade */}
          <div className="min-w-[50vw] md:min-w-[40vw] flex flex-col justify-center">
             <div className="text-2xl text-muted max-w-sm font-light">
                Engineering digital experiences with a focus on <span className="text-foreground">performance</span>, <span className="text-foreground">accessibility</span>, and <span className="text-foreground">motion</span>.
             </div>
          </div>

          {projects.map((project) => (
            <div key={project.id} className="relative group h-[65vh] md:h-[70vh] w-[85vw] md:w-[60vw] flex-shrink-0">
               {/* Card Container */}
              <div className="w-full h-full relative rounded-[2rem] overflow-hidden bg-surface-card/30 backdrop-blur-xl border border-border-subtle transition-colors hover:border-border-strong shadow-lg">
                    
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${project.gradient} transition-opacity duration-500 group-hover:opacity-20`} />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between z-10">
                        {/* Top */}
                        <div className="flex justify-between items-start">
                             <div className="flex flex-col">
                                <span className={`text-xs md:text-sm font-bold tracking-widest uppercase bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2`}>
                                    {project.category}
                                </span>
                                <h3 className="text-3xl md:text-6xl font-bold text-foreground max-w-lg leading-tight">
                                    {project.title}
                                </h3>
                             </div>
                             <span className="text-5xl md:text-9xl font-black text-muted/10 font-mono">
                                 {project.number}
                             </span>
                        </div>

                        {/* Bottom */}
                        <div>
                             <p className="text-base md:text-2xl text-muted max-w-2xl mb-6 md:mb-8 leading-relaxed line-clamp-4 md:line-clamp-none">
                                 {project.description}
                             </p>

                             <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                                 {project.tech.map(t => (
                                     <span key={t} className="px-3 py-1 md:px-4 md:py-2 rounded-full border border-border-subtle bg-surface-strong text-xs md:text-base text-muted-soft">
                                         {t}
                                     </span>
                                 ))}
                             </div>

                             <div className="flex gap-6 mt-auto">
                                 {project.demo && (
                                     <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 text-foreground font-medium hover:text-accent transition-colors group/link z-20">
                                         Visit Site 
                                         <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                                     </a>
                                 )}
                                 {project.github && (
                                     <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 text-muted hover:text-foreground transition-colors z-20">
                                         <FaGithub size={20} />
                                         Source Code
                                     </a>
                                 )}
                             </div>
                        </div>
                    </div>
              </div>
            </div>
          ))}
          
          {/* Final Spacer */}
          <div className="min-w-[20vw]" />
        </motion.div>
      </div>
    </section>
  );
}
