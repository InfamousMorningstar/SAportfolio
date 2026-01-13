'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCertificate, FaDatabase, FaCode, FaServer, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const education = [
  {
    id: 'EDU-MRU',
    institution: 'Mount Royal University',
    degree: 'Bachelor of Science - CIS',
    period: '2024 - Present',
    status: 'IN_PROGRESS',
    statusColor: 'text-emerald-500', // Adjusted for light/dark visibility
    description: 'Advanced studies in Computer Information Systems optimizing the intersection of business strategy and software engineering.',
    courses: [
      'Data Structures & Algorithms',
      'Database Systems',
      'Software Engineering',
      'Network Security',
      'System Analysis',
      'Web Development'
    ],
    icon: <FaUniversity />,
    stats: {
      gpa: '3.8',
      credits: 'Active',
      level: 'Undergrad'
    }
  },
  {
    id: 'EDU-SAIT',
    institution: 'SAIT',
    degree: 'IT Software Development',
    period: '2020 - 2023',
    status: 'COMPLETED',
    statusColor: 'text-blue-500', // Adjusted for light/dark visibility
    description: 'Intensive polytechnic training focused on full-stack development, database architecture, and enterprise application deployment.',
    courses: [
      'Java Programming',
      'Full Stack Web',
      'Database (MySQL)',
      'Software QA',
      'Mobile App Dev',
      'Project Mgmt'
    ],
    icon: <FaCode />,
    stats: {
      gpa: '3.7',
      credits: 'Diploma',
      level: 'Honors'
    }
  }
];

export default function Education() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="education" className="py-32 relative overflow-hidden transition-colors duration-500">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,120,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6"
          >
            ACADEMIC_RECORDS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-black tracking-tighter text-foreground mb-8"
          >
            EDUCATION
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-[500px]"
            >
              {/* Card Container */}
              <div className="relative w-full h-full transition-all duration-500 hover:-translate-y-2">
                
                {/* Main Card Face */}
                <div className="absolute inset-0 bg-surface-card/30 backdrop-blur-xl border border-border-subtle rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:border-accent/20 transition-all duration-300">
                    {/* Active Status Pulse */}
                    {edu.status === 'IN_PROGRESS' && (
                        <div className="absolute top-0 right-0 p-4">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                        </div>
                    )}

                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-surface-overlay to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Top Section */}
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-surface-strong border border-border-subtle flex items-center justify-center text-3xl text-accent mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                            {edu.icon}
                        </div>
                        <div className="font-mono text-xs text-muted mb-2">{edu.period}</div>
                        <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{edu.institution}</h3>
                        <p className={`font-mono text-sm font-bold tracking-wider ${edu.statusColor}`}>
                            {edu.degree}
                        </p>
                    </div>

                    {/* Middle Section - Description */}
                    <div className="relative z-10 my-4">
                        <p className="text-text-soft text-sm leading-relaxed">
                            {edu.description}
                        </p>
                    </div>

                    {/* Bottom Section - Stats */}
                    <div className="relative z-10 grid grid-cols-3 gap-2 border-t border-border-subtle pt-6 transition-opacity duration-300 group-hover:opacity-0">
                        {Object.entries(edu.stats).map(([key, value]) => (
                            <div key={key}>
                                <div className="text-xs text-muted uppercase tracking-wider mb-1">{key}</div>
                                <div className="text-lg font-mono font-bold text-foreground">{value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Hover Reveal Layer (Coursework) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ 
                            opacity: hoveredIndex === index ? 1 : 0,
                            y: hoveredIndex === index ? 0 : 100 
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-x-0 bottom-0 bg-surface-strong/95 backdrop-blur-md border-t border-border-subtle p-6 z-20"
                    >
                        <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">
                            Relevant Coursework
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {edu.courses.map((course, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs text-text-soft">
                                    <FaCheckCircle className="text-accent/50 text-[10px]" />
                                    <span>{course}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
