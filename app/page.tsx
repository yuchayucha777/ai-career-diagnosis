"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AdBanner from "@/components/AdBanner";

const TYPEWRITER_SAMPLES = [
  "Webエンジニア",
  "AIエンジニア",
  "データサイエンティスト",
  "クラウドエンジニア",
  "セキュリティエンジニア",
  "プロジェクトマネージャー",
  "ITコンサルタント",
  "プログラマー",
];

function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = TYPEWRITER_SAMPLES[index];

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
      setIndex((i) => (i + 1) % TYPEWRITER_SAMPLES.length);
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
      {/* Gradient blobs */}
      <div style={{
        position: "fixed", top: "-15%", left: "-10%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "fixed", top: "35%", right: "-15%",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 60px" }}>

        {/* ── Hero ── */}
        <div className="animate-fade-up" style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 20,
            border: "1px solid rgba(99,102,241,0.3)",
            background: "rgba(99,102,241,0.06)",
            marginBottom: 28,
          }}>
            <span style={{ color: "#6366f1", fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 2 }}>
              IT_CAREER_LAB
            </span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
          </div>

          <h1 className="font-hero" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, marginBottom: 16, color: "var(--text)" }}>
            あなたの<span className="gradient-text">IT適性</span>と<br />
            <span className="gradient-text">市場価値</span>を診断する
          </h1>

          <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.8 }}>
            未経験・経験者どちらでも対応。14種のIT職種から適性を判定し、<br />
            スキル・経験から転職時の想定年収を自動算出します。
          </p>

          {/* Stats */}
          <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: "14", label: "IT職種タイプ" },
              { value: "約5分", label: "診断時間" },
              { value: "無料", label: "完全無料" },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div className="font-mono-display" style={{ fontSize: 26, fontWeight: 800, color: "#6366f1" }}>{value}</div>
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 職種図鑑リンク ── */}
        <div className="animate-fade-up" style={{ textAlign: "center", marginBottom: 28, animationDelay: "0.05s" }}>
          <Link
            href="/types"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "10px 24px", borderRadius: 12,
              border: "1px solid rgba(99,102,241,0.25)",
              background: "rgba(99,102,241,0.04)",
              textDecoration: "none", transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: 16 }}>🧬</span>
            <span style={{ color: "#6366f1", fontSize: 13, fontFamily: "'Space Mono', monospace" }}>
              IT職種図鑑を見る（14職種）
            </span>
            <span style={{ color: "var(--muted)", fontSize: 12 }}>→</span>
          </Link>
        </div>

        {/* ── CTA カード 2枚 ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 24,
          marginBottom: 80,
        }}>

          {/* Card 1: 診断 */}
          <Link href="/diagnosis" style={{ textDecoration: "none" }}>
            <div
              className="card card-hover animate-fade-up"
              style={{
                padding: 40, cursor: "pointer", position: "relative", overflow: "hidden",
                animationDelay: "0.1s",
                background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)",
              }}
            >
              <div style={{
                position: "absolute", top: -20, right: -20,
                width: 160, height: 160, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
              }} />

              <div style={{ marginBottom: 20 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 52, height: 52, borderRadius: 14,
                  background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))",
                  border: "1px solid rgba(99,102,241,0.25)",
                  fontSize: 24, marginBottom: 16,
                }}>
                  🧬
                </div>
                <div className="font-mono-display" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: 2, marginBottom: 8 }}>
                  FEATURE 01
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
                  IT職種診断
                </h2>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
                  未経験・経験者に分かれた専用の質問で、14種のIT職種から
                  あなたの適性を判定。適正度・向いている理由・職種ランキング・
                  注意点まで、あなただけの結果を生成します。
                </p>
              </div>

              <div style={{
                padding: "14px 16px",
                borderRadius: 10,
                background: "rgba(99,102,241,0.05)",
                border: "1px solid rgba(99,102,241,0.15)",
                marginBottom: 24,
                minHeight: 52,
              }}>
                <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 6, fontFamily: "'Space Mono', monospace" }}>
                  診断結果の例 →
                </div>
                <TypewriterText />
              </div>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", borderRadius: 10,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                fontSize: 14, fontWeight: 700,
                boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
              }}>
                診断スタート →
              </div>

              <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["所要時間 約5分", "無料", "全14タイプ対応"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </Link>

          {/* Card 2: 市場価値 */}
          <Link href="/market-value" style={{ textDecoration: "none" }}>
            <div
              className="card card-hover animate-fade-up"
              style={{
                padding: 40, cursor: "pointer", position: "relative", overflow: "hidden",
                animationDelay: "0.2s",
                background: "linear-gradient(135deg, #ffffff 0%, #f5f0ff 100%)",
              }}
            >
              <div style={{
                position: "absolute", top: -20, right: -20,
                width: 160, height: 160, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
              }} />

              <div style={{ marginBottom: 20 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 52, height: 52, borderRadius: 14,
                  background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.1))",
                  border: "1px solid rgba(139,92,246,0.25)",
                  fontSize: 24, marginBottom: 16,
                }}>
                  📊
                </div>
                <div className="font-mono-display" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: 2, marginBottom: 8 }}>
                  FEATURE 02
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
                  市場価値チェック
                </h2>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
                  職種・経験年数・スキルを入力するだけ。<br />
                  転職時の想定年収レンジと職務経歴書キーワードを自動算出します。
                </p>
              </div>

              <div style={{
                padding: "14px 16px",
                borderRadius: 10,
                background: "rgba(139,92,246,0.05)",
                border: "1px solid rgba(139,92,246,0.15)",
                marginBottom: 24,
                minHeight: 52,
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <div>
                  <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", marginBottom: 2 }}>
                    想定年収レンジ
                  </div>
                  <AnimatedSalary />
                </div>
              </div>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", borderRadius: 10,
                background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                color: "#fff",
                fontSize: 14, fontWeight: 700,
                boxShadow: "0 4px 16px rgba(139,92,246,0.3)",
              }}>
                市場価値を診断 →
              </div>

              <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["47+ スキル分析", "年収算出", "キーワード生成"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </Link>
        </div>

        <AdBanner style={{ marginBottom: 40 }} />

        {/* ── How it works ── */}
        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="font-mono-display" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: 2, marginBottom: 8 }}>
              HOW IT WORKS
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)" }}>診断の流れ</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { step: "01", icon: "🎯", title: "経験を選ぶ", desc: "未経験 or 現在のIT職種を選択。それぞれに最適な質問を出題" },
              { step: "02", icon: "⚡", title: "質問に答える", desc: "12〜15問の選択式。直感で選んでOK" },
              { step: "03", icon: "🎁", title: "結果を受け取る", desc: "適正度・向いている理由・職種ランキング・注意点を表示" },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="card" style={{ padding: 24, textAlign: "center" }}>
                <div className="font-mono-display" style={{ fontSize: 10, color: "var(--muted)", marginBottom: 12 }}>
                  STEP {step}
                </div>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>
                <div style={{ fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 診断結果でわかること ── */}
        <div className="animate-fade-up" style={{ marginTop: 60, animationDelay: "0.35s" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div className="font-mono-display" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: 2, marginBottom: 8 }}>
              WHAT YOU GET
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)" }}>診断結果でわかること</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
            {[
              { icon: "📊", label: "適正度", desc: "何%マッチしているか数値で判定" },
              { icon: "💡", label: "向いている理由", desc: "あなたの回答を根拠にした具体的な理由" },
              { icon: "💬", label: "開発者からのアドバイス", desc: "その職種を経験した開発者からの一言" },
              { icon: "🏆", label: "職種ランキング", desc: "14タイプを得意な順に並べて表示" },
              { icon: "⚠️", label: "注意点", desc: "その職種で陥りやすい落とし穴" },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="card" style={{ padding: "18px 20px" }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 開発者メモ ── */}
        <div className="animate-fade-up" style={{ marginTop: 60, animationDelay: "0.4s" }}>
          <div style={{
            padding: "28px 32px", borderRadius: 16,
            background: "rgba(16,185,129,0.04)",
            border: "1px solid rgba(16,185,129,0.2)",
            borderLeft: "4px solid rgba(16,185,129,0.4)",
            maxWidth: 640, margin: "0 auto",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 16 }}>💬</span>
              <span style={{ fontSize: 10, color: "#10b981", fontFamily: "'Space Mono', monospace", letterSpacing: 2 }}>
                開発者メモ
              </span>
            </div>
            <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 2.1, margin: 0 }}>
              私も最初は「ITって全部プログラミング？」と思っていました。<br />
              でも実際には、コードを書く仕事だけではなく、<br />
              人と調整する仕事、仕組みを守る仕事もあります。
            </p>
          </div>
        </div>

        {/* ── Footer ── */}
        <div style={{ textAlign: "center", marginTop: 80, paddingTop: 40, borderTop: "1px solid var(--border)" }}>
          <p style={{ color: "var(--muted)", fontSize: 12, fontFamily: "'Space Mono', monospace" }}>
            IT_CAREER_LAB — 2025 Japanese IT Market Data
          </p>
        </div>
      </div>
    </main>
  );
}
