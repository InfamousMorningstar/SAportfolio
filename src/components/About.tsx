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
 * 📁 File    : About.tsx
 * 🕒 Updated : Jun 12, 2025
 */
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Head from 'next/head';
import { useRef } from 'react';
import { FaServer, FaCode, FaDocker, FaLinux, FaNetworkWired, FaCloud, FaUserTie } from 'react-icons/fa';


const skills = [
  {
    category: 'DevOps & Infrastructure',
    icon: <FaServer className="text-accent" />,
    items: ['Docker', 'Kubernetes', 'TrueNAS SCALE', 'Prometheus/Grafana', 'VPN Architecture', 'CI/CD Pipelines']
  },
  {
    category: 'Programming',
    icon: <FaCode className="text-accent2" />,
    items: ['JavaScript', 'Java', 'Python', 'TypeScript', 'HTML/CSS', 'React/Next.js']
  },
  {
    category: 'Systems & Networking',
    icon: <FaLinux className="text-secondary" />,
    items: ['Linux Administration', 'MySQL/PostgreSQL', 'Network Configuration', 'Security Protocols', 'Cloudflare', 'DNS Management']
  },
  {
    category: 'Soft Skills',
    icon: <FaUserTie className="text-accent" />,
    items: ['Customer Service', 'Team Leadership', 'Problem Solving', 'Technical Documentation', 'Project Management', 'Mentoring']
  }
];

// Ultra-premium cinematic animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.28
    }
  }
};

const itemVariants = {
  hidden: { scale: 0.96, filter: 'blur(12px)', opacity: 0.6 },
  visible: {
    scale: 1,
    filter: 'blur(0px)',
    opacity: 1,
    transition: { duration: 1.05, ease: [0.77, 0, 0.175, 1] }
  }
};

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Hologram glitch effects - RGB split on scroll
  const rgbSplitR = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 2, 0, -2, 0]);
  const rgbSplitB = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, -2, 0, 2, 0]);
  const glitchOpacity = useTransform(scrollYProgress, [0.2, 0.25, 0.3], [0, 1, 0]);

  return (
    <>
      <Head>
        {/* Preload the largest image for LCP (HTML attributes, not React props) */}
        <link
          rel="preload"
          as="image"
          href="/images/profile-photo-1600.avif"
        />
      </Head>
      <section ref={sectionRef} id="about" className="py-16 lg:py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Text */}
          <motion.div
            className="space-y-6"
            initial={{ scale: 0.96, filter: 'blur(12px)', opacity: 0.6 }}
            whileInView={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1.05, ease: [0.77, 0, 0.175, 1] }}
            viewport={{ once: true }}
            style={{ willChange: 'transform, filter, opacity', backfaceVisibility: 'hidden' }}
          >
            <div className="text-lg md:text-xl text-muted leading-relaxed space-y-6">
              <p>
                I&apos;m a passionate{' '}
                <span className="text-accent font-semibold">Computer Information Systems student</span>{' '}
                at Mount Royal University with a strong background in{' '}
                <span className="text-accent2 font-semibold">IT support</span>,{' '}
                <span className="text-secondary font-semibold">home server architecture</span>, and{' '}
                <span className="text-accent font-semibold">software development</span>.
              </p>
              
              <p>
                My journey began with a curiosity for technology and evolved into expertise in{' '}
                <span className="text-accent2 font-semibold">DevOps practices</span>,{' '}
                <span className="text-accent font-semibold">container orchestration</span>, and{' '}
                <span className="text-secondary font-semibold">infrastructure automation</span>.
                I&apos;ve built and maintain a sophisticated home lab environment that serves as both
                a learning platform and a production-grade media and monitoring solution.
              </p>
              
              <p>
                Beyond technical skills, I bring{' '}
                <span className="text-accent font-semibold">6+ years of customer service experience</span>{' '}
                and proven leadership abilities from my roles in retail and manufacturing environments.
                This unique combination allows me to bridge technical complexity with clear communication
                and user-focused solutions.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {['Problem Solver', 'Team Player', 'Self-Learner', 'Innovation-Driven'].map((trait) => (
                <motion.span
                  key={trait}
                  className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent/70"
                  variants={itemVariants}
                  whileHover={{ scale: 1.11, y: -6, boxShadow: '0 8px 32px 0 rgba(139,92,246,0.13)', borderColor: 'var(--tw-accent)', backgroundColor: 'rgba(139, 92, 246, 0.22)' }}
                  style={{ willChange: 'transform, box-shadow, border-color, background-color, filter', backfaceVisibility: 'hidden' }}
                  tabIndex={0}
                  aria-label={trait}
                >
                  {trait}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="relative"
            initial={{ scale: 0.96, filter: 'blur(12px)', opacity: 0.6 }}
            whileInView={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1.05, ease: [0.77, 0, 0.175, 1] }}
            viewport={{ once: true }}
            style={{ willChange: 'transform, filter, opacity', backfaceVisibility: 'hidden' }}
          >
            <div className="relative h-[32rem] max-w-sm mx-auto border-2 border-accent/30 rounded-lg overflow-visible hover:border-accent/50 transition-colors duration-300 group">
              {/* Inner container with overflow-hidden for image clipping */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
              {/* RGB Split layers for glitch effect */}
              <motion.div 
                className="absolute inset-0"
                style={{ x: rgbSplitR }}
              >
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/images/profile-photo-320.avif 320w, /images/profile-photo-480.avif 480w, /images/profile-photo-768.avif 768w, /images/profile-photo-1024.avif 1024w, /images/profile-photo-1280.avif 1280w, /images/profile-photo-1600.avif 1600w"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 32rem"
                  />
                  <source
                    type="image/webp"
                    srcSet="/images/profile-photo-320.webp 320w, /images/profile-photo-480.webp 480w, /images/profile-photo-768.webp 768w, /images/profile-photo-1024.webp 1024w, /images/profile-photo-1280.webp 1280w, /images/profile-photo-1600.webp 1600w"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 32rem"
                  />
                  <img
                    src="/images/profile-photo-1600.avif"
                    alt="Ahmad Profile Photo"
                    className="object-cover rounded-lg w-full h-full mix-blend-screen opacity-50"
                    width="512"
                    height="640"
                    loading="eager"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(1) hue-rotate(-30deg) saturate(3)' }}
                    fetchPriority="high"
                  />
                </picture>
              </motion.div>

              {/* Main image */}
              <picture>
                <source
                  type="image/avif"
                  srcSet="/images/profile-photo-320.avif 320w, /images/profile-photo-480.avif 480w, /images/profile-photo-768.avif 768w, /images/profile-photo-1024.avif 1024w, /images/profile-photo-1280.avif 1280w, /images/profile-photo-1600.avif 1600w"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 32rem"
                />
                <source
                  type="image/webp"
                  srcSet="/images/profile-photo-320.webp 320w, /images/profile-photo-480.webp 480w, /images/profile-photo-768.webp 768w, /images/profile-photo-1024.webp 1024w, /images/profile-photo-1280.webp 1280w, /images/profile-photo-1600.webp 1600w"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 32rem"
                />
                <img
                  src="/images/profile-photo-1600.avif"
                  alt="Ahmad Profile Photo"
                  className="object-cover rounded-lg w-full h-full relative z-10"
                  width="512"
                  height="640"
                  loading="eager"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  fetchPriority="high"
                />
              </picture>

              {/* Blue channel offset */}
              <motion.div 
                className="absolute inset-0"
                style={{ x: rgbSplitB }}
              >
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/images/profile-photo-320.avif 320w, /images/profile-photo-480.avif 480w, /images/profile-photo-768.avif 768w, /images/profile-photo-1024.avif 1024w, /images/profile-photo-1280.avif 1280w, /images/profile-photo-1600.avif 1600w"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 32rem"
                  />
                  <source
                    type="image/webp"
                    srcSet="/images/profile-photo-320.webp 320w, /images/profile-photo-480.webp 480w, /images/profile-photo-768.webp 768w, /images/profile-photo-1024.webp 1024w, /images/profile-photo-1280.webp 1280w, /images/profile-photo-1600.webp 1600w"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 32rem"
                  />
                  <img
                    src="/images/profile-photo-1600.avif"
                    alt=""
                    className="object-cover rounded-lg w-full h-full mix-blend-screen opacity-50"
                    width="512"
                    height="640"
                    loading="eager"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(1) hue-rotate(180deg) saturate(3)' }}
                    aria-hidden="true"
                  />
                </picture>
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg z-30"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="card group hover:border-accent/50 transition-all duration-300 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4 relative z-10">
                <motion.div 
                  className="text-2xl mr-3"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))'
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {skillGroup.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {skillGroup.category}
                </h3>
              </div>
              <ul className="space-y-2 relative z-10">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-muted text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </section>
    </>
  );
}
