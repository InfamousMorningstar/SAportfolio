/*
 * Case study + incident model.
 *
 * Two constraints are deliberately encoded in the types rather than left to
 * discipline:
 *
 *   - `tier` is required on every case study, so no claim appears without its
 *     provenance attached.
 *   - `method` is required on every performance figure, and `tradeoff` on every
 *     decision. You cannot add a number without saying how it was obtained, or
 *     record a choice without naming what it cost.
 *
 * This does not make dishonesty impossible. It makes it require effort, which
 * is most of the battle when writing about your own work.
 */

/** How a piece of experience was actually acquired. Rendered, always. */
export type Tier =
  /** Paid employment. */
  | 'professional'
  /** Built or operated for someone else, paid or otherwise. */
  | 'client'
  /** Self-directed, with real users depending on it. */
  | 'production'
  /** Personal infrastructure in daily use. */
  | 'infrastructure'
  /** Built to learn. Not in service. */
  | 'lab'
  /** Currently studying. No depth claimed. */
  | 'learning';

export const TIER_LABELS: Record<Tier, string> = {
  professional: 'Professional',
  client: 'Client work',
  production: 'Production',
  infrastructure: 'Personal infrastructure',
  lab: 'Lab',
  learning: 'Learning',
};

export type ProjectStatus = 'live' | 'maintained' | 'archived' | 'prototype' | 'retired';

export interface StackChoice {
  name: string;
  /** Why this, and not the obvious alternative. */
  why?: string;
}

export interface Decision {
  /** "Why RAID-Z2?" */
  question: string;
  chose: string;
  alternatives: string[];
  reasoning: string;
  /** Required. Every decision costs something; say what. */
  tradeoff: string;
}

export interface Challenge {
  problem: string;
  /** Ordered steps, including the dead ends. The dead ends are the point. */
  investigation: string[];
  solution: string;
  result: string;
  lesson: string;
}

export interface SecurityNote {
  boundary: string;
  control: string;
  /** What this explicitly does not defend against. Honest gaps are content. */
  gap?: string;
}

export interface Measurement {
  metric: string;
  value: string;
  /** Required. How was this obtained? "Theoretical" is a valid answer. */
  method: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** Required. Rendered as a visible badge wherever the study appears. */
  tier: Tier;
  status: ProjectStatus;
  /** "sole engineer", "one of three" — specific, not modest. */
  role: string;
  period: string;
  /** One sentence. Level 1. */
  summary: string;
  /** What problem this solves. Level 2. */
  problem: string;
  stack: StackChoice[];

  links?: { label: string; href: string }[];

  architecture?: { diagram: ArchDiagram; walkthrough: string[] };
  decisions?: Decision[];
  challenges?: Challenge[];
  security?: SecurityNote[];
  performance?: Measurement[];
  /** Incident ids owned by this system. */
  incidents?: string[];
  /** "If I rebuilt this today..." */
  hindsight?: string[];
}

/* ------------------------------------------------------------------ */
/* Architecture diagrams — data, never hand-drawn SVG paths.          */
/* ------------------------------------------------------------------ */

export type NodeKind =
  | 'external'
  | 'edge'
  | 'service'
  | 'store'
  | 'host'
  | 'network';

export interface ArchNode {
  id: string;
  label: string;
  /** Secondary line: model number, capacity, version. */
  sub?: string;
  kind: NodeKind;
}

export interface ArchEdge {
  from: string;
  to: string;
  label?: string;
  protocol?: string;
  /** Drives stroke treatment. `public` renders dashed. */
  trust: 'public' | 'private' | 'internal';
}

export interface ArchGroup {
  label: string;
  members: string[];
  boundary?: 'trust' | 'physical';
}

export interface ArchDiagram {
  /** Used for the accessible <title>. */
  caption: string;
  /** Rows, laid out top to bottom. Each row is a list of node ids. */
  rows: string[][];
  nodes: ArchNode[];
  edges: ArchEdge[];
  groups?: ArchGroup[];
}

/* ------------------------------------------------------------------ */
/* Incidents                                                           */
/* ------------------------------------------------------------------ */

export type Severity = 'sev1' | 'sev2' | 'sev3';

/**
 * How the problem was noticed. Recording "noticed" rather than inflating it to
 * "alert" is the honest version, and it sets up a real prevention item.
 */
export type Detection = 'alert' | 'user-report' | 'noticed' | 'routine-check';

export interface Incident {
  /** INC-0001 — matches the EXP-01 / EDU-MRU record vocabulary. */
  id: string;
  date: string;
  /** Case study slug this belongs to. */
  system: string;
  severity: Severity;
  /** What was observed — not what turned out to be wrong. */
  symptom: string;
  impact: string;
  detection: Detection;
  /** Ordered. Wrong turns included and labelled. */
  investigation: string[];
  rootCause: string;
  fix: string;
  /** "none — it could happen again" is an acceptable value. */
  prevention: string;
  timeToResolve?: string;
  /** Real log or command output only. */
  evidence?: { label: string; content: string };
  lesson: string;
}
