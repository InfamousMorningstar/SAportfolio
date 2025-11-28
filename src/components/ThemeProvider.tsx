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
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
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
    setThemeState(initial);
    applyThemeToDocument(initial);
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
    
    // @ts-ignore - View Transitions API is not yet in all TS definitions
    if (!document.startViewTransition || !e) {
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

    // @ts-ignore
    const transition = document.startViewTransition(() => {
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
