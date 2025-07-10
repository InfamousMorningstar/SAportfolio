'use client';

import { motion } from 'framer-motion';
import { FaServer, FaCode, FaDocker, FaLinux, FaNetworkWired, FaCloud, FaUserTie } from 'react-icons/fa';
import Image from 'next/image';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 relative">
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
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
              {['Problem Solver', 'Team Player', 'Self-Learner', 'Innovation-Driven'].map((trait, index) => (
                <motion.span
                  key={trait}
                  className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                >
                  {trait}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[32rem] max-w-sm mx-auto border-2 border-accent/30 rounded-lg overflow-hidden hover:border-accent/50 transition-colors duration-300">
              <Image
                src="/images/profile-photo.JPG"
                alt="Ahmad Profile Photo"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
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
              className="card group hover:border-accent/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {skillGroup.category}
                </h3>
              </div>
              <ul className="space-y-2">
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
  );
}
