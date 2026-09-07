'use client';

import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Lenis from 'lenis';
import { registerLenis } from '@/lib/smoothScroll';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hijacked scrolling is one of the worst offenders for anyone with
    // vestibular sensitivity, so it is not installed at all when the OS asks
    // for reduced motion — rather than installed and then damped.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Published so programmatic scrolling elsewhere (the keyboard affordance
    // in Projects) can drive Lenis instead of fighting it.
    registerLenis(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      registerLenis(null);
      lenis.destroy();
    };
  }, []);

  /*
   * `reducedMotion="user"` makes every framer-motion animation in the tree
   * honour the OS setting: transforms and opacity changes are skipped to their
   * end state instead of animating. One line, applies to every component,
   * cannot be forgotten by the next one added.
   */
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
