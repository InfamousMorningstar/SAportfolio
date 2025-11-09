import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Matter from 'matter-js';
import gsap from 'gsap';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function splitTextEl(el: HTMLElement) {
  const text = el.textContent || '';
  const frag = document.createDocumentFragment();
  [...text].forEach((ch) => {
    const s = document.createElement('span');
    s.className = 'hp-char inline-block will-change-transform';
    s.textContent = ch;
    frag.appendChild(s);
  });
  el.setAttribute('data-hp-original', text);
  el.textContent = '';
  el.appendChild(frag);
}

function restoreTextEl(el: HTMLElement) {
  const original = el.getAttribute('data-hp-original');
  if (original != null) el.textContent = original;
  el.removeAttribute('data-hp-original');
}

type Props = {
  children: React.ReactNode;
  gravity?: number;
  bounce?: number;
  airFriction?: number;
  floorSelector?: string;
  triggerSelector?: string;
};

export default function HeroPhysics({
  children,
  gravity = 1,
  bounce = 0.45,
  airFriction = 0.01,
  floorSelector = '#hero-floor',
  triggerSelector = '#hero-trigger',
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hasTriggeredRef = useRef(false);
  const wasIntersectingRef = useRef(false);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const textEls = Array.from(
      rootRef.current.querySelectorAll<HTMLElement>('[data-physics="text"]')
    );
    textEls.forEach(splitTextEl);

    return () => {
      textEls.forEach(restoreTextEl);
    };
  }, []);

  useEffect(() => {
    const container = rootRef.current;
    if (!container) return;

    if (prefersReducedMotion()) return;

    const floorEl = document.querySelector<HTMLElement>(floorSelector);
    const triggerEl = document.querySelector<HTMLElement>(triggerSelector);

    if (!triggerEl) {
      console.warn('Trigger element not found:', triggerSelector);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Track if element has been in view
          if (entry.isIntersecting) {
            wasIntersectingRef.current = true;
          }
          // Only trigger physics if element WAS in view and now is leaving
          if (!entry.isIntersecting && wasIntersectingRef.current && !hasTriggeredRef.current) {
            hasTriggeredRef.current = true;
            playPhysics(container, floorEl, { gravity, bounce, airFriction });
          }
        });
      },
      { threshold: 0, rootMargin: '-50% 0px -50% 0px' }
    );

    io.observe(triggerEl);
    return () => io.disconnect();
  }, [gravity, bounce, airFriction, floorSelector, triggerSelector]);

  return (
    <div ref={rootRef} className="relative">
      {children}
    </div>
  );
}

function playPhysics(
  container: HTMLElement,
  floorEl: HTMLElement | null,
  opts: { gravity: number; bounce: number; airFriction: number }
) {
  const { gravity, bounce, airFriction } = opts;

  const affTextChars = Array.from(
    container.querySelectorAll<HTMLElement>('.hp-char')
  );
  const affBlocks = Array.from(
    container.querySelectorAll<HTMLElement>('[data-physics="block"]')
  );

  const items: HTMLElement[] = [...affTextChars, ...affBlocks];
  if (items.length === 0) return;

  const originals = new Map<HTMLElement, { x: number; y: number; r: number }>();

  const baseRect = container.getBoundingClientRect();
  items.forEach((el) => {
    const r = el.getBoundingClientRect();
    const x = r.left - baseRect.left;
    const y = r.top - baseRect.top;
    originals.set(el, { x, y, r: 0 });
    el.style.position = 'absolute';
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.transform = 'translate3d(0,0,0)';
    el.style.willChange = 'transform';
    el.style.pointerEvents = 'none';
  });

  const engine = Matter.Engine.create({ enableSleeping: true });
  engine.world.gravity.y = gravity;
  const runner = Matter.Runner.create();

  const bodies: Map<HTMLElement, Matter.Body> = new Map();

  items.forEach((el) => {
    const r = el.getBoundingClientRect();
    const w = Math.max(1, r.width);
    const h = Math.max(1, r.height);
    const x = r.left - baseRect.left + w / 2;
    const y = r.top - baseRect.top + h / 2;

    const body = Matter.Bodies.rectangle(x, y, w, h, {
      restitution: bounce,
      frictionAir: airFriction,
      density: Math.max(0.0005, (w * h) / 150000),
      chamfer: { radius: Math.min(6, Math.min(w, h) / 4) },
    });
    bodies.set(el, body);
  });

  const cRect = container.getBoundingClientRect();
  let floorY = cRect.height - 2;
  if (floorEl) {
    const fRect = floorEl.getBoundingClientRect();
    floorY = Math.min(cRect.height - 2, fRect.top - cRect.top);
  }
  const floor = Matter.Bodies.rectangle(
    cRect.width / 2,
    floorY,
    cRect.width * 2,
    20,
    { isStatic: true }
  );

  Matter.World.add(engine.world, [floor, ...Array.from(bodies.values())]);

  bodies.forEach((b) => {
    Matter.Body.applyForce(b, b.position, {
      x: (Math.random() - 0.5) * 0.03,
      y: -Math.random() * 0.02,
    });
    Matter.Body.setAngularVelocity(b, (Math.random() - 0.5) * 0.2);
  });

  const update = () => {
    bodies.forEach((body, el) => {
      const { x, y } = body.position;
      const angle = body.angle;
      el.style.transform = `translate3d(${x - el.offsetWidth / 2}px, ${
        y - el.offsetHeight / 2
      }px, 0) rotate(${angle}rad)`;
    });
  };

  Matter.Events.on(engine, 'afterUpdate', update);
  Matter.Runner.run(runner, engine);

  let stillFrames = 0;
  const settleCheck = () => {
    const allSleeping = Array.from(bodies.values()).every((b) =>
      b.isSleeping
    );
    if (allSleeping) stillFrames++;
    else stillFrames = 0;
    if (stillFrames >= 15) {
      window.clearInterval(settleInterval);
      setTimeout(() => summonBack(), 550);
    }
  };
  const settleInterval = window.setInterval(settleCheck, 100);

  function summonBack() {
    Matter.Runner.stop(runner);
    Matter.Events.off(engine, 'afterUpdate', update);

    const els = Array.from(bodies.keys());

    const tremor = gsap.timeline();
    tremor.to(els, {
      duration: 0.08,
      x: '+=3',
      y: '+=3',
      repeat: 5,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: { amount: 0.5, from: 'random' },
    });

    const fly = gsap.timeline({ delay: 0.05 });
    els.forEach((el) => {
      const o = originals.get(el)!;
      fly.to(
        el,
        {
          duration: 1.2,
          x: o.x - parseFloat(el.style.left || '0'),
          y: o.y - parseFloat(el.style.top || '0'),
          rotation: 0,
          ease: 'power3.inOut',
          onComplete: () => {
            el.style.position = '';
            el.style.left = '';
            el.style.top = '';
            el.style.transform = '';
            el.style.willChange = '';
            el.style.pointerEvents = '';
          },
        },
        0
      );
    });

    fly.add(() => {
      container
        .querySelectorAll<HTMLElement>('[data-physics="text"]')
        .forEach(restoreTextEl);
    });
  }
}
