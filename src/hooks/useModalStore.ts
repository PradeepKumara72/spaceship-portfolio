"use client";

import { create } from "zustand";
import { Project } from "@/config/projects";

interface ModalState {
  activeProject: Project | null;
  openModal: (project: Project) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  activeProject: null,
  openModal: (project) => set({ activeProject: project }),
  closeModal: () => set({ activeProject: null }),
}));