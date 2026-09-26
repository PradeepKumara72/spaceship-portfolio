import { create } from "zustand";
import { Project } from "@/config/projects";

interface ModalState {
  activeProject: Project | null;
  isCredentialsOpen: boolean;
  isBridgeFeedOpen: boolean;
  openProjectModal: (project: Project) => void;
  closeProjectModal: () => void;
  openCredentials: () => void;
  closeCredentials: () => void;
  openBridgeFeed: () => void;
  closeBridgeFeed: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  activeProject: null,
  isCredentialsOpen: false,
  isBridgeFeedOpen: false,

  openProjectModal: (project) => set({ activeProject: project }),
  closeProjectModal: () => set({ activeProject: null }),

  openCredentials: () => set({ isCredentialsOpen: true }),
  closeCredentials: () => set({ isCredentialsOpen: false }),

  openBridgeFeed: () => set({ isBridgeFeedOpen: true }),
  closeBridgeFeed: () => set({ isBridgeFeedOpen: false }),
}));