import type { Tier } from './types';

/*
 * Project data, lifted out of the Projects component so the resume can read it
 * too. Add a project here and it appears in the horizontal pan on the homepage
 * *and* in the generated resume, with the same tier label in both places.
 *
 * `resumeBullets` exist because a card and a resume entry want different
 * things: the card sells, the bullets state what was built. Where they are
 * absent the resume falls back to the description.
 */

export interface Project {
  id: number;
  slug: string;
  title: string;
  shot: string;
  category: string;
  tier: Tier;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  /** Internal link to a full case study, when one exists. */
  caseStudy: string;
  /** Tailwind gradient pair, used for card theming. */
  gradient: string;
  /** Included in the generated resume when present. */
  resumeBullets?: string[];
  /** Excluded from the resume when false. */
  onResume: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'starlight',
    title: 'Starlight Tours',
    shot: '/works/starlight.webp',
    category: 'Interactive Education',
    tier: 'lab',
    description:
      'An immersive educational platform documenting cases of systemic racism, built around archival research. Features WebGL animation and interactive timelines.',
    tech: ['React 19', 'Three.js', 'WebGL', 'Vite'],
    github: 'https://github.com/InfamousMorningstar/starlight',
    demo: 'https://starlight-eight-ruby.vercel.app/',
    caseStudy: '',
    gradient: 'from-blue-600 to-cyan-500',
    resumeBullets: [
      'Built an interactive 3D educational experience with Three.js and React Three Fiber.',
      'Optimised WebGL rendering of particle systems and timelines for consumer hardware.',
    ],
    onResume: true,
  },
  {
    id: 2,
    slug: 'inter-freight',
    title: 'Inter-Freight Auto',
    shot: '/works/interfreight.webp',
    category: 'Dealership Platform',
    tier: 'client',
    description:
      'A paid engagement for an automotive business. I built a mockup, took it through client sign-off, then delivered the whole platform solo — inventory management, inquiry tracking, CARFAX integration and a secure admin dashboard.',
    tech: ['Next.js 15', 'Supabase', 'PostgreSQL', 'Zod'],
    github: '',
    demo: 'https://interfreightautosales.ca',
    caseStudy: '',
    gradient: 'from-orange-500 to-red-600',
    resumeBullets: [
      'Paid client engagement. Scoped the build with the owner, produced a mockup for sign-off, then delivered the platform end to end as sole developer.',
      'Built on Next.js 15 and Supabase with a secure internal dashboard for inventory management and Zod for runtime schema validation.',
      'Replaced a manual inquiry process with structured lead tracking and CARFAX report integration, giving the business one place to manage listings and enquiries.',
    ],
    onResume: true,
  },
  {
    id: 3,
    slug: 'cdn-dayz',
    title: 'CDN DayZ',
    shot: '/works/cdndayz.webp',
    category: 'Community Platform',
    tier: 'client',
    description:
      'Production DayZ community platform with live server status, launcher-verified mod inventories, news ingestion, and a searchable diagnostics hub for error codes. CDN_Captain is the support bot built for the same community.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind', 'GameDig'],
    github: '',
    demo: 'https://cdndayz.com',
    caseStudy: '/work/cdn-captain',
    gradient: 'from-emerald-500 to-teal-500',
    resumeBullets: [
      'Paid client engagement. Community platform with live server status via GameDig, launcher-verified mod inventories, news ingestion and a searchable error-code diagnostics hub.',
      'Also built and self-host CDN_Captain, the retrieval-first support bot serving the same community.',
    ],
    onResume: true,
  },
  {
    id: 6,
    slug: 'pearls-haven',
    title: "Pearl's Haven",
    shot: '/works/pearlshaven.webp',
    category: 'Licensed Dayhome',
    tier: 'client',
    description:
      'A paid build for a licensed home dayhome. Mockup, client sign-off, then the whole site solo — a single-page tour of the space with a photo gallery, daily rhythm and a booking form. Plus a round of changes after sign-off, which is how client work actually goes.',
    tech: ['Next.js', 'Tailwind', 'Vercel'],
    github: '',
    demo: 'https://pearlshaven.ca',
    caseStudy: '',
    gradient: 'from-rose-400 to-amber-400',
    resumeBullets: [
      'Paid client engagement. Produced a mockup, took it through sign-off with the owner, then built and shipped the site solo — including a further round of changes requested after sign-off.',
      'Single-page marketing site for a licensed childcare provider: programmes, daily schedule, photo gallery with lightbox, and an enquiry form.',
      'Built with accessibility in mind — skip-to-content link, descriptive alt text across the gallery, and properly labelled form fields.',
    ],
    onResume: true,
  },
  {
    id: 4,
    slug: 'nitor',
    title: 'Nitor',
    shot: '/works/nitor.webp',
    category: 'Product Design',
    tier: 'lab',
    description:
      'A desktop-first habit tracker with a forgiving streak model — no streak anxiety — and insights that explain why you succeed, not just whether. Supabase auth, row-level-secured persistence, and a GSAP scroll story.',
    tech: ['Next.js 16', 'Supabase', 'GSAP', 'Zustand'],
    github: 'https://github.com/InfamousMorningstar/Nitor',
    demo: 'https://nitor-peach.vercel.app',
    caseStudy: '',
    gradient: 'from-amber-400 to-yellow-600',
    onResume: false,
  },
  {
    id: 5,
    slug: 'runornope',
    title: 'RunOrNope',
    shot: '/works/runornope.webp',
    category: 'Security Tooling',
    tier: 'lab',
    description:
      'A Windows static analyzer that explains what an untrusted executable appears capable of — without ever running or uploading it. Fail-closed isolation core and PE/CLR analysis that cites exact imports, strings, and IL as evidence.',
    tech: ['C#', '.NET', 'Static Analysis', 'Windows'],
    github: 'https://github.com/InfamousMorningstar/RunOrNope',
    demo: '',
    caseStudy: '',
    gradient: 'from-zinc-400 to-red-600',
    resumeBullets: [
      'Windows static analyzer that reports what an untrusted executable appears capable of without executing or uploading it.',
      'PE/CLR parsing that cites exact imports, strings and IL as evidence, behind a fail-closed isolation core.',
    ],
    onResume: true,
  },
];

export const resumeProjects = projects.filter((p) => p.onResume);
