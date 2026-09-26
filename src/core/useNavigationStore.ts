import { create } from "zustand";

export type ViewMode = "hero" | "projects";

interface NavigationState {
  currentView: ViewMode;
  projectPage: number;
  totalProjectPages: number;
  setView: (view: ViewMode) => void;
  toggleView: () => void;
  nextProjectPage: () => void;
  prevProjectPage: () => void;
  setProjectPage: (page: number) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentView: "hero",
  projectPage: 0,
  totalProjectPages: 2,

  setView: (view) => set({ currentView: view }),

  toggleView: () =>
    set((state) => ({
      currentView: state.currentView === "hero" ? "projects" : "hero",
    })),

  nextProjectPage: () =>
    set((state) => ({
      projectPage: (state.projectPage + 1) % state.totalProjectPages,
    })),

  prevProjectPage: () =>
    set((state) => ({
      projectPage:
        (state.projectPage - 1 + state.totalProjectPages) %
        state.totalProjectPages,
    })),

  setProjectPage: (page) => set({ projectPage: page }),
}));