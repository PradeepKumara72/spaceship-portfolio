"use client";

import { useNavigationStore } from "@/core/useNavigationStore";
import { useModalStore } from "@/core/useModalStore";
import { PROFILE_DATA } from "@/config/profile";
import { PROJECTS_DATA } from "@/config/projects";
import { Award, Radio, Maximize2, MessageCircle, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { soundFX } from "@/hooks/useSoundFX";
import Image from "next/image";

export default function MobileHUD() {
  const { projectPage, nextProjectPage, prevProjectPage } = useNavigationStore();
  const { openCredentials, openBridgeFeed, openProjectModal } = useModalStore();

  const handleNext = () => {
    soundFX.playClick();
    nextProjectPage();
  };

  const handlePrev = () => {
    soundFX.playClick();
    prevProjectPage();
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Pradeep, I reviewed your AI Architecture & 3D Systems Portfolio and would like to connect."
  );
  const whatsappUrl = `https://wa.me/94714846444?text=${whatsappMessage}`;

  const currentProjects = PROJECTS_DATA.slice(projectPage * 2, projectPage * 2 + 2);

  return (
    <div className="flex md:hidden flex-col justify-between min-h-screen p-3 pointer-events-none text-slate-200 fixed inset-0 z-20 overflow-y-auto overflow-x-hidden w-full max-w-full">
      
      {/* Top Header */}
      <header className="flex justify-between items-center border-b border-cyan-500/20 pb-2.5 bg-slate-950/85 backdrop-blur-md -mx-3 -mt-3 px-3 pt-3 pointer-events-auto w-[calc(100%+1.5rem)] shrink-0">
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-[11px] tracking-widest text-cyan-400">
            SYS.STATUS // ACTIVE
          </span>
        </div>
        <button
          onClick={() => {
            soundFX.playClick();
            openCredentials();
          }}
          className="flex items-center space-x-1 px-2.5 py-1 border border-cyan-500/40 bg-cyan-950/70 text-cyan-300 rounded text-[10px] active:scale-95 outline-none select-none [-webkit-tap-highlight-color:transparent]"
        >
          <Award className="w-3 h-3 text-cyan-400" />
          <span>DOSSIER</span>
        </button>
      </header>

      {/* Middle Scrollable Content */}
      <div className="pointer-events-auto my-3 space-y-3 w-full max-w-full">
        
        {/* Commander Profile Summary Box */}
        <div className="p-3.5 rounded-lg border border-cyan-500/30 bg-slate-950/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.6)] w-full">
          <div className="inline-block px-2 py-0.5 mb-1 border border-cyan-500/30 bg-cyan-950/70 rounded text-[9px] font-mono tracking-widest text-cyan-400">
            COMMANDER // {PROFILE_DATA.name.toUpperCase()}
          </div>
          <h1 className="text-xl font-black text-white mb-0.5 drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
            {PROFILE_DATA.name}
          </h1>
          <p className="text-cyan-300 font-mono text-[11px] mb-1">
            {PROFILE_DATA.title}
          </p>
          <p className="text-slate-300 text-[10px] mb-2.5 font-mono">
            {PROFILE_DATA.education.degree}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playClick()}
            className="flex items-center justify-center space-x-2 px-3 py-2 border border-emerald-500/60 bg-emerald-950/80 text-emerald-300 font-mono text-[11px] tracking-wider uppercase rounded active:scale-95 outline-none select-none [-webkit-tap-highlight-color:transparent]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold">COMMUNICATION LINK</span>
          </a>
        </div>

        {/* Bridge Feed Teaser */}
        <div
          onClick={() => {
            soundFX.playClick();
            openBridgeFeed();
          }}
          className="p-2.5 rounded-lg border border-cyan-500/30 bg-slate-950/70 backdrop-blur-md active:scale-98 transition-all outline-none select-none [-webkit-tap-highlight-color:transparent] w-full"
        >
          <div className="flex justify-between items-center text-[10px] font-mono mb-1.5 text-cyan-400">
            <div className="flex items-center space-x-1.5">
              <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>COMMAND DECK FEED</span>
            </div>
            <Maximize2 className="w-3 h-3 opacity-70" />
          </div>
          <div className="relative w-full h-24 rounded overflow-hidden border border-cyan-500/30">
            <Image
              src="/assets/commander-bridge.jpeg"
              alt="Commander Bridge Console"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 border border-cyan-500/30 rounded text-[8px] font-mono text-cyan-300">
              TAP TO EXPAND
            </div>
          </div>
        </div>

        {/* Sector Cards Feed */}
        <div className="space-y-2 w-full">
          <div className="text-[10px] font-mono text-cyan-400 tracking-wider flex items-center justify-between px-1">
            <span>ACTIVE SECTOR CARDS</span>
            <span className="text-slate-400 font-sans text-[9px]">TAP TO VIEW SPECS</span>
          </div>

          <div className="space-y-2 w-full">
            {currentProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => {
                  soundFX.playClick();
                  openProjectModal(proj);
                }}
                className="p-3 rounded-lg border border-cyan-500/40 bg-slate-950/85 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)] active:scale-98 transition-all cursor-pointer outline-none focus:outline-none select-none [-webkit-tap-highlight-color:transparent] w-full"
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400 opacity-80" />
                </div>
                <h3 className="text-sm font-bold text-white mb-0.5">{proj.title}</h3>
                <p className="text-[11px] text-slate-300 line-clamp-2 mb-2 leading-relaxed">
                  {proj.shortDesc}
                </p>
                <div className="flex justify-between items-center text-[9px] font-mono pt-1.5 border-t border-cyan-500/20">
                  <span className="text-cyan-300 font-semibold tracking-wider">&gt;&gt; VIEW SPECS (TAP) &lt;&lt;</span>
                  <span className="text-emerald-400">STATUS: READY</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Auto-fit Sector Controls */}
        <div className="w-full flex items-center justify-between gap-1 bg-slate-950/90 backdrop-blur-md px-2 py-1.5 rounded-full border border-cyan-500/25 box-border">
          <button
            onClick={handlePrev}
            className="flex items-center space-x-0.5 px-2.5 py-1 border border-cyan-500/30 bg-cyan-950/60 text-cyan-300 rounded font-mono text-[9px] shrink-0 active:scale-95 outline-none select-none [-webkit-tap-highlight-color:transparent]"
          >
            <ChevronLeft className="w-3 h-3" />
            <span>PREV</span>
          </button>

          <div className="text-center font-mono min-w-0 flex-1 px-1">
            <span className="text-[9px] text-cyan-400 tracking-wider block font-semibold truncate">
              SECTOR 0{projectPage + 1} / 02
            </span>
            <span className="text-[8px] text-slate-300 tracking-wider block truncate">
              {projectPage === 0 ? "ENTERPRISE SYSTEMS" : "GENERATIVE AI MEDIA"}
            </span>
          </div>

          <button
            onClick={handleNext}
            className="flex items-center space-x-0.5 px-2.5 py-1 border border-cyan-500/30 bg-cyan-950/60 text-cyan-300 rounded font-mono text-[9px] shrink-0 active:scale-95 outline-none select-none [-webkit-tap-highlight-color:transparent]"
          >
            <span>NEXT</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

      </div>

      {/* Mobile Footer (Responsive text alignment) */}
      <footer className="border-t border-cyan-500/20 pt-2 pb-2 flex justify-between items-center font-mono text-[8px] text-slate-400 bg-slate-950/90 backdrop-blur-md -mx-3 -mb-3 px-3 pointer-events-auto w-[calc(100%+1.5rem)] shrink-0">
        <span className="truncate">PORTFOLIO v2.0 // DEEP SPACE</span>
        <span className="shrink-0 ml-2">PILIYANDALA // SRI LANKA</span>
      </footer>

    </div>
  );
}