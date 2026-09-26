"use client";

import { useModalStore } from "@/core/useModalStore";
import { soundFX } from "@/hooks/useSoundFX";
import { X, Radio } from "lucide-react";
import Image from "next/image";

export default function BridgeViewModal() {
  const { isBridgeFeedOpen, closeBridgeFeed } = useModalStore();

  if (!isBridgeFeedOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-slate-950 border border-cyan-500/40 rounded-xl shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-cyan-500/20 bg-slate-900/80 shrink-0">
          <div className="flex items-center space-x-2">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
              COMMAND DECK // LIVE OPTICAL FEED
            </span>
          </div>
          <button
            onClick={() => {
              soundFX.playClick();
              closeBridgeFeed();
            }}
            className="p-1.5 text-slate-400 hover:text-white rounded border border-transparent hover:border-cyan-500/30 transition-colors cursor-pointer outline-none select-none [-webkit-tap-highlight-color:transparent]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative w-full aspect-video bg-black">
          <Image
            src="/assets/commander-bridge.jpeg"
            alt="Spaceship Bridge Deck Feed"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="p-3 border-t border-cyan-500/20 bg-slate-900/60 flex justify-between items-center text-[10px] font-mono text-slate-400">
          <span>STATION // ORBITAL BRIDGE ARCHITECTURE</span>
          <span className="text-emerald-400">FEED STATUS: NOMINAL</span>
        </div>
      </div>
    </div>
  );
}