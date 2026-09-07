'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/*
 * The Level 1 entry point into the technical depth.
 *
 * Before this existed, the architecture writeups lived behind a nav item
 * labelled BLOG, which a hiring manager reasonably reads as "opinion pieces"
 * and skips. Nothing on the homepage signalled that documented infrastructure
 * was a click away. This strip exists to make that discoverable in the first
 * thirty seconds, and to lead with the strongest evidence rather than the
 * prettiest.
 */

const systems = [
  {
    id: 'SYS-01',
    name: 'CENTAURI',
    href: '/work/centauri',
    blurb:
      'Self-hosted infrastructure lab. 38 containers on ~109 TiB of dual-parity ZFS, in a drive enclosure I built.',
    meta: [
      ['storage', '8 × 20 TB RAID-Z2'],
      ['hba', 'SAS3008 · IT mode'],
      ['access', 'Tailscale · CF Tunnel'],
      ['incidents', '1 documented'],
    ],
    cta: 'Read the case study',
  },
  {
    id: 'SYS-02',
    name: 'CDN_CAPTAIN',
    href: '/work/cdn-captain',
    blurb:
      'A retrieval-first support bot built for a client community, whose most important feature is knowing when to say nothing.',
    meta: [
      ['stack', 'Python · SQLite · Playwright'],
      ['gate', 'local retrieval · no ML'],
      ['checks', 'citations verified in code'],
      ['hosted', 'Docker, on Centauri'],
    ],
    cta: 'Read the case study',
  },
];

export default function SystemsStrip() {
  return (
    <section id="systems" className="py-24 px-6 relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-accent tracking-widest mb-3">SYSTEMS</div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-foreground mb-6">
            THINGS I OPERATE
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            The infrastructure side is self-taught, so these exist to make it checkable rather than
            claimed: architecture, the reasoning behind it, the trade-offs I accepted, and the things
            that have broken. Every figure came off a running machine.
          </p>
        </motion.div>

        <div className="space-y-6">
          {systems.map((system, i) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.24) }}
            >
              <Link
                href={system.href}
                className="group block border border-border-subtle hover:border-accent/40 rounded-2xl p-8 md:p-10 bg-surface-card/30 backdrop-blur-xl transition-colors"
              >
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-7">
                    <div className="font-mono text-xs text-muted-soft mb-3">{system.id}</div>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground mb-4 group-hover:text-accent transition-colors">
                      {system.name}
                    </h3>
                    <p className="text-muted text-lg leading-relaxed mb-6">{system.blurb}</p>
                    <span className="inline-flex items-center gap-2 font-medium text-foreground group-hover:text-accent transition-colors">
                      {system.cta}
                      <span
                        aria-hidden
                        className="inline-block group-hover:translate-x-1 transition-transform"
                      >
                        &rarr;
                      </span>
                    </span>
                  </div>

                  <dl className="md:col-span-5 space-y-2.5 font-mono text-xs md:text-sm self-center">
                    {system.meta.map(([key, value]) => (
                      <div key={key} className="flex gap-4 border-t border-divider pt-2.5">
                        <dt className="w-24 shrink-0 text-muted-soft">{key}</dt>
                        <dd className="text-muted">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/incidents"
            className="group font-mono text-sm text-accent hover:text-accent2 transition-colors"
          >
            INCIDENT_LOG
            <span aria-hidden className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
          <Link
            href="/blog"
            className="group font-mono text-sm text-muted hover:text-foreground transition-colors"
          >
            SYSADMIN_ARCHIVES
            <span aria-hidden className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
