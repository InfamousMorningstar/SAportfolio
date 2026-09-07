/*
 * Employment and education — single source of truth.
 *
 * Both the homepage sections and /resume read from here. Previously the resume
 * hand-repeated all of this in its own JSX, which is exactly how the two
 * drifted apart: the site said Circle K ended in 2023 while the resume said
 * 2024, and the resume claimed a Kubernetes cluster that does not exist.
 *
 * Adding a job or a project should update the resume automatically. That is
 * the whole point of this file.
 */

export interface Role {
  id: string;
  title: string;
  company: string;
  location: string;
  /** Display string. */
  period: string;
  /** ISO-ish sort key: latest start first. */
  startedAt: string;
  type: string;
  /** Terminal-style short code used by the site's HUD vocabulary. */
  roleCode: string;
  /** One paragraph, used on the site. */
  description: string;
  /** Short factual attributes. No invented metrics. */
  glance: Record<string, string>;
  /** Bullets, used on both the site and the resume. */
  responsibilities: string[];
  /** Methods and equipment rather than "technologies" for non-software roles. */
  stack: string[];
}

export const roles: Role[] = [
  {
    id: 'EXP-01',
    title: 'Assembler',
    company: 'DIRTT Environmental Solutions',
    location: 'Calgary, AB',
    period: 'Sep 2023 - Aug 2024',
    startedAt: '2023-09',
    type: 'Full-Time',
    roleCode: 'ASM-Lvl1',
    description:
      'Precision assembly and CNC machining of modular architectural components in a lean manufacturing environment. The metalwork skills from this role are what built the JBOD enclosure that houses my home lab array.',
    glance: {
      duration: '11 months',
      equipment: 'Haas CNC',
      discipline: 'Fabrication',
    },
    responsibilities: [
      'Operated Haas CNC and saw equipment producing aluminum components to spec',
      'Held tight tolerances on precision assembly of modular architectural panels',
      'Mentored new team members on assembly procedures and safety protocols',
      'Fabricated the steel drive enclosure still in service in my home infrastructure',
    ],
    stack: ['CNC Machining', 'Precision Assembly', 'Fabrication', 'Lean Mfg'],
  },
  {
    id: 'EXP-02',
    title: 'Customer Service Rep',
    company: 'Circle K',
    location: 'Calgary, AB',
    period: 'Jul 2017 - Dec 2024',
    startedAt: '2017-07',
    type: 'Full-Time',
    roleCode: 'CSR-Lead',
    description:
      'Daily retail operations including inventory management, financial reconciliation and team support in a high-volume environment. Held concurrently with full-time work at DIRTT and full-time studies.',
    glance: {
      duration: '7+ years',
      scope: 'Retail ops',
      overlap: 'Held with DIRTT',
    },
    responsibilities: [
      'Managed customer transactions and resolved complex service issues',
      'Maintained inventory systems and coordinated stock replenishment',
      'Trained and supervised new employees on company procedures',
      'Held this role concurrently with full-time work at DIRTT and full-time studies',
    ],
    stack: ['Inventory Mgmt', 'Leadership', 'Conflict Resolution', 'Financial Rec.'],
  },
];

export interface Study {
  id: string;
  institution: string;
  /** Short form for the resume. */
  credential: string;
  /** Longer form used on the site. */
  degree: string;
  period: string;
  status: 'in-progress' | 'completed';
  description: string;
  focus: string;
  courses: string[];
  stats: Record<string, string>;
}

export const education: Study[] = [
  {
    id: 'EDU-MRU',
    institution: 'Mount Royal University',
    credential: 'BSc, Computer Information Systems',
    degree: 'Bachelor of Science - CIS',
    period: '2024 - Present',
    status: 'in-progress',
    description:
      'Computer Information Systems — the intersection of business systems and software engineering.',
    focus: 'Systems administration, cloud infrastructure, DevOps',
    courses: [
      'Data Structures & Algorithms',
      'Database Systems',
      'Software Engineering',
      'Network Security',
      'System Analysis',
      'Web Development',
    ],
    stats: { gpa: '3.8', credits: 'Active', level: 'Undergrad' },
  },
  {
    id: 'EDU-SAIT',
    institution: 'SAIT',
    credential: 'Diploma, IT Software Development',
    degree: 'IT Software Development',
    period: '2020 - 2023',
    status: 'completed',
    description:
      'Polytechnic training in full-stack development, database architecture and application deployment.',
    focus: 'Java, relational databases, Agile',
    courses: [
      'Java Programming',
      'Full Stack Web',
      'Database (MySQL)',
      'Software QA',
      'Mobile App Dev',
      'Project Mgmt',
    ],
    stats: { gpa: '3.7', credits: 'Diploma', level: 'Honors' },
  },
];

export interface Certification {
  name: string;
  issuer?: string;
  status?: string;
}

export const certifications: Certification[] = [
  { name: 'AWS Certified Cloud Practitioner' },
  { name: 'Linux Essentials', issuer: 'LPI', status: 'In Progress' },
  { name: 'Docker for Beginners', issuer: 'Coursera' },
  { name: 'CI/CD Pipelines with Jenkins', issuer: 'LinkedIn Learning' },
  { name: 'First Aid Certification', status: '2023' },
];

export const profile = {
  name: 'Salman Ahmad',
  headline: 'Software Developer · Systems Builder',
  subhead: 'Linux · ZFS · Docker · Networking · Python · TypeScript',
  location: 'Calgary, AB',
  email: 's.ahmad0147@gmail.com',
  phone: '+1-587-500-1477',
  site: 'portfolio.ahmxd.net',
  github: 'github.com/InfamousMorningstar',
  linkedin: 'linkedin.com/in/salman-ahmad-6788811b6',
  summary:
    'Software Development graduate (SAIT) completing a BSc in Computer Information Systems at Mount Royal University, with two paid client platforms delivered end to end as sole developer. Self-taught across the infrastructure side: I run a 38-container self-hosted environment on ~109 TiB of dual-parity ZFS — including the drive enclosure, which I fabricated myself — and document its architecture, trade-offs and failures rather than only its successes. Looking for a DevOps, SRE or infrastructure role.',
};
