"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  getTheme: () => Theme;
}

const THEME_STORAGE_KEY = "anvp-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeRef = useRef<Theme>("dark");

  const applyTheme = useCallback((theme: Theme) => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    root.classList.add("theme-ready");
  }, []);

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      themeRef.current = nextTheme;
      applyTheme(nextTheme);

      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // Ignore storage failures in restricted environments.
      }
    },
    [applyTheme]
  );

  useEffect(() => {
    const root = document.documentElement;
    const initialTheme = root.dataset.theme === "light" ? "light" : "dark";
    themeRef.current = initialTheme;
    applyTheme(initialTheme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, initialTheme);
    } catch {
      // Ignore storage failures in restricted environments.
    }
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    setTheme(themeRef.current === "dark" ? "light" : "dark");
  }, [setTheme]);

  const getTheme = useCallback(() => themeRef.current, []);

  const value = useMemo(
    () => ({ setTheme, toggleTheme, getTheme }),
    [setTheme, toggleTheme, getTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}

export const themeStorageKey = THEME_STORAGE_KEY;