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
 * 📁 File    : Experience.tsx
 * 🕒 Updated : Jun 12, 2025
 */
'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCogs, FaUsers, FaTools } from 'react-icons/fa';

const experiences = [
  {
    title: 'Assembler',
    company: 'DIRTT Environmental Solutions',
    period: 'Sep 2023 - Sep 2024',
    location: 'Calgary, AB',
    type: 'Full-Time',
    description: 'Specialized in precision assembly of modular architectural components with focus on quality control and efficiency optimization.',
    responsibilities: [
      'Operated precision assembly equipment with 99.8% accuracy rate',
      'Mentored new team members on assembly procedures and safety protocols',
      'Collaborated with engineering teams to optimize assembly processes',
      'Maintained detailed quality control documentation',
      'Contributed to lean manufacturing initiatives'
    ],
    skills: ['Precision Assembly', 'Quality Control', 'Team Leadership', 'Process Optimization', 'Safety Protocols'],
    icon: <FaCogs className="text-accent" />,
    achievements: [
      'Achieved top performer status in quality metrics',
      'Led training sessions for 5+ new employees',
      'Contributed to 15% efficiency improvement in assembly line'
    ]
  },
  {
    title: 'Customer Service Representative',
    company: 'Circle K',
    period: 'Jul 2017 - Sep 2023',
    location: 'Calgary, AB',
    type: 'Full-Time',
    description: 'Provided exceptional customer service while managing daily operations, inventory, and team coordination in high-volume retail environment.',
    responsibilities: [
      'Managed customer transactions and resolved complex service issues',
      'Maintained inventory systems and coordinated stock replenishment',
      'Trained and supervised new employees on company procedures',
      'Handled cash management and daily financial reconciliation',
      'Ensured compliance with health and safety regulations'
    ],
    skills: ['Customer Service', 'Inventory Management', 'Cash Handling', 'Team Training', 'Problem Solving'],
    icon: <FaUsers className="text-accent2" />,
    achievements: [
      '6+ years of consistent performance excellence',
      'Trained 20+ new employees with 95% retention rate',
      'Maintained perfect cash handling record',
      'Received multiple customer service recognition awards'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.77, 0, 0.175, 1] }}
          viewport={{ once: true }}
          style={{ backfaceVisibility: 'hidden', willChange: 'transform, opacity' }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto mb-8"></div>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Building valuable skills through diverse professional experiences
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ backfaceVisibility: 'hidden', willChange: 'transform, opacity' }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent via-accent2 to-secondary"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title + experience.company}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              variants={itemVariants}
              style={{ backfaceVisibility: 'hidden', willChange: 'transform, opacity' }}
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-accent to-accent2 rounded-full border-4 border-background z-10 will-change-transform"
                whileHover={{ scale: 1.13, boxShadow: '0 4px 16px 0 rgba(168,85,247,0.13)', backgroundColor: 'rgba(168,85,247,0.08)', filter: 'brightness(1.12)' }}
                whileTap={{ scale: 0.96, boxShadow: '0 1.5px 6px 0 rgba(168,85,247,0.08)', backgroundColor: 'rgba(168,85,247,0.14)', filter: 'brightness(0.98)' }}
                transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                style={{ WebkitTapHighlightColor: 'transparent', backfaceVisibility: 'hidden' }}
              />

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <motion.div
                  className="card group bg-white/90 dark:bg-background/80 border border-border shadow-lg hover:shadow-xl hover:ring-2 hover:ring-accent/20 transition-all duration-200 rounded-2xl px-6 py-5 md:px-8 md:py-7"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                  style={{ backfaceVisibility: 'hidden', willChange: 'transform, opacity' }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="text-2xl"
                        whileHover={{ rotate: 10, scale: 1.08 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 340, damping: 22, mass: 1.1 }}
                      >
                        {experience.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {experience.title}
                        </h3>
                        <p className="text-accent2 font-semibold">{experience.company}</p>
                      </div>
                    </div>
                    <span
                      className="inline-flex items-center justify-center px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/80 dark:bg-accent/10 border border-accent/15 shadow-[0_1px_6px_0_rgba(0,0,0,0.06)] rounded-full text-accent font-semibold shrink-0 text-[0.78rem] sm:text-xs max-w-fit text-center whitespace-nowrap h-6 sm:h-7 leading-none select-none transition-all duration-200"
                      style={{ lineHeight: 1.15, WebkitFontSmoothing: 'antialiased', fontWeight: 600 }}
                    >
                      Full-Time
                    </span>
                  </div>

                  {/* Period & Location */}
                  <div className="flex items-center justify-between text-sm text-muted mb-4">
                    <span className="font-mono">{experience.period}</span>
                    <span>{experience.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent2 mb-3 uppercase tracking-wide">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={responsibility}
                          className="flex items-start space-x-2 text-sm text-muted"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.18, delay: idx * 0.08, ease: [0.4, 0, 0.2, 1] }}
                          viewport={{ once: true }}
                          style={{ backfaceVisibility: 'hidden', willChange: 'transform, opacity' }}
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">
                      Skills Developed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-secondary/10 border border-secondary/30 rounded text-secondary text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <motion.li
                          key={achievement}
                          className="flex items-start space-x-2 text-sm text-muted"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.18, delay: idx * 0.08 + 0.12, ease: [0.4, 0, 0.2, 1] }}
                          viewport={{ once: true }}
                          style={{ backfaceVisibility: 'hidden', willChange: 'transform, opacity' }}
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
