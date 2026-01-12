'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaServer, FaGamepad, FaAtom, FaTv, FaArrowRight } from 'react-icons/fa';
import { cn } from '@/lib/utils';

const interests = [
  {
    id: 'homelab',
    title: 'Home Lab',
    fullTitle: 'Home Lab & Automation',
    icon: <FaServer className="text-4xl" />,
    description: 'Outside of formal coursework, I spend significant time tinkering with my TrueNAS home server. I treat it as a personal data center—experimenting with storage arrays, container orchestration, and automating daily workflows.',
    tags: ['TrueNAS', 'ZFS', 'Docker', 'Network Security'],
    color: 'from-emerald-400 to-teal-500',
    bg: 'bg-emerald-500/10'
  },
  {
    id: 'gaming',
    title: 'Gaming',
    fullTitle: 'Competitive Gaming',
    icon: <FaGamepad className="text-4xl" />,
    description: 'I’m an avid gamer with a focus on high-stakes competitive play. Whether it’s the tactical speed of Apex Legends or the grand scale of Battlefield 6, I enjoy environments that test reflexes and strategic decision-making.',
    tags: ['Apex Legends', 'Battlefield 6', 'GTA Online', 'Strategy'],
    color: 'from-violet-400 to-purple-500',
    bg: 'bg-violet-500/10'
  },
  {
    id: 'physics',
    title: 'Physics',
    fullTitle: 'Cosmology & Physics',
    icon: <FaAtom className="text-4xl" />,
    description: 'A long-standing fascination with the fundamental nature of reality. I consume content related to general relativity, quantum mechanics, and the theoretical origins of the universe.',
    tags: ['Relativity', 'Quantum Mechanics', 'Cosmology', 'Theory'],
    color: 'from-cyan-400 to-blue-500',
    bg: 'bg-cyan-500/10'
  },
  {
    id: 'media',
    title: 'Media',
    fullTitle: 'Anime & Storytelling',
    icon: <FaTv className="text-4xl" />,
    description: 'I regularly unwind with anime, appreciating unique visual art styles and complex narrative structures often found in the medium. It serves as a creative reset from technical work.',
    tags: ['Visual Arts', 'Storytelling', 'J-Culture', 'Animation'],
    color: 'from-rose-400 to-pink-500',
    bg: 'bg-rose-500/10'
  }
];

export default function Interests() {
  const [activeTab, setActiveTab] = useState(interests[0]);

  return (
    <section id="interests" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Interests & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400">Curiosity</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl">
             Beyond the terminal: a look into what keeps me tinkering, playing, and learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Navigation Column (Left) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {interests.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={cn(
                  "relative group flex items-center p-4 rounded-xl text-left transition-all duration-300 min-w-[160px] lg:min-w-0 border",
                  activeTab.id === item.id 
                    ? 'bg-surface-strong border-border-subtle' 
                    : 'bg-transparent border-transparent hover:bg-surface-card/80'
                )}
              >
                {/* Active Indicator Line */}
                {activeTab.id === item.id && (
                  <motion.div
                    layoutId="active-glow"
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-5`}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Icon Box */}
                <div className={cn(
                  "mr-4 p-2 rounded-lg transition-colors duration-300",
                  activeTab.id === item.id 
                    ? 'bg-surface-card/30 backdrop-blur-md border border-border-subtle text-foreground' 
                    : 'text-muted-soft group-hover:text-muted'
                )}>
                   <div className="text-lg">
                      {item.icon}
                   </div>
                </div>

                {/* Text */}
                <span className={cn(
                  "text-lg font-medium transition-colors duration-300",
                  activeTab.id === item.id ? 'text-foreground' : 'text-muted-soft group-hover:text-muted'
                )}>
                  {item.title}
                </span>

                {/* Arrow (Desktop Only) */}
                {activeTab.id === item.id && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden lg:block ml-auto text-muted-soft"
                  >
                    <FaArrowRight size={12} />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Display Panel (Right) */}
          <div className="lg:col-span-8 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative z-10 h-full"
              >
                {/* Glass Card */}
                <div className="group h-full p-6 md:p-12 rounded-[2.5rem] bg-surface-card/30 backdrop-blur-xl border border-border-subtle relative overflow-hidden">
                  
                  {/* Background Gradient Blob */}
                  <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${activeTab.color} rounded-full blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity duration-1000`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className={`p-4 rounded-2xl ${activeTab.bg} border border-white/5`}>
                         <div className={`text-4xl bg-gradient-to-br ${activeTab.color} bg-clip-text text-transparent`}>
                            {activeTab.icon}
                         </div>
                      </div>
                      <div className="text-6xl md:text-8xl font-bold text-foreground/5 absolute top-8 right-8 select-none">
                        0{interests.indexOf(activeTab) + 1}
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {activeTab.fullTitle}
                    </h3>
                    
                    <p className="text-lg md:text-xl text-muted leading-relaxed mb-12 max-w-2xl">
                      {activeTab.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-auto flex flex-wrap gap-3">
                      {activeTab.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 rounded-full text-sm font-medium bg-surface-strong border border-border-subtle text-muted">
                          #{tag}
                        </span>
                      ))}
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
