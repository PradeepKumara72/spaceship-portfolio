"use client";

import { create } from "zustand";

interface BridgeModalState {
  isOpen: boolean;
  openBridgeModal: () => void;
  closeBridgeModal: () => void;
}

export const useBridgeModalStore = create<BridgeModalState>((set) => ({
  isOpen: false,
  openBridgeModal: () => set({ isOpen: true }),
  closeBridgeModal: () => set({ isOpen: false }),
}));