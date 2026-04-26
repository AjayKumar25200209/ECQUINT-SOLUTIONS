import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAccessibilityStore = create(
  persist(
    (set) => ({
      textSize: "normal",
      contrast: "normal",
      reduceMotion: false,

      highlightLinks: false,
      cursorSize: "normal", // normal | large | xlarge

      setTextSize: (size) => set({ textSize: size }),
      setContrast: (mode) => set({ contrast: mode }),
      toggleMotion: () =>
        set((state) => ({ reduceMotion: !state.reduceMotion })),

      toggleHighlightLinks: () =>
        set((state) => ({ highlightLinks: !state.highlightLinks })),

      setCursorSize: (size) => set({ cursorSize: size }),
    }),
    {
      name: "a11y-settings",
    }
  )
);