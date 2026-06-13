"use client";

import { useState } from "react";
import { CATS, type Job } from "@/data/jobs";

interface Props {
  job: Job;
  index: number;
  onOpen: (job: Job) => void;
}

export default function JobCard({ job, index, onOpen }: Props) {
  const [hover, setHover] = useState(false);
  const cat = CATS[job.cat];

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(job)}
      style={{
        textAlign: "left",
        background: "#fff",
        border: `1px solid ${hover ? cat.color : "rgba(99,102,241,0.1)"}`,
        borderRadius: 22,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: hover
          ? `0 22px 44px -20px ${cat.color}99`
          : "0 12px 32px -22px rgba(49,46,129,0.5)",
        transform: hover ? "translateY(-6px)" : "none",
        transition: "transform 0.25s cubic-bezier(0.3,0.7,0.4,1), box-shadow 0.25s, border-color 0.2s",
        animationDelay: `${Math.min(index, 13) * 35}ms`,
        cursor: "pointer",
        fontFamily: "inherit",
      }}
      className="zcard-anim"
    >
      {/* thumbnail */}
      <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", background: cat.color + "10" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={job.img}
          alt={job.name}
          loading="lazy"
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hover ? "scale(1.06)" : "none",
            transition: "transform 0.3s ease",
            display: "block",
          }}
        />
        <span style={{
          position: "absolute", top: 10, left: 10,
          padding: "4px 9px", borderRadius: 8,
          background: cat.color, color: "#fff",
          fontSize: 12, fontWeight: 900, letterSpacing: "0.02em",
          boxShadow: "0 4px 10px -4px rgba(0,0,0,0.4)",
        }}>
          No.{String(job.no).padStart(2, "0")}
        </span>
        <span style={{
          position: "absolute", bottom: 10, right: 10,
          padding: "4px 10px", borderRadius: 999,
          background: "#fff", color: cat.color,
          fontSize: 11, fontWeight: 700,
          boxShadow: "0 4px 12px -5px rgba(49,46,129,0.5)",
        }}>
          {cat.label}
        </span>
      </div>

      {/* body */}
      <div style={{ padding: "15px 16px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontSize: 16, fontWeight: 900, letterSpacing: "-0.01em", color: "var(--text)" }}>
          {job.name}
        </div>
        <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 5, lineHeight: 1.55, flex: 1 }}>
          {job.catch}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
          <span style={{ fontSize: 12, color: "var(--muted)" }}>
            想定年収 <b style={{ fontSize: 16, fontWeight: 900, color: cat.color }}>{job.median}</b>万円
          </span>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 4,
            fontSize: 12.5, fontWeight: 700, color: cat.color,
          }}>
            くわしく
            <svg
              width="14" height="14" viewBox="0 0 18 18" fill="none"
              style={{ transform: hover ? "translateX(3px)" : "none", transition: "transform 0.2s" }}
            >
              <path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
}
