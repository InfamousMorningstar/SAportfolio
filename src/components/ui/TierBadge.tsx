import { TIER_LABELS, type Tier } from '@/content/types';

/*
 * Provenance, rendered.
 *
 * The point of this component is that it appears everywhere a claim does, so a
 * reader never has to guess whether something was paid work, a personal system,
 * or a weekend experiment. Being visibly honest about the difference is what
 * makes the strong claims believable.
 */

const TIER_STYLES: Record<Tier, string> = {
  professional: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  client: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  production: 'text-accent border-accent/30 bg-accent/10',
  infrastructure: 'text-accent2 border-accent2/30 bg-accent2/10',
  lab: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
  learning: 'text-muted border-border-subtle bg-surface-strong',
};

export function TierBadge({ tier, className = '' }: { tier: Tier; className?: string }) {
  return (
    <span
      className={`inline-flex items-center font-mono text-xs px-2.5 py-1 rounded border ${TIER_STYLES[tier]} ${className}`}
    >
      {TIER_LABELS[tier]}
    </span>
  );
}
