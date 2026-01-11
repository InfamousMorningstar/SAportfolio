'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { CardWrapper } from './ui/CardWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: 'Starlight Tours',
    summary: 'Interactive educational website documenting systemic racism and police misconduct in Saskatoon',
    description: 'An immersive, educational platform exploring the Starlight Tours - incidents where Saskatoon police officers abandoned Indigenous men in freezing temperatures during the 1990s-2000s. Features cinematic WebGL animations, comprehensive academic research, and verified sources from the Wright Commission inquiry.',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Framer Motion', 'Three.js', 'Tailwind CSS'],
    techStack: [
      { name: 'React', icon: '' },
      { name: 'TypeScript', icon: '' },
      { name: 'Vite', icon: '' },
      { name: 'Three.js', icon: '' }
    ],
    features: [
      'Custom LaserFlow WebGL hero animation with interactive particles',
      'Mac OS-style navigation with magnification effects',
      'Interactive timeline documenting key events and victims',
      'Comprehensive sources with links to academic papers and reports',
      'Verified quotes from Justice David Wright Commission',
      'Responsive design with snow effects and cursor trails',
      'Educational focus on reconciliation and systemic change',
      'Keyboard navigation support (arrow keys)'
    ],
    metrics: {
      research: 'Academic',
      sources: '25+ verified',
      team: '9 members'
    },
    icon: '',
    status: 'Live',
    github: 'https://github.com/InfamousMorningstar/starlight',
    demo: 'https://starlight-eight-ruby.vercel.app/'
  },
  {
    title: 'Inter-Freight Auto Sales',
    summary: 'Production-ready automotive dealership with advanced vehicle management and secure admin dashboard',
    description: 'A premium, enterprise-grade car dealership web application featuring intelligent inquiry tracking, smooth 3D animations, CARFAX integration, Google Reviews, and a fully secure admin dashboard. Built with Next.js 15 and Supabase for optimal performance, security, and scalability.',
    technologies: ['Next.js 15', 'TypeScript', 'Supabase', 'Framer Motion', 'Zod', 'PostgreSQL'],
    techStack: [
      { name: 'Next.js', icon: '' },
      { name: 'TypeScript', icon: '' },
      { name: 'Supabase', icon: '' },
      { name: 'PostgreSQL', icon: '' }
    ],
    features: [
      '3D parallax hero with real-time Calgary weather widget',
      'Advanced filtering: search by make, price, mileage, transmission',
      'Intelligent inquiry system with vehicle tracking and rate limiting',
      'CARFAX report integration with 30-day caching',
      'Secure admin dashboard with CSRF protection and RLS policies',
      'Bulk image upload with optimization and CDN delivery',
      'Google Reviews infinite marquee with hover pause',
      'Role-based authentication with protected routes'
    ],
    metrics: {
      security: 'CSRF + RLS',
      performance: '95+ Lighthouse',
      capacity: '50 vehicles'
    },
    icon: '',
    status: 'Production',
    github: '',
    demo: 'https://interfreightautosales.ca'
  },
  {
    title: 'Professional Portfolio Website',
    summary: 'Meticulously engineered single-page portfolio with Apple-style aesthetic and zero-config CI/CD',
    description: 'A meticulously engineered single-page portfolio that marries cutting-edge React 19 / Next.js 15 with a refined, Apple-style aesthetic. It runs on a zero-config, Git-driven CI/CD pipeline (GitHub  Vercel) and surfaces live performance telemetry, accessibility scores, and version metadata right in the UI.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel Analytics'],
    techStack: [
      { name: 'Next.js', icon: '' },
      { name: 'TypeScript', icon: '' },
      { name: 'Tailwind', icon: '' },
      { name: 'Framer Motion', icon: '' }
    ],
    features: [
      'Liquid-glass navbar with LED under-glow and < 0.01 CLS',
      'Motion-driven mobile UX with Framer Motion',
      'Live dual-timezone clock (MDT/UTC)',
      'Decrypt-style hero with zero layout shift',
      'Real-time Core Web Vitals monitoring'
    ],
    metrics: {
      ui: 'Glassmorphism',
      perf: '100/100',
      deploy: 'Auto C/CD'
    },
    icon: '',
    status: 'Live',
    github: 'https://github.com/InfamousMorningstar/portfolio',
    demo: 'https://portfolio.ahmxd.net'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="py-16 lg:py-20 px-6 relative">
      <CardWrapper>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto mb-8"></div>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Showcase of my technical expertise in Web Development, DevOps, automation, and infrastructure management
          </p>
        </motion.div>

        {/* Standard Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card group relative flex flex-col h-full cursor-pointer hover:border-accent/40 transition-all duration-300"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                console.log('Clicked project:', index);
                setSelectedProject(index);
              }}
            >
              {/* Minimalist Inner Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                   <span className="text-4xl">{project.icon}</span>
                   <span className="px-2 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider border border-white/10 bg-white/5 text-zinc-400">
                     {project.status}
                   </span>
                </div>

                {/* Title & Summary */}
                <div>
                   <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors mb-2">{project.title}</h3>
                   <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">{project.summary}</p>
                </div>

                {/* Tech Tags - Limit to 3 */}
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                   {project.technologies.slice(0, 3).map(t => (
                      <span key={t} className="text-xs text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded border border-white/5">
                        {t}
                      </span>
                   ))}
                   {project.technologies.length > 3 && (
                      <span className="text-xs text-zinc-600 px-1 py-1">+{project.technologies.length - 3}</span>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {mounted && createPortal(
          <AnimatePresence>
            {selectedProject !== null && (
              <motion.div 
                 key="modal"
                 className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 onClick={() => setSelectedProject(null)}
              >
                 <motion.div 
                   className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"
                   initial={{ scale: 0.9, y: 20 }}
                   animate={{ scale: 1, y: 0 }}
                   exit={{ scale: 0.9, y: 20 }}
                   onClick={(e) => e.stopPropagation()}
                 >
                   <button 
                     onClick={() => setSelectedProject(null)}
                     className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-50"
                   >
                     <span className="sr-only">Close</span>
                     ✕
                   </button>

                   <div className="grid md:grid-cols-3 gap-8">
                      {/* Sidebar / Top Info */}
                      <div className="md:col-span-1 space-y-6">
                          <div className="text-6xl">{projects[selectedProject].icon}</div>
                          <div>
                             <h3 className="text-2xl font-bold text-white mb-2">{projects[selectedProject].title}</h3>
                             <div className="flex flex-wrap gap-2">
                                {projects[selectedProject].status && (
                                  <span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">
                                     {projects[selectedProject].status}
                                  </span>
                                )}
                             </div>
                          </div>
                          
                          {/* Links */}
                          <div className="flex flex-col gap-3">
                              {projects[selectedProject].github && (
                                 <a href={projects[selectedProject].github} target="_blank" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                                    <FaGithub /> View Source
                                 </a>
                              )}
                              {projects[selectedProject].demo && (
                                 <a href={projects[selectedProject].demo} target="_blank" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                                    <FaExternalLinkAlt /> Live Demo
                                 </a>
                              )}
                          </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2 space-y-8">
                         <div>
                            <h4 className="text-lg font-bold text-white mb-3">About</h4>
                            <p className="text-zinc-400 leading-relaxed">{projects[selectedProject].description}</p>
                         </div>

                         <div>
                            <h4 className="text-lg font-bold text-white mb-3">Key Features</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                               {projects[selectedProject].features.map(f => (
                                  <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                                     <span className="text-accent mt-1">›</span>
                                     {f}
                                  </li>
                               ))}
                            </ul>
                         </div>

                         <div>
                            <h4 className="text-lg font-bold text-white mb-3">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                               {projects[selectedProject].technologies.map(t => (
                                  <span key={t} className="px-3 py-1.5 rounded bg-white/5 border border-white/5 text-sm text-zinc-300">
                                     {t}
                                  </span>
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                 </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      </CardWrapper>
    </section>
  );
}
