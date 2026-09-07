import type { Metadata } from 'next';
import Link from 'next/link';

import { caseStudies } from '@/content/case-studies';
import { incidentsFor } from '@/content/incidents';
import { TierBadge } from '@/components/ui/TierBadge';

export const metadata: Metadata = {
  title: 'Systems — Salman Ahmad',
  description:
    'Engineering case studies: architecture, decisions, trade-offs, incidents and measurements from systems I actually operate.',
  alternates: { canonical: 'https://portfolio.ahmxd.net/work/' },
};

export default function WorkIndexPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent2 transition-colors font-mono text-sm mb-10"
        >
          <span aria-hidden>&larr;</span> Back to Portfolio
        </Link>

        <header className="mb-16">
          <div className="font-mono text-xs text-accent tracking-widest mb-3">SYSTEMS</div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-foreground mb-6">
            ENGINEERING
            <br />
            <span className="text-muted-soft">CASE STUDIES</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Architecture, the decisions behind it, what those decisions cost, and what has broken.
            Every number here came off a running machine or is labelled as theoretical.
          </p>
        </header>

        <div className="space-y-6">
          {caseStudies.map((study) => {
            const count = incidentsFor(study.slug).length;
            return (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group block border border-border-subtle rounded-2xl p-8 bg-surface-card/30 hover:border-accent/40 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <TierBadge tier={study.tier} />
                  <span className="font-mono text-xs text-muted">{study.period}</span>
                  {count > 0 && (
                    <span className="font-mono text-xs text-muted-soft ml-auto">
                      {count} incident{count === 1 ? '' : 's'} documented
                    </span>
                  )}
                </div>

                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-3 group-hover:text-accent transition-colors">
                  {study.title.toUpperCase()}
                </h2>

                <p className="text-muted text-lg leading-relaxed mb-5">{study.summary}</p>

                <div className="flex flex-wrap gap-2">
                  {study.stack.slice(0, 6).map((s) => (
                    <span
                      key={s.name}
                      className="font-mono text-xs px-2.5 py-1 rounded border border-border-subtle text-muted-soft"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
