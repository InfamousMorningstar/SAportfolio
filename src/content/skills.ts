import type { Tier } from './types';

/*
 * Skills, with provenance and evidence.
 *
 * The rule this file exists to enforce: a technology may only appear here if
 * there is something on this site a reader can click to see it being used. A
 * skill with no evidence is either tiered down to `learning` or left off.
 *
 * That is why the list is shorter than the old one. It dropped Kubernetes
 * (documented as removed from the stack), Prometheus/Grafana (not deployed),
 * and demoted PostgreSQL — four major versions run here, but as dependencies
 * of other applications rather than schemas designed from scratch.
 */

export interface Skill {
  name: string;
  tier: Tier;
  /** What proves it. Href points at the section that shows the work. */
  evidence?: { label: string; href: string };
  /** Only where the tier alone would mislead. */
  note?: string;
}

export interface SkillDomain {
  id: string;
  label: string;
  blurb: string;
  skills: Skill[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: 'infrastructure',
    label: 'Infrastructure & Storage',
    blurb: 'Systems I run, break, and repair myself.',
    skills: [
      {
        name: 'Linux',
        tier: 'infrastructure',
        evidence: { label: 'Centauri', href: '/work/centauri' },
      },
      {
        name: 'TrueNAS SCALE',
        tier: 'infrastructure',
        evidence: { label: 'Centauri', href: '/work/centauri#architecture' },
      },
      {
        name: 'ZFS',
        tier: 'infrastructure',
        evidence: { label: 'Pool rebuild decision', href: '/work/centauri#decisions' },
        note: 'RAID-Z2 topology, scrub and resilver operations, capacity planning, dataset tuning.',
      },
      {
        name: 'Docker',
        tier: 'infrastructure',
        evidence: { label: '38 containers', href: '/work/centauri#architecture' },
      },
      {
        name: 'SAS / HBA',
        tier: 'infrastructure',
        evidence: { label: 'INC-0001', href: '/work/centauri#incidents' },
        note: 'IT-mode firmware, direct disk presentation, and diagnosing a controller failure from kernel logs.',
      },
      {
        name: 'iSCSI',
        tier: 'infrastructure',
        note: 'A 1 TB zvol exported as a block target.',
      },
      {
        name: 'Hardware fabrication',
        tier: 'professional',
        evidence: { label: 'DIRTT', href: '/#experience' },
        note: 'CNC and precision assembly. The drive enclosure in Centauri is one I built.',
      },
    ],
  },
  {
    id: 'networking',
    label: 'Networking',
    blurb:
      'Overlay networking and secure remote access, at household scale. Not enterprise routing — see the note below.',
    skills: [
      {
        name: 'Tailscale / WireGuard',
        tier: 'infrastructure',
        evidence: { label: 'Admin plane', href: '/work/centauri#security' },
      },
      {
        name: 'Cloudflare Tunnel',
        tier: 'infrastructure',
        evidence: { label: 'Published services', href: '/work/centauri#security' },
      },
      {
        name: 'Reverse proxy & TLS',
        tier: 'infrastructure',
        note: 'nginx-proxy-manager with Let’s Encrypt certificates.',
      },
      {
        name: 'DNS',
        tier: 'infrastructure',
      },
      {
        name: 'Network troubleshooting',
        tier: 'infrastructure',
        evidence: { label: 'Bottleneck analysis', href: '/work/centauri#performance' },
        note: 'Identifying a 2.5 GbE link as the real constraint on an array that outruns it.',
      },
    ],
  },
  {
    id: 'software',
    label: 'Software',
    blurb: 'Languages and frameworks I have shipped something real in.',
    skills: [
      {
        name: 'Python',
        tier: 'client',
        evidence: { label: 'CDN_Captain', href: '/work/cdn-captain' },
        note: '~1,700 lines in production, plus a retired Plex lifecycle system.',
      },
      {
        name: 'TypeScript',
        tier: 'client',
        evidence: { label: 'This site', href: 'https://github.com/InfamousMorningstar/SAportfolio' },
      },
      {
        name: 'React / Next.js',
        tier: 'client',
        evidence: { label: 'Inter-Freight, CDN DayZ', href: '/#projects' },
      },
      {
        name: 'SQLite',
        tier: 'client',
        evidence: { label: 'CDN_Captain fact store', href: '/work/cdn-captain#architecture' },
      },
      {
        name: 'Supabase',
        tier: 'client',
        evidence: { label: 'Inter-Freight, Nitor', href: '/#projects' },
        note: 'Auth and row-level security.',
      },
      {
        name: 'PostgreSQL',
        tier: 'lab',
        note: 'Four major versions run here as application dependencies. I operate them; I have not designed schemas from scratch in production.',
      },
      {
        name: 'Bash',
        tier: 'infrastructure',
      },
      {
        name: 'C# / .NET',
        tier: 'lab',
        evidence: { label: 'RunOrNope', href: '/#projects' },
      },
    ],
  },
  {
    id: 'practice',
    label: 'Operations',
    blurb: 'The parts that only show up once something is actually running.',
    skills: [
      {
        name: 'Incident diagnosis',
        tier: 'infrastructure',
        evidence: { label: 'INC-0001', href: '/work/centauri#incidents' },
        note: 'Correlating ZFS state with kernel logs to isolate a failing controller rather than replacing healthy disks.',
      },
      {
        name: 'Monitoring & alerting',
        tier: 'infrastructure',
        evidence: { label: 'Trust boundaries', href: '/work/centauri#security' },
        note: 'Platform email alerting that has caught real faults. Not a metrics stack — there is no Prometheus here.',
      },
      {
        name: 'Backup & recovery',
        tier: 'infrastructure',
        evidence: { label: 'Measured RPO', href: '/work/centauri#performance' },
        note: 'Encrypted off-site config and photo sync, with a stated 7-day RPO rather than an implied one.',
      },
      {
        name: 'Capacity planning',
        tier: 'infrastructure',
        evidence: { label: 'Post-mortem', href: '/work/centauri#hindsight' },
      },
      {
        name: 'Client delivery',
        tier: 'client',
        evidence: { label: 'Inter-Freight, CDN DayZ', href: '/#projects' },
        note: 'Scoping with a non-technical stakeholder, mockup and sign-off before build, then shipping the whole thing solo. Two paid engagements, both live.',
      },
      {
        name: 'AWS',
        tier: 'learning',
        note: 'Certified Cloud Practitioner. A knowledge certification — I have not deployed production workloads on it, and this list is not the place to imply otherwise.',
      },
      {
        name: 'CI/CD',
        tier: 'learning',
        note: 'Git-driven deploys on Vercel. No pipeline authoring in anger yet.',
      },
    ],
  },
];
