"use client";

import { useState } from "react";
import { useNavigationStore } from "@/hooks/useCameraRig";
import { useCredentialsStore } from "@/hooks/useCredentialsStore";
import { useBridgeModalStore } from "@/hooks/useBridgeModalStore";
import { useModalStore } from "@/hooks/useModalStore";
import { PROFILE_DATA } from "@/config/profile";
import { PROJECTS_DATA } from "@/config/projects";
import ProjectModal from "@/components/modals/ProjectModal";
import CredentialsDrawer from "@/components/modals/CredentialsDrawer";
import BridgeViewModal from "@/components/modals/BridgeViewModal";
import { ChevronLeft, ChevronRight, Award, Radio, Maximize2, MessageCircle, ExternalLink } from "lucide-react";
import { soundFX } from "@/hooks/useSoundFX";
import Image from "next/image";

export default function HUDOverlay() {
  const { currentView, setView, projectPage, nextProjectPage, prevProjectPage } = useNavigationStore();
  const { openDrawer } = useCredentialsStore();
  const { openBridgeModal } = useBridgeModalStore();
  const openProjectModal = useModalStore((state) => state.openModal);
  const [isTransmitting, setIsTransmitting] = useState(false);

  const toggleView = () => {
    soundFX.playWarp();
    setView(currentView === "hero" ? "projects" : "hero");
  };

  const handleNext = () => {
    soundFX.playClick();
    nextProjectPage();
  };

  const handlePrev = () => {
    soundFX.playClick();
    prevProjectPage();
  };

  const handleCredentials = () => {
    soundFX.playClick();
    openDrawer();
  };

  const handleOpenBridge = () => {
    soundFX.playClick();
    openBridgeModal();
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Pradeep, I reviewed your AI Architecture & 3D Systems Portfolio and would like to connect."
  );
  const whatsappUrl = `https://wa.me/94714846444?text=${whatsappMessage}`;

  const currentProjects = PROJECTS_DATA.slice(projectPage * 2, projectPage * 2 + 2);

  return (
    <>
      {/* Fullscreen Dynamic Laser Conduit Overlay (Desktop Only) */}
      {isTransmitting && (
        <div className="fixed inset-0 pointer-events-none z-30 hidden md:block">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                <stop offset="35%" stopColor="#34d399" stopOpacity="1" />
                <stop offset="70%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
              </linearGradient>

              <filter id="laserBeamGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur1" />
                <feGaussianBlur stdDeviation="3" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M 11 29 C 30 29, 52 23, 78 18"
              fill="none"
              stroke="url(#laserBeamGrad)"
              strokeWidth="0.8"
              filter="url(#laserBeamGlow)"
              strokeDasharray="2 1.5"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-20"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M 11 29 C 30 29, 52 23, 78 18"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.3"
              strokeDasharray="1 1.5"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-20"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </path>

            <circle cx="11" cy="29" r="1.2" fill="#10b981">
              <animate attributeName="r" values="0.8;2.2;0.8" dur="0.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.2;1" dur="0.8s" repeatCount="indefinite" />
            </circle>

            <circle cx="78" cy="18" r="1.5" fill="#22d3ee">
              <animate attributeName="r" values="1;2.8;1" dur="0.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.1;1" dur="0.8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      )}

      {/* Main HUD Viewport */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen p-3 sm:p-6 md:p-8 pointer-events-none text-slate-200">
        
        {/* Top Header */}
        <header className="flex justify-between items-center border-b border-cyan-500/20 pb-3 sm:pb-4 bg-slate-950/60 backdrop-blur-md -mx-3 -mt-3 sm:-mx-6 sm:-mt-6 md:-mx-8 md:-mt-8 px-4 sm:px-6 md:px-8 pt-3 sm:pt-6 pointer-events-auto">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-[11px] sm:text-xs md:text-sm tracking-widest text-cyan-400">
              SYS.STATUS // ACTIVE
            </span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 font-mono text-[11px] sm:text-xs text-slate-400">
            <span className="hidden xs:inline">ORBIT: {currentView === "hero" ? "STABLE" : "ENGAGED"}</span>
            <button
              onClick={handleCredentials}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center space-x-1 sm:space-x-1.5 px-2.5 py-1 border border-cyan-500/40 bg-cyan-950/70 hover:bg-cyan-900/90 text-cyan-300 rounded text-[10px] sm:text-xs transition-all cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.2)] active:scale-95 outline-none select-none [-webkit-tap-highlight-color:transparent]"
            >
              <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
              <span>DOSSIER // SPECS</span>
            </button>
          </div>
        </header>

        {/* Middle Area: Hero Card & Bridge Feeds (Desktop එකේ ඉහළට තල්ලු කර mt-4 mb-auto යොදා ඇත) */}
        <div className="relative flex flex-col md:flex-row justify-between items-start mt-4 mb-auto gap-4 sm:gap-6 py-1">
          {/* Hero Section — Profile Box */}
          <main
            className={`pointer-events-auto relative z-10 w-full max-w-xl p-4 sm:p-5 rounded-lg border bg-slate-950/75 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.6)] transition-all duration-700 ${
              isTransmitting
                ? "border-emerald-500/50 shadow-[0_0_35px_rgba(16,185,129,0.25)]"
                : "border-cyan-500/30"
            } ${currentView === "projects" ? "opacity-20 md:opacity-20 translate-y-[-8px]" : "opacity-100 translate-y-0"}`}
          >
            <div className="inline-block px-2 py-0.5 mb-1.5 border border-cyan-500/30 bg-cyan-950/70 rounded text-[9px] sm:text-[10px] font-mono tracking-widest text-cyan-400">
              COMMANDER // {PROFILE_DATA.name.toUpperCase()}
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white mb-1 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              {PROFILE_DATA.name}
            </h1>

            <p className="text-cyan-300 font-mono text-xs sm:text-sm mb-1 tracking-wide leading-snug">
              {PROFILE_DATA.title}
            </p>

            <p className="text-slate-300 text-[11px] sm:text-xs mb-3.5 tracking-wide leading-snug">
              {PROFILE_DATA.education.degree} — {PROFILE_DATA.education.institution}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => {
                  soundFX.playHover();
                  setIsTransmitting(true);
                }}
                onMouseLeave={() => setIsTransmitting(false)}
                className="cursor-pointer group flex items-center justify-center space-x-2 px-4 py-2 border border-emerald-500/60 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 font-mono text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-300 rounded shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-95 hover:border-emerald-400 text-center outline-none select-none [-webkit-tap-highlight-color:transparent]"
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping" />
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 relative z-10" />
                </div>
                <span className="font-semibold">COMMUNICATION LINK</span>
              </a>

              <button
                onClick={toggleView}
                onMouseEnter={() => soundFX.playHover()}
                className="cursor-pointer px-4 py-2 border border-cyan-500/50 bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 font-mono text-[11px] sm:text-xs tracking-widest uppercase transition-all duration-300 rounded shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95 text-center outline-none select-none [-webkit-tap-highlight-color:transparent]"
              >
                {currentView === "hero" ? "INITIALIZE SYSTEM" : "RETURN TO ORBIT"}
              </button>
            </div>
          </main>

          {/* Commander Workstation Badge */}
          <div
            onClick={handleOpenBridge}
            onMouseEnter={() => soundFX.playHover()}
            className={`pointer-events-auto relative z-10 cursor-pointer group p-2.5 sm:p-3 rounded-lg border bg-slate-950/70 backdrop-blur-md transition-all duration-500 w-full sm:w-auto outline-none select-none [-webkit-tap-highlight-color:transparent] ${
              isTransmitting
                ? "border-emerald-400 shadow-[0_0_45px_rgba(16,185,129,0.55)] ring-2 ring-emerald-400/50"
                : "border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.4)]"
            }`}
          >
            <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono mb-1.5">
              <div className="flex items-center space-x-1.5">
                <Radio
                  className={`w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse ${
                    isTransmitting ? "text-emerald-400" : "text-cyan-400"
                  }`}
                />
                <span className={isTransmitting ? "text-emerald-300 font-bold" : "text-cyan-400"}>
                  {isTransmitting ? "CARRIER SIGNAL ACTIVE" : "COMMAND DECK FEED"}
                </span>
              </div>
              <Maximize2 className="w-3 h-3 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="relative w-full sm:w-64 md:w-80 h-28 sm:h-36 md:h-40 rounded overflow-hidden border border-cyan-500/40 shadow-[inset_0_0_15px_rgba(6,182,212,0.3)]">
              <Image
                src="/assets/commander-bridge.jpeg"
                alt="Commander Bridge Console"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 transition-colors duration-300 ${
                  isTransmitting ? "bg-emerald-500/15" : "bg-cyan-950/20 group-hover:bg-transparent"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none" />
              <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-black/85 border border-cyan-500/30 rounded text-[8px] sm:text-[9px] font-mono text-cyan-300">
                TAP TO EXPAND
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Interactive Project Cards (Only on Mobile screens < 768px) */}
        <div className="block md:hidden pointer-events-auto my-3 space-y-2.5 z-20">
          <div className="text-[10px] font-mono text-cyan-400 tracking-wider flex items-center justify-between px-1">
            <span>ACTIVE SECTOR CARDS</span>
            <span className="text-slate-400">TAP TO VIEW SPECS</span>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {currentProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => {
                  soundFX.playClick();
                  openProjectModal(proj);
                }}
                className="p-3.5 rounded-lg border border-cyan-500/40 bg-slate-950/70 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)] active:scale-98 transition-all cursor-pointer outline-none focus:outline-none select-none [-webkit-tap-highlight-color:transparent]"
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

        {/* Projects Sector Switcher Controls */}
        <div className="pointer-events-auto flex items-center justify-between sm:justify-center space-x-2 sm:space-x-6 my-2 bg-slate-950/75 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-cyan-500/25 w-full sm:w-auto mx-auto max-w-sm">
          <button
            onClick={handlePrev}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center space-x-1 px-3 py-1 sm:px-4 sm:py-1.5 border border-cyan-500/30 bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-300 rounded font-mono text-[10px] sm:text-xs tracking-wider transition-all cursor-pointer active:scale-95 outline-none select-none [-webkit-tap-highlight-color:transparent]"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>PREV</span>
          </button>

          <div className="text-center font-mono">
            <span className="text-[10px] sm:text-xs text-cyan-400 tracking-widest block">
              SECTOR 0{projectPage + 1} / 02
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-300 tracking-wider block truncate max-w-[140px] sm:max-w-none">
              {projectPage === 0 ? "ENTERPRISE SYSTEMS" : "GENERATIVE AI MEDIA"}
            </span>
          </div>

          <button
            onClick={handleNext}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center space-x-1 px-3 py-1 sm:px-4 sm:py-1.5 border border-cyan-500/30 bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-300 rounded font-mono text-[10px] sm:text-xs tracking-wider transition-all cursor-pointer active:scale-95 outline-none select-none [-webkit-tap-highlight-color:transparent]"
          >
            <span>NEXT</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Footer */}
        <footer className="border-t border-cyan-500/20 pt-3 flex justify-between font-mono text-[10px] sm:text-xs text-slate-400 bg-slate-950/60 backdrop-blur-md -mx-3 -mb-3 sm:-mx-6 sm:-mb-6 md:-mx-8 md:-mb-8 px-4 sm:px-6 md:px-8 pb-3 sm:pb-6">
          <span>PORTFOLIO v2.0 // DEEP SPACE</span>
          <span>PILIYANDALA // SRI LANKA</span>
        </footer>
      </div>

      <ProjectModal />
      <CredentialsDrawer />
      <BridgeViewModal />
    </>
  );
}