"use client";

import { useModalStore } from "@/core/useModalStore";
import { PROFILE_DATA } from "@/config/profile";
import { soundFX } from "@/hooks/useSoundFX";
import { Award, Cpu, GraduationCap, X, CheckCircle, Clock, FileCheck, ExternalLink, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CredentialsDrawer() {
  const { isCredentialsOpen, closeCredentials } = useModalStore();
  const [imgError, setImgError] = useState(false);

  if (!isCredentialsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md h-full bg-slate-950/95 border-l border-cyan-500/30 p-6 overflow-y-auto text-slate-200 shadow-[-20px_0_40px_rgba(6,182,212,0.2)]">
        
        {/* Decorative Sci-Fi Corner */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-cyan-500/20 pb-4 mb-5">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <h2 className="font-mono text-sm tracking-widest uppercase text-cyan-400">
              COMMAND DOSSIER // SPECS
            </h2>
          </div>
          <button
            onClick={() => {
              soundFX.playClick();
              closeCredentials();
            }}
            className="p-1.5 text-slate-400 hover:text-cyan-300 border border-transparent hover:border-cyan-500/30 rounded transition-colors cursor-pointer outline-none select-none [-webkit-tap-highlight-color:transparent]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Commander Profile Card with Avatar */}
        <div className="p-4 mb-6 rounded-lg bg-cyan-950/20 border border-cyan-500/30 flex items-center space-x-4">
          <div className="relative w-16 h-16 rounded-full border-2 border-cyan-400 p-0.5 overflow-hidden shrink-0 bg-slate-900 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            {PROFILE_DATA.avatarUrl && !imgError ? (
              <Image
                src={PROFILE_DATA.avatarUrl}
                alt={PROFILE_DATA.name}
                fill
                className="object-cover rounded-full"
                onError={() => setImgError(true)}
              />
            ) : (
              <User className="w-8 h-8 text-cyan-400" />
            )}
          </div>
          <div>
            <h3 className="font-bold text-white text-base leading-tight">{PROFILE_DATA.name}</h3>
            <p className="text-cyan-400 font-mono text-[11px] mt-0.5">{PROFILE_DATA.title}</p>
            <p className="text-[10px] text-slate-400 font-mono mt-1">STATUS: CHIEF SYSTEMS ARCHITECT</p>
          </div>
        </div>

        {/* Higher Education Section */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Higher Education</span>
          </div>
          <div className="p-3.5 bg-cyan-950/30 border border-cyan-500/30 rounded-lg space-y-2.5">
            <div>
              <h3 className="font-bold text-sm text-white">{PROFILE_DATA.education.degree}</h3>
              <p className="text-xs text-slate-300 font-mono mt-0.5">{PROFILE_DATA.education.institution}</p>
              <p className="text-[11px] text-cyan-400/80 font-mono mt-1">Postgraduate Degree</p>
            </div>

            {PROFILE_DATA.education.fileUrl && (
              <div className="pt-2 border-t border-cyan-500/10 flex justify-end">
                <a
                  href={PROFILE_DATA.education.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 rounded text-[10px] font-mono text-cyan-300 transition-colors"
                >
                  <FileCheck className="w-3 h-3 text-cyan-400" />
                  <span>VIEW CERTIFICATE</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Specializations & Certifications */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Specializations & Certifications</span>
          </div>
          <div className="space-y-3">
            {PROFILE_DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-900/60 border border-cyan-500/20 rounded-lg space-y-2"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-100">{cert.title}</h4>
                    <p className="text-[11px] text-slate-400 font-mono">{cert.issuer}</p>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 flex items-center space-x-1 ${
                      cert.status === "Completed"
                        ? "border-emerald-500/40 text-emerald-400 bg-emerald-950/30"
                        : "border-amber-500/40 text-amber-400 bg-amber-950/30"
                    }`}
                  >
                    {cert.status === "Completed" ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <Clock className="w-3 h-3 mr-1" />
                    )}
                    {cert.status}
                  </span>
                </div>

                {cert.fileUrl && (
                  <div className="pt-2 border-t border-cyan-500/10 flex justify-end">
                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFX.playClick()}
                      className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 rounded text-[10px] font-mono text-cyan-300 transition-colors"
                    >
                      <FileCheck className="w-3 h-3 text-cyan-400" />
                      <span>VIEW CERTIFICATE</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AI Stack & Production Arsenal */}
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Operational AI Arsenal</span>
          </div>
          <div className="space-y-2">
            {PROFILE_DATA.aiArsenal.map((item, idx) => (
              <div
                key={idx}
                className="px-3 py-2 bg-cyan-950/20 border border-cyan-500/20 rounded text-xs font-mono text-cyan-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}