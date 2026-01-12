'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaLayerGroup, FaUniversity, FaMapMarkerAlt, FaGlobeAmericas } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-8xl font-black mb-8 text-foreground tracking-tighter">
            ABOUT <span className="text-muted-soft">ME</span>
          </h2>
          <div className="h-[1px] w-full bg-divider" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          
          {/* 1. Main Bio (Large, Top Left) */}
          <motion.div 
            className="md:col-span-2 row-span-1 bg-surface-card/30 backdrop-blur-xl border border-border-subtle rounded-3xl p-6 md:p-12 relative overflow-hidden group shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <div className="absolute top-0 right-0 p-32 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
             
             <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                The Narrative
             </h3>
             <div className="space-y-6 text-lg md:text-xl text-muted leading-relaxed font-light">
                <p>
                  I am a <span className="text-accent font-medium">Software Development graduate from Southern Alberta Institute of Technology (SAIT)</span> with a strong foundation in building and operating production-ready systems, currently completing a <span className="text-accent2 font-medium">Bachelor of Computer Information Systems</span> at Mount Royal University.
                </p>
                <p>
                  My experience spans <span className="text-foreground">full-stack development</span>, <span className="text-foreground">DevOps-driven infrastructure</span>, and advanced home-lab environments. Backed by years in customer-facing roles, I specialize in delivering sound solutions that act as the bridge between complex engineering and end-user accessibility.
                </p>
             </div>
          </motion.div>

          {/* 2. Profile / Visual (Top Right) */}
          <motion.div 
            className="min-h-[500px] md:min-h-0 md:col-span-1 row-span-2 relative rounded-3xl overflow-hidden border border-border-subtle group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
             {/* Actual Image Background */}
             <div 
               className="absolute inset-0 bg-[url('/images/profile-photo-1600.avif')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
             
             <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 mb-2 text-accent text-sm font-mono uppercase tracking-wider">
                  <FaMapMarkerAlt /> Calgary, AB
                </div>
                <h3 className="text-3xl font-bold text-foreground leading-none">
                  Salman Ahmad
                </h3>
                <p className="text-muted mt-2">Full Stack Engineer</p>
             </div>
          </motion.div>

          {/* 3. Stats / Quick Info (Bottom Left) */}
          <motion.div 
            className="md:col-span-1 row-span-1 bg-surface-card/30 backdrop-blur-xl border border-border-subtle rounded-3xl p-6 md:p-8 flex flex-col justify-between group overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] group-hover:bg-secondary/20 transition-colors" />
             
             <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
               <FaUniversity className="text-secondary" />
               Education
             </h3>
             
             <div className="space-y-6">
                <div>
                   <div className="text-base font-bold text-foreground">Southern Alberta Institute of Technology (SAIT)</div>
                   <div className="text-sm text-muted">Software Development (Graduated)</div>
                </div>
                <div>
                   <div className="text-xl font-bold text-foreground">Mount Royal University</div>
                   <div className="text-sm text-muted">BCIS (In Progress)</div>
                </div>
             </div>
          </motion.div>

          {/* 4. Tech Stack Glitch (Bottom Middle) */}
          <motion.div 
             className="md:col-span-1 row-span-1 bg-surface-strong/30 backdrop-blur-xl border border-border-subtle rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-inner"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
          >
             <div className="absolute inset-0 grid grid-cols-6 gap-2 opacity-10 transform -rotate-12 scale-150 pointer-events-none">
                {Array.from({ length: 24 }).map((_, i) => (
                   <div key={i} className="bg-foreground/20 w-full h-8 rounded-full" />
                ))}
             </div>

             <h3 className="text-xl font-bold text-foreground mb-6 relative z-10 flex items-center gap-2">
                <FaCode className="text-accent" />
                Stack
             </h3>

             <div className="relative z-10 flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'Node.js', 'Docker', 'Kubernetes', 'PostgreSQL', 'Tailwind', 'Python', 'AWS'].map((tech) => (
                   <span key={tech} className="px-3 py-1.5 text-xs font-medium text-foreground bg-background border border-border-subtle rounded-lg hover:border-accent transition-colors cursor-default shadow-sm">
                      {tech}
                   </span>
                ))}
            </div>
            
            <div className="absolute bottom-4 right-4 text-[10px] mobile-only-hide text-muted-soft font-mono">
               SYS.OP.READY
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
