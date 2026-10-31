'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/*
 * "Hello, World!" boot sequence.
 *
 * The text is rasterised to an offscreen 2D canvas every frame, then pushed
 * through three WebGL2 passes:
 *   1. feedback  – datamosh: last frame is advected by block-quantised motion
 *                  vectors and blended with the (torn, block-corrupted) text,
 *                  so every damaged frame becomes the source of the next.
 *   2. composite – accent-tinted RGB split, fake pixel-sort melt, band
 *                  inversion, vertical roll, scanlines and grain.
 *   3. breakdown – the hijacked-signal finale: slabs slide out of register,
 *                  sync is lost, the frame tiles, macroblocks smear, channels
 *                  tear, colour depth collapses and static floods in. Then the
 *                  signal drops out block by block to reveal the site.
 *
 * Two letters are "infected" (after Songbird's Blackwall hacks in Phantom
 * Liberty): they render on their own channel as crimson, pixelated glyphs
 * etched with code, stuttering between frame-held offsets and shedding a
 * rising pixel mist. Then the hijacker shows its face: a pixel skull that
 * laughs at you, drawn on the same channel, with the glitches hitting on
 * every laugh.
 *
 * Channel key on the 2D canvas: red = normal text, blue = infected text.
 */

const TEXT = 'Hello, World!';
const PROMPT = '$ ./hello_world';
const EXIT = '// exit 0';
const FAULT = 'Segmentation fault (core dumped)';
const SCRAMBLE = 'ABCDEFGHJKLMNPQRSTUVXYZabdefghkmnpqrstuwxyz0123456789#$%&@';
const HACK = '0123456789ABCDEF#%&@ЖΞΣ¥';
// Look-alikes a corrupted glyph tends to collapse into
const LOOKALIKE: Record<string, string> = {
  H: '#4N8', e: '3€6c', l: '1|7!', o: '0Ø8°', ',': ';.', W: 'VMw', r: 'Γ7f', d: '89∂b', '!': '1|i',
};

// Timeline (seconds)
const T_TYPE = 0.35;
const T_KEY = 0.075;
const T_TYPED = T_TYPE + TEXT.length * T_KEY;
const T_BURST = 2.2;
const T_BREAK = 2.45;
const T_FACE = 2.7;
const T_REVEAL = 3.85;
const T_END = 4.4;
// jaw snaps per second while laughing
const LAUGH = 7;

// The hijacker: a pixel skull, 15 cells wide. 'o' = glowing pupil.
const SKULL = [
  '.....#####.....',
  '...#########...',
  '..###########..',
  '.#############.',
  '.#############.',
  '###############',
  '##....###....##',
  '##.o..###..o.##',
  '##....###....##',
  '###..##.##..###',
  '.######.######.',
  '..####...####..',
  '...#########...',
  '...#.#.#.#.#...',
];
const JAW = [
  '...#.#.#.#.#...',
  '...#########...',
  '....#######....',
];

// Scramble waves sweeping across the line: [start, direction]
const WAVES: [number, 1 | -1][] = [[T_BURST, -1]];

const VERT = `#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

const HASH = `
float h(vec2 p) {
  p = fract(p * vec2(443.897, 441.423));
  p += dot(p, p.yx + 19.19);
  return fract((p.x + p.y) * p.x);
}`;

const FEEDBACK = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uText;
uniform sampler2D uPrev;
uniform float uTime;
uniform float uAmt;
uniform float uMosh;
${HASH}
void main() {
  vec2 uv = vUv;
  float t = floor(uTime * 30.0);

  // horizontal tear bands
  float bands = mix(6.0, 48.0, h(vec2(t, 2.0)));
  float b = floor(uv.y * bands);
  float on = step(1.0 - uAmt * 0.55, h(vec2(b, t)));
  uv.x += on * (h(vec2(b, t + 5.0)) - 0.5) * 0.35 * uAmt;

  // block corruption
  vec2 blk = floor(vUv * vec2(32.0, 18.0));
  float bo = step(1.0 - uAmt * uAmt * 0.12, h(blk + t * 0.37));
  uv += bo * (vec2(h(blk + t + 1.0), h(blk + t + 2.0)) - 0.5) * vec2(0.12, 0.04);

  // smooth analog wobble
  uv.x += sin(vUv.y * 40.0 + uTime * 9.0) * 0.004 * uAmt;

  float cur = texture(uText, uv).r;

  // datamosh: advect previous frame by quantised motion vectors
  vec2 mb = floor(vUv * vec2(20.0, 12.0));
  float mt = floor(uTime * 6.0);
  vec2 mv = (vec2(h(mb + mt), h(mb + mt + 9.0)) - 0.5) * vec2(0.02, 0.006);
  mv.x += 0.004;
  float prev = texture(uPrev, vUv - mv * uMosh).r * 0.93 * uMosh;

  // infected glyphs: blocky row stutter instead of smooth tears
  float st = floor(uTime * 20.0);
  float ib = floor(vUv.y * 60.0);
  vec2 iuv = vUv;
  iuv.x += step(0.6, h(vec2(ib, st))) * (h(vec2(ib, st + 1.0)) - 0.5) * 0.02;
  float inf = texture(uText, iuv).b;

  // pixel mist: last frame's infection drifts upward and frays
  vec2 cell = floor(vUv * vec2(90.0, 50.0));
  vec2 rise = vec2((h(cell + floor(uTime * 12.0)) - 0.5) * 0.004, 0.006);
  float mist = texture(uPrev, vUv - rise).b * 0.8;

  // r = text + trails, g = clean text, b = infection + mist
  o = vec4(max(cur, prev), cur, max(inf, mist), 1.0);
}`;

const COMPOSITE = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uFb;
uniform sampler2D uText;
uniform vec2 uRes;
uniform float uTime;
uniform float uAmt;
uniform float uSort;
uniform float uHack;
uniform float uZoom;
uniform float uRoll;
uniform float uInvert;
uniform vec3 uA;
uniform vec3 uB;
uniform vec3 uR;
${HASH}
void main() {
  vec2 c = vUv - 0.5;
  vec2 suv = c / (1.0 + uZoom) + 0.5;
  // vertical hold slipping
  suv.y = fract(suv.y + uRoll);

  // RGB split, tinted with the theme accents
  float ca = (0.0015 + 0.01 * uAmt + 0.035 * uAmt * uAmt) * (0.6 + 0.4 * sin(uTime * 13.0));
  vec2 off = vec2(ca, ca * 0.15);
  vec4 B = texture(uFb, suv);
  float gT = B.g;
  float rT = texture(uFb, suv + off).g;
  float bT = texture(uFb, suv - off).g;
  vec3 col = vec3(gT) + uA * max(rT - gT, 0.0) * 1.4 + uB * max(bT - gT, 0.0) * 1.4;

  // datamosh trails
  float smear = max(B.r - B.g, 0.0);
  col += mix(uA, uB, h(floor(suv * vec2(20.0, 12.0)) + floor(uTime * 6.0))) * smear * 0.9;

  // fake pixel-sort melt on selected rows
  float row = floor(suv.y * uRes.y / 2.0);
  if (h(vec2(row, floor(uTime * 10.0))) > 1.0 - uSort * 0.7) {
    float len = 0.05 + 0.4 * uSort * h(vec2(row, 3.0));
    float st = 0.0;
    for (int i = 1; i <= 24; i++) {
      float f = float(i) / 24.0;
      st = max(st, texture(uFb, suv - vec2(f * len, 0.0)).g * (1.0 - f));
    }
    col = max(col, mix(vec3(1.0), uB, 0.5) * st);
  }

  // Songbird infection: crimson, pixelated, dissolving into mist
  float px = mix(3.0, 9.0, step(0.5, h(vec2(floor(uTime * 14.0), 4.0))));
  vec2 pc = floor(suv * uRes / px);
  vec2 qc = (pc + 0.5) * px / uRes;
  float core = texture(uText, suv).b;
  float coreQ = texture(uText, qc).b;
  float mist = max(texture(uFb, qc).b - coreQ, 0.0) * step(0.55, h(pc + floor(uTime * 24.0))) * 0.8;
  float ghost = texture(uText, suv + vec2(0.006, 0.0)).b;
  float hot = step(0.5, h(vec2(floor(uTime * 30.0), 9.0)));
  vec3 red = uR * (max(core, coreQ * 0.8) + mist)
           + vec3(1.0, 0.75, 0.78) * core * 0.35 * hot
           + vec3(0.45, 0.0, 0.08) * ghost;
  col = max(col, red);
  col += uR * uHack * 0.07;

  // inverted bands on the hardest hits
  float ib = floor(suv.y * 14.0);
  if (h(vec2(ib, floor(uTime * 24.0))) < uInvert) col = vec3(1.0) - min(col, 1.0);

  // scanlines + grain
  col *= 0.9 + 0.1 * sin(vUv.y * uRes.y * 1.5708);
  col += (h(vUv * uRes + uTime * 60.0) - 0.5) * (0.03 + 0.08 * uAmt);

  // vignette
  col *= 1.0 - 0.9 * dot(c, c);
  o = vec4(max(col, 0.0), 1.0);
}`;

const BREAK = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uImg;
uniform vec2 uRes;
uniform float uTime;
uniform float uBreak;
uniform float uReveal;
uniform float uFlash;
uniform vec2 uShake;
uniform vec3 uR;
${HASH}
void main() {
  float k = uBreak;
  float t = floor(uTime * 24.0);
  vec2 uv = vUv + uShake;

  // signal slabs sliding out of register
  float slabs = mix(3.0, 22.0, h(vec2(t, 1.0)));
  float sb = floor(uv.y * slabs);
  uv.x += (h(vec2(sb, t)) - 0.5) * step(1.0 - k * 0.8, h(vec2(sb, t + 3.0))) * 0.6 * k;

  // horizontal sync lost: the whole picture skews
  uv.x += (uv.y - 0.5) * (h(vec2(t, 8.0)) - 0.5) * step(0.75, h(vec2(t, 7.0))) * 0.8 * k;

  // the frame duplicates itself across the screen
  float tiles = 1.0 + floor(h(vec2(t, 12.0)) * 3.0);
  uv = mix(uv, fract(uv * vec2(tiles, tiles + 1.0)), step(1.0 - k * 0.3, h(vec2(t, 11.0))));

  // macroblock corruption: smeared, displaced and flat blocks
  vec2 bs = vec2(16.0) * (1.0 + floor(h(vec2(t, 13.0)) * 3.0));
  vec2 bc = floor(vUv * uRes / bs);
  vec2 bo = (bc + 0.5) * bs / uRes;
  float mb = step(1.0 - k * 0.45, h(bc + t * 0.71));
  float ty = h(bc + t + 4.0);
  if (mb > 0.5) {
    if (ty < 0.4) uv.x = bo.x - bs.x / uRes.x * 0.5;
    else if (ty < 0.75) uv += (vec2(h(bc + t + 5.0), h(bc + t + 6.0)) - 0.5) * 0.3;
    else uv = bo;
  }

  // channels tear apart
  float ca = 0.003 + 0.07 * k * h(vec2(t, 15.0));
  vec3 col = vec3(
    texture(uImg, uv + vec2(ca, ca * 0.2)).r,
    texture(uImg, uv).g,
    texture(uImg, uv - vec2(ca, 0.0)).b
  );

  // colour depth collapses
  float lv = mix(256.0, 3.0, k * k * step(0.5, h(vec2(t, 16.0))));
  col = floor(col * lv) / lv;

  // hostile blocks bleed crimson
  col = mix(col, uR * (0.4 + dot(col, vec3(0.6))), mb * step(0.8, ty));

  // static: noise bands, and now and then the whole signal drops
  float px = h(floor(vUv * uRes / 2.0) + uTime * 37.0);
  col = mix(col, vec3(px), step(1.0 - k * 0.18, h(vec2(floor(vUv.y * 45.0), t + 20.0))) * 0.7);
  col = mix(col, vec3(px * 0.7), step(1.0 - k * 0.06, h(vec2(t, 21.0))));

  col += uFlash;

  // the signal drops out block by block, revealing the site behind
  vec2 rc = floor(vUv * uRes / 40.0);
  float order = h(rc + 3.0);
  float gone = step(order, uReveal);
  // blocks about to go flicker first
  gone = max(gone, step(order, uReveal + 0.12) * step(0.5, h(rc + t)) * step(0.001, uReveal));
  float a = 1.0 - gone;
  o = vec4(min(col, 1.0) * a, a);
}`;

function compile(gl: WebGL2RenderingContext, fs: string) {
  const make = (type: number, src: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(s) ?? 'shader compile failed');
    }
    return s;
  };
  const p = gl.createProgram()!;
  gl.attachShader(p, make(gl.VERTEX_SHADER, VERT));
  gl.attachShader(p, make(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(p) ?? 'program link failed');
  }
  const uniforms: Record<string, WebGLUniformLocation | null> = {};
  const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS) as number;
  for (let i = 0; i < n; i++) {
    const name = gl.getActiveUniform(p, i)!.name;
    uniforms[name] = gl.getUniformLocation(p, name);
  }
  return { p, u: uniforms };
}

function cssRgb(name: string, fallback: [number, number, number]) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const parts = raw.split(/\s+/).map(Number);
  return parts.length === 3 && parts.every((v) => !Number.isNaN(v))
    ? (parts.map((v) => v / 255) as [number, number, number])
    : fallback;
}

const CRIMSON: [number, number, number] = [1.0, 0.16, 0.27];

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const glRef = useRef<HTMLCanvasElement>(null);
  const srcRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem('portfolio-loaded')) {
      /*
       * sessionStorage is unavailable during SSR, so whether the loader has
       * already been shown this session cannot be known until after mount.
       * One-time read of an external store, not a cascading update.
       */
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoading(false);
      return;
    }

    const root = rootRef.current!;
    const src = srcRef.current!;
    const view = glRef.current!;
    const ctx = src.getContext('2d')!;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const gl = reduced
      ? null
      : view.getContext('webgl2', { antialias: false, alpha: true, premultipliedAlpha: true });

    let feedback: ReturnType<typeof compile> | null = null;
    let composite: ReturnType<typeof compile> | null = null;
    let brk: ReturnType<typeof compile> | null = null;
    if (gl) {
      try {
        feedback = compile(gl, FEEDBACK);
        composite = compile(gl, COMPOSITE);
        brk = compile(gl, BREAK);
      } catch {
        feedback = composite = brk = null;
      }
    }

    const bodyStyle = getComputedStyle(document.body);
    const headFont = bodyStyle.getPropertyValue('--font-head').trim() || 'sans-serif';
    const monoFont = bodyStyle.getPropertyValue('--font-jetbrains').trim() || 'monospace';

    let W = 0;
    let H = 0;
    let fontSize = 0;
    let x0 = 0;
    let prefix: number[] = [];
    // terminal lines never shrink below ~11 CSS px
    let small = 0;

    const layout = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      W = Math.round(window.innerWidth * dpr);
      H = Math.round(window.innerHeight * dpr);
      src.width = view.width = W;
      src.height = view.height = H;
      fontSize = Math.min(W * 0.14, H * 0.24);
      ctx.font = `700 ${fontSize}px ${headFont}`;
      const full = ctx.measureText(TEXT).width;
      // portrait screens are narrow: let the line use more of the width
      fontSize *= Math.min(1, ((W < H ? 0.92 : 0.84) * W) / full);
      ctx.font = `700 ${fontSize}px ${headFont}`;
      prefix = Array.from({ length: TEXT.length + 1 }, (_, i) =>
        ctx.measureText(TEXT.slice(0, i)).width,
      );
      x0 = (W - prefix[TEXT.length]) / 2;
      small = Math.max(fontSize * 0.13, 11 * dpr);
    };

    const pick = (s: string) => s[(Math.random() * s.length) | 0];
    const mutate = (ch: string) =>
      LOOKALIKE[ch] && Math.random() < 0.55 ? pick(LOOKALIKE[ch]) : pick(SCRAMBLE);
    const hash = (n: number) => {
      const x = Math.sin(n * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    };

    // With WebGL the raster is a channel key; without it, it is the final image.
    const keyed = !!(gl && feedback && composite && brk);
    const NORMAL = keyed ? '#f00' : '#fff';
    const DIM = keyed ? 'rgba(255,0,0,0.42)' : 'rgba(255,255,255,0.42)';
    const INFECT = keyed ? '#00f' : '#ff2a45';

    // Per-character swaps hold for a few frames so the substitute is readable.
    const swapUntil = new Array<number>(TEXT.length).fill(0);
    const swapGlyph = TEXT.split('');
    // Scramble cycling is throttled so each random glyph registers.
    const cycleAt = new Array<number>(TEXT.length).fill(0);
    const cycleGlyph = TEXT.split('');
    const cycle = (i: number, t: number, pool: string, keep = 0) => {
      if (t >= cycleAt[i]) {
        cycleAt[i] = t + 0.04;
        cycleGlyph[i] = Math.random() < keep ? TEXT[i] : pick(pool);
      }
      return cycleGlyph[i];
    };
    const inWave = (i: number, t: number) =>
      WAVES.some(([s, dir]) => {
        const k = dir > 0 ? i : TEXT.length - 1 - i;
        const a = s + k * 0.028;
        return t >= a && t < a + 0.14;
      });
    const decode = (str: string, t: number, start: number) =>
      str
        .split('')
        .map((c, j) => (c !== ' ' && t < start + j * 0.02 ? pick(SCRAMBLE) : c))
        .join('');

    // One infected letter in each word; each gets a few hack episodes.
    const infected = [(Math.random() * 5) | 0, 7 + ((Math.random() * 5) | 0)];
    const episodes = infected.map((idx, k) => [
      [T_TYPE + idx * T_KEY + 0.16, 0.32],
      [T_TYPED + 0.32 + k * 0.3 + Math.random() * 0.1, 0.28],
      [T_BURST - 0.05, Infinity],
    ]);
    // seconds into the active episode, or -1
    const hackAt = (i: number, t: number) => {
      const k = infected.indexOf(i);
      if (k < 0) return -1;
      const ep = episodes[k].find(([s, d]) => t >= s && t < s + d);
      return ep ? t - ep[0] : -1;
    };
    let hackPulse = 0;

    type Mote = { x: number; y: number; vx: number; vy: number; s: number; age: number; life: number };
    let motes: Mote[] = [];

    const drawInfected = (i: number, t: number, since: number, baseY: number) => {
      const cellX = x0 + prefix[i];
      const cell = prefix[i + 1] - prefix[i];
      const top = baseY - fontSize * 0.78;
      const hgt = fontSize * 0.98;
      const g = cycle(i, t, HACK, 0.8);
      const gx = cellX + (cell - ctx.measureText(g).width) / 2;
      // stutter between frame-held offsets
      const step = Math.floor(t * 20);
      const jx = (Math.floor(hash(step * 7 + i) * 3) - 1) * fontSize * 0.045;

      ctx.fillStyle = INFECT;
      if (since < 0.07) {
        // takeover frame: inverted block with the glyph knocked out
        ctx.fillRect(cellX - fontSize * 0.02, top, cell + fontSize * 0.04, hgt);
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = '#000';
        ctx.fillText(g, gx, baseY);
        ctx.globalCompositeOperation = 'lighter';
      } else {
        ctx.fillText(g, gx + jx, baseY);
        if (hash(step * 3 + i) < 0.4) {
          ctx.globalAlpha = 0.5;
          ctx.fillText(g, gx + jx + fontSize * (hash(step) < 0.5 ? -0.08 : 0.08), baseY);
          ctx.globalAlpha = 1;
        }
        // etch Blackwall code into the glyph
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = '#000';
        const cs = fontSize * 0.085;
        ctx.font = `700 ${cs}px ${monoFont}`;
        for (let y = top + cs; y < top + hgt; y += cs * 1.05) {
          for (let x = cellX; x < cellX + cell; x += cs * 0.62) {
            if (Math.random() < 0.16) ctx.fillText(pick(HACK), x, y);
          }
        }
        // code streaming up past the letter
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = INFECT;
        for (let c = 0; c < 3; c++) {
          const x = cellX + cell * (0.15 + c * 0.32);
          for (let r = 0; r < 7; r++) {
            const y = top + hgt - ((t * fontSize * 1.6 + r * cs * 1.2 + c * 37) % (hgt * 1.6));
            ctx.globalAlpha = 0.25 + 0.5 * hash(r * 13 + c + step);
            ctx.fillText(pick(HACK), x, y);
          }
        }
        ctx.globalAlpha = 1;
        ctx.font = `700 ${fontSize}px ${headFont}`;
      }

      // shed pixel mist from the glyph's upper half
      for (let n = 0; n < 2; n++) {
        motes.push({
          x: cellX + Math.random() * cell,
          y: top + Math.random() * hgt * 0.6,
          vx: (Math.random() - 0.3) * fontSize * 0.4,
          vy: -(0.3 + Math.random()) * fontSize * 0.9,
          s: fontSize * (0.02 + Math.random() * 0.04),
          age: 0,
          life: 0.35 + Math.random() * 0.5,
        });
      }
    };

    // A laugh is one jaw snap; returns 0..1, peaking as the jaw drops.
    const laughAt = (t: number) => {
      const ls = (t - T_FACE - 0.25) * LAUGH;
      return ls > 0 && Math.floor(ls) % 2 === 0 ? Math.exp(-(ls % 1) * 4) : 0;
    };

    const drawFace = (t: number) => {
      const since = t - T_FACE;
      const rows = SKULL.length + JAW.length + 2;
      const px = Math.round(Math.min((H * 0.6) / rows, (W * 0.6) / 15));
      const laugh = laughAt(t);
      const open = laugh > 0;
      const fx = Math.round(W / 2 - 7.5 * px);
      // the head kicks back on every laugh
      const fy = Math.round(H * 0.4 - (rows / 2) * px - laugh * px * 0.6);
      const gap = Math.max(1, Math.round(px * 0.14));
      const step = Math.floor(t * 20);
      // assembles from scattered rows over the first 0.2s
      const build = since / 0.2;

      const grid = (lines: string[], oy: number, seed: number) =>
        lines.forEach((line, r) => {
          if (build < 1 && hash(r * 7 + seed + step) > build) return;
          // a row now and then slips sideways
          const jx = hash(r * 13 + seed + step) < 0.1 ? (hash(r + step) - 0.5) * px * 4 : 0;
          for (let c = 0; c < line.length; c++) {
            if (line[c] === '.') continue;
            const pupil = line[c] === 'o';
            if (pupil && hash(step + c) < 0.25) continue;
            ctx.fillStyle = pupil ? NORMAL : INFECT;
            ctx.fillRect(fx + c * px + jx, fy + (r + oy) * px, px - gap, px - gap);
          }
        });
      grid(SKULL, 0, 0);
      grid(JAW, SKULL.length + (open ? 2.5 : 0.15), 50);

      // HA HA HA, one more every other snap
      const bottom = fy + (SKULL.length + JAW.length + 2.5) * px;
      const n = Math.min(4, 1 + Math.floor(Math.max(0, since - 0.25) * LAUGH / 2));
      ctx.font = `700 ${px * 2.2}px ${monoFont}`;
      ctx.fillStyle = INFECT;
      const ha = Array.from({ length: n }, (_, k) =>
        k === n - 1 && open ? pick(HACK) + pick(HACK) : 'HA',
      ).join(' ');
      ctx.fillText(ha, W / 2 - ctx.measureText(ha).width / 2, bottom + px * 2);

      // laughter scrawled across the screen, the way it is in every hack
      ctx.font = `700 ${px * 1.3}px ${monoFont}`;
      const echoes = Math.min(14, Math.floor(since * 10));
      for (let k = 0; k < echoes; k++) {
        if (hash(k * 3 + step) < 0.3) continue;
        ctx.globalAlpha = 0.4 + 0.4 * hash(k + 9);
        ctx.fillText('HA', hash(k * 17.3) * W * 0.9, H * 0.08 + hash(k * 5.1) * H * 0.88);
      }
      ctx.globalAlpha = 1;

      ctx.font = `500 ${Math.max(px * 0.75, small)}px ${monoFont}`;
      ctx.fillStyle = DIM;
      const fault = decode(FAULT, t, T_BREAK);
      ctx.fillText(fault, W / 2 - ctx.measureText(fault).width / 2, bottom + px * 3.6);
    };

    // `rate` = expected swaps per second, per character
    const drawText = (t: number, rate: number, dt: number) => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      ctx.textBaseline = 'alphabetic';
      const baseY = H / 2 + fontSize * 0.32;
      if (t >= T_FACE) {
        drawFace(t);
        return;
      }

      ctx.font = `500 ${small}px ${monoFont}`;
      ctx.fillStyle = DIM;
      ctx.fillText(decode(PROMPT, t, 0.02), x0 + fontSize * 0.03, baseY - fontSize * 0.9 - small * 0.4);
      if (t > T_TYPED + 0.35 && t < T_BURST) {
        ctx.fillText(decode(EXIT, t, T_TYPED + 0.35), x0 + fontSize * 0.03, baseY + fontSize * 0.3 + small * 1.6);
      } else if (t >= T_BREAK) {
        ctx.fillStyle = NORMAL;
        ctx.fillText(decode(FAULT, t, T_BREAK), x0 + fontSize * 0.03, baseY + fontSize * 0.3 + small * 1.6);
      }

      ctx.font = `700 ${fontSize}px ${headFont}`;
      const typed = Math.max(0, Math.min(TEXT.length, Math.floor((t - T_TYPE) / T_KEY) + 1));
      const chance = 1 - Math.exp(-rate * dt);
      hackPulse = 0;
      for (let i = 0; i < typed; i++) {
        const since = hackAt(i, t);
        if (since >= 0) {
          hackPulse = Math.max(hackPulse, Math.exp(-since * 8));
          drawInfected(i, t, since, baseY);
          continue;
        }
        let ch = TEXT[i];
        if (ch !== ' ') {
          const age = t - (T_TYPE + i * T_KEY);
          if (age < 0.15 || inWave(i, t)) {
            // decoding: cycle through letters and numbers before locking
            ch = cycle(i, t, SCRAMBLE);
          } else {
            if (t >= swapUntil[i] && Math.random() < chance) {
              swapUntil[i] = t + 0.06 + Math.random() * 0.16;
              swapGlyph[i] = mutate(TEXT[i]);
            }
            if (t < swapUntil[i]) ch = swapGlyph[i];
          }
        }
        // centre substitutes in the original glyph's cell so layout never shifts
        const cell = prefix[i + 1] - prefix[i];
        const dx = ch === TEXT[i] ? 0 : (cell - ctx.measureText(ch).width) / 2;
        ctx.fillStyle = NORMAL;
        ctx.fillText(ch, x0 + prefix[i] + dx, baseY);
      }

      // pixel mist, snapped to its own grid so it reads as blocks
      ctx.fillStyle = INFECT;
      motes = motes.filter((m) => (m.age += dt) < m.life);
      for (const m of motes) {
        m.x += m.vx * dt;
        m.y += m.vy * dt;
        ctx.globalAlpha = 1 - m.age / m.life;
        ctx.fillRect(Math.round(m.x / m.s) * m.s, Math.round(m.y / m.s) * m.s, m.s, m.s);
      }
      ctx.globalAlpha = 1;

      const typing = t > T_TYPE && t < T_TYPED;
      if (typing || Math.floor(t / 0.5) % 2 === 0) {
        ctx.fillStyle = NORMAL;
        ctx.fillRect(
          x0 + prefix[typed] + fontSize * 0.06,
          baseY - fontSize * 0.74,
          fontSize * 0.07,
          fontSize * 0.86,
        );
      }
    };

    let raf = 0;
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      sessionStorage.setItem('portfolio-loaded', 'true');
      setIsLoading(false);
    };

    layout();
    window.addEventListener('resize', layout);
    // Redraw once the display font arrives; the per-frame raster picks it up.
    document.fonts?.load(`700 64px ${headFont}`).then(layout).catch(() => {});

    // Reduced motion or no usable WebGL2: show the clean text, then leave.
    if (!gl || !feedback || !composite || !brk) {
      src.style.display = 'block';
      view.style.display = 'none';
      drawText(T_TYPED + 1, 0, 0);
      const timer = setTimeout(finish, reduced ? 900 : 1600);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', layout);
      };
    }

    const fbProg = feedback;
    const compProg = composite;
    const brkProg = brk;
    let fb: { tex: WebGLTexture; fbo: WebGLFramebuffer }[] = [];
    let comp: { tex: WebGLTexture; fbo: WebGLFramebuffer } | null = null;

    const makeTex = () => {
      const tex = gl.createTexture()!;
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      return tex;
    };
    const textTex = makeTex();
    const makeTarget = () => {
      const tex = makeTex();
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, W, H, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      const fbo = gl.createFramebuffer()!;
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      return { tex, fbo };
    };
    const freeTargets = () => {
      [...fb, ...(comp ? [comp] : [])].forEach(({ tex, fbo }) => {
        gl.deleteTexture(tex);
        gl.deleteFramebuffer(fbo);
      });
    };

    let fbW = 0;
    let fbH = 0;
    const ensureTargets = () => {
      if (fbW === W && fbH === H) return;
      freeTargets();
      fb = [makeTarget(), makeTarget()];
      comp = makeTarget();
      fbW = W;
      fbH = H;
    };

    const accent = cssRgb('--accent', [139 / 255, 92 / 255, 246 / 255]);
    const accent2 = cssRgb('--accent2', [45 / 255, 212 / 255, 191 / 255]);

    let start = performance.now();
    let last = start;
    let amt = 0;
    let spike = 0;
    let keys = 0;
    let read = 0;
    let roll = 0;
    let rollUntil = 0;
    let opened = false;
    let brkAmt = 0;

    // Any click or key fast-forwards straight to the exit burst.
    const skip = () => {
      const t = (performance.now() - start) / 1000;
      if (t < T_BURST) start -= (T_BURST - t) * 1000;
    };
    window.addEventListener('pointerdown', skip);
    window.addEventListener('keydown', skip);

    const frame = (now: number) => {
      const t = (now - start) / 1000;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (t >= T_END) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        finish();
        return;
      }

      const typedNow = Math.floor((t - T_TYPE) / T_KEY) + 1;
      if (t > T_TYPE && typedNow > keys && keys < TEXT.length) {
        keys = typedNow;
        spike = 1;
      }
      spike *= Math.exp(-dt * 14);

      let target = 0.12;
      let mosh = 0;
      let sort = 0;
      let swapRate = 0;
      let invert = 0;
      let zoom = 0;
      let shake = 0;
      let brkTarget = 0;

      if (t >= T_TYPE && t < T_TYPED) {
        target = 0.35 + spike * 0.4;
        mosh = 0.7;
        swapRate = 3;
      } else if (t >= T_TYPED && t < T_BURST) {
        // the line settles and stays readable; only small twitches
        const k = Math.exp(-(t - T_TYPED) * 10);
        if (t < T_BURST - 0.25 && Math.random() < 0.008) spike = 0.3;
        target = 0.25 * k + spike * 0.2 + 0.01;
        mosh = 0.5 * k;
        swapRate = 0.12 + spike * 2;
      } else if (t >= T_BURST && t < T_BREAK) {
        const u = (t - T_BURST) / (T_BREAK - T_BURST);
        target = 0.3 + 0.9 * u * u;
        mosh = 0.9;
        sort = u;
        swapRate = 2 + u * 25;
        invert = Math.random() < 0.25 ? 0.06 + 0.14 * u : 0;
        zoom = Math.random() < 0.15 ? (Math.random() - 0.3) * 0.08 * u : 0;
        shake = 0.012 * u;
        brkTarget = 0.15 + 0.5 * u * Math.random();
      } else if (t >= T_BREAK && t < T_FACE) {
        // full takeover: the signal tears itself apart, with the odd
        // frame where the picture almost recovers
        const since = t - T_BREAK;
        target = 0.6;
        mosh = 0.9;
        sort = 0.6;
        swapRate = 25;
        invert = Math.random() < 0.2 ? 0.15 : 0;
        shake = 0.04 * Math.exp(-since * 8) + 0.006;
        brkTarget = Math.random() < 0.12 ? 0.1 : 0.75 + 0.25 * Math.random();
      } else if (t >= T_FACE) {
        // the face: clean enough to read, and every laugh hits the signal
        const laugh = laughAt(t);
        target = 0.1 + laugh * 0.45;
        mosh = 0.5;
        zoom = laugh * 0.05;
        shake = laugh * 0.014;
        invert = laugh > 0.8 && Math.random() < 0.3 ? 0.08 : 0;
        brkTarget = 0.05 + laugh * 0.5;
      }

      // the vertical hold slips now and then
      if (t >= rollUntil) {
        const chance = t >= T_BURST && t < T_FACE ? 0.08 : t > T_TYPE && t < T_BURST ? 0.002 + spike * 0.02 : 0;
        roll = Math.random() < chance ? (Math.random() - 0.5) * 0.3 : 0;
        rollUntil = t + 0.05 + Math.random() * 0.05;
      }

      // freeze-frames: the picture sticks while the corruption keeps moving
      const frozen = t >= T_BREAK && Math.random() < (t < T_FACE ? 0.3 : 0.08);
      if (!frozen) drawText(t, swapRate, dt);
      // while the line holds, the infected letters stay contained
      const contained = t < T_BURST;
      target += hackPulse * (contained ? 0.05 : 0.15);
      // break levels jump, they don't ease
      brkAmt = brkTarget + (contained ? 0 : hackPulse * 0.25);
      zoom += hackPulse * 0.03;
      amt += (target - amt) * (1 - Math.exp(-dt * 18));
      ensureTargets();

      if (!frozen) {
        gl.bindTexture(gl.TEXTURE_2D, textTex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src);
        gl.viewport(0, 0, W, H);

        // Pass 1: feedback / datamosh
        const write = 1 - read;
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb[write].fbo);
        gl.useProgram(fbProg.p);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, textTex);
        gl.uniform1i(fbProg.u.uText, 0);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, fb[read].tex);
        gl.uniform1i(fbProg.u.uPrev, 1);
        gl.uniform1f(fbProg.u.uTime, t);
        gl.uniform1f(fbProg.u.uAmt, amt);
        gl.uniform1f(fbProg.u.uMosh, mosh);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        // Pass 2: composite
        gl.bindFramebuffer(gl.FRAMEBUFFER, comp!.fbo);
        gl.useProgram(compProg.p);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, fb[write].tex);
        gl.uniform1i(compProg.u.uFb, 0);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, textTex);
        gl.uniform1i(compProg.u.uText, 1);
        gl.uniform2f(compProg.u.uRes, W, H);
        gl.uniform1f(compProg.u.uTime, t);
        gl.uniform1f(compProg.u.uAmt, amt);
        gl.uniform1f(compProg.u.uSort, sort);
        gl.uniform1f(compProg.u.uHack, hackPulse);
        gl.uniform1f(compProg.u.uZoom, zoom);
        gl.uniform1f(compProg.u.uRoll, roll);
        gl.uniform1f(compProg.u.uInvert, invert);
        gl.uniform3fv(compProg.u.uA, accent);
        gl.uniform3fv(compProg.u.uB, accent2);
        gl.uniform3fv(compProg.u.uR, CRIMSON);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        read = write;
      }

      // Pass 3: signal breakdown to screen
      if (t >= T_REVEAL && !opened) {
        // from here the blocks that drop out show the site
        root.style.background = 'transparent';
        opened = true;
      }
      const since = t - T_BREAK;
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.useProgram(brkProg.p);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, comp!.tex);
      gl.uniform1i(brkProg.u.uImg, 0);
      gl.uniform2f(brkProg.u.uRes, W, H);
      gl.uniform1f(brkProg.u.uTime, t);
      gl.uniform1f(brkProg.u.uBreak, brkAmt);
      gl.uniform1f(brkProg.u.uReveal, smooth(T_REVEAL, T_END - 0.08, t) * 1.15);
      gl.uniform1f(
        brkProg.u.uFlash,
        (since >= 0 ? 0.8 * Math.exp(-since * 16) : 0) +
          (t >= T_FACE ? 0.6 * Math.exp(-(t - T_FACE) * 14) : 0),
      );
      gl.uniform2f(brkProg.u.uShake, (Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);
      gl.uniform3fv(brkProg.u.uR, CRIMSON);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', layout);
      window.removeEventListener('pointerdown', skip);
      window.removeEventListener('keydown', skip);
      // Free resources but keep the context alive: a remount reuses this canvas.
      freeTargets();
      gl.deleteTexture(textTex);
      gl.deleteProgram(fbProg.p);
      gl.deleteProgram(compProg.p);
      gl.deleteProgram(brkProg.p);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          ref={rootRef}
          className="fixed inset-0 z-[100] bg-black overflow-hidden select-none cursor-pointer"
          role="status"
          aria-label="Loading: Hello, World!"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeOut' } }}
        >
          <canvas ref={glRef} className="absolute inset-0 w-full h-full" />
          <canvas ref={srcRef} className="absolute inset-0 w-full h-full hidden" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
