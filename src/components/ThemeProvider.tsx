"use client";

import React, { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (value: Theme) => void;
  toggleTheme: (e?: React.MouseEvent) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio-theme";

/*
 * The View Transitions API is not in the DOM lib for every TS version, and it
 * is genuinely optional at runtime. Declaring the shape we use is honest about
 * both facts, and better than a @ts-ignore that silently stops applying if the
 * types ever catch up.
 */
type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> };
};

const applyThemeToDocument = (theme: Theme) => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
  document.body?.setAttribute("data-theme", theme);
};

const resolveInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "dark";
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  // Dark-first: matches the inline script in layout.tsx. Only an explicit
  // toggle switches to light, so first impressions are not left to the OS.
  return "dark";
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof document === "undefined") {
      return "dark";
    }
    return document.documentElement.classList.contains("light") ? "light" : "dark";
  });
  useLayoutEffect(() => {
    const initial = resolveInitialTheme();
    applyThemeToDocument(initial);
    /*
     * localStorage cannot be read during SSR or inside the state initialiser,
     * and the inline script in the root layout that normally sets this before
     * hydration can legitimately fail — private browsing, blocked storage.
     * This is a one-time reconciliation with an external store on mount rather
     * than a render-driven cascade, and the functional update means React bails
     * out entirely when the pre-hydration script already got it right.
     */
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState((current) => (current === initial ? current : initial));
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") return;
      const nextTheme: Theme = event.matches ? "dark" : "light";
      setThemeState(nextTheme);
      applyThemeToDocument(nextTheme);
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const setTheme = useCallback((value: Theme) => {
    setThemeState(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value);
      applyThemeToDocument(value);
    }
  }, []);

  const toggleTheme = useCallback((e?: React.MouseEvent) => {
    const newTheme = theme === "light" ? "dark" : "light";
    
    const doc = document as ViewTransitionDocument;

    if (!doc.startViewTransition || !e) {
      setThemeState(newTheme);
      applyThemeToDocument(newTheme);
      window.localStorage.setItem(STORAGE_KEY, newTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      setThemeState(newTheme);
      applyThemeToDocument(newTheme);
      window.localStorage.setItem(STORAGE_KEY, newTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      
      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          easing: "ease-in",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }, [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
