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
    title: 'Professional Portfolio Website',
    description: 'A meticulously engineered single-page portfolio that marries cutting-edge React 19 / Next.js 15 with a refined, Apple-style aesthetic. It runs on a zero-config, Git-driven CI/CD pipeline (GitHub → Vercel) and surfaces live performance telemetry, accessibility scores, and version metadata right in the UI. The site is built to impress hiring managers and technical leads alike—demonstrating disciplined code structure, type-safe APIs, and pixel-perfect design discipline in one cohesive artefact.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel Analytics', 'Vercel Speed Insights'],
    features: [
      ' Apple-style Liquid-Glass navbar & footer — 200 % blur field, LED under-glow, pointer-safe masking (< 0.01 CLS)',
      ' Motion-driven mobile UX — Framer-Motion hamburger morphs into a staggered menu with buttery easing',
      ' Live dual-timezone pill clock (MDT / UTC) updating every second for global availability',
      ' Decrypt-style hero + floating geometry — cinematic text-reveal plus depth layers, zero layout shift',
      ' Universal neon scrollbar & ISO dark-mode theme with graceful fall-backs across Chrome, Firefox, Safari',
      ' Built-in performance telemetry via Vercel Analytics & Speed Insights badges (real-time Core Web Vitals)',
      ' CI/CD-ready, type-safe stack — Next.js 15, TypeScript, Tailwind, Husky pre-commit hooks auto-deploying to Vercel edge',
      ' Legal-grade compliance footer — dynamic copyright, Latin motto, and Canadian Copyright Act notice',
    ],
    icon: <FaGlobe className="text-accent" />,
    status: 'Live',
    github: 'https://github.com/InfamousMorningstar/SAportfolio',
    demo: ''
  },
  {
    title: 'TrueNAS Home Lab',
    description: 'Enterprise-grade home server with 32TB ZFS storage array, featuring automated backups, VM hosting, and comprehensive monitoring.',
    technologies: ['TrueNAS SCALE', 'ZFS', 'Docker', 'KVM', 'Prometheus', 'Grafana'],
    features: [
      'Two RAID-Z1 vdevs (4 × 4 TB each) configuration',
      'Automated snapshot scheduling',
      'VM hosting for development environments',
      'Real-time performance monitoring',
      'Remote access via VPN tunnel'
    ],
    icon: <FaServer className="text-accent" />,
    status: 'Production',
    github: '',
    demo: ''
  },
  {
    title: 'Media Automation Stack',
    description: 'Fully automated media management system with intelligent downloading, organization, and streaming capabilities.',
    technologies: ['Plex', 'Radarr', 'Sonarr', 'qBittorrent', 'Tautulli', 'Cloudflare'],
    features: [
      'Automated movie/TV show acquisition',
      'Quality profile management',
      'VPN-secured torrenting',
      'Cloudflare tunnel for remote access',
      'Usage analytics and monitoring'
    ],
    icon: <FaRobot className="text-accent2" />,
    status: 'Live',
    github: '',
    demo: ''
  },
  {
    title: 'Infrastructure Dashboard',
    description: 'Real-time monitoring dashboard providing insights into system performance, weather data, and automation status.',
    technologies: ['Grafana', 'Prometheus', 'InfluxDB', 'Node Exporter', 'Weather API'],
    features: [
      '24/7 system monitoring',
      'Custom weather integration',
      'Torrent activity tracking',
      'Plex usage statistics',
      'Alert management system'
    ],
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
    <section id="projects" className="min-h-screen py-20 px-6 relative">
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
              className="project-card card group hover:border-accent/60 transition-all duration-300"
              variants={cardVariants}
              whileHover={{
                scale: 1.025,
                boxShadow: '0 8px 32px 0 rgba(20,184,166,0.10)',
                borderColor: 'var(--tw-accent)',
                filter: 'blur(0px)'
              }}
              transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 1.05 }}
              style={{ willChange: 'transform, box-shadow, border-color, filter' }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="text-4xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {project.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                          project.status === 'Production' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          project.status === 'Live' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-accent transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub size={20} />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-accent2 transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Features */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-accent2 mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start space-x-3 text-muted"
                      >
                        <div className="w-2 h-2 bg-accent2 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
