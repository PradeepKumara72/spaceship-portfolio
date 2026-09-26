"use client";

import { useModalStore } from "@/core/useModalStore";
import { soundFX } from "@/hooks/useSoundFX";
import { X, ExternalLink, Cpu, CheckCircle, ShieldCheck } from "lucide-react";

export default function ProjectModal() {
  const { activeProject, closeProjectModal } = useModalStore();

  if (!activeProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-slate-950 border border-cyan-500/40 rounded-xl shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sci-Fi Decorative Top Bar */}
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 border-b border-cyan-500/20 bg-slate-900/80 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
              SYSTEM ARCHITECTURE DOSSIER // {activeProject.category}
            </span>
          </div>
          <button
            onClick={() => {
              soundFX.playClick();
              closeProjectModal();
            }}
            className="p-1.5 text-slate-400 hover:text-white rounded border border-transparent hover:border-cyan-500/30 transition-colors cursor-pointer outline-none select-none [-webkit-tap-highlight-color:transparent]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-5">
          
          {/* Title & Category Banner */}
          <div className="border-b border-cyan-500/20 pb-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-block px-2.5 py-0.5 border border-cyan-500/40 bg-cyan-950/70 rounded text-[10px] font-mono tracking-widest text-cyan-300 uppercase">
                {activeProject.category}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
                <ShieldCheck className="w-3 h-3" />
                <span>SPEC VERIFIED</span>
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide">
              {activeProject.title}
            </h2>
            <p className="text-xs sm:text-sm text-cyan-200/80 font-mono mt-1 leading-snug">
              {activeProject.shortDesc}
            </p>
          </div>

          {/* Full Operational Description */}
          <div className="space-y-1.5">
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block">
              ARCHITECTURE & OPERATIONAL OVERVIEW
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-slate-900/40 p-4 rounded-lg border border-cyan-500/15">
              {activeProject.fullDesc}
            </p>
          </div>

          {/* Core System Capabilities / Features */}
          {activeProject.features && activeProject.features.length > 0 && (
            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block">
                ENGINEERED CAPABILITIES & SPECIFICATIONS
              </span>
              <div className="space-y-2">
                {activeProject.features.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-300 bg-cyan-950/20 p-2.5 rounded border border-cyan-500/20">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Arsenal */}
          {activeProject.techStack && activeProject.techStack.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-cyan-500/20">
              <div className="flex items-center space-x-1.5 text-xs font-mono text-cyan-400">
                <Cpu className="w-3.5 h-3.5" />
                <span>DEPLOYED TECH ARSENAL</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeProject.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded border border-cyan-500/30 bg-cyan-950/50 text-[11px] font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions (Links / Channels) */}
        <div className="p-4 border-t border-cyan-500/20 bg-slate-900/80 flex flex-wrap justify-between items-center gap-3 shrink-0">
          <div className="flex flex-wrap gap-2">
            {activeProject.links && activeProject.links.length > 0 ? (
              activeProject.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-cyan-500/50 bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 rounded text-xs font-mono tracking-wider transition-all cursor-pointer active:scale-95 outline-none select-none [-webkit-tap-highlight-color:transparent]"
                >
                  <span>{link.label.toUpperCase()}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              ))
            ) : (
              <span className="text-[11px] font-mono text-slate-500">
                AIR-GAPPED / INTERNAL WORKSTATION DEPLOYMENT
              </span>
            )}
          </div>

          <button
            onClick={() => {
              soundFX.playClick();
              closeProjectModal();
            }}
            className="px-4 py-1.5 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs font-mono transition-all cursor-pointer active:scale-95 outline-none select-none [-webkit-tap-highlight-color:transparent]"
          >
            DISMISS
          </button>
        </div>

      </div>
    </div>
  );
}