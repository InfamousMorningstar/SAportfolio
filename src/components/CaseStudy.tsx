import Link from 'next/link';

import type { CaseStudy as CaseStudyData } from '@/content/types';
import type { Incident } from '@/content/types';
import { TierBadge } from '@/components/ui/TierBadge';
import { ArchDiagram } from '@/components/ui/ArchDiagram';

/*
 * Case study renderer.
 *
 * Two deliberate choices:
 *
 * 1. This is NOT wrapped in <Section>. That component maps scroll progress to
 *    opacity [0, 1, 1, 0], which fades content to fully transparent at both
 *    ends of its range. Fine for a three-line bio card, fatal for two thousand
 *    words — the reader loses the sentence they are mid-way through.
 *
 * 2. The deep sections use <details>, so they are collapsed by default but
 *    present in the DOM: indexable, findable with ctrl-F, and linkable by
 *    anchor. Progressive disclosure without hiding anything from a crawler.
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

function SectionHeading({ id, label, kicker }: { id: string; label: string; kicker?: string }) {
  return (
    <div className="mb-6">
      {kicker && (
        <div className="font-mono text-xs text-accent tracking-widest mb-2">{kicker}</div>
      )}
      <h2 id={id} className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
        {label}
      </h2>
    </div>
  );
}

function IncidentRecord({ incident }: { incident: Incident }) {
  return (
    <article className="border border-border-subtle rounded-xl overflow-hidden bg-surface-card/30">
      <header className="flex flex-wrap items-center gap-3 p-5 border-b border-border-subtle bg-surface-strong/50">
        <span className="font-mono text-sm font-bold text-foreground">{incident.id}</span>
        <span
          className={`font-mono text-xs px-2 py-0.5 rounded border uppercase ${
            SEVERITY_STYLE[incident.severity]
          }`}
        >
          {incident.severity}
        </span>
        <span className="font-mono text-xs text-muted">{incident.date}</span>
        <span className="font-mono text-xs text-accent2 ml-auto">
          {DETECTION_LABEL[incident.detection]}
        </span>
      </header>

      <div className="p-5 space-y-5 text-sm leading-relaxed">
        <div>
          <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-1.5">Symptom</h4>
          <p className="text-text-soft">{incident.symptom}</p>
        </div>

        <div>
          <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-1.5">Impact</h4>
          <p className="text-text-soft">{incident.impact}</p>
        </div>

        <div>
          <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">
            Investigation
          </h4>
          <ol className="space-y-2.5">
            {incident.investigation.map((step, i) => {
              const isWrongTurn = step.startsWith('WRONG TURN:');
              return (
                <li key={i} className="flex gap-3">
                  <span
                    className={`font-mono text-xs shrink-0 pt-0.5 ${
                      isWrongTurn ? 'text-amber-400' : 'text-accent'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={isWrongTurn ? 'text-amber-200/70' : 'text-text-soft'}>
                    {isWrongTurn ? step.replace('WRONG TURN:', '').trim() : step}
                    {isWrongTurn && (
                      <span className="ml-2 font-mono text-[10px] text-amber-400 uppercase">
                        wrong turn
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {incident.evidence && (
          <div>
            <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">
              {incident.evidence.label}
            </h4>
            <pre className="overflow-x-auto rounded-lg border border-border-subtle bg-background p-4 font-mono text-xs text-muted-soft">
              {incident.evidence.content}
            </pre>
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-1.5">
              Root cause
            </h4>
            <p className="text-text-soft">{incident.rootCause}</p>
          </div>
          <div>
            <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-1.5">Fix</h4>
            <p className="text-text-soft">{incident.fix}</p>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-1.5">
            Prevention
          </h4>
          <p className="text-text-soft">{incident.prevention}</p>
        </div>

        <div className="border-l-2 border-accent/50 pl-4">
          <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-1.5">Lesson</h4>
          <p className="text-text-soft">{incident.lesson}</p>
        </div>
      </div>
    </article>
  );
}

export function CaseStudy({
  study,
  incidents,
}: {
  study: CaseStudyData;
  incidents: Incident[];
}) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-24">
      {/* ---------- Level 1: the 30-second read ---------- */}
      <header className="mb-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-accent hover:text-accent2 transition-colors font-mono text-sm mb-8"
        >
          <span aria-hidden>&larr;</span> ALL SYSTEMS
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-5">
          <TierBadge tier={study.tier} />
          <span className="font-mono text-xs text-muted">{study.period}</span>
          <span className="font-mono text-xs text-muted-soft">{study.role}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-6">
          {study.title.toUpperCase()}
        </h1>

        <p className="text-xl md:text-2xl text-muted font-light leading-relaxed mb-8">
          {study.summary}
        </p>

        <div className="h-px w-full bg-divider mb-8" />

        <p className="text-lg text-muted leading-relaxed">{study.problem}</p>

        {study.links && study.links.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-8">
            {study.links.map((link) => {
              const external = link.href.startsWith('http');
              return external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent2 transition-colors"
                >
                  {link.label}
                  <span aria-hidden>&#8599;</span>
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent2 transition-colors"
                >
                  {link.label}
                  <span aria-hidden>&rarr;</span>
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* ---------- Stack, with reasons ---------- */}
      <section className="mb-16">
        <SectionHeading id="stack" kicker="STACK" label="What it runs on, and why" />
        <dl className="space-y-4">
          {study.stack.map((item) => (
            <div key={item.name} className="grid md:grid-cols-12 gap-2 md:gap-6 border-t border-divider pt-4">
              <dt className="md:col-span-4 font-mono text-sm text-foreground">{item.name}</dt>
              <dd className="md:col-span-8 text-muted">{item.why}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------- Level 2: architecture ---------- */}
      {study.architecture && (
        <section className="mb-16">
          <SectionHeading id="architecture" kicker="ARCH_MAP" label="How it fits together" />
          <ArchDiagram data={study.architecture.diagram} />
          <ol className="mt-8 space-y-4">
            {study.architecture.walkthrough.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-xs text-accent shrink-0 pt-1.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-muted leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ---------- Level 3: the engineering dossier ---------- */}
      <div className="border-t-2 border-accent/30 pt-10">
        <div className="font-mono text-xs text-accent tracking-widest mb-2">ENGINEERING_DOSSIER</div>
        <p className="text-muted mb-10 max-w-2xl">
          Decisions, trade-offs, failures and measurements. Everything below is collapsed by
          default because most readers do not need it — and expanded, because if you are still
          here you probably do.
        </p>

        {study.decisions && (
          <details open className="mb-8 group">
            <summary className="cursor-pointer list-none">
              <SectionHeading id="decisions" kicker="DECISION_LOG" label="Why, and what it cost" />
            </summary>
            <div className="space-y-8">
              {study.decisions.map((d) => (
                <div key={d.question} className="border border-border-subtle rounded-xl p-6 bg-surface-card/30">
                  <h3 className="text-lg font-bold text-foreground mb-4">{d.question}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex flex-wrap gap-2 items-baseline">
                      <span className="font-mono text-xs text-accent2 uppercase">Chose</span>
                      <span className="text-foreground font-medium">{d.chose}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 items-baseline">
                      <span className="font-mono text-xs text-muted uppercase">Instead of</span>
                      <span className="text-muted">{d.alternatives.join(' · ')}</span>
                    </div>
                    <p className="text-text-soft leading-relaxed pt-2">{d.reasoning}</p>
                    <div className="border-l-2 border-amber-400/50 pl-4 mt-3">
                      <span className="font-mono text-xs text-amber-400 uppercase block mb-1">
                        Trade-off accepted
                      </span>
                      <p className="text-text-soft leading-relaxed">{d.tradeoff}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </details>
        )}

        {incidents.length > 0 && (
          <details open className="mb-8">
            <summary className="cursor-pointer list-none">
              <SectionHeading
                id="incidents"
                kicker="INCIDENT_LOG"
                label="What has actually gone wrong"
              />
            </summary>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <IncidentRecord key={incident.id} incident={incident} />
              ))}
            </div>
          </details>
        )}

        {study.security && (
          <details className="mb-8">
            <summary className="cursor-pointer list-none">
              <SectionHeading
                id="security"
                kicker="TRUST_BOUNDARIES"
                label="What is defended, and what is not"
              />
            </summary>
            <div className="space-y-4">
              {study.security.map((s) => (
                <div key={s.boundary} className="border-t border-divider pt-4">
                  <h3 className="font-mono text-sm text-foreground mb-1.5">{s.boundary}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.control}</p>
                  {s.gap && (
                    <p className="mt-2 text-sm text-amber-200/70 leading-relaxed border-l-2 border-amber-400/40 pl-3">
                      <span className="font-mono text-xs text-amber-400 uppercase mr-2">Gap</span>
                      {s.gap}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </details>
        )}

        {study.performance && (
          <details className="mb-8">
            <summary className="cursor-pointer list-none">
              <SectionHeading
                id="performance"
                kicker="MEASUREMENTS"
                label="Numbers, and where they came from"
              />
            </summary>
            <div className="space-y-4">
              {study.performance.map((m) => (
                <div key={m.metric} className="border-t border-divider pt-4 grid md:grid-cols-12 gap-2 md:gap-6">
                  <div className="md:col-span-4">
                    <div className="font-mono text-sm text-foreground">{m.metric}</div>
                    <div className="font-mono text-lg text-accent">{m.value}</div>
                  </div>
                  <p className="md:col-span-8 text-sm text-muted leading-relaxed self-center">
                    {m.method}
                  </p>
                </div>
              ))}
            </div>
          </details>
        )}

        {study.hindsight && (
          <details className="mb-8">
            <summary className="cursor-pointer list-none">
              <SectionHeading
                id="hindsight"
                kicker="POST_MORTEM"
                label="What I would do differently"
              />
            </summary>
            <ul className="space-y-4">
              {study.hindsight.map((h, i) => (
                <li key={i} className="flex gap-4 border-t border-divider pt-4">
                  <span className="text-accent shrink-0">▹</span>
                  <p className="text-muted leading-relaxed">{h}</p>
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </article>
  );
}
