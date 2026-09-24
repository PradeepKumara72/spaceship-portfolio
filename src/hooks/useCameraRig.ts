"use client";

import { create } from "zustand";

interface NavigationState {
  currentView: "hero" | "projects";
  projectPage: number; // 0 = Enterprise Systems, 1 = Generative AI Media
  setView: (view: "hero" | "projects") => void;
  setProjectPage: (page: number) => void;
  nextProjectPage: () => void;
  prevProjectPage: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentView: "hero",
  projectPage: 0,
  setView: (view) => set({ currentView: view }),
  setProjectPage: (page) => set({ projectPage: page }),
  nextProjectPage: () =>
    set((state) => ({ projectPage: state.projectPage === 0 ? 1 : 0 })),
  prevProjectPage: () =>
    set((state) => ({ projectPage: state.projectPage === 1 ? 0 : 1 })),
}));