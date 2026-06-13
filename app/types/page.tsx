import type { Metadata } from "next";
import Link from "next/link";
import JobCatalog from "./JobCatalog";

export const metadata: Metadata = {
  title: "IT職種図鑑 | IT Career Lab",
  description:
    "14のIT職種をキャラクターといっしょに紹介。仕事内容・強み・想定年収をカードで一覧できます。",
};

export default function TypesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", position: "relative" }}>
      {/* background grid */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)",
        backgroundSize: "38px 38px",
        WebkitMaskImage: "radial-gradient(ellipse 90% 55% at 50% 0%, #000 30%, transparent 80%)",
        maskImage: "radial-gradient(ellipse 90% 55% at 50% 0%, #000 30%, transparent 80%)",
      }} />

      {/* nav */}
      <header style={{
        position: "relative", zIndex: 3,
        maxWidth: 1140, margin: "0 auto",
        padding: "18px 28px",
        display: "flex", alignItems: "center",
      }}>
        <Link
          href="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            color: "var(--muted)", textDecoration: "none", fontSize: 14, fontWeight: 600,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          ホームに戻る
        </Link>
      </header>

      {/* page heading */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1140, margin: "0 auto", padding: "18px 28px 0", textAlign: "center" }}>
        <span style={{
          display: "inline-block", padding: "6px 14px", borderRadius: 999,
          background: "#fff", border: "1.5px solid #6366f1",
          color: "#6366f1", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
          boxShadow: "0 6px 16px -10px #6366f1",
        }}>
          職種図鑑
        </span>
        <h1 style={{
          margin: "16px 0 0",
          fontSize: "clamp(26px, 3.8vw, 36px)",
          fontWeight: 900, letterSpacing: "-0.01em",
          color: "var(--text)",
        }}>
          IT職種図鑑{" "}
          <span style={{ fontSize: "0.62em", fontWeight: 900, color: "#6366f1" }}>全14種</span>
        </h1>
        <p style={{
          maxWidth: 580, margin: "12px auto 0",
          fontSize: 14.5, lineHeight: 1.8,
          color: "var(--muted)",
        }}>
          IT業界の代表的な14職種を、なかまのキャラクターといっしょに紹介。カードをタップすると、仕事内容・強み・想定年収がわかります。
        </p>
      </div>

      {/* interactive catalog (client) */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1140, margin: "0 auto", padding: "0 28px 90px" }}>
        <JobCatalog />
      </div>
    </div>
  );
}
