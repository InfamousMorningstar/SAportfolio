/*
 * Post registry.
 *
 * Deliberately free of JSX and component imports so that server components
 * (route params, metadata generation, the sitemap) can read it without
 * pulling the whole client bundle across the boundary. The slug -> component
 * mapping lives in the route itself.
 *
 * Dates come from git history rather than memory. `published` is the first
 * commit that introduced the post; `updated` is set only where the post was
 * later revised substantially enough that the original date would mislead.
 */

export type PostStatus = 'current' | 'retired' | 'planned';

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date. First commit of the post. */
  published: string;
  /** ISO date. Only set when the content was materially revised later. */
  updated?: string;
  readTime: string;
  tags: string[];
  /**
   * Whether the thing described still exists. A post about a system that has
   * been switched off is worth keeping, but saying so up front is the
   * difference between an archive and a stale claim.
   */
  status: PostStatus;
  /** Short label rendered next to the title in listings. */
  statusLabel?: string;
}

export const posts: PostMeta[] = [
  {
    slug: 'cdn-captain-bot',
    title: 'CDN_Captain: Teaching a Discord Bot to Shut Up',
    excerpt:
      "A retrieval-first Discord helper for a DayZ community, built around an unusual goal: its most important feature is silence. A free local gate before any API call, citations verified in code rather than trusted, and a test suite assembled entirely from the bot's own past lies.",
    published: '2026-07-28',
    readTime: '11 min read',
    tags: ['Python', 'Discord', 'Retrieval', 'RAG', 'Playwright', 'SQLite', 'Docker'],
    status: 'current',
  },
  {
    slug: 'truenas-scale-setup',
    title: 'My TrueNAS SCALE Setup: From Boredom to Bytes',
    excerpt:
      'Eight 20 TB disks in RAID-Z2, in a JBOD I fabricated myself, attached over a SAS HBA in IT mode. What the hardware is, why the pool got rebuilt from scratch, where the backups actually go, and which parts of it I would not defend.',
    published: '2025-09-25',
    updated: '2026-09-06',
    readTime: '18 min read',
    tags: ['TrueNAS', 'ZFS', 'RAID-Z2', 'Docker', 'SAS/HBA', 'Self-Hosting', 'Homelab'],
    status: 'current',
  },
  {
    slug: 'centauri-plex-automation',
    title: 'Centauri (Plex) Automation System',
    excerpt:
      'A user lifecycle system I built for my Plex server — welcome emails, inactivity warnings, automated removal — that ran for 61 users with almost no daily intervention. It has since been retired: it was bound to an API I did not control, and Plex changed the terms.',
    published: '2025-10-30',
    readTime: '15 min read',
    tags: ['Python', 'Automation', 'Plex', 'Tautulli', 'Cron', 'SQLite', 'API Integration'],
    status: 'retired',
    statusLabel: 'Retired',
  },
  {
    slug: 'hybrid-edge-storage',
    title: 'My Next Big Upgrade: Hybrid Edge + Storage Setup',
    excerpt:
      'A design for handing the messy work to a ZimaBoard edge node and leaving TrueNAS to do storage. Still on the roadmap: measurement moved a network upgrade ahead of it, because the constraint turned out to be the 2.5 GbE link rather than the workloads.',
    published: '2025-09-25',
    readTime: '6 min read',
    tags: ['ZimaBoard', 'Edge Computing', 'Network Architecture', 'Homelab'],
    status: 'planned',
    statusLabel: 'Planned',
  },
];

/** Newest first. */
export const postsByDate = [...posts].sort((a, b) =>
  b.published.localeCompare(a.published),
);

export const getPost = (slug: string): PostMeta | undefined =>
  posts.find((p) => p.slug === slug);
