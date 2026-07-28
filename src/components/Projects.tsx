'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Starlight Tours',
    shot: '/works/starlight.webp',
    category: 'Interactive Education',
    description: 'An immersive educational platform documenting documented cases of systemic racism. Features WebGL animations, verified academic research, and interactive timelines.',
    tech: ['React 19', 'Three.js', 'WebGL', 'Vite'],
    github: 'https://github.com/InfamousMorningstar/starlight',
    demo: 'https://starlight-eight-ruby.vercel.app/',
    gradient: 'from-blue-600 to-cyan-500',
    number: '01'
  },
  {
    id: 2,
    title: 'Inter-Freight Auto',
    shot: '/works/interfreight.webp',
    category: 'Enterprise Production',
    description: 'A premium automotive dealership platform with intelligent inquiry tracking, CARFAX integration, and a secure admin dashboard. Built for scale.',
    tech: ['Next.js 15', 'Supabase', 'PostgreSQL', 'Zod'],
    github: '',
    demo: 'https://interfreightautosales.ca',
    gradient: 'from-orange-500 to-red-600',
    number: '02'
  },
  {
    id: 3,
    title: 'CDN DayZ',
    shot: '/works/cdndayz.webp',
    category: 'Community Platform',
    description: 'Production DayZ community platform with live server status, launcher-verified mod inventories, official news ingestion, and a searchable diagnostics hub for DayZ error codes.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind', 'GameDig'],
    github: '',
    demo: 'https://cdndayz.com',
    gradient: 'from-emerald-500 to-teal-500',
    number: '03'
  },
  {
    id: 4,
    title: 'Nitor',
    shot: '/works/nitor.webp',
    category: 'Product Design',
    description: 'A desktop-first habit tracker with a forgiving streak model — no streak anxiety — and insights that explain why you succeed, not just whether. Supabase auth, row-level-secured persistence, and a GSAP scroll story.',
    tech: ['Next.js 16', 'Supabase', 'GSAP', 'Zustand'],
    github: 'https://github.com/InfamousMorningstar/Nitor',
    demo: 'https://nitor-peach.vercel.app',
    gradient: 'from-amber-400 to-yellow-600',
    number: '04'
  },
  {
    id: 5,
    title: 'RunOrNope',
    shot: '/works/runornope.webp',
    category: 'Security Tooling',
    description: 'A Windows static analyzer that explains what an untrusted executable appears capable of — without ever running or uploading it. Fail-closed isolation core and PE/CLR analysis that cites exact imports, strings, and IL as evidence.',
    tech: ['C#', '.NET', 'Static Analysis', 'Windows'],
    github: 'https://github.com/InfamousMorningstar/RunOrNope',
    demo: '',
    gradient: 'from-zinc-400 to-red-600',
    number: '05'
  }
];

export default function Projects() {
  const targetRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  /*
   * How far the track must actually travel, in pixels.
   *
   * This used to be a hardcoded "-100%", which is 100% of the *track's own
   * width* — so at full progress the whole track had translated clear off the
   * left edge and the last ~22% of the section was an empty viewport. The track
   * only ever needs to move far enough to bring its right edge flush with the
   * viewport's, which is scrollWidth - innerWidth. Measuring it means the pan
   * always ends on the last card and the dead zone cannot come back.
   */
  const [maxTravel, setMaxTravel] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => setMaxTravel(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();

    // scrollWidth changes with the viewport (cards are sized in vw), so watch
    // the element itself rather than trusting a single measurement on mount.
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTravel]);

  /*
   * Section height sets the pan *speed*, not its extent — the travel above is
   * clamped to what the track actually needs, so a generous height just pans
   * more slowly instead of scrolling into nothing.
   *
   * Derived from the card count so adding a project extends the scroll by one
   * card's worth automatically. Mobile gets more per card because the cards are
   * far wider there (85vw vs 44vw), which otherwise pans ~35% faster on phones
   * than on desktop for the same scroll distance.
   */
  return (
    <section
      ref={targetRef}
      id="projects"
      style={{ ['--cards' as string]: projects.length }}
      className="relative h-[calc(100vh_+_var(--cards)_*_40vh)] md:h-[calc(100vh_+_var(--cards)_*_24vh)]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-surface-strong transition-colors duration-500">
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
        </div>

        {/* Section Title - Fixed Position until scroll passes */}
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
            className="absolute top-12 left-6 md:left-12 z-20"
        >
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-foreground">
                SELECTED<br/><span className="text-muted-soft">WORKS</span>
            </h2>
            <div className="mt-4 flex items-center gap-2 text-muted">
                <span className="w-12 h-[1px] bg-muted-soft"></span>
                <span>SCROLL TO EXPLORE</span>
            </div>
        </motion.div>

        {/* Horizontal Scroll Track */}
        <motion.div ref={trackRef} style={{ x }} className="flex gap-6 md:gap-12 px-6 md:px-24">

          {/* Spacer to push first card visible after title fade */}
          <div className="min-w-[50vw] md:min-w-[30vw] flex flex-col justify-center">
             <div className="text-2xl text-muted max-w-sm font-light">
                Engineering digital experiences with a focus on <span className="text-foreground">performance</span>, <span className="text-foreground">accessibility</span>, and <span className="text-foreground">motion</span>.
             </div>
          </div>

          {projects.map((project) => (
            <div key={project.id} className="relative group h-[65vh] md:h-[70vh] w-[85vw] md:w-[44vw] flex-shrink-0">
               {/* Card Container */}
              <div className="w-full h-full relative rounded-[2rem] overflow-hidden bg-surface-card/30 backdrop-blur-xl border border-border-subtle transition-colors hover:border-border-strong shadow-lg flex flex-col">

                    {/*
                      Preview band, full-bleed across the top.

                      It was originally inset between the title and the copy, but
                      the card only had ~120px of slack there, which squashed the
                      screenshot into an unreadable strip. Behind the type was
                      worse still — the lighter screenshots washed the text out
                      completely. The top band is the only place with real room.
                    */}
                    <div className="relative h-[35%] shrink-0 overflow-hidden bg-surface-strong border-b border-border-subtle">
                        <img
                            src={project.shot}
                            alt=""
                            aria-hidden
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        />
                        {/* Ties each screenshot to its card's colour so six very
                            different sites still read as one set. */}
                        <div className={`absolute inset-0 opacity-25 bg-gradient-to-br ${project.gradient} mix-blend-overlay pointer-events-none`} />
                    </div>

                    {/* Gradient Background */}
                    <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${project.gradient} transition-opacity duration-500 group-hover:opacity-20 pointer-events-none`} />

                    {/* Content */}
                    <div className="relative flex flex-1 min-h-0 flex-col p-6 md:p-10 z-10">
                        {/* Top */}
                        <div className="flex justify-between items-start">
                             <div className="flex flex-col">
                                <span className={`text-xs md:text-sm font-bold tracking-widest uppercase bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2`}>
                                    {project.category}
                                </span>
                                <h3 className="text-2xl md:text-5xl font-bold text-foreground max-w-lg leading-tight">
                                    {project.title}
                                </h3>
                             </div>
                             <span className="text-4xl md:text-7xl font-black text-muted/10 font-mono leading-none">
                                 {project.number}
                             </span>
                        </div>

                        {/* Bottom */}
                        <div className="mt-auto pt-4">
                             <p className="text-sm md:text-lg text-muted max-w-2xl mb-4 md:mb-5 leading-relaxed line-clamp-3">
                                 {project.description}
                             </p>

                             <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
                                 {project.tech.map(t => (
                                     <span key={t} className="px-3 py-1 rounded-full border border-border-subtle bg-surface-strong text-xs md:text-sm text-muted-soft">
                                         {t}
                                     </span>
                                 ))}
                             </div>

                             <div className="flex gap-6 mt-auto">
                                 {project.demo && (
                                     <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 text-foreground font-medium hover:text-accent transition-colors group/link z-20">
                                         Visit Site 
                                         <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                                     </a>
                                 )}
                                 {project.github && (
                                     <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 text-muted hover:text-foreground transition-colors z-20">
                                         <FaGithub size={20} />
                                         Source Code
                                     </a>
                                 )}
                             </div>
                        </div>
                    </div>
              </div>
            </div>
          ))}
          
          {/* Final Spacer — small, since the pan now stops flush on the last card
              and the track's own right padding already supplies breathing room. */}
          <div className="min-w-[2vw]" />
        </motion.div>
      </div>
    </section>
  );
}
