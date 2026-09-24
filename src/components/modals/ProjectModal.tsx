"use client";

import { useModalStore } from "@/hooks/useModalStore";
import { ExternalLink, X, CheckCircle2, Cpu } from "lucide-react";

export default function ProjectModal() {
  const { activeProject, closeModal } = useModalStore();

  if (!activeProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl border border-cyan-500/40 bg-slate-950/90 rounded-lg shadow-[0_0_50px_rgba(6,182,212,0.25)] p-6 sm:p-8 text-slate-200 overflow-hidden">
        {/* Decorative Sci-Fi Corner Decals */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-cyan-300 transition-colors border border-transparent hover:border-cyan-500/30 rounded"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Header */}
        <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
          <Cpu className="w-4 h-4" />
          <span>MISSION SPECS // {activeProject.category}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide mb-4">
          {activeProject.title}
        </h2>

        {/* Full Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 border-l-2 border-cyan-500/50 pl-4 py-1">
          {activeProject.fullDesc}
        </p>

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-cyan-300 mb-3">
            Core Architectures & Deliverables:
          </h3>
          <ul className="space-y-2">
            {activeProject.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2.5 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
            Technology Layer:
          </h3>
          <div className="flex flex-wrap gap-2">
            {activeProject.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded text-[11px] font-mono text-cyan-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project External Links */}
        {activeProject.links && activeProject.links.length > 0 && (
          <div className="pt-4 border-t border-cyan-500/20 flex flex-wrap gap-3">
            {activeProject.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 border border-cyan-500/40 bg-cyan-900/30 hover:bg-cyan-800/50 text-cyan-300 rounded font-mono text-xs tracking-wider transition-all"
              >
                <span>{link.label}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}