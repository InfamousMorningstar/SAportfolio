'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle, FaBriefcase, FaTerminal } from 'react-icons/fa';

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------

const experiences = [
  {
    id: 'EXP-01',
    title: 'Assembler',
    company: 'DIRTT Environmental Solutions',
    period: 'Sep 2023 - Sep 2024',
    location: 'Calgary, AB',
    type: 'Full-Time',
    role_code: 'ASM-Lvl1',
    description: 'Executed high-precision assembly of modular architectural components within a lean manufacturing environment. Focused on quality assurance protocols and production efficiency.',
    metrics: {
      accuracy: '99.8%',
      team_size: '15+',
      efficiency_boost: '15%'
    },
    responsibilities: [
      'Operated precision assembly equipment with 99.8% accuracy rate',
      'Mentored new team members on assembly procedures and safety protocols',
      'Collaborated with engineering to optimize assembly processes',
      'Maintained detailed quality control documentation'
    ],
    tech_stack: ['Precision Assembly', 'QC Protocols', 'Lean Mfg', 'Safety Compliance']
  },
  {
    id: 'EXP-02',
    title: 'Customer Service Rep',
    company: 'Circle K',
    period: 'Jul 2017 - Sep 2023',
    location: 'Calgary, AB',
    type: 'Full-Time',
    role_code: 'CSR-Lead',
    description: 'Orchestrated daily retail operations including inventory management, financial reconciliation, and team leadership. Maintained high-volume transaction integrity.',
    metrics: {
      retention: '95%',
      trainees: '20+',
      tenure: '6 Years'
    },
    responsibilities: [
      'Managed customer transactions and resolved complex service issues',
      'Maintained inventory systems and coordinated stock replenishment',
      'Trained and supervised new employees on company procedures',
      'Ensured compliance with health and safety regulations'
    ],
    tech_stack: ['Inventory Mgmt', 'Leadership', 'Conflict Resolution', 'Financial Rec.']
  }
];

// ----------------------------------------------------------------------
// COMPONENTS
// ----------------------------------------------------------------------

const GlitchText = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-accent opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100">
        {text}
      </span>
    </span>
  );
};

export default function Experience() {
  const [selectedId, setSelectedId] = useState(experiences[0].id);
  const containerRef = useRef(null);
  
  const selectedExp = experiences.find(e => e.id === selectedId) || experiences[0];

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] text-9xl font-black text-foreground opacity-5 select-none">
          EXP
        </div>
        <div className="absolute bottom-[10%] right-[5%] text-[10rem] font-black text-foreground opacity-5 select-none">
          LOGS
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-border-strong pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted mb-4">
              EXPERIENCE
            </h2>
            <div className="flex items-center gap-3 text-accent font-mono text-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              SYSTEM_STATUS: ONLINE
              <span className="text-muted-foreground">// ACCESSING CAREER_DB</span>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-xs text-muted-foreground font-mono mb-1">DATA INTEGRITY</div>
            <div className="text-2xl font-bold font-mono text-accent">100%</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: SELECTION LIST */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedId(exp.id)}
                className={`relative group w-full text-left p-6 transition-all duration-300 border-l-2 ${
                  selectedId === exp.id 
                    ? 'bg-surface-strong border-accent' 
                    : 'bg-transparent border-border-subtle hover:bg-surface-strong hover:border-text-muted'
                }`}
              >
                {/* Active Indicator */}
                {selectedId === exp.id && (
                  <motion.div 
                    layoutId="active-glow"
                    className="absolute inset-0 bg-accent/5 z-0"
                    transition={{ duration: 0.3 }}
                  />
                )}

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`font-mono text-xs px-2 py-1 rounded border ${
                       selectedId === exp.id 
                       ? 'text-accent border-accent/30 bg-accent/10' 
                       : 'text-muted border-border-subtle'
                    }`}>
                      {exp.period}
                    </span>
                    <FaTerminal className={`text-xs ${selectedId === exp.id ? 'text-accent' : 'text-muted'}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-1 transition-colors ${
                    selectedId === exp.id ? 'text-foreground' : 'text-muted group-hover:text-foreground'
                  }`}>
                    {exp.company}
                  </h3>
                  <p className="text-sm text-muted font-mono">{exp.title}</p>
                </div>
              </button>
            ))}

            {/* Decor box */}
            <div className="mt-8 p-6 border border-dashed border-border-subtle rounded-lg bg-surface-strong font-mono text-xs text-muted">
              <p className="mb-2">{`> SCANNING_HISTORY...`}</p>
              <p className="mb-2">{`> FOUND ${experiences.length} RECORDS`}</p>
              <p>{`> LAST_UPDATED: ${new Date().toLocaleDateString()}`}</p>
            </div>
          </div>

          {/* RIGHT COLUMN: DETAILS PANE */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-surface-card/30 backdrop-blur-xl border border-border-subtle p-6 md:p-10 rounded-xl relative overflow-hidden shadow-lg"
              >
                 {/* ID Watermark */}
                 <div className="absolute -top-6 -right-6 text-9xl font-black text-foreground/[0.04] select-none pointer-events-none">
                  {selectedExp.id}
                 </div>

                 <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">{selectedExp.title}</h3>
                        <div className="flex items-center gap-2 text-accent text-lg">
                          <FaBriefcase />
                          <span>{selectedExp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                         <span className="font-mono text-sm text-muted">{selectedExp.location}</span>
                         <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            {selectedExp.type.toUpperCase()}
                         </span>
                      </div>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-accent/50 to-transparent mb-8" />

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                        <div>
                          <h4 className="text-sm font-bold text-muted mb-4 uppercase tracking-wider flex items-center gap-2">
                             <span className="w-4 h-px bg-accent" /> Mission Brief
                          </h4>
                          <p className="text-text-soft leading-relaxed mb-6">
                            {selectedExp.description}
                          </p>
                          
                          <div className="space-y-4">
                            {selectedExp.responsibilities.map((item, i) => (
                              <div key={i} className="flex gap-3 text-sm text-text-muted">
                                <span className="text-accent mt-1">▹</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Stats / Metrics Side */}
                        <div className="space-y-6">
                           <div className="bg-surface-strong border border-border-subtle p-5 rounded-lg">
                              <h4 className="text-xs font-bold text-muted mb-4 uppercase tracking-wider">
                                Key Metrics
                              </h4>
                              <div className="grid grid-cols-2 gap-4">
                                {Object.entries(selectedExp.metrics).map(([key, value]) => (
                                  <div key={key}>
                                    <div className="text-2xl font-mono text-foreground font-bold">{value}</div>
                                    <div className="text-xs text-muted uppercase">{key.replace('_', ' ')}</div>
                                  </div>
                                ))}
                              </div>
                           </div>
                           
                           <div className="bg-surface-strong border border-border-subtle p-5 rounded-lg">
                              <h4 className="text-xs font-bold text-muted mb-4 uppercase tracking-wider">
                                Technologies & Methods
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {selectedExp.tech_stack.map((tech) => (
                                  <span key={tech} className="px-2 py-1 bg-surface-card/30 backdrop-blur-xl border border-border-subtle rounded text-xs text-text-soft font-mono">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                           </div>
                        </div>
                    </div>
                 </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
