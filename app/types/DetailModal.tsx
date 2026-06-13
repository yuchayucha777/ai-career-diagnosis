"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CATS, JOBS, SCALE_MIN, SCALE_MAX, type Job } from "@/data/jobs";

interface Props {
  job: Job;
  onClose: () => void;
  onNav: (job: Job) => void;
}

const pctOf = (v: number) => ((v - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;

export default function DetailModal({ job, onClose, onNav }: Props) {
  const cat = CATS[job.cat];
  const idx = JOBS.findIndex((j) => j.id === job.id);
  const prev = JOBS[(idx - 1 + JOBS.length) % JOBS.length];
  const next = JOBS[(idx + 1) % JOBS.length];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(prev);
      if (e.key === "ArrowRight") onNav(next);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [job, onClose, onNav, prev, next]);

  const rangeLeft = pctOf(job.range[0]);
  const rangeWidth = pctOf(job.range[1]) - rangeLeft;
  const medianLeft = pctOf(job.median);

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        background: "rgba(30,27,58,0.42)",
        backdropFilter: "blur(5px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        className="modal-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "min(860px, 100%)",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#fff",
          borderRadius: 26,
          boxShadow: "0 40px 90px -30px rgba(30,27,58,0.6)",
          animation: "modalRise 0.28s cubic-bezier(0.3,0.7,0.4,1)",
        }}
      >
        {/* close */}
        <button
          onClick={onClose}
          aria-label="閉じる"
          style={{
            position: "absolute", top: 16, right: 16, zIndex: 2,
            width: 38, height: 38, borderRadius: "50%",
            border: "none", background: "rgba(255,255,255,0.9)",
            color: "var(--text)",
            display: "grid", placeItems: "center",
            boxShadow: "0 6px 16px -6px rgba(30,27,58,0.4)",
            cursor: "pointer",
            transition: "transform 0.15s",
          }}
          className="modal-close-btn"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* body grid */}
        <div className="modal-grid-layout">
          {/* illustration */}
          <div style={{
            display: "grid", placeItems: "center",
            padding: 28, position: "relative",
            background: `linear-gradient(160deg, ${cat.color}1f, ${cat.color}0a)`,
          }}>
            <span style={{
              position: "absolute", top: 18, left: 18,
              padding: "5px 11px", borderRadius: 9,
              background: cat.color, color: "#fff",
              fontSize: 13, fontWeight: 900,
            }}>
              No.{String(job.no).padStart(2, "0")}
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={job.img}
              alt={job.name}
              style={{ width: "100%", maxWidth: 240, borderRadius: 22 }}
            />
            <span style={{
              position: "absolute", bottom: 18, right: 18,
              padding: "5px 12px", borderRadius: 999,
              background: "rgba(255,255,255,0.85)",
              fontSize: 12, fontWeight: 700, color: "var(--muted)",
            }}>
              {job.animal}
            </span>
          </div>

          {/* info */}
          <div style={{ padding: "34px 34px 30px" }}>
            <span style={{
              display: "inline-block",
              padding: "5px 12px", borderRadius: 999,
              background: cat.color + "14",
              color: cat.color, fontSize: 12, fontWeight: 700,
            }}>
              {cat.label}
            </span>
            <h2 style={{ fontSize: "clamp(24px,3.2vw,30px)", fontWeight: 900, margin: "12px 0 0", letterSpacing: "-0.01em", color: "var(--text)" }}>
              {job.name}
            </h2>
            <p style={{ fontSize: 15, fontWeight: 700, marginTop: 8, color: cat.color }}>
              {job.catch}
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.85, color: "var(--muted)", marginTop: 12 }}>
              {job.desc}
            </p>

            {/* 強み */}
            <div style={{ marginTop: 22 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--muted)", marginBottom: 10 }}>強み・適性</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {job.strengths.map((s) => (
                  <span key={s} style={{
                    padding: "7px 13px", borderRadius: 999,
                    border: `1.5px solid ${cat.color}44`,
                    color: cat.color, fontSize: 12.5, fontWeight: 700,
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* スキル */}
            <div style={{ marginTop: 22 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--muted)", marginBottom: 10 }}>代表的なスキル</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {job.skills.map((s) => (
                  <span key={s} style={{
                    padding: "7px 13px", borderRadius: 9,
                    background: "#f1f1fb", color: "var(--text)",
                    fontSize: 12.5, fontWeight: 500,
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* 年収バー */}
            <div style={{ marginTop: 22 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--muted)", marginBottom: 10 }}>
                想定年収レンジ
                <b style={{ color: cat.color, marginLeft: 4 }}>{job.range[0]}〜{job.range[1]}万円</b>
              </div>
              <div style={{ position: "relative", height: 14, borderRadius: 999, background: "rgba(99,102,241,0.1)", margin: "26px 0 8px" }}>
                <div style={{
                  position: "absolute", top: 0, height: "100%", borderRadius: 999,
                  left: `${rangeLeft}%`, width: `${rangeWidth}%`,
                  background: `linear-gradient(90deg, ${cat.color}, #8b5cf6)`,
                }} />
                <div style={{ position: "absolute", top: "50%", left: `${medianLeft}%`, transform: "translate(-50%, -50%)" }}>
                  <span style={{
                    display: "block", width: 16, height: 16, borderRadius: "50%",
                    background: "#fff", border: `4px solid ${cat.color}`,
                    boxShadow: "0 3px 8px -2px rgba(30,27,58,0.4)",
                  }} />
                  <span style={{
                    position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)",
                    whiteSpace: "nowrap", fontSize: 11.5, fontWeight: 900, color: cat.color,
                  }}>
                    中央値 {job.median}万
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, color: "var(--muted)" }}>
                <span>200</span><span>500</span><span>800</span><span>1100</span><span>1300万</span>
              </div>
            </div>

            {/* アクション */}
            <div style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
              <Link
                href="/diagnosis"
                style={{
                  flex: 1, minWidth: 160, textAlign: "center",
                  padding: "14px 20px", borderRadius: 14,
                  background: `linear-gradient(135deg, ${cat.color}, #8b5cf6)`,
                  color: "#fff", fontSize: 14.5, fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: `0 14px 30px -14px ${cat.color}`,
                }}
              >
                この適性を診断する
              </Link>
              <Link
                href="/market-value"
                style={{
                  padding: "14px 20px", borderRadius: 14,
                  border: "1.5px solid rgba(99,102,241,0.2)",
                  color: "var(--muted)", fontSize: 14.5, fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                市場価値を計算
              </Link>
            </div>
          </div>
        </div>

        {/* prev / next nav */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "0 34px 28px" }}>
          <button
            onClick={() => onNav(prev)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              maxWidth: "48%", padding: "9px 14px",
              borderRadius: 999, border: "1.5px solid rgba(99,102,241,0.16)",
              background: "#fff", color: "var(--muted)",
              fontSize: 12.5, fontWeight: 700,
              cursor: "pointer",
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M11 4.5 6.5 9 11 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            No.{String(prev.no).padStart(2, "0")} {prev.name}
          </button>
          <button
            onClick={() => onNav(next)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              maxWidth: "48%", padding: "9px 14px",
              borderRadius: 999, border: "1.5px solid rgba(99,102,241,0.16)",
              background: "#fff", color: "var(--muted)",
              fontSize: 12.5, fontWeight: 700,
              cursor: "pointer",
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}
          >
            No.{String(next.no).padStart(2, "0")} {next.name}
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M7 4.5 11.5 9 7 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
