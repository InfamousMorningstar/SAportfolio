/*
 * Deterministic positions for decorative background fields.
 *
 * These were previously generated with Math.random() inside render, which is
 * impure and produces different values on the server than in the browser — the
 * exact class of bug that broke hydration once already (see the commit that
 * removed a render-time date from Experience). React 19's compiler lint rules
 * flag it as `react-hooks/purity` for the same reason.
 *
 * A seeded generator gives identical output on both sides while still looking
 * scattered. Call these at module scope so the work happens once.
 */

/** mulberry32 — small, fast, good enough for scattering dots on a page. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface FieldDot {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

export interface FieldLine extends FieldDot {
  width: string;
  transform: string;
}

interface DotOptions {
  /** Max animation delay in seconds. */
  delay?: number;
  /** Base animation duration in seconds. */
  durationBase?: number;
  /** Additional random duration on top of the base. */
  durationSpread?: number;
}

export function fieldDots(count: number, seed: number, opts: DotOptions = {}): FieldDot[] {
  const { delay = 5, durationBase = 2, durationSpread = 6 } = opts;
  const rnd = mulberry32(seed);
  return Array.from({ length: count }, () => ({
    left: `${(rnd() * 100).toFixed(3)}%`,
    top: `${(rnd() * 100).toFixed(3)}%`,
    animationDelay: `${(rnd() * delay).toFixed(3)}s`,
    animationDuration: `${(durationBase + rnd() * durationSpread).toFixed(3)}s`,
  }));
}

interface LineOptions extends DotOptions {
  /** Base width in px. */
  widthBase?: number;
  /** Additional random width on top of the base. */
  widthSpread?: number;
}

export function fieldLines(count: number, seed: number, opts: LineOptions = {}): FieldLine[] {
  const {
    delay = 6,
    durationBase = 3,
    durationSpread = 4,
    widthBase = 120,
    widthSpread = 220,
  } = opts;
  const rnd = mulberry32(seed);
  return Array.from({ length: count }, () => ({
    left: `${(10 + rnd() * 80).toFixed(3)}%`,
    top: `${(10 + rnd() * 80).toFixed(3)}%`,
    width: `${(widthBase + rnd() * widthSpread).toFixed(1)}px`,
    transform: `rotate(${(rnd() * 360).toFixed(2)}deg)`,
    animationDelay: `${(rnd() * delay).toFixed(3)}s`,
    animationDuration: `${(durationBase + rnd() * durationSpread).toFixed(3)}s`,
  }));
}
