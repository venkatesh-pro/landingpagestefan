import { create } from "zustand";

export const useIsDarkStore = create((set) => ({
  isDark: false,
  updateIsDark: (newIsDark) => set({ isDark: newIsDark }),
}));
