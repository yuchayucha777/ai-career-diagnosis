"use client";

import Link from "next/link";
import { useState } from "react";
import { QUESTIONS, BEGINNER_QUESTIONS, JOB_TYPES, calculateDiagnosis, type DiagnosisResult } from "@/lib/diagnosis";

type Phase = "select" | "quiz" | "result";

function ExperienceSelectView({ onSelect }: { onSelect: (beginner: boolean) => void }) {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }} className="grid-bg">
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px" }}>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Mono', monospace" }}>
          ← ホーム
        </Link>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ width: "100%", maxWidth: 600 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="font-mono-display" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 2, marginBottom: 12 }}>
              STEP 0 / IT職種診断
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 8 }}>
              あなたのIT経験を教えてください
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              回答に合わせた質問を出題します
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <button
              onClick={() => onSelect(true)}
              className="card card-hover"
              style={{
                padding: "32px 24px",
                cursor: "pointer",
                textAlign: "center",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "inherit",
                fontFamily: "inherit",
                transition: "all 0.2s",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>🌱</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
                IT未経験
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                これからITに転職したい<br />
                プログラミングを勉強中
              </div>
              <div style={{
                marginTop: 20,
                display: "inline-block",
                padding: "8px 18px", borderRadius: 8,
                background: "rgba(63,185,80,0.12)",
                border: "1px solid rgba(63,185,80,0.3)",
                fontSize: 12, color: "#3fb950",
                fontFamily: "'Space Mono', monospace",
              }}>
                日常的な感覚で答えられる質問
              </div>
            </button>

            <button
              onClick={() => onSelect(false)}
              className="card card-hover"
              style={{
                padding: "32px 24px",
                cursor: "pointer",
                textAlign: "center",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "inherit",
                fontFamily: "inherit",
                transition: "all 0.2s",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>⚡</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
                IT経験者
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                現在エンジニアとして<br />
                働いている・働いていた
              </div>
              <div style={{
                marginTop: 20,
                display: "inline-block",
                padding: "8px 18px", borderRadius: 8,
                background: "rgba(59,130,246,0.12)",
                border: "1px solid rgba(59,130,246,0.3)",
                fontSize: 12, color: "#93c5fd",
                fontFamily: "'Space Mono', monospace",
              }}>
                現場目線の専門的な質問
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function DiagnosisPage() {
  const [phase, setPhase] = useState<Phase>("select");
  const [beginnerMode, setBeginnerMode] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [animating, setAnimating] = useState(false);
  const [showBars, setShowBars] = useState(false);

  const questions = beginnerMode ? BEGINNER_QUESTIONS : QUESTIONS;
  const question = questions[currentQ];
  const progress = (currentQ / questions.length) * 100;

  function handleSelect(optionIndex: number) {
    if (animating) return;
    setSelected(optionIndex);
    setAnimating(true);
    setTimeout(() => {
      const newAnswers = [...answers, optionIndex];
      if (currentQ + 1 >= questions.length) {
        const res = calculateDiagnosis(newAnswers, beginnerMode);
        setResult(res);
        setPhase("result");
        setTimeout(() => setShowBars(true), 400);
      } else {
        setCurrentQ((q) => q + 1);
        setAnswers(newAnswers);
        setSelected(null);
      }
      setAnimating(false);
    }, 350);
  }

  function handleRetry() {
    setPhase("select");
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setResult(null);
    setShowBars(false);
    setBeginnerMode(false);
  }

  if (phase === "select") {
    return (
      <ExperienceSelectView
        onSelect={(beginner) => {
          setBeginnerMode(beginner);
          setPhase("quiz");
        }}
      />
    );
  }

  if (phase === "result" && result) {
    return <ResultView result={result} showBars={showBars} beginnerMode={beginnerMode} onRetry={handleRetry} />;
  }

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }} className="grid-bg">
      {/* Nav */}
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px", display: "flex", alignItems: "center", gap: 16 }}>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Mono', monospace" }}>
          ← ホーム
        </Link>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {beginnerMode && (
            <span style={{
              padding: "3px 10px", borderRadius: 20, fontSize: 11,
              background: "rgba(63,185,80,0.12)", border: "1px solid rgba(63,185,80,0.3)",
              color: "#3fb950", fontFamily: "'Space Mono', monospace",
            }}>
              未経験モード
            </span>
          )}
          <span style={{ color: "var(--muted)", fontSize: 12, fontFamily: "'Space Mono', monospace" }}>
            {currentQ + 1} / {questions.length}
          </span>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ width: "100%", maxWidth: 640 }}>

          {/* Progress */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <span className="font-mono-display" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 2 }}>
                IT職種診断
              </span>
              <span className="font-mono-display" style={{ fontSize: 11, color: "var(--blue)" }}>
                {Math.round(progress)}% 完了
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, var(--blue), var(--purple))",
                }}
              />
            </div>
          </div>

          {/* Question card */}
          <div
            key={currentQ}
            className="card animate-fade-scale"
            style={{ padding: "36px 32px", marginBottom: 16 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 32, height: 32, borderRadius: 8,
                background: "rgba(59,130,246,0.15)",
                border: "1px solid rgba(59,130,246,0.3)",
                fontFamily: "'Space Mono', monospace",
                fontSize: 13, fontWeight: 700, color: "var(--blue)",
              }}>
                Q{currentQ + 1}
              </div>
              <span style={{ color: "var(--muted)", fontSize: 12, fontFamily: "'Space Mono', monospace" }}>
                残り {questions.length - currentQ - 1} 問
              </span>
            </div>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.5, marginBottom: 28 }}>
              {question.text}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {question.options.map((option, i) => (
                <button
                  key={i}
                  className={`option-btn${selected === i ? " selected" : ""}`}
                  onClick={() => handleSelect(i)}
                  disabled={animating}
                  style={{ opacity: animating && selected !== i ? 0.5 : 1 }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{
                      width: 24, height: 24, borderRadius: 6, flexShrink: 0,
                      border: selected === i ? "2px solid var(--blue)" : "1px solid var(--border)",
                      background: selected === i ? "rgba(59,130,246,0.2)" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, color: selected === i ? "var(--blue)" : "var(--muted)",
                      fontFamily: "'Space Mono', monospace", fontWeight: 700,
                      marginTop: 1,
                    }}>
                      {selected === i ? "✓" : String.fromCharCode(65 + i)}
                    </div>
                    <span>{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <p style={{ textAlign: "center", fontSize: 12, color: "var(--muted)" }}>
            直感で答えるのがオススメ。あとから変更できます。
          </p>
        </div>
      </div>
    </main>
  );
}

function ResultView({
  result,
  showBars,
  beginnerMode,
  onRetry,
}: {
  result: DiagnosisResult;
  showBars: boolean;
  beginnerMode: boolean;
  onRetry: () => void;
}) {
  const { topType, rankedTypes } = result;
  const [copiedShare, setCopiedShare] = useState(false);

  function handleShare() {
    const text = `IT職種診断結果: ${topType.emoji} ${topType.name}\n「${topType.tagline}」\n\n#IT職種診断 #エンジニア`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    });
  }

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }} className="grid-bg">
      {/* Nav */}
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px", display: "flex", gap: 16 }}>
        <button onClick={onRetry} style={{ background: "none", border: "none", color: "var(--muted)", fontSize: 13, cursor: "pointer", fontFamily: "'Space Mono', monospace" }}>
          ← 再診断
        </button>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Mono', monospace", marginLeft: "auto" }}>
          ホーム
        </Link>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>

        {/* Top result card */}
        <div className="animate-fade-scale" style={{ marginBottom: 32 }}>
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <div className="font-mono-display" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 2, marginBottom: 8 }}>
              DIAGNOSIS RESULT
            </div>
            {beginnerMode && (
              <span style={{
                display: "inline-block", marginBottom: 8,
                padding: "4px 12px", borderRadius: 20, fontSize: 11,
                background: "rgba(63,185,80,0.12)", border: "1px solid rgba(63,185,80,0.3)",
                color: "#3fb950", fontFamily: "'Space Mono', monospace",
              }}>
                未経験者向け診断
              </span>
            )}
          </div>

          <div
            className="card"
            style={{
              padding: "40px 36px",
              position: "relative",
              overflow: "hidden",
              border: `1px solid ${topType.gradientFrom}40`,
            }}
          >
            <div style={{
              position: "absolute", inset: 0,
              background: `radial-gradient(ellipse at top left, ${topType.gradientFrom}12 0%, transparent 60%)`,
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-start" }}>
              <div style={{
                width: 80, height: 80, borderRadius: 20, flexShrink: 0,
                background: `${topType.gradientFrom}20`,
                border: `1px solid ${topType.gradientFrom}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 36,
              }}>
                {topType.emoji}
              </div>

              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: 12, color: topType.gradientFrom, fontFamily: "'Space Mono', monospace", marginBottom: 4, letterSpacing: 1 }}>
                  あなたのITタイプ
                </div>
                <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 6 }}>
                  {topType.name}
                </h1>
                <p style={{ color: topType.color, fontStyle: "italic", fontSize: 15, marginBottom: 16 }}>
                  「{topType.tagline}」
                </p>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8 }}>
                  {topType.description}
                </p>
              </div>
            </div>

            <div style={{ position: "relative", marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
              <div style={{ padding: 16, borderRadius: 10, background: "rgba(0,0,0,0.3)", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", marginBottom: 10, letterSpacing: 1 }}>STRENGTHS</div>
                {topType.strengths.map((s) => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: topType.gradientFrom, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "var(--text)" }}>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: 16, borderRadius: 10, background: "rgba(0,0,0,0.3)", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", marginBottom: 10, letterSpacing: 1 }}>COMPANY TYPE</div>
                {topType.recommendedCompanyTypes.map((c) => (
                  <div key={c} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8b5cf6", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "var(--text)" }}>{c}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: 16, borderRadius: 10, background: "rgba(0,0,0,0.3)", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", marginBottom: 10, letterSpacing: 1 }}>RELATED ROLES</div>
                {topType.relatedRoles.map((r) => (
                  <div key={r} style={{ marginBottom: 6 }}>
                    <span className="tag tag-blue" style={{ fontSize: 12 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Score ranking */}
        <div className="card animate-fade-up" style={{ padding: "28px 28px", marginBottom: 24, animationDelay: "0.2s" }}>
          <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 20 }}>
            SCORE BREAKDOWN
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {rankedTypes.map(({ type, percentage }, i) => (
              <div key={type.id}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                  <span style={{ fontSize: 18 }}>{type.emoji}</span>
                  <span style={{ flex: 1, fontSize: 13, color: i === 0 ? "#fff" : "var(--muted)", fontWeight: i === 0 ? 700 : 400 }}>
                    {type.name}
                  </span>
                  <span className="font-mono-display" style={{ fontSize: 12, color: i === 0 ? type.color : "var(--muted)" }}>
                    {percentage}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: showBars ? `${percentage}%` : "0%",
                      background: i === 0
                        ? `linear-gradient(90deg, ${type.gradientFrom}, ${type.gradientTo})`
                        : "var(--border-bright)",
                      transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 0.08}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="animate-fade-up" style={{ display: "flex", gap: 12, flexWrap: "wrap", animationDelay: "0.3s" }}>
          <button
            onClick={handleShare}
            style={{
              padding: "12px 24px", borderRadius: 10, border: "1px solid var(--border)",
              background: "var(--surface)", color: "var(--text)", fontSize: 14, cursor: "pointer",
              transition: "all 0.2s", fontFamily: "inherit",
            }}
          >
            {copiedShare ? "✓ コピーしました" : "📤 結果をシェア"}
          </button>
          <Link
            href="/market-value"
            style={{
              padding: "12px 24px", borderRadius: 10,
              background: "var(--purple)", color: "#fff", fontSize: 14, fontWeight: 700,
              textDecoration: "none", display: "inline-block",
            }}
          >
            次は市場価値チェック →
          </Link>
          <Link
            href="/types"
            style={{
              padding: "12px 24px", borderRadius: 10,
              border: "1px solid rgba(59,130,246,0.4)",
              background: "rgba(59,130,246,0.08)",
              color: "#93c5fd", fontSize: 14,
              textDecoration: "none", display: "inline-block",
            }}
          >
            全8タイプを見る
          </Link>
          <button
            onClick={onRetry}
            style={{
              padding: "12px 24px", borderRadius: 10, border: "1px solid var(--border)",
              background: "transparent", color: "var(--muted)", fontSize: 14, cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            再診断
          </button>
        </div>
      </div>
    </main>
  );
}
