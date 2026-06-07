"use client";

import Link from "next/link";
import { useState } from "react";
import {
  JOB_CATEGORIES,
  IT_JOBS,
  type JobCategoryId,
  type ITJob,
} from "@/lib/jobs";

const DIFFICULTY_LABEL: Record<string, string> = {
  low: "入門しやすい",
  medium: "中級",
  high: "上級・専門",
};

const DIFFICULTY_COLOR: Record<string, string> = {
  low: "#3fb950",
  medium: "#3b82f6",
  high: "#8b5cf6",
};

// SVG illustrations per category
function CategoryIllustration({ categoryId, color }: { categoryId: JobCategoryId; color: string }) {
  if (categoryId === "dev") return (
    <svg viewBox="0 0 80 60" style={{ width: 80, height: 60 }}>
      <rect x="5" y="8" width="70" height="44" rx="5" fill="none" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <rect x="5" y="8" width="70" height="12" rx="5" fill={color} opacity="0.15" />
      <text x="12" y="20" fontSize="8" fill={color} opacity="0.8" fontFamily="monospace">{"</>"}</text>
      <rect x="12" y="26" width="30" height="4" rx="2" fill={color} opacity="0.5" />
      <rect x="12" y="34" width="45" height="4" rx="2" fill={color} opacity="0.3" />
      <rect x="20" y="42" width="25" height="4" rx="2" fill={color} opacity="0.4" />
    </svg>
  );
  if (categoryId === "infra") return (
    <svg viewBox="0 0 80 60" style={{ width: 80, height: 60 }}>
      <rect x="5" y="5" width="70" height="16" rx="4" fill="none" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <rect x="5" y="25" width="70" height="16" rx="4" fill="none" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <rect x="5" y="45" width="70" height="12" rx="4" fill="none" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <circle cx="65" cy="13" r="4" fill={color} opacity="0.7" />
      <circle cx="65" cy="33" r="4" fill={color} opacity="0.5" />
      <circle cx="65" cy="51" r="4" fill={color} opacity="0.4" />
      <rect x="12" y="11" width="28" height="4" rx="2" fill={color} opacity="0.4" />
      <rect x="12" y="31" width="22" height="4" rx="2" fill={color} opacity="0.35" />
    </svg>
  );
  if (categoryId === "specialist") return (
    <svg viewBox="0 0 80 60" style={{ width: 80, height: 60 }}>
      <circle cx="40" cy="30" r="22" fill="none" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <circle cx="40" cy="30" r="14" fill="none" stroke={color} strokeWidth="1" opacity="0.3" />
      <circle cx="40" cy="30" r="6" fill={color} opacity="0.3" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <circle key={deg} cx={40 + 22 * Math.cos(rad)} cy={30 + 22 * Math.sin(rad)} r="3" fill={color} opacity="0.5" />
        );
      })}
    </svg>
  );
  if (categoryId === "management") return (
    <svg viewBox="0 0 80 60" style={{ width: 80, height: 60 }}>
      <rect x="28" y="5" width="24" height="14" rx="4" fill={color} opacity="0.3" stroke={color} strokeWidth="1" />
      <line x1="40" y1="19" x2="40" y2="28" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <line x1="40" y1="28" x2="20" y2="28" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <line x1="40" y1="28" x2="60" y2="28" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <line x1="20" y1="28" x2="20" y2="36" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="60" y1="28" x2="60" y2="36" stroke={color} strokeWidth="1" opacity="0.4" />
      <rect x="8" y="36" width="24" height="14" rx="4" fill={color} opacity="0.2" stroke={color} strokeWidth="1" />
      <rect x="48" y="36" width="24" height="14" rx="4" fill={color} opacity="0.2" stroke={color} strokeWidth="1" />
    </svg>
  );
  // beginner
  return (
    <svg viewBox="0 0 80 60" style={{ width: 80, height: 60 }}>
      <path d="M40 8 Q55 18 55 30 Q55 48 40 54 Q25 48 25 30 Q25 18 40 8Z" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" />
      <circle cx="40" cy="32" r="8" fill={color} opacity="0.25" />
      <line x1="40" y1="12" x2="40" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="40" y1="40" x2="40" y2="52" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

function JobCard({ job }: { job: ITJob }) {
  const [expanded, setExpanded] = useState(false);
  const category = JOB_CATEGORIES.find((c) => c.id === job.categoryId)!;

  return (
    <div
      className="card"
      style={{
        overflow: "hidden",
        cursor: "pointer",
        border: expanded ? `1px solid ${category.gradientFrom}60` : "1px solid var(--border)",
        transition: "all 0.25s",
        boxShadow: expanded ? `0 0 20px ${category.gradientFrom}15` : undefined,
      }}
      onClick={() => setExpanded((v) => !v)}
    >
      {/* Portrait */}
      <div style={{
        position: "relative",
        height: 130,
        background: `linear-gradient(135deg, ${category.gradientFrom}1a 0%, ${category.gradientTo}14 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(${category.gradientFrom}08 1px, transparent 1px), linear-gradient(90deg, ${category.gradientFrom}08 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
        }} />
        {/* illustration */}
        <CategoryIllustration categoryId={job.categoryId} color={category.color} />
        {/* emoji orb */}
        <div style={{
          position: "absolute", bottom: 10, right: 12,
          width: 44, height: 44, borderRadius: "50%",
          background: `radial-gradient(circle, ${category.gradientFrom}28 0%, transparent 70%)`,
          border: `1px solid ${category.gradientFrom}45`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22,
        }}>
          {job.emoji}
        </div>
        {/* difficulty badge */}
        <div style={{
          position: "absolute", top: 10, left: 10,
          padding: "3px 8px", borderRadius: 6,
          background: `${DIFFICULTY_COLOR[job.difficulty]}20`,
          border: `1px solid ${DIFFICULTY_COLOR[job.difficulty]}50`,
          fontSize: 10, color: DIFFICULTY_COLOR[job.difficulty],
          fontFamily: "'Space Mono', monospace",
        }}>
          {DIFFICULTY_LABEL[job.difficulty]}
        </div>
        {/* beginner badge */}
        {job.beginnerOk && (
          <div style={{
            position: "absolute", top: 10, right: 10,
            padding: "3px 8px", borderRadius: 6,
            background: "rgba(63,185,80,0.15)",
            border: "1px solid rgba(63,185,80,0.4)",
            fontSize: 10, color: "#3fb950",
            fontFamily: "'Space Mono', monospace",
          }}>
            未経験OK
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "16px 18px" }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4, lineHeight: 1.4 }}>
          {job.name}
        </h3>
        <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 10, lineHeight: 1.5 }}>
          {job.shortDesc}
        </p>

        {/* Salary */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "4px 10px", borderRadius: 6,
          background: `${category.gradientFrom}12`,
          border: `1px solid ${category.gradientFrom}35`,
          marginBottom: 10,
        }}>
          <span style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace" }}>年収</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: category.color, fontFamily: "'Space Mono', monospace" }}>
            {job.salaryRange}
          </span>
        </div>

        {/* Expanded */}
        <div style={{
          maxHeight: expanded ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}>
          <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, marginBottom: 12 }}>
            {job.detail}
          </p>
          <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 1, marginBottom: 8 }}>
            SKILLS
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {job.skills.map((s) => (
              <span key={s} className="tag" style={{ fontSize: 11 }}>{s}</span>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 10, fontSize: 11, color: "var(--muted)",
          fontFamily: "'Space Mono', monospace",
          display: "flex", alignItems: "center", gap: 4,
        }}>
          <span style={{
            color: category.color,
            display: "inline-block",
            transition: "transform 0.3s",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
          }}>▾</span>
          {expanded ? "閉じる" : "詳しく見る"}
        </div>
      </div>
    </div>
  );
}

export default function TypesPage() {
  const [activeCategory, setActiveCategory] = useState<JobCategoryId | "all">("all");

  const filteredJobs = activeCategory === "all"
    ? IT_JOBS
    : IT_JOBS.filter((j) => j.categoryId === activeCategory);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }} className="grid-bg">
      {/* Nav */}
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px", display: "flex", alignItems: "center", gap: 16 }}>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Mono', monospace" }}>
          ← ホーム
        </Link>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        <span style={{ color: "var(--muted)", fontSize: 11, fontFamily: "'Space Mono', monospace", letterSpacing: 2 }}>
          IT JOB ATLAS
        </span>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>

        {/* Header */}
        <div className="animate-fade-up" style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 20,
            border: "1px solid rgba(59,130,246,0.3)",
            background: "rgba(59,130,246,0.08)",
            marginBottom: 20,
          }}>
            <span style={{ color: "#3b82f6", fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 2 }}>
              IT JOB ATLAS
            </span>
          </div>
          <h1 className="font-hero" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2, color: "#fff", marginBottom: 12 }}>
            IT<span className="gradient-text">職種図鑑</span>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: 15, maxWidth: 520, margin: "0 auto" }}>
            IT業界の主要な職種を4つの分野に分類。
            カードをクリックすると仕事内容・必要スキル・年収の詳細を確認できます。
          </p>
        </div>

        {/* Category filter */}
        <div className="animate-fade-up" style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 48 }}>
          <button
            onClick={() => setActiveCategory("all")}
            style={{
              padding: "8px 18px", borderRadius: 10,
              border: activeCategory === "all" ? "1px solid rgba(59,130,246,0.6)" : "1px solid var(--border)",
              background: activeCategory === "all" ? "rgba(59,130,246,0.15)" : "var(--surface-2)",
              color: activeCategory === "all" ? "#93c5fd" : "var(--muted)",
              fontSize: 13, cursor: "pointer", fontFamily: "inherit",
              transition: "all 0.2s", fontWeight: activeCategory === "all" ? 700 : 400,
            }}
          >
            すべて（{IT_JOBS.length}職種）
          </button>
          {JOB_CATEGORIES.map((cat) => {
            const count = IT_JOBS.filter((j) => j.categoryId === cat.id).length;
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "8px 18px", borderRadius: 10,
                  border: active ? `1px solid ${cat.gradientFrom}80` : "1px solid var(--border)",
                  background: active ? `${cat.gradientFrom}18` : "var(--surface-2)",
                  color: active ? cat.color : "var(--muted)",
                  fontSize: 13, cursor: "pointer", fontFamily: "inherit",
                  transition: "all 0.2s", fontWeight: active ? 700 : 400,
                }}
              >
                {cat.emoji} {cat.label}（{count}）
              </button>
            );
          })}
        </div>

        {/* Category sections */}
        {activeCategory === "all" ? (
          JOB_CATEGORIES.map((cat) => {
            const jobs = IT_JOBS.filter((j) => j.categoryId === cat.id);
            return (
              <div key={cat.id} style={{ marginBottom: 56 }}>
                {/* Section header */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 16,
                  marginBottom: 24,
                  padding: "16px 20px",
                  borderRadius: 10,
                  background: `linear-gradient(135deg, ${cat.gradientFrom}10 0%, transparent 60%)`,
                  border: `1px solid ${cat.gradientFrom}25`,
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: `${cat.gradientFrom}20`,
                    border: `1px solid ${cat.gradientFrom}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22,
                  }}>
                    {cat.emoji}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: cat.color, fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 2 }}>
                      {cat.id.toUpperCase()}
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 900, color: "#fff" }}>
                      {cat.label}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>
                      {cat.description}
                    </div>
                  </div>
                  <div style={{ marginLeft: "auto", fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--muted)" }}>
                    {jobs.length} 職種
                  </div>
                </div>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: 16,
                }}>
                  {jobs.map((job) => <JobCard key={job.id} job={job} />)}
                </div>
              </div>
            );
          })
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
            marginBottom: 56,
          }}>
            {filteredJobs.map((job) => <JobCard key={job.id} job={job} />)}
          </div>
        )}

        {/* CTA */}
        <div
          className="card"
          style={{
            padding: "40px 32px",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.08) 100%)",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 12 }}>🧬</div>
          <h2 style={{ fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 8 }}>
            あなたに向いている職種を診断する
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 24 }}>
            10問の質問に答えるだけで、あなたのIT職種タイプが分かります。未経験の方向けの質問もあります。
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
              href="/market-value"
              style={{
                padding: "14px 32px", borderRadius: 10,
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--muted)", fontSize: 15,
                textDecoration: "none", display: "inline-block",
              }}
            >
              市場価値チェック
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
