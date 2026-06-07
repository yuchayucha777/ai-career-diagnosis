"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const JOB_TYPE_SAMPLES = [
  "フロントエンド職人",
  "バックエンド設計者",
  "インフラ番人",
  "データ探偵",
  "フルスタック冒険家",
  "テックリード",
  "プロダクト思考エンジニア",
  "セキュリティ/DevOps番兵",
];

function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = JOB_TYPE_SAMPLES[index];

    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % JOB_TYPE_SAMPLES.length);
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, deleting, index]);

  return (
    <span style={{ color: "#3b82f6", fontFamily: "'Space Mono', monospace" }}>
      {displayed}
      <span className="cursor-blink" />
    </span>
  );
}

function AnimatedSalary() {
  const [value, setValue] = useState(400);
  const [direction, setDirection] = useState(1);
  const targets = [480, 620, 850, 1100, 780, 650];
  const [tIdx, setTIdx] = useState(0);

  useEffect(() => {
    const target = targets[tIdx];
    if (value === target) {
      const timer = setTimeout(() => {
        setTIdx((i) => (i + 1) % targets.length);
      }, 1200);
      return () => clearTimeout(timer);
    }
    const step = value < target ? Math.ceil((target - value) / 8) : -Math.ceil((value - target) / 8);
    const timer = setTimeout(() => setValue((v) => {
      const next = v + step;
      if (step > 0) return Math.min(next, target);
      return Math.max(next, target);
    }), 30);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, tIdx]);

  return (
    <span style={{ color: "#8b5cf6", fontFamily: "'Orbitron', sans-serif", fontSize: "2rem", fontWeight: 900 }}>
      {value}<span style={{ fontSize: "1rem", color: "#7d8590" }}>万円〜</span>
    </span>
  );
}

export default function HomePage() {
  return (
    <main
      className="grid-bg"
      style={{ minHeight: "100vh", background: "var(--bg)", position: "relative" }}
    >
      {/* Radial glow blobs */}
      <div style={{
        position: "absolute", top: "10%", left: "20%",
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "30%", right: "15%",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 60px" }}>

        {/* Header */}
        <div className="animate-fade-up" style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 20,
            border: "1px solid rgba(59,130,246,0.3)",
            background: "rgba(59,130,246,0.08)",
            marginBottom: 24,
          }}>
            <span style={{ color: "#3b82f6", fontFamily: "'Space Mono', monospace", fontSize: 12 }}>
              IT_CAREER_LAB
            </span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3fb950", display: "inline-block", animation: "blink 1.5s infinite" }} />
          </div>

          <h1 className="font-hero" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, marginBottom: 16, color: "#fff" }}>
            あなたの<span className="gradient-text">IT人格</span>と<br />
            <span className="gradient-text">市場価値</span>を診断する
          </h1>

          <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 540, margin: "0 auto 40px" }}>
            10問の質問でIT職種タイプを判定し、スキル・経験から<br />
            転職時の想定年収と職務経歴書キーワードを自動算出。
          </p>

          {/* Stats bar */}
          <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {[
              { value: "8", label: "職種タイプ" },
              { value: "10", label: "診断質問数" },
              { value: "25+", label: "スキル分析" },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div className="font-mono-display" style={{ fontSize: 24, fontWeight: 700, color: "#3b82f6" }}>{value}</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Types overview link */}
        <div className="animate-fade-up" style={{ textAlign: "center", marginBottom: 24, animationDelay: "0.05s" }}>
          <Link
            href="/types"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "10px 24px", borderRadius: 10,
              border: "1px solid rgba(59,130,246,0.3)",
              background: "rgba(59,130,246,0.06)",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: 16 }}>🧬</span>
            <span style={{ color: "#93c5fd", fontSize: 13, fontFamily: "'Space Mono', monospace" }}>
              IT職種図鑑を見る（14職種）
            </span>
            <span style={{ color: "var(--muted)", fontSize: 12 }}>→</span>
          </Link>
        </div>

        {/* Two CTA cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 24,
          marginBottom: 80,
        }}>

          {/* Card 1: Diagnosis */}
          <Link href="/diagnosis" style={{ textDecoration: "none" }}>
            <div
              className="card card-hover animate-fade-up"
              style={{
                padding: 40,
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                animationDelay: "0.1s",
              }}
            >
              {/* Corner accent */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: 100, height: 100,
                background: "radial-gradient(circle at top right, rgba(59,130,246,0.2) 0%, transparent 70%)",
              }} />

              <div style={{ marginBottom: 20 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 52, height: 52, borderRadius: 14,
                  background: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  fontSize: 24, marginBottom: 16,
                }}>
                  🧬
                </div>
                <div className="font-mono-display" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 2, marginBottom: 8 }}>
                  FEATURE 01
                </div>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
                  IT職種診断
                </h2>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                  10問の選択式でIT職種タイプを判定。<br />
                  あなたの強み・向いている会社タイプも分かる。
                </p>
              </div>

              <div style={{
                padding: "16px",
                borderRadius: 10,
                background: "rgba(0,0,0,0.3)",
                border: "1px solid var(--border)",
                marginBottom: 24,
                minHeight: 52,
              }}>
                <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 6, fontFamily: "'Space Mono', monospace" }}>
                  あなたのタイプ →
                </div>
                <TypewriterText />
              </div>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", borderRadius: 10,
                background: "var(--blue)",
                color: "#fff",
                fontSize: 14, fontWeight: 700,
                transition: "all 0.2s",
              }}>
                診断スタート →
              </div>

              <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["所要時間 約3分", "無料", "全8タイプ"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </Link>

          {/* Card 2: Market Value */}
          <Link href="/market-value" style={{ textDecoration: "none" }}>
            <div
              className="card card-hover animate-fade-up"
              style={{
                padding: 40,
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                animationDelay: "0.2s",
              }}
            >
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: 100, height: 100,
                background: "radial-gradient(circle at top right, rgba(139,92,246,0.2) 0%, transparent 70%)",
              }} />

              <div style={{ marginBottom: 20 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 52, height: 52, borderRadius: 14,
                  background: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  fontSize: 24, marginBottom: 16,
                }}>
                  📊
                </div>
                <div className="font-mono-display" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 2, marginBottom: 8 }}>
                  FEATURE 02
                </div>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
                  市場価値チェック
                </h2>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                  職種・経験年数・スキルを入力するだけ。<br />
                  想定年収レンジと職務経歴書キーワードを自動算出。
                </p>
              </div>

              <div style={{
                padding: "16px",
                borderRadius: 10,
                background: "rgba(0,0,0,0.3)",
                border: "1px solid var(--border)",
                marginBottom: 24,
                minHeight: 52,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}>
                <div>
                  <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'Space Mono', monospace", marginBottom: 2 }}>想定年収レンジ</div>
                  <AnimatedSalary />
                </div>
              </div>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", borderRadius: 10,
                background: "var(--purple)",
                color: "#fff",
                fontSize: 14, fontWeight: 700,
                transition: "all 0.2s",
              }}>
                市場価値を診断 →
              </div>

              <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["25+ スキル分析", "年収算出", "キーワード生成"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </Link>
        </div>

        {/* How it works */}
        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="font-mono-display" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 2, marginBottom: 8 }}>
              HOW IT WORKS
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>使い方はシンプル</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { step: "01", icon: "🎯", title: "質問に答える", desc: "10問の選択式。直感でOK" },
              { step: "02", icon: "⚡", title: "スキルを入力", desc: "使える技術をチェックするだけ" },
              { step: "03", icon: "🎁", title: "結果を受け取る", desc: "タイプ診断 + 年収 + キーワード" },
            ].map(({ step, icon, title, desc }) => (
              <div
                key={step}
                className="card"
                style={{ padding: 24, textAlign: "center" }}
              >
                <div className="font-mono-display" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 12 }}>
                  STEP {step}
                </div>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>
                <div style={{ fontWeight: 700, color: "#fff", marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 80, paddingTop: 40, borderTop: "1px solid var(--border)" }}>
          <p style={{ color: "var(--muted)", fontSize: 12, fontFamily: "'Space Mono', monospace" }}>
            IT_CAREER_LAB — 2025 Japanese IT Market Data
          </p>
        </div>
      </div>
    </main>
  );
}
