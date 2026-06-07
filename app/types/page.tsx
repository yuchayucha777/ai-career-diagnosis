"use client";

import Link from "next/link";
import { useState } from "react";
import { JOB_TYPES, type JobTypeId } from "@/lib/diagnosis";

const TYPE_META: Record<JobTypeId, { code: string; archetype: string; portrait: React.ReactNode }> = {
  frontend: {
    code: "FE",
    archetype: "The Craftsman",
    portrait: (
      <svg viewBox="0 0 200 160" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        {/* Browser frame */}
        <rect x="30" y="20" width="140" height="100" rx="8" fill="none" stroke="rgba(244,114,182,0.4)" strokeWidth="1.5" />
        <rect x="30" y="20" width="140" height="22" rx="8" fill="rgba(244,114,182,0.15)" />
        <circle cx="46" cy="31" r="4" fill="rgba(244,114,182,0.6)" />
        <circle cx="60" cy="31" r="4" fill="rgba(244,114,182,0.4)" />
        <circle cx="74" cy="31" r="4" fill="rgba(244,114,182,0.25)" />
        {/* Code lines */}
        <rect x="42" y="54" width="50" height="5" rx="2" fill="rgba(244,114,182,0.5)" />
        <rect x="42" y="65" width="80" height="5" rx="2" fill="rgba(244,114,182,0.3)" />
        <rect x="52" y="76" width="60" height="5" rx="2" fill="rgba(139,92,246,0.4)" />
        <rect x="52" y="87" width="40" height="5" rx="2" fill="rgba(139,92,246,0.3)" />
        <rect x="42" y="98" width="70" height="5" rx="2" fill="rgba(244,114,182,0.4)" />
        {/* Pixel art dots */}
        <rect x="140" y="55" width="8" height="8" rx="1" fill="rgba(244,114,182,0.7)" />
        <rect x="152" y="55" width="8" height="8" rx="1" fill="rgba(139,92,246,0.5)" />
        <rect x="140" y="67" width="8" height="8" rx="1" fill="rgba(139,92,246,0.5)" />
        <rect x="152" y="67" width="8" height="8" rx="1" fill="rgba(244,114,182,0.4)" />
        <rect x="140" y="79" width="8" height="8" rx="1" fill="rgba(244,114,182,0.3)" />
        <rect x="152" y="79" width="8" height="8" rx="1" fill="rgba(139,92,246,0.6)" />
        {/* Floating dots */}
        <circle cx="20" cy="60" r="3" fill="rgba(244,114,182,0.3)" />
        <circle cx="185" cy="140" r="4" fill="rgba(139,92,246,0.4)" />
        <circle cx="15" cy="130" r="2" fill="rgba(244,114,182,0.4)" />
      </svg>
    ),
  },
  backend: {
    code: "BE",
    archetype: "The Architect",
    portrait: (
      <svg viewBox="0 0 200 160" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        {/* Server racks */}
        <rect x="25" y="25" width="55" height="110" rx="6" fill="none" stroke="rgba(52,211,153,0.35)" strokeWidth="1.5" />
        <rect x="25" y="25" width="55" height="22" rx="6" fill="rgba(52,211,153,0.15)" />
        {[48, 68, 88, 108, 128].map((y, i) => (
          <rect key={i} x="32" y={y} width="40" height="10" rx="3" fill={`rgba(52,211,153,${0.2 + i * 0.05})`} />
        ))}
        <circle cx="68" cy="36" r="3" fill="rgba(52,211,153,0.7)" />
        {/* Connection lines */}
        <line x1="80" y1="60" x2="110" y2="60" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="80" y1="80" x2="110" y2="80" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="80" y1="100" x2="110" y2="100" stroke="rgba(52,211,153,0.3)" strokeWidth="1.5" strokeDasharray="4,3" />
        {/* API nodes */}
        <rect x="110" y="50" width="60" height="20" rx="5" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
        <rect x="110" y="75" width="60" height="20" rx="5" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
        <rect x="110" y="100" width="60" height="20" rx="5" fill="rgba(52,211,153,0.1)" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
        <text x="122" y="63" fontSize="7" fill="rgba(52,211,153,0.8)" fontFamily="monospace">GET /api</text>
        <text x="122" y="88" fontSize="7" fill="rgba(59,130,246,0.8)" fontFamily="monospace">POST /data</text>
        <text x="122" y="113" fontSize="7" fill="rgba(52,211,153,0.7)" fontFamily="monospace">PUT /sync</text>
        {/* Floating dots */}
        <circle cx="15" cy="40" r="3" fill="rgba(52,211,153,0.3)" />
        <circle cx="190" cy="145" r="4" fill="rgba(59,130,246,0.3)" />
      </svg>
    ),
  },
  infra: {
    code: "IN",
    archetype: "The Guardian",
    portrait: (
      <svg viewBox="0 0 200 160" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        {/* Cloud shape */}
        <ellipse cx="100" cy="55" rx="50" ry="22" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.35)" strokeWidth="1.5" />
        <ellipse cx="78" cy="62" rx="28" ry="14" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.25)" strokeWidth="1" />
        <ellipse cx="122" cy="62" rx="28" ry="14" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.25)" strokeWidth="1" />
        {/* Cloud inner text */}
        <text x="88" y="58" fontSize="8" fill="rgba(96,165,250,0.9)" fontFamily="monospace">CLOUD</text>
        {/* Lines down to servers */}
        <line x1="70" y1="76" x2="55" y2="100" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" strokeDasharray="3,3" />
        <line x1="100" y1="77" x2="100" y2="100" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" strokeDasharray="3,3" />
        <line x1="130" y1="76" x2="145" y2="100" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" strokeDasharray="3,3" />
        {/* Server boxes */}
        <rect x="35" y="100" width="40" height="30" rx="5" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.4)" strokeWidth="1.5" />
        <rect x="80" y="100" width="40" height="30" rx="5" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" />
        <rect x="125" y="100" width="40" height="30" rx="5" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.4)" strokeWidth="1.5" />
        {/* Status dots */}
        <circle cx="55" cy="108" r="4" fill="rgba(63,185,80,0.8)" />
        <circle cx="100" cy="108" r="4" fill="rgba(63,185,80,0.8)" />
        <circle cx="145" cy="108" r="4" fill="rgba(63,185,80,0.8)" />
        <text x="47" y="123" fontSize="7" fill="rgba(96,165,250,0.7)" fontFamily="monospace">99.9%</text>
        <text x="89" y="123" fontSize="7" fill="rgba(6,182,212,0.8)" fontFamily="monospace">LIVE</text>
        <text x="134" y="123" fontSize="7" fill="rgba(96,165,250,0.7)" fontFamily="monospace">AUTO</text>
        {/* Floating elements */}
        <circle cx="15" cy="90" r="3" fill="rgba(96,165,250,0.3)" />
        <circle cx="185" cy="30" r="4" fill="rgba(6,182,212,0.3)" />
      </svg>
    ),
  },
  data: {
    code: "DA",
    archetype: "The Detective",
    portrait: (
      <svg viewBox="0 0 200 160" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        {/* Bar chart */}
        <rect x="25" y="120" width="15" height="30" fill="rgba(251,191,36,0.5)" rx="2" />
        <rect x="45" y="95" width="15" height="55" fill="rgba(251,191,36,0.6)" rx="2" />
        <rect x="65" y="75" width="15" height="75" fill="rgba(251,191,36,0.7)" rx="2" />
        <rect x="85" y="55" width="15" height="95" fill="rgba(251,191,36,0.8)" rx="2" />
        <rect x="105" y="85" width="15" height="65" fill="rgba(239,68,68,0.5)" rx="2" />
        {/* X axis */}
        <line x1="20" y1="150" x2="130" y2="150" stroke="rgba(251,191,36,0.4)" strokeWidth="1.5" />
        {/* Line chart overlay */}
        <polyline points="32,120 52,95 72,80 92,55 112,85" fill="none" stroke="rgba(251,191,36,0.7)" strokeWidth="2" strokeLinejoin="round" />
        {[32, 52, 72, 92, 112].map((x, i) => (
          <circle key={i} cx={x} cy={[120, 95, 80, 55, 85][i]} r="4" fill="rgba(251,191,36,0.9)" />
        ))}
        {/* Magnifying glass */}
        <circle cx="165" cy="75" r="28" fill="none" stroke="rgba(251,191,36,0.4)" strokeWidth="2" />
        <circle cx="165" cy="75" r="20" fill="rgba(245,158,11,0.08)" stroke="rgba(251,191,36,0.3)" strokeWidth="1" />
        <line x1="185" y1="95" x2="198" y2="108" stroke="rgba(251,191,36,0.5)" strokeWidth="3" strokeLinecap="round" />
        <text x="155" y="70" fontSize="8" fill="rgba(251,191,36,0.8)" fontFamily="monospace">SQL</text>
        <text x="153" y="82" fontSize="7" fill="rgba(251,191,36,0.6)" fontFamily="monospace">QUERY</text>
        {/* Floating dots */}
        <circle cx="150" cy="140" r="3" fill="rgba(251,191,36,0.4)" />
        <circle cx="185" cy="30" r="3" fill="rgba(239,68,68,0.4)" />
      </svg>
    ),
  },
  fullstack: {
    code: "FS",
    archetype: "The Explorer",
    portrait: (
      <svg viewBox="0 0 200 160" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        {/* Stack layers */}
        <rect x="40" y="25" width="120" height="22" rx="5" fill="rgba(167,139,250,0.2)" stroke="rgba(167,139,250,0.5)" strokeWidth="1.5" />
        <rect x="40" y="55" width="120" height="22" rx="5" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" />
        <rect x="40" y="85" width="120" height="22" rx="5" fill="rgba(109,40,217,0.25)" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" />
        <rect x="40" y="115" width="120" height="22" rx="5" fill="rgba(236,72,153,0.2)" stroke="rgba(236,72,153,0.4)" strokeWidth="1.5" />
        {/* Layer labels */}
        <text x="90" y="40" fontSize="9" fill="rgba(167,139,250,0.9)" fontFamily="monospace">FRONTEND</text>
        <text x="88" y="70" fontSize="9" fill="rgba(139,92,246,0.9)" fontFamily="monospace">BACKEND</text>
        <text x="95" y="100" fontSize="9" fill="rgba(139,92,246,0.8)" fontFamily="monospace">DATABASE</text>
        <text x="97" y="130" fontSize="9" fill="rgba(236,72,153,0.8)" fontFamily="monospace">INFRA</text>
        {/* Rocket */}
        <path d="M175 135 L168 100 L175 75 L182 100 Z" fill="rgba(167,139,250,0.6)" />
        <path d="M168 100 L160 110 L162 118 Z" fill="rgba(236,72,153,0.5)" />
        <path d="M182 100 L190 110 L188 118 Z" fill="rgba(236,72,153,0.5)" />
        <circle cx="175" cy="90" r="6" fill="rgba(167,139,250,0.4)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        {/* Exhaust flame */}
        <ellipse cx="175" cy="142" rx="5" ry="8" fill="rgba(251,191,36,0.5)" />
        {/* Dots */}
        <circle cx="18" cy="50" r="3" fill="rgba(167,139,250,0.4)" />
        <circle cx="18" cy="120" r="3" fill="rgba(236,72,153,0.4)" />
      </svg>
    ),
  },
  techlead: {
    code: "TL",
    archetype: "The Mentor",
    portrait: (
      <svg viewBox="0 0 200 160" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        {/* Blueprint grid */}
        {[30, 50, 70, 90, 110, 130].map((y) => (
          <line key={`h${y}`} x1="10" y1={y} x2="190" y2={y} stroke="rgba(249,115,22,0.1)" strokeWidth="0.8" />
        ))}
        {[30, 60, 90, 120, 150, 180].map((x) => (
          <line key={`v${x}`} x1={x} y1="20" x2={x} y2="155" stroke="rgba(249,115,22,0.1)" strokeWidth="0.8" />
        ))}
        {/* Org chart nodes */}
        <rect x="75" y="22" width="50" height="24" rx="6" fill="rgba(249,115,22,0.2)" stroke="rgba(249,115,22,0.6)" strokeWidth="1.5" />
        <text x="89" y="37" fontSize="8" fill="rgba(249,115,22,0.9)" fontFamily="monospace">LEAD</text>
        {/* Lines to sub-nodes */}
        <line x1="100" y1="46" x2="100" y2="60" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" />
        <line x1="100" y1="60" x2="55" y2="60" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" />
        <line x1="100" y1="60" x2="145" y2="60" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" />
        <line x1="55" y1="60" x2="55" y2="72" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" />
        <line x1="145" y1="60" x2="145" y2="72" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" />
        {/* Sub-nodes */}
        <rect x="30" y="72" width="50" height="22" rx="5" fill="rgba(249,115,22,0.12)" stroke="rgba(249,115,22,0.4)" strokeWidth="1" />
        <rect x="120" y="72" width="50" height="22" rx="5" fill="rgba(249,115,22,0.12)" stroke="rgba(249,115,22,0.4)" strokeWidth="1" />
        <text x="42" y="86" fontSize="7" fill="rgba(249,115,22,0.8)" fontFamily="monospace">DESIGN</text>
        <text x="132" y="86" fontSize="7" fill="rgba(249,115,22,0.8)" fontFamily="monospace">INFRA</text>
        {/* Lines to leaf nodes */}
        <line x1="55" y1="94" x2="55" y2="106" stroke="rgba(234,179,8,0.4)" strokeWidth="1" />
        <line x1="145" y1="94" x2="145" y2="106" stroke="rgba(234,179,8,0.4)" strokeWidth="1" />
        <rect x="30" y="106" width="50" height="20" rx="4" fill="rgba(234,179,8,0.1)" stroke="rgba(234,179,8,0.35)" strokeWidth="1" />
        <rect x="120" y="106" width="50" height="20" rx="4" fill="rgba(234,179,8,0.1)" stroke="rgba(234,179,8,0.35)" strokeWidth="1" />
        <text x="45" y="119" fontSize="7" fill="rgba(234,179,8,0.7)" fontFamily="monospace">TEAM</text>
        <text x="135" y="119" fontSize="7" fill="rgba(234,179,8,0.7)" fontFamily="monospace">TEAM</text>
      </svg>
    ),
  },
  product: {
    code: "PM",
    archetype: "The Visionary",
    portrait: (
      <svg viewBox="0 0 200 160" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        {/* Funnel */}
        <path d="M30 25 L170 25 L135 65 L135 130 L65 130 L65 65 Z" fill="rgba(45,212,191,0.08)" stroke="rgba(45,212,191,0.35)" strokeWidth="1.5" strokeLinejoin="round" />
        {/* Funnel stages */}
        <line x1="50" y1="55" x2="150" y2="55" stroke="rgba(45,212,191,0.3)" strokeWidth="1" strokeDasharray="4,3" />
        <line x1="70" y1="85" x2="130" y2="85" stroke="rgba(45,212,191,0.3)" strokeWidth="1" strokeDasharray="4,3" />
        <line x1="80" y1="110" x2="120" y2="110" stroke="rgba(45,212,191,0.3)" strokeWidth="1" strokeDasharray="4,3" />
        {/* Stage labels */}
        <text x="155" y="42" fontSize="7" fill="rgba(45,212,191,0.7)" fontFamily="monospace">DISCOVER</text>
        <text x="155" y="72" fontSize="7" fill="rgba(45,212,191,0.7)" fontFamily="monospace">DESIGN</text>
        <text x="155" y="98" fontSize="7" fill="rgba(6,182,212,0.7)" fontFamily="monospace">BUILD</text>
        <text x="155" y="120" fontSize="7" fill="rgba(6,182,212,0.7)" fontFamily="monospace">SHIP</text>
        {/* Metrics */}
        <rect x="15" y="135" width="60" height="18" rx="4" fill="rgba(45,212,191,0.12)" stroke="rgba(45,212,191,0.3)" strokeWidth="1" />
        <text x="22" y="147" fontSize="8" fill="rgba(45,212,191,0.8)" fontFamily="monospace">↑ KPI +32%</text>
        {/* Star / insight */}
        <circle cx="100" cy="145" r="10" fill="rgba(45,212,191,0.12)" stroke="rgba(45,212,191,0.4)" strokeWidth="1.5" />
        <text x="94" y="149" fontSize="11">💡</text>
        {/* Floating dots */}
        <circle cx="18" cy="60" r="3" fill="rgba(45,212,191,0.3)" />
        <circle cx="180" cy="140" r="3" fill="rgba(6,182,212,0.4)" />
      </svg>
    ),
  },
  devops: {
    code: "DO",
    archetype: "The Sentinel",
    portrait: (
      <svg viewBox="0 0 200 160" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        {/* CI/CD Pipeline */}
        <rect x="10" y="68" width="32" height="24" rx="5" fill="rgba(251,113,133,0.2)" stroke="rgba(251,113,133,0.5)" strokeWidth="1.5" />
        <text x="14" y="78" fontSize="6" fill="rgba(251,113,133,0.9)" fontFamily="monospace">CODE</text>
        <text x="14" y="86" fontSize="5" fill="rgba(251,113,133,0.7)" fontFamily="monospace">PUSH</text>
        <line x1="42" y1="80" x2="58" y2="80" stroke="rgba(251,113,133,0.5)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        {/* Build */}
        <rect x="58" y="68" width="32" height="24" rx="5" fill="rgba(251,113,133,0.15)" stroke="rgba(251,113,133,0.4)" strokeWidth="1.5" />
        <text x="62" y="78" fontSize="6" fill="rgba(251,113,133,0.9)" fontFamily="monospace">BUILD</text>
        <text x="65" y="86" fontSize="5" fill="rgba(251,113,133,0.6)" fontFamily="monospace">TEST</text>
        <line x1="90" y1="80" x2="106" y2="80" stroke="rgba(251,113,133,0.5)" strokeWidth="1.5" />
        {/* Deploy */}
        <rect x="106" y="68" width="32" height="24" rx="5" fill="rgba(251,113,133,0.15)" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5" />
        <text x="108" y="78" fontSize="6" fill="rgba(239,68,68,0.9)" fontFamily="monospace">DEPLOY</text>
        <text x="110" y="86" fontSize="5" fill="rgba(239,68,68,0.7)" fontFamily="monospace">STAGE</text>
        <line x1="138" y1="80" x2="154" y2="80" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5" />
        {/* Prod */}
        <rect x="154" y="68" width="36" height="24" rx="5" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.6)" strokeWidth="1.5" />
        <text x="157" y="78" fontSize="6" fill="rgba(239,68,68,0.9)" fontFamily="monospace">PROD</text>
        <text x="158" y="86" fontSize="5" fill="rgba(63,185,80,0.8)" fontFamily="monospace">LIVE ✓</text>
        {/* Shield above pipeline */}
        <path d="M100 20 L118 28 L118 50 Q118 65 100 72 Q82 65 82 50 L82 28 Z" fill="rgba(251,113,133,0.1)" stroke="rgba(251,113,133,0.4)" strokeWidth="1.5" />
        <text x="91" y="50" fontSize="14" fill="rgba(251,113,133,0.8)">🔐</text>
        {/* Feedback arrow */}
        <path d="M172 92 Q172 140 26 140 Q10 140 10 92" fill="none" stroke="rgba(249,115,22,0.35)" strokeWidth="1.5" strokeDasharray="5,4" />
        <text x="80" y="152" fontSize="7" fill="rgba(249,115,22,0.6)" fontFamily="monospace">AUTO ROLLBACK</text>
        {/* Floating dots */}
        <circle cx="185" cy="55" r="3" fill="rgba(251,113,133,0.4)" />
      </svg>
    ),
  },
};

const TYPE_ORDER: JobTypeId[] = ["frontend", "backend", "infra", "data", "fullstack", "techlead", "product", "devops"];

function TypeCard({ typeId, expanded, onClick }: { typeId: JobTypeId; expanded: boolean; onClick: () => void }) {
  const type = JOB_TYPES[typeId];
  const meta = TYPE_META[typeId];

  return (
    <div
      className="card card-hover"
      style={{
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s",
        border: expanded ? `1px solid ${type.gradientFrom}60` : "1px solid var(--border)",
        boxShadow: expanded ? `0 0 24px ${type.gradientFrom}20` : undefined,
      }}
      onClick={onClick}
    >
      {/* Portrait area */}
      <div style={{
        position: "relative",
        height: 180,
        background: `linear-gradient(135deg, ${type.gradientFrom}22 0%, ${type.gradientTo}18 100%)`,
        overflow: "hidden",
      }}>
        {/* Grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            linear-gradient(${type.gradientFrom}08 1px, transparent 1px),
            linear-gradient(90deg, ${type.gradientFrom}08 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }} />

        {/* SVG illustration */}
        <div style={{ position: "absolute", inset: 0 }}>
          {meta.portrait}
        </div>

        {/* Center emoji orb */}
        <div style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${type.gradientFrom}30 0%, transparent 70%)`,
          border: `1.5px solid ${type.gradientFrom}50`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 26,
          boxShadow: `0 0 16px ${type.gradientFrom}30`,
        }}>
          {type.emoji}
        </div>

        {/* Type code badge */}
        <div style={{
          position: "absolute",
          top: 12,
          left: 12,
          padding: "4px 10px",
          borderRadius: 6,
          background: `${type.gradientFrom}25`,
          border: `1px solid ${type.gradientFrom}50`,
          fontFamily: "'Space Mono', monospace",
          fontSize: 13,
          fontWeight: 700,
          color: type.color,
          letterSpacing: 2,
        }}>
          {meta.code}
        </div>

        {/* Archetype */}
        <div style={{
          position: "absolute",
          top: 12,
          right: 12,
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: 1,
        }}>
          {meta.archetype}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px 20px" }}>
        <h2 style={{ fontSize: 18, fontWeight: 900, color: "#fff", marginBottom: 4 }}>
          {type.name}
        </h2>
        <p style={{ color: type.color, fontSize: 13, fontStyle: "italic", marginBottom: 12, lineHeight: 1.5 }}>
          「{type.tagline}」
        </p>

        {/* Expanded content */}
        <div style={{
          maxHeight: expanded ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}>
          <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.8, marginBottom: 14 }}>
            {type.description}
          </p>

          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 1, marginBottom: 8 }}>
              STRENGTHS
            </div>
            {type.strengths.map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: type.gradientFrom, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: "var(--text)" }}>{s}</span>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 1, marginBottom: 8 }}>
              COMPANY TYPE
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {type.recommendedCompanyTypes.map((c) => (
                <span key={c} className="tag" style={{ fontSize: 11 }}>{c}</span>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 1, marginBottom: 8 }}>
              RELATED ROLES
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {type.relatedRoles.map((r) => (
                <span key={r} className="tag tag-blue" style={{ fontSize: 11 }}>{r}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Toggle hint */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginTop: 12,
          color: "var(--muted)",
          fontSize: 11,
          fontFamily: "'Space Mono', monospace",
        }}>
          <span style={{ color: type.color, transition: "transform 0.3s", display: "inline-block", transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}>
            ▾
          </span>
          {expanded ? "閉じる" : "詳しく見る"}
        </div>
      </div>
    </div>
  );
}

export default function TypesPage() {
  const [expandedId, setExpandedId] = useState<JobTypeId | null>(null);

  function handleClick(id: JobTypeId) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }} className="grid-bg">
      {/* Nav */}
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px", display: "flex", alignItems: "center", gap: 16 }}>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Mono', monospace" }}>
          ← ホーム
        </Link>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        <span style={{ color: "var(--muted)", fontSize: 11, fontFamily: "'Space Mono', monospace", letterSpacing: 2 }}>
          ALL 8 TYPES
        </span>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>

        {/* Header */}
        <div className="animate-fade-up" style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 20,
            border: "1px solid rgba(59,130,246,0.3)",
            background: "rgba(59,130,246,0.08)",
            marginBottom: 24,
          }}>
            <span style={{ color: "#3b82f6", fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 2 }}>
              IT TYPE ATLAS
            </span>
          </div>
          <h1 className="font-hero" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2, color: "#fff", marginBottom: 12 }}>
            全 <span className="gradient-text">8タイプ</span> 一覧
          </h1>
          <p style={{ color: "var(--muted)", fontSize: 15, maxWidth: 480, margin: "0 auto 32px" }}>
            MBTIのようにIT職種を8つの個性タイプで分類。
            タイプをクリックすると詳細が展開されます。
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {TYPE_ORDER.map((id) => {
              const type = JOB_TYPES[id];
              const meta = TYPE_META[id];
              return (
                <button
                  key={id}
                  onClick={() => handleClick(id)}
                  style={{
                    padding: "6px 14px", borderRadius: 8,
                    border: expandedId === id ? `1px solid ${type.gradientFrom}80` : "1px solid var(--border)",
                    background: expandedId === id ? `${type.gradientFrom}18` : "var(--surface-2)",
                    color: expandedId === id ? type.color : "var(--muted)",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 12, cursor: "pointer",
                    transition: "all 0.2s",
                    fontWeight: expandedId === id ? 700 : 400,
                  }}
                >
                  {type.emoji} {meta.code}
                </button>
              );
            })}
          </div>
        </div>

        {/* Type grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
          marginBottom: 60,
        }}>
          {TYPE_ORDER.map((id, i) => (
            <div key={id} className="animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <TypeCard
                typeId={id}
                expanded={expandedId === id}
                onClick={() => handleClick(id)}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="card animate-fade-up"
          style={{
            padding: "40px 32px",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.08) 100%)",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 12 }}>🧬</div>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "#fff", marginBottom: 8 }}>
            あなたのタイプを診断する
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 24 }}>
            10問の質問に答えるだけで、あなたのIT職種タイプが分かります
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/diagnosis"
              style={{
                padding: "14px 32px", borderRadius: 10,
                background: "linear-gradient(135deg, var(--blue), var(--purple))",
                color: "#fff", fontSize: 15, fontWeight: 700,
                textDecoration: "none", display: "inline-block",
                boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
              }}
            >
              診断スタート →
            </Link>
            <Link
              href="/"
              style={{
                padding: "14px 32px", borderRadius: 10,
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--muted)", fontSize: 15,
                textDecoration: "none", display: "inline-block",
              }}
            >
              ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
