"use client";

import { useBridgeModalStore } from "@/hooks/useBridgeModalStore";
import { soundFX } from "@/hooks/useSoundFX";
import { X, Radio } from "lucide-react";
import Image from "next/image";

export default function BridgeViewModal() {
  const { isOpen, closeBridgeModal } = useBridgeModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl border border-cyan-500/40 bg-slate-950/95 rounded-xl shadow-[0_0_60px_rgba(6,182,212,0.3)] p-4 sm:p-6 text-slate-200 overflow-hidden">
        {/* Sci-Fi Decorative Corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

        {/* Header Bar */}
        <div className="flex justify-between items-center border-b border-cyan-500/20 pb-3 mb-4">
          <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <Radio className="w-4 h-4 animate-pulse text-cyan-400" />
            <span>COMMAND DECK OPTICAL FEED // LIVE SURVEILLANCE</span>
          </div>
          <button
            onClick={() => {
              soundFX.playClick();
              closeBridgeModal();
            }}
            className="p-1.5 text-slate-400 hover:text-cyan-300 border border-transparent hover:border-cyan-500/30 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bridge Image Container */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-cyan-500/30 shadow-[inset_0_0_20px_rgba(6,182,212,0.2)]">
          <Image
            src="/assets/commander-bridge.jpeg"
            alt="Commander Pradeep Kumara on Bridge"
            fill
            className="object-cover"
            priority
          />
          {/* Hologram Scanline effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
        </div>

        {/* Footer Subtext */}
        <div className="mt-3 flex justify-between items-center font-mono text-[11px] text-slate-400">
          <span>AI WORKSTATION // CHIEF SYSTEMS ARCHITECT</span>
          <span className="text-cyan-400">NEBULA SECTOR TRAJECTORY // OPTIMAL</span>
        </div>
      </div>
    </div>
  );
}