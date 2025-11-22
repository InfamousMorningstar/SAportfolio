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
    demo: 'https://inter-freight.vercel.app'
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
export default function Projects() {
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
            Showcase of my technical expertise in DevOps, automation, and infrastructure management
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-1 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card card group hover:border-accent/60 transition-all duration-300 relative overflow-hidden"
              variants={cardVariants}
              whileHover={{
                scale: 1.015,
                boxShadow: '0 8px 32px 0 rgba(139,92,246,0.15)',
                borderColor: 'rgba(139,92,246,0.6)'
              }}
              transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 1.05 }}
              style={{ willChange: 'transform, box-shadow, border-color, filter' }}
            >
              {/* Glitch Border Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 border-2 border-accent/40 rounded-xl animate-pulse"></div>
              </div>

              <div className="grid lg:grid-cols-4 gap-6 relative z-10">
                {/* Left Column - Icon & Title */}
                <div className="lg:col-span-1 flex flex-col items-start">
                  <motion.div
                    className="text-5xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {project.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted mb-4">{project.summary}</p>
                  
                  {/* Status Badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Production' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    project.status === 'Live' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    ● {project.status}
                  </span>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="mt-4 space-y-2 w-full">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-xs">
                          <span className="text-muted capitalize">{key}:</span>
                          <span className="text-accent2 font-semibold font-mono">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Middle Column - Description & Tech Stack */}
                <div className="lg:col-span-2 space-y-4">
                  <p className="text-muted leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack with Icons (Monochrome → Color on Hover) */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent2 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <motion.div
                          key={tech.name}
                          className="px-3 py-1.5 border border-border rounded-lg flex items-center gap-2 filter grayscale group-hover:grayscale-0 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <span className="text-lg">{tech.icon}</span>
                          <span className="text-sm font-medium text-muted group-hover:text-accent transition-colors">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies (Full List) */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent/10 border border-accent/30 rounded text-accent text-xs font-mono hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Features & CTAs */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-accent2 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start space-x-2 text-muted text-sm"
                      >
                        <span className="text-accent2 mt-1">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg text-accent text-sm font-medium transition-all"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub />
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-accent2/10 hover:bg-accent2/20 border border-accent2/30 rounded-lg text-accent2 text-sm font-medium transition-all"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
