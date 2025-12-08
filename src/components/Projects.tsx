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
 * 📁 File    : Projects.tsx
 * 🕒 Updated : Jun 12, 2025
 */
"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer, FaChartLine, FaRobot, FaMedium, FaGlobe } from 'react-icons/fa';

const projects = [
  {
    title: 'Starlight Tours',
    summary: 'Interactive educational website documenting systemic racism and police misconduct in Saskatoon',
    description: 'An immersive, educational platform exploring the Starlight Tours - incidents where Saskatoon police officers abandoned Indigenous men in freezing temperatures during the 1990s-2000s. Features cinematic WebGL animations, comprehensive academic research, and verified sources from the Wright Commission inquiry.',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Framer Motion', 'Three.js', 'Tailwind CSS'],
    techStack: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Vite', icon: '⚡' },
      { name: 'Three.js', icon: '🎨' }
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
    icon: <FaGlobe className="text-accent" />,
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
      { name: 'Next.js', icon: '⚡' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Supabase', icon: '🔒' },
      { name: 'PostgreSQL', icon: '🐘' }
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
    icon: <FaGlobe className="text-accent2" />,
    status: 'Production',
    github: '',
    demo: 'https://interfreightautosales.ca'
  },
  {
    title: 'Professional Portfolio Website',
    summary: 'Meticulously engineered single-page portfolio with Apple-style aesthetic and zero-config CI/CD',
    description: 'A meticulously engineered single-page portfolio that marries cutting-edge React 19 / Next.js 15 with a refined, Apple-style aesthetic. It runs on a zero-config, Git-driven CI/CD pipeline (GitHub → Vercel) and surfaces live performance telemetry, accessibility scores, and version metadata right in the UI.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel Analytics'],
    techStack: [
      { name: 'Next.js', icon: '⚡' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Tailwind', icon: '🎨' },
      { name: 'Framer Motion', icon: '✨' }
    ],
    features: [
      'Liquid-glass navbar with LED under-glow and < 0.01 CLS',
      'Motion-driven mobile UX with Framer Motion',
      'Live dual-timezone clock (MDT/UTC)',
      'Decrypt-style hero with zero layout shift',
      'Real-time Core Web Vitals monitoring'
    ],
    metrics: {
      performance: '100/100',
      uptime: '99.9%',
      users: 'Global'
    },
    icon: <FaGlobe className="text-accent" />,
    status: 'Live',
    github: 'https://github.com/InfamousMorningstar/SAportfolio',
    demo: ''
  },
  {
    title: 'Centauri Plex Automation System',
    summary: '95% automated user lifecycle management for Plex server with 61 active users',
    description: 'Production-grade automation system handling user onboarding, activity tracking, warnings, and automated cleanup with professional email communications throughout.',
    technologies: ['Python', 'Tautulli API', 'Plex API', 'SQLite', 'Cron', 'SMTP'],
    techStack: [
      { name: 'Python', icon: '🐍' },
      { name: 'SQLite', icon: '🗄️' },
      { name: 'Cron', icon: '⏰' },
      { name: 'APIs', icon: '🔌' }
    ],
    features: [
      'Automated user lifecycle management (95% automation)',
      'Real-time activity tracking via Tautulli',
      'Professional email notifications (welcome/warning/removal)',
      'VIP user protection with bypass logic',
      'Zero daily manual intervention required'
    ],
    metrics: {
      automation: '95%',
      users: '61 active',
      uptime: '24/7'
    },
    icon: <FaRobot className="text-accent2" />,
    status: 'Production',
    github: '',
    demo: ''
  },
  {
    title: 'TrueNAS Home Lab',
    summary: 'Enterprise-grade home server with 72TB ZFS storage and comprehensive monitoring',
    description: 'Enterprise-grade home server infrastructure with ZFS storage array, featuring automated backups, VM hosting, Docker containerization, and comprehensive monitoring stack.',
    technologies: ['TrueNAS SCALE', 'ZFS', 'Docker', 'KVM', 'Prometheus', 'Grafana'],
    techStack: [
      { name: 'TrueNAS', icon: '🖥️' },
      { name: 'ZFS', icon: '💾' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Grafana', icon: '📊' }
    ],
    features: [
      'Two RAID-Z1 vdevs (4 × 4TB each) + mirrored boot pool',
      'Automated snapshot scheduling and replication',
      'VM hosting for development environments',
      'Real-time performance monitoring with Grafana',
      'Remote access via VPN tunnel'
    ],
    metrics: {
      storage: '72TB',
      vms: '8 active',
      uptime: '99.8%'
    },
    icon: <FaServer className="text-accent" />,
    status: 'Production',
    github: '',
    demo: ''
  },
  {
    title: 'Infrastructure Monitoring Dashboard',
    summary: 'Real-time observability stack with custom integrations and alerting',
    description: 'Comprehensive monitoring dashboard providing insights into system performance, weather data, torrent activity, and Plex usage with custom alerting.',
    technologies: ['Grafana', 'Prometheus', 'InfluxDB', 'Node Exporter', 'Weather API'],
    techStack: [
      { name: 'Grafana', icon: '📈' },
      { name: 'Prometheus', icon: '🔥' },
      { name: 'InfluxDB', icon: '⚡' },
      { name: 'APIs', icon: '🌐' }
    ],
    features: [
      '24/7 system health monitoring',
      'Custom weather API integration',
      'Torrent activity tracking',
      'Plex usage statistics and analytics',
      'Alert management with Telegram notifications'
    ],
    metrics: {
      metrics: '200+ tracked',
      dashboards: '12 active',
      alerts: '50+ rules'
    },
    icon: <FaChartLine className="text-secondary" />,
    status: 'Active',
    github: '',
    demo: ''
  }
];

// Cinematic minimalist card animation: scale/blur reveal
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22
    }
  }
};

const cardVariants = {
  hidden: { scale: 0.96, filter: 'blur(8px)', opacity: 0.7 },
  visible: {
    scale: 1,
    filter: 'blur(0px)',
    opacity: 1,
    transition: { duration: 0.85, ease: [0.22, 0.61, 0.36, 1] }
  }
};

import { useState, useEffect } from 'react';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  // Prevent body scroll when a card is expanded
  useEffect(() => {
    if (expandedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedProject]);
  return (
    <section id="projects" className="py-16 lg:py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
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

        {/* Desktop: Fan Layout | Mobile: Horizontal Carousel */}
        <div className="hidden md:block relative w-full">
          <div className="relative w-full h-[750px] flex items-center justify-center" style={{ perspective: '2500px' }}>
            {projects.map((project, index) => {
            const isExpanded = expandedProject === index;
            const totalCards = projects.length;
            const middleIndex = (totalCards - 1) / 2;
            
            // Calculate rotation and position for fan layout
            const rotationRange = 50;
            const xOffsetRange = 140;
            const yOffsetRange = 20;
            
            const rotation = isExpanded ? 0 : ((index - middleIndex) / middleIndex) * rotationRange;
            const xOffset = isExpanded ? 0 : (index - middleIndex) * xOffsetRange;
            const yOffset = isExpanded ? 0 : Math.abs(index - middleIndex) * yOffsetRange;
            // Latest project (index 0) should be on top - reverse z-index
            const zIndex = isExpanded ? 50 : (totalCards - index);

            return (
              <motion.div
                key={project.title}
                className="absolute cursor-pointer"
                style={{ 
                  zIndex,
                  transformStyle: 'preserve-3d',
                  width: isExpanded ? '90%' : '380px',
                  filter: isExpanded ? 'none' : (expandedProject !== null ? 'blur(2px)' : 'none'),
                  left: '50%',
                  top: '50%'
                }}
                initial={{ 
                  rotateZ: rotation,
                  x: xOffset - 190,
                  y: yOffset - 280,
                  opacity: 0
                }}
                animate={{ 
                  rotateZ: isExpanded ? 0 : rotation,
                  x: isExpanded ? -190 : xOffset - 190,
                  y: isExpanded ? -280 : yOffset - 280,
                  scale: isExpanded ? 1.02 : 1,
                  opacity: isExpanded ? 1 : (expandedProject !== null ? 0.3 : 1)
                }}
                whileInView={{ opacity: isExpanded ? 1 : (expandedProject !== null ? 0.3 : 1) }}
                viewport={{ once: true }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 220, 
                  damping: 22,
                  opacity: { duration: 0.3 }
                }}
                whileHover={!isExpanded && expandedProject === null ? { 
                  y: yOffset - 280 - 40,
                  scale: 1.08,
                  rotateZ: rotation * 0.7,
                  zIndex: 100,
                  transition: { duration: 0.2, type: 'spring', stiffness: 350 }
                } : {}}
                onClick={() => setExpandedProject(isExpanded ? null : index)}
              >
                <div 
                  className="group transition-all duration-300 relative bg-gradient-to-br from-background via-background to-background/80 backdrop-blur-xl"
                  style={{
                    borderRadius: '20px',
                    aspectRatio: isExpanded ? 'auto' : '2.5/3.5',
                    height: isExpanded ? 'auto' : '560px',
                    maxHeight: isExpanded ? '85vh' : '560px',
                    border: '1px solid rgba(139, 92, 246, 0.15)',
                    boxShadow: isExpanded 
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(139, 92, 246, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)'
                      : '0 20px 40px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
                    pointerEvents: isExpanded || expandedProject === null ? 'auto' : 'none'
                  }}
                >
                  {/* Minimalist Inner Border */}
                  <div className="absolute inset-[1px] rounded-[19px] pointer-events-none" style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 50%, rgba(139,92,246,0.03) 100%)'
                  }}></div>

                  {/* Card Border Glow on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]" style={{
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.05)'
                  }}></div>

                  <div className={`grid ${isExpanded ? 'lg:grid-cols-4' : 'lg:grid-cols-1'} gap-6 relative z-10 transition-all duration-300 ${isExpanded ? 'overflow-y-auto max-h-[85vh]' : 'h-full overflow-hidden'}`}>
                    {/* Collapsed View - Enhanced Playing Card */}
                    {!isExpanded && (
                      <div className="flex flex-col h-full p-8 overflow-hidden">
                        {/* Top Section - Icon & Title */}
                        <div className="flex flex-col items-center space-y-4 mb-6">
                          <div className="text-5xl filter grayscale-0 transition-all duration-300 group-hover:scale-110">
                            {project.icon}
                          </div>
                          <div className="text-center">
                            <h3 className="text-xl font-bold text-accent mb-2 leading-tight">
                              {project.title}
                            </h3>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                              project.status === 'Production' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                              project.status === 'Live' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                              'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            }`}>
                              ● {project.status}
                            </span>
                          </div>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1.5 justify-center">
                            {project.techStack.map((tech) => (
                              <span key={tech.name} className="px-2 py-1 bg-accent/10 border border-accent/20 rounded-md text-[10px] font-medium text-accent flex items-center gap-1">
                                <span>{tech.icon}</span>
                                <span>{tech.name}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Features List */}
                        <div className="flex-1 mb-4">
                          <h4 className="text-xs font-semibold text-accent2 mb-2 uppercase tracking-wide">Features</h4>
                          <ul className="space-y-1.5">
                            {project.features.slice(0, 6).map((feature) => (
                              <li key={feature} className="flex items-start text-[11px] text-muted leading-snug">
                                <span className="text-accent2 mr-1.5 mt-0.5 text-xs">▸</span>
                                <span className="flex-1">{feature}</span>
                              </li>
                            ))}
                            {project.features.length > 6 && (
                              <li className="text-[11px] text-accent/60 italic">+ {project.features.length - 6} more features</li>
                            )}
                          </ul>
                        </div>

                        {/* Metrics */}
                        {project.metrics && (
                          <div className="mb-4 grid grid-cols-3 gap-2">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="text-center p-2 bg-accent/5 rounded-lg border border-accent/10">
                                <div className="text-xs text-accent2 font-mono font-semibold">{value}</div>
                                <div className="text-[9px] text-muted/70 uppercase tracking-wider mt-0.5">{key}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-2 mt-auto">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg text-accent text-xs font-medium transition-all"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaGithub size={12} />
                              <span>Code</span>
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-accent2/10 hover:bg-accent2/20 border border-accent2/30 rounded-lg text-accent2 text-xs font-medium transition-all"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaExternalLinkAlt size={12} />
                              <span>Live</span>
                            </a>
                          )}
                        </div>

                        <p className="text-center text-[10px] text-muted/50 mt-3">Click card for full details</p>
                      </div>
                    )}

                    {/* Expanded View - Enhanced Full Details */}
                    {isExpanded && (
                      <>
                        {/* Close Button - Top Right */}
                        <motion.button
                          className="absolute top-3 right-3 md:top-4 md:right-4 z-50 p-1.5 md:p-2 rounded-full bg-background/80 backdrop-blur-sm border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all"
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedProject(null);
                          }}
                        >
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </motion.button>

                        {/* Left Column - Icon, Title & Metrics */}
                        <div className="lg:col-span-1 flex flex-col items-start space-y-4 md:space-y-6 p-4 md:p-6">
                          {/* Icon with Animated Background */}
                          <div className="relative mx-auto lg:mx-0">
                            <motion.div
                              className="absolute inset-0 bg-accent/10 rounded-full blur-2xl"
                              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            />
                            <motion.div
                              className="text-4xl md:text-5xl lg:text-6xl relative z-10"
                              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            >
                              {project.icon}
                            </motion.div>
                          </div>
                          
                          {/* Title & Status */}
                          <div className="space-y-2 md:space-y-3 text-center lg:text-left">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-accent leading-tight">
                              {project.title}
                            </h3>
                            <span className={`inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium ${
                              project.status === 'Production' ? 'bg-green-500/20 text-green-400 border border-green-500/40' :
                              project.status === 'Live' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40' :
                              'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
                            }`}>
                              ● {project.status}
                            </span>
                          </div>

                          {/* Summary */}
                          <p className="text-xs md:text-sm text-muted/80 leading-relaxed italic border-l-2 border-accent/30 pl-3 md:pl-4">
                            {project.summary}
                          </p>

                          {/* Metrics Grid - Enhanced */}
                          {project.metrics && (
                            <div className="w-full space-y-2 md:space-y-3">
                              <h4 className="text-[10px] md:text-xs font-semibold text-accent2 uppercase tracking-wider">Metrics</h4>
                              <div className="grid grid-cols-1 gap-2 md:gap-3">
                                {Object.entries(project.metrics).map(([key, value]) => (
                                  <motion.div 
                                    key={key} 
                                    className="p-2 md:p-3 bg-gradient-to-br from-accent/5 to-accent2/5 rounded-lg border border-accent/20 hover:border-accent/40 transition-all"
                                    whileHover={{ scale: 1.02, x: 5 }}
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-[10px] md:text-xs text-muted/70 uppercase tracking-wide">{key}</span>
                                      <span className="text-sm md:text-lg font-bold font-mono text-accent2">{value}</span>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Primary Actions */}
                          <div className="w-full space-y-2 pt-3 md:pt-4 border-t border-accent/10">
                            {project.github && (
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-3 md:px-4 py-2 md:py-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-xl text-accent text-sm md:text-base font-medium transition-all"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FaGithub size={16} className="md:hidden" />
                                <FaGithub size={18} className="hidden md:block" />
                                <span>View Code</span>
                              </motion.a>
                            )}
                            {project.demo && (
                              <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-3 md:px-4 py-2 md:py-3 bg-gradient-to-r from-accent2/10 to-accent/10 hover:from-accent2/20 hover:to-accent/20 border border-accent2/30 rounded-xl text-accent2 text-sm md:text-base font-medium transition-all"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FaExternalLinkAlt size={14} className="md:hidden" />
                                <FaExternalLinkAlt size={16} className="hidden md:block" />
                                <span>Live Demo</span>
                              </motion.a>
                            )}
                          </div>
                        </div>

                        {/* Middle Column - Description & Tech Stack */}
                        <div className="lg:col-span-2 space-y-4 md:space-y-6 p-4 md:p-6">
                          {/* Description */}
                          <div>
                            <h4 className="text-xs md:text-sm font-semibold text-accent2 mb-2 md:mb-3 uppercase tracking-wider flex items-center gap-2">
                              <span className="w-1 h-3 md:h-4 bg-accent2 rounded"></span>
                              Overview
                            </h4>
                            <p className="text-muted leading-relaxed text-sm md:text-base">
                              {project.description}
                            </p>
                          </div>

                          {/* Tech Stack with Enhanced Styling */}
                          <div>
                            <h4 className="text-xs md:text-sm font-semibold text-accent2 mb-3 md:mb-4 uppercase tracking-wider flex items-center gap-2">
                              <span className="w-1 h-3 md:h-4 bg-accent2 rounded"></span>
                              Tech Stack
                            </h4>
                            <div className="grid grid-cols-2 gap-2 md:gap-3">
                              {project.techStack.map((tech) => (
                                <motion.div
                                  key={tech.name}
                                  className="p-2 md:p-3 border border-accent/20 rounded-xl flex items-center gap-2 md:gap-3 bg-gradient-to-br from-accent/5 to-transparent hover:border-accent/50 hover:bg-accent/10 transition-all"
                                  whileHover={{ scale: 1.03, x: 5 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <span className="text-xl md:text-2xl">{tech.icon}</span>
                                  <span className="text-xs md:text-sm font-semibold text-foreground">{tech.name}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* All Technologies Pills */}
                          <div>
                            <h4 className="text-xs md:text-sm font-semibold text-accent2 mb-2 md:mb-3 uppercase tracking-wider flex items-center gap-2">
                              <span className="w-1 h-3 md:h-4 bg-accent2 rounded"></span>
                              Libraries
                            </h4>
                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                              {project.technologies.map((tech, idx) => (
                                <motion.span
                                  key={tech}
                                  className="px-2 md:px-3 py-1 md:py-1.5 bg-accent/10 border border-accent/30 rounded-lg text-accent text-[10px] md:text-xs font-mono hover:bg-accent/20 hover:border-accent/50 transition-all cursor-default"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05 }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Column - Features */}
                        <div className="lg:col-span-1 space-y-3 md:space-y-4 p-4 md:p-6 bg-gradient-to-br from-accent/5 to-accent2/5 rounded-xl border-l border-accent/10">
                          <h4 className="text-xs md:text-sm font-semibold text-accent2 mb-3 md:mb-4 uppercase tracking-wider flex items-center gap-2">
                            <span className="w-1 h-3 md:h-4 bg-accent2 rounded"></span>
                            Features
                          </h4>
                          <div className="space-y-2 md:space-y-3 pr-2">
                            {project.features.map((feature, idx) => (
                              <motion.div
                                key={feature}
                                className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-background/50 rounded-lg border border-accent/10 hover:border-accent/30 hover:bg-background/80 transition-all"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ x: 5 }}
                              >
                                <span className="text-accent2 mt-0.5 text-xs md:text-sm">▸</span>
                                <span className="text-xs md:text-sm text-muted leading-relaxed flex-1">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>

        {/* Mobile: Horizontal Scrollable Cards */}
        <div className="md:hidden relative">
          <div className="overflow-x-auto scrollbar-hide pb-8 px-4 -mx-4">
            <div className="flex gap-4" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="flex-shrink-0 w-[85vw] max-w-sm"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-background via-background to-background/80 backdrop-blur-xl rounded-2xl border border-accent/15 p-6 h-full shadow-xl">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{project.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-accent mb-1">{project.title}</h3>
                        <span className={`inline-block px-2 py-1 rounded-full text-[10px] font-medium ${
                          project.status === 'Production' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          project.status === 'Live' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          ● {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-muted leading-relaxed mb-4">{project.summary}</p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-accent2 mb-2 uppercase tracking-wide">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span key={tech.name} className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-[10px] font-medium text-accent flex items-center gap-1">
                            <span>{tech.icon}</span>
                            <span>{tech.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-accent2 mb-2 uppercase tracking-wide">Key Features</h4>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-start text-[11px] text-muted leading-snug">
                            <span className="text-accent2 mr-1.5 mt-0.5">▸</span>
                            <span className="flex-1">{feature}</span>
                          </li>
                        ))}
                        {project.features.length > 4 && (
                          <li className="text-[11px] text-accent/60 italic">+ {project.features.length - 4} more features</li>
                        )}
                      </ul>
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="mb-4 grid grid-cols-3 gap-2">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-accent/5 rounded-lg border border-accent/10">
                            <div className="text-xs text-accent2 font-mono font-semibold">{value}</div>
                            <div className="text-[8px] text-muted/70 uppercase tracking-wider mt-0.5">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg text-accent text-xs font-medium transition-all"
                        >
                          <FaGithub size={12} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-accent2/10 hover:bg-accent2/20 border border-accent2/30 rounded-lg text-accent2 text-xs font-medium transition-all"
                        >
                          <FaExternalLinkAlt size={12} />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="text-xs text-muted/50 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Swipe to explore
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Additional Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted mb-6">Want to see more of my work?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://github.com/InfamousMorningstar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2 px-8 py-3 rounded-full font-semibold"
              whileHover={{ scale: 1.07, boxShadow: '0 4px 24px 0 rgba(139,92,246,0.13)', filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.97, boxShadow: '0 1.5px 6px 0 rgba(139,92,246,0.08)', filter: 'brightness(0.98)' }}
              transition={{ type: 'spring', stiffness: 420, damping: 18, mass: 1.05 }}
              style={{ background: 'linear-gradient(90deg, #8b5cf6, #14b8a6)', color: '#fff', WebkitTapHighlightColor: 'transparent', backfaceVisibility: 'hidden', willChange: 'transform' }}
            >
              <FaGithub />
              <span>View GitHub Profile</span>
            </motion.a>
            <motion.a
              href="https://medium.com/@Infamous_Morningstar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2 px-8 py-3 rounded-full font-semibold border-2 border-accent"
              whileHover={{ scale: 1.07, boxShadow: '0 4px 24px 0 #a855f733', backgroundColor: 'transparent', filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.97, boxShadow: '0 1.5px 6px 0 #a855f722', backgroundColor: 'transparent', filter: 'brightness(0.98)' }}
              transition={{ type: 'spring', stiffness: 420, damping: 18, mass: 1.05 }}
              style={{ WebkitTapHighlightColor: 'transparent', boxShadow: 'none', backfaceVisibility: 'hidden', willChange: 'transform' }}
            >
              <FaMedium />
              <span>Read My Blog</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
