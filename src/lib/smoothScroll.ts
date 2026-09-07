import type Lenis from 'lenis';

/*
 * A shared handle on the Lenis instance.
 *
 * Lenis takes over scrolling, so calling `window.scrollTo` while it is running
 * fights it rather than driving it — the page lurches and lands somewhere
 * other than where you asked. Anything that wants to move the page
 * programmatically has to go through Lenis when it exists.
 *
 * Lenis is deliberately not installed when the visitor asks for reduced
 * motion, so the native fallback below is a real code path, not a guard.
 */

let instance: Lenis | null = null;

export function registerLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function scrollToY(y: number, { immediate = false }: { immediate?: boolean } = {}) {
  if (instance) {
    instance.scrollTo(y, { immediate });
    return;
  }
  window.scrollTo({ top: y, behavior: immediate ? 'auto' : 'smooth' });
}
