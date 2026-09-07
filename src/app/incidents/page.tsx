import type { Metadata } from 'next';
import Link from 'next/link';

import { incidents } from '@/content/incidents';
import { caseStudies } from '@/content/case-studies';

export const metadata: Metadata = {
  title: 'Incident Log — Salman Ahmad',
  description:
    'Things that have broken in systems I operate: what the symptom was, how it was diagnosed, the wrong turns along the way, and what changed afterwards.',
  alternates: { canonical: 'https://portfolio.ahmxd.net/incidents/' },
};

/*
 * The aggregate view. Individual records render inside their case study, but
 * incident response deserves its own surface for an infrastructure-focused
 * portfolio — it is the part of the job that only exists once something is
 * actually running and depended upon.
 */

const SEVERITY_STYLE: Record<string, string> = {
  sev1: 'text-red-400 border-red-400/30 bg-red-400/10',
  sev2: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
  sev3: 'text-muted border-border-subtle bg-surface-strong',
};

const DETECTION_LABEL: Record<string, string> = {
  alert: 'Caught by monitoring',
  'user-report': 'Reported by a user',
  noticed: 'Noticed by chance',
  'routine-check': 'Found during a routine check',
};

export default function IncidentsPage() {
  const ordered = [...incidents].sort((a, b) => b.date.localeCompare(a.date));
  const systemName = (slug: string) =>
    caseStudies.find((c) => c.slug === slug)?.title ?? slug;

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
          <div className="font-mono text-xs text-accent tracking-widest mb-3">INCIDENT_LOG</div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-foreground mb-6">
            WHAT HAS
            <br />
            <span className="text-muted-soft">GONE WRONG</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Real incidents from systems I operate, written up the way I would want to read them:
            the symptom before the cause, the wrong turns kept in, and an honest prevention line
            even when the honest answer is &ldquo;not much&rdquo;.
          </p>
          <p className="text-sm text-muted-soft max-w-2xl leading-relaxed mt-4 font-mono">
            {ordered.length} record{ordered.length === 1 ? '' : 's'}. Only things that actually
            happened appear here.
          </p>
        </header>

        <div className="space-y-4">
          {ordered.map((incident) => (
            <Link
              key={incident.id}
              href={`/work/${incident.system}#incidents`}
              className="group block border border-border-subtle hover:border-accent/40 rounded-xl p-6 bg-surface-card/30 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-sm font-bold text-foreground">{incident.id}</span>
                <span
                  className={`font-mono text-xs px-2 py-0.5 rounded border uppercase ${
                    SEVERITY_STYLE[incident.severity]
                  }`}
                >
                  {incident.severity}
                </span>
                <span className="font-mono text-xs text-muted">{incident.date}</span>
                <span className="font-mono text-xs text-muted-soft">
                  {systemName(incident.system)}
                </span>
                <span className="font-mono text-xs text-accent2 ml-auto">
                  {DETECTION_LABEL[incident.detection]}
                </span>
              </div>

              <p className="text-muted leading-relaxed mb-3 group-hover:text-foreground transition-colors">
                {incident.symptom}
              </p>

              <div className="border-l-2 border-accent/40 pl-4">
                <span className="font-mono text-xs text-accent uppercase block mb-1">
                  Root cause
                </span>
                <p className="text-sm text-text-soft leading-relaxed">{incident.rootCause}</p>
              </div>

              <span className="inline-flex items-center gap-2 font-mono text-xs text-accent mt-4 group-hover:text-accent2 transition-colors">
                Full record
                <span aria-hidden className="group-hover:translate-x-1 inline-block transition-transform">
                  &rarr;
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
