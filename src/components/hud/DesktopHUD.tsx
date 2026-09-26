"use client";

import { useState } from "react";
import { useNavigationStore } from "@/core/useNavigationStore";
import { useModalStore } from "@/core/useModalStore";
import { PROFILE_DATA } from "@/config/profile";
import { ChevronLeft, ChevronRight, Award, Radio, Maximize2, MessageCircle, ArrowLeft } from "lucide-react";
import { soundFX } from "@/hooks/useSoundFX";
import Image from "next/image";

export default function DesktopHUD() {
  const { currentView, toggleView, projectPage, nextProjectPage, prevProjectPage } = useNavigationStore();
  const { openCredentials, openBridgeFeed } = useModalStore();
  const [isTransmitting, setIsTransmitting] = useState(false);

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
    openCredentials();
  };

  const handleOpenBridge = () => {
    soundFX.playClick();
    openBridgeFeed();
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Pradeep, I reviewed your AI Architecture & 3D Systems Portfolio and would like to connect."
  );
  const whatsappUrl = `https://wa.me/94714846444?text=${whatsappMessage}`;

  return (
    <div className="hidden md:flex flex-col justify-between min-h-screen p-8 pointer-events-none text-slate-200 fixed inset-0 z-20">
      
      {/* Fullscreen Dynamic Laser Conduit Overlay */}
      {isTransmitting && (
        <div className="fixed inset-0 pointer-events-none z-30">
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
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="0.8s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      )}

      {/* Top Header */}
      <header className="flex justify-between items-center border-b border-cyan-500/20 pb-4 bg-slate-950/60 backdrop-blur-md -mx-8 -mt-8 px-8 pt-6 pointer-events-auto">
        <div className="flex items-center space-x-3">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-sm tracking-widest text-cyan-400">
            SYS.STATUS // ACTIVE
          </span>
        </div>
        <div className="flex items-center space-x-6 font-mono text-xs text-slate-400">
          <span>ORBIT: {currentView === "hero" ? "STABLE" : "ENGAGED"}</span>
          <button
            onClick={handleCredentials}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center space-x-1.5 px-3 py-1.5 border border-cyan-500/40 bg-cyan-950/70 hover:bg-cyan-900/90 text-cyan-300 rounded text-xs transition-all cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.2)] active:scale-95 outline-none select-none"
          >
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>DOSSIER // SPECS</span>
          </button>
        </div>
      </header>

      {/* Middle Top Section */}
      <div className="relative flex justify-between items-start mt-4 mb-auto gap-6 py-1">
        
        {/* Hero Section (Projects view එකේදී සම්පූර්ණයෙන්ම සඟවා කාඩ්පත් වලට බාධා නොකරයි) */}
        <main
          className={`pointer-events-auto relative z-10 w-full max-w-xl p-5 rounded-lg border bg-slate-950/75 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.6)] transition-all duration-500 ${
            isTransmitting
              ? "border-emerald-500/50 shadow-[0_0_35px_rgba(16,185,129,0.25)]"
              : "border-cyan-500/30"
          } ${
            currentView === "projects"
              ? "opacity-0 pointer-events-none -translate-y-6 scale-95"
              : "opacity-100 pointer-events-auto translate-y-0 scale-100"
          }`}
        >
          <div className="inline-block px-2 py-0.5 mb-1.5 border border-cyan-500/30 bg-cyan-950/70 rounded text-[10px] font-mono tracking-widest text-cyan-400">
            COMMANDER // {PROFILE_DATA.name.toUpperCase()}
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-1 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
            {PROFILE_DATA.name}
          </h1>

          <p className="text-cyan-300 font-mono text-sm mb-1 tracking-wide leading-snug">
            {PROFILE_DATA.title}
          </p>

          <p className="text-slate-300 text-xs mb-3.5 tracking-wide leading-snug">
            {PROFILE_DATA.education.degree} — {PROFILE_DATA.education.institution}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
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
              className="cursor-pointer group flex items-center justify-center space-x-2 px-4 py-2 border border-emerald-500/60 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 font-mono text-xs tracking-wider uppercase transition-all duration-300 rounded shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-95 hover:border-emerald-400 text-center outline-none select-none"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold">COMMUNICATION LINK</span>
            </a>

            <button
              onClick={() => {
                soundFX.playWarp();
                toggleView();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="cursor-pointer px-4 py-2 border border-cyan-500/50 bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 font-mono text-xs tracking-widest uppercase transition-all duration-300 rounded shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95 text-center outline-none select-none"
            >
              INITIALIZE SYSTEM
            </button>
          </div>
        </main>

        {/* Floating Return Button when in Projects View (Blinks/Highlights) */}
        {currentView === "projects" && (
          <div className="pointer-events-auto absolute left-2 top-2 z-30 animate-in fade-in duration-300">
            <button
              onClick={() => {
                soundFX.playWarp();
                toggleView();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="group flex items-center space-x-2 px-5 py-2.5 rounded-lg border-2 border-cyan-400 bg-cyan-950/90 text-cyan-200 font-mono text-xs tracking-widest font-bold uppercase cursor-pointer shadow-[0_0_30px_rgba(6,182,212,0.6)] animate-pulse hover:animate-none hover:bg-cyan-900 hover:border-white transition-all active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
              <span>&lt;&lt; RETURN TO ORBIT</span>
            </button>
          </div>
        )}

        {/* Commander Workstation Badge */}
        <div
          onClick={handleOpenBridge}
          onMouseEnter={() => soundFX.playHover()}
          className={`pointer-events-auto relative z-10 cursor-pointer group p-3 rounded-lg border bg-slate-950/70 backdrop-blur-md transition-all duration-500 w-80 outline-none select-none ${
            isTransmitting
              ? "border-emerald-400 shadow-[0_0_45px_rgba(16,185,129,0.55)] ring-2 ring-emerald-400/50"
              : "border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.4)]"
          }`}
        >
          <div className="flex justify-between items-center text-[11px] font-mono mb-1.5">
            <div className="flex items-center space-x-1.5">
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400">COMMAND DECK FEED</span>
            </div>
            <Maximize2 className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="relative w-full h-40 rounded overflow-hidden border border-cyan-500/40 shadow-[inset_0_0_15px_rgba(6,182,212,0.3)]">
            <Image
              src="/assets/commander-bridge.jpeg"
              alt="Commander Bridge Console"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-black/85 border border-cyan-500/30 rounded text-[9px] font-mono text-cyan-300">
              CLICK TO EXPAND
            </div>
          </div>
        </div>
      </div>

      {/* Projects Sector Switcher Controls */}
      <div className="pointer-events-auto flex items-center justify-center space-x-6 my-2 bg-slate-950/75 backdrop-blur-md px-6 py-2 rounded-full border border-cyan-500/25 w-auto mx-auto">
        <button
          onClick={handlePrev}
          onMouseEnter={() => soundFX.playHover()}
          className="flex items-center space-x-1 px-4 py-1.5 border border-cyan-500/30 bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-300 rounded font-mono text-xs tracking-wider transition-all cursor-pointer active:scale-95 outline-none select-none"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>PREV</span>
        </button>

        <div className="text-center font-mono">
          <span className="text-xs text-cyan-400 tracking-widest block">
            SECTOR 0{projectPage + 1} / 02
          </span>
          <span className="text-[10px] text-slate-300 tracking-wider block">
            {projectPage === 0 ? "ENTERPRISE SYSTEMS" : "GENERATIVE AI MEDIA"}
          </span>
        </div>

        <button
          onClick={handleNext}
          onMouseEnter={() => soundFX.playHover()}
          className="flex items-center space-x-1 px-4 py-1.5 border border-cyan-500/30 bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-300 rounded font-mono text-xs tracking-wider transition-all cursor-pointer active:scale-95 outline-none select-none"
        >
          <span>NEXT</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 pt-3 flex justify-between font-mono text-xs text-slate-400 bg-slate-950/60 backdrop-blur-md -mx-8 -mb-8 px-8 pb-6">
        <span>PORTFOLIO v2.0 // DEEP SPACE</span>
        <span>PILIYANDALA // SRI LANKA</span>
      </footer>
    </div>
  );
}