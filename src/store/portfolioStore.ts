"use client";

import { create } from "zustand";

type Theme = "dark" | "light";

type PortfolioStore = {
  hydrated: boolean;
  theme: Theme;
  setHydrated: (value: boolean) => void;
  toggleTheme: () => void;
};

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  hydrated: false,
  theme: "dark",
  setHydrated: (value) => set({ hydrated: value }),
  toggleTheme: () =>
    set((state) => {
      const nextTheme = state.theme === "dark" ? "light" : "dark";
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolio-theme", nextTheme);
      }
      return { theme: nextTheme };
    }),
}));

export function hydratePortfolioStore() {
  if (typeof window === "undefined") return;

  const { setHydrated } = usePortfolioStore.getState();
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    usePortfolioStore.setState({ theme: savedTheme as Theme });
  }
  setHydrated(true);
}
