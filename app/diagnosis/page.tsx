"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { JOB_TYPES, type JobTypeId, type DiagnosisResult } from "@/lib/diagnosis";
import AdBanner from "@/components/AdBanner";

type Phase = "exp-select" | "job-select" | "quiz" | "result";

const JOB_SELECT_ORDER: JobTypeId[] = [
  "web", "se", "programmer", "embedded",
  "server", "network", "cloud", "ai",
  "data", "security", "pm", "consultant",
  "helpdesk", "tester",
];

const JOB_IMAGE: Record<JobTypeId, string> = {
  web:        "/illust/jobs/01.png",
  se:         "/illust/jobs/02.png",
  programmer: "/illust/jobs/03.png",
  embedded:   "/illust/jobs/04.png",
  server:     "/illust/jobs/05.png",
  network:    "/illust/jobs/06.png",
  cloud:      "/illust/jobs/07.png",
  ai:         "/illust/jobs/08.png",
  data:       "/illust/jobs/09.png",
  security:   "/illust/jobs/10.png",
  pm:         "/illust/jobs/11.png",
  consultant: "/illust/jobs/12.png",
  helpdesk:   "/illust/jobs/13.png",
  tester:     "/illust/jobs/14.png",
};

interface QuestionOption {
  text: string;
  scores: Partial<Record<JobTypeId, number>>;
}

interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

// ── STEP 0a: 未経験 or 経験者 ───────────────────────────────────────────────
function ExpSelectView({ onSelect }: { onSelect: (isExperienced: boolean) => void }) {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }} className="grid-bg">
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px" }}>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Mono', monospace" }}>
          ← ホーム
        </Link>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ width: "100%", maxWidth: 560 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="font-mono-display" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 2, marginBottom: 12 }}>
              STEP 1 / IT職種診断
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: "var(--text)", marginBottom: 8 }}>
              IT経験はありますか？
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              あなたの状況に合った質問を出題します
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <button
              onClick={() => onSelect(false)}
              className="card card-hover"
              style={{
                padding: "36px 24px",
                cursor: "pointer",
                textAlign: "center",
                border: "1px solid rgba(16,185,129,0.3)",
                background: "rgba(16,185,129,0.06)",
                color: "inherit",
                fontFamily: "inherit",
                transition: "all 0.2s",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>
                IT未経験
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>
                これからITに転職したい<br />
                プログラミングを勉強中
              </div>
              <div style={{
                marginTop: 20,
                display: "inline-block",
                padding: "6px 14px", borderRadius: 8,
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.25)",
                fontSize: 11, color: "#059669",
                fontFamily: "'Space Mono', monospace",
              }}>
                12問
              </div>
            </button>

            <button
              onClick={() => onSelect(true)}
              className="card card-hover"
              style={{
                padding: "36px 24px",
                cursor: "pointer",
                textAlign: "center",
                border: "1px solid rgba(59,130,246,0.3)",
                background: "rgba(59,130,246,0.06)",
                color: "inherit",
                fontFamily: "inherit",
                transition: "all 0.2s",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>
                IT経験者
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>
                現在ITの仕事を<br />
                している・していた
              </div>
              <div style={{
                marginTop: 20,
                display: "inline-block",
                padding: "6px 14px", borderRadius: 8,
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.25)",
                fontSize: 11, color: "#4f46e5",
                fontFamily: "'Space Mono', monospace",
              }}>
                職種別 15問
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// ── STEP 0b: 経験者の職種選択 ────────────────────────────────────────────────
function JobSelectView({ onSelect, onBack }: { onSelect: (jobId: JobTypeId) => void; onBack: () => void }) {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }} className="grid-bg">
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px", display: "flex", alignItems: "center", gap: 16 }}>
        <button
          onClick={onBack}
          style={{ background: "none", border: "none", color: "var(--muted)", fontSize: 13, cursor: "pointer", fontFamily: "'Space Mono', monospace" }}
        >
          ← 戻る
        </button>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 24px" }}>
        <div style={{ width: "100%", maxWidth: 680 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div className="font-mono-display" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 2, marginBottom: 12 }}>
              STEP 2 / IT職種診断
            </div>
            <h1 style={{ fontSize: 24, fontWeight: 900, color: "var(--text)", marginBottom: 8 }}>
              現在のIT職種を選んでください
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              選択した職種に合わせた専用の質問を出題します
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
            {JOB_SELECT_ORDER.map((id) => {
              const job = JOB_TYPES[id];
              return (
                <button
                  key={id}
                  onClick={() => onSelect(id)}
                  className="card card-hover"
                  style={{
                    padding: "16px 20px",
                    cursor: "pointer",
                    textAlign: "left",
                    border: `1px solid ${job.gradientFrom}30`,
                    background: `${job.gradientFrom}08`,
                    color: "inherit",
                    fontFamily: "inherit",
                    transition: "all 0.2s",
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", lineHeight: 1.4 }}>
                    {job.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

// ── メインコンポーネント ──────────────────────────────────────────────────────
export default function DiagnosisPage() {
  const [phase, setPhase] = useState<Phase>("exp-select");
  const [selectedJobId, setSelectedJobId] = useState<string>("beginner");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [animating, setAnimating] = useState(false);
  const [showBars, setShowBars] = useState(false);
  const [loading, setLoading] = useState(false);

  const question = questions[currentQ];
  const progress = questions.length > 0 ? (currentQ / questions.length) * 100 : 0;
  const isBeginner = selectedJobId === "beginner";

  async function startQuiz(jobId: string) {
    setLoading(true);
    setSelectedJobId(jobId);
    const res = await fetch("/api/diagnosis/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobId }),
    });
    const data = await res.json();
    setQuestions(data.questions);
    setLoading(false);
    setPhase("quiz");
  }

  function handleSelect(optionIndex: number) {
    if (animating) return;
    setSelected(optionIndex);
    setAnimating(true);
    setTimeout(async () => {
      const newAnswers = [...answers, optionIndex];
      if (currentQ + 1 >= questions.length) {
        const res = await fetch("/api/diagnosis/result", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers: newAnswers, jobId: selectedJobId }),
        });
        const data: DiagnosisResult = await res.json();
        setResult(data);
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
    setPhase("exp-select");
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setResult(null);
    setShowBars(false);
    setQuestions([]);
    setSelectedJobId("beginner");
  }

  if (phase === "exp-select") {
    return (
      <ExpSelectView
        onSelect={(isExperienced) => {
          if (isExperienced) {
            setPhase("job-select");
          } else {
            startQuiz("beginner");
          }
        }}
      />
    );
  }

  if (phase === "job-select") {
    return (
      <JobSelectView
        onSelect={(jobId) => startQuiz(jobId)}
        onBack={() => setPhase("exp-select")}
      />
    );
  }

  if (loading) {
    return (
      <main style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center" }} className="grid-bg">
        <div style={{ color: "var(--muted)", fontFamily: "'Space Mono', monospace", fontSize: 14 }}>
          質問を読み込み中...
        </div>
      </main>
    );
  }

  if (phase === "result" && result) {
    return <ResultView result={result} showBars={showBars} selectedJobId={selectedJobId} onRetry={handleRetry} />;
  }

  if (!question) return null;

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }} className="grid-bg">
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px", display: "flex", alignItems: "center", gap: 16 }}>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Mono', monospace" }}>
          ← ホーム
        </Link>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            padding: "3px 10px", borderRadius: 20, fontSize: 11,
            background: isBeginner ? "rgba(16,185,129,0.1)" : "rgba(99,102,241,0.1)",
            border: `1px solid ${isBeginner ? "rgba(16,185,129,0.25)" : "rgba(99,102,241,0.25)"}`,
            color: isBeginner ? "#059669" : "#4f46e5",
            fontFamily: "'Space Mono', monospace",
          }}>
            {isBeginner ? "未経験" : JOB_TYPES[selectedJobId as JobTypeId]?.name ?? selectedJobId}
          </span>
          <span style={{ color: "var(--muted)", fontSize: 12, fontFamily: "'Space Mono', monospace" }}>
            {currentQ + 1} / {questions.length}
          </span>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ width: "100%", maxWidth: 640 }}>
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

          <div key={currentQ} className="card animate-fade-scale" style={{ padding: "36px 32px", marginBottom: 16 }}>
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

            <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", lineHeight: 1.5, marginBottom: 28 }}>
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
          <AdBanner style={{ marginTop: 24 }} />
        </div>
      </div>
    </main>
  );
}

// ── 結果画面 ─────────────────────────────────────────────────────────────────
function ResultView({
  result,
  showBars,
  selectedJobId,
  onRetry,
}: {
  result: DiagnosisResult;
  showBars: boolean;
  selectedJobId: string;
  onRetry: () => void;
}) {
  const { topType, rankedTypes, aptitude, reasons, episode, caution } = result;
  const [copied, setCopied] = useState(false);
  const isBeginner = selectedJobId === "beginner";
  const startingJob = !isBeginner ? JOB_TYPES[selectedJobId as JobTypeId] : null;
  const jobImage = JOB_IMAGE[topType.id];
  const medals = ["🥇", "🥈", "🥉"];

  const shareText = `IT職種診断やってみた！\n結果：${topType.emoji} ${topType.name}（適正度 ${aptitude}%）\n「${topType.tagline}」\n#IT職種診断 #エンジニア転職`;
  const shareUrl = "https://ai-career-diagnosis-nine.vercel.app/diagnosis";

  function openX() {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank",
    );
  }

  function openLine() {
    window.open(
      `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      "_blank",
    );
  }

  function copyLink() {
    navigator.clipboard.writeText(`${shareText}\n${shareUrl}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }} className="grid-bg">
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px", display: "flex", gap: 16 }}>
        <button onClick={onRetry} style={{ background: "none", border: "none", color: "var(--muted)", fontSize: 13, cursor: "pointer", fontFamily: "'Space Mono', monospace" }}>
          ← 再診断
        </button>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Mono', monospace", marginLeft: "auto" }}>
          ホーム
        </Link>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px" }}>

        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div className="font-mono-display" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 2, marginBottom: 10 }}>
            DIAGNOSIS RESULT
          </div>
          {isBeginner ? (
            <span style={{
              display: "inline-block",
              padding: "4px 14px", borderRadius: 20, fontSize: 11,
              background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)",
              color: "#059669", fontFamily: "'Space Mono', monospace",
            }}>
              未経験者向け診断
            </span>
          ) : startingJob && (
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "4px 14px", borderRadius: 20, fontSize: 11,
              background: `${startingJob.gradientFrom}18`, border: `1px solid ${startingJob.gradientFrom}40`,
              color: startingJob.color, fontFamily: "'Space Mono', monospace",
            }}>
              {startingJob.name} からの診断
            </span>
          )}
        </div>

        {/* ── メイン結果カード ── */}
        <div
          className="card animate-fade-scale"
          style={{
            marginBottom: 20,
            position: "relative",
            overflow: "hidden",
            border: `1px solid ${topType.gradientFrom}40`,
          }}
        >
          <div style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(ellipse at top right, ${topType.gradientFrom}15 0%, transparent 60%)`,
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", display: "flex", gap: 0, flexWrap: "wrap" }}>

            {/* 左: イラスト */}
            <div style={{
              width: 280,
              flexShrink: 0,
              background: `linear-gradient(135deg, ${topType.gradientFrom}18, ${topType.gradientTo}10)`,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              padding: "24px 0 0",
              borderRight: `1px solid ${topType.gradientFrom}20`,
            }}>
              <Image
                src={jobImage}
                alt={topType.name}
                width={240}
                height={240}
                style={{ objectFit: "contain", display: "block" }}
              />
            </div>

            {/* 右: テキスト */}
            <div style={{ flex: 1, minWidth: 260, padding: "36px 32px" }}>
              <div style={{ fontSize: 12, color: topType.gradientFrom, fontFamily: "'Space Mono', monospace", marginBottom: 6, letterSpacing: 1 }}>
                あなたのITタイプ
              </div>
              <h1 style={{ fontSize: 28, fontWeight: 900, color: "var(--text)", marginBottom: 6, lineHeight: 1.2 }}>
                {topType.name}
              </h1>
              <p style={{ color: topType.color, fontStyle: "italic", fontSize: 13, marginBottom: 24 }}>
                「{topType.tagline}」
              </p>

              {/* 適正度 */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                  <span style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2 }}>
                    APTITUDE
                  </span>
                  <span style={{ fontSize: 28, fontWeight: 900, color: topType.color, fontFamily: "'Space Mono', monospace", lineHeight: 1 }}>
                    {aptitude}
                    <span style={{ fontSize: 14, marginLeft: 2 }}>%</span>
                  </span>
                </div>
                <div className="progress-bar" style={{ height: 8, borderRadius: 4 }}>
                  <div
                    className="progress-fill"
                    style={{
                      width: showBars ? `${aptitude}%` : "0%",
                      background: `linear-gradient(90deg, ${topType.gradientFrom}, ${topType.gradientTo})`,
                      transition: "width 1.4s cubic-bezier(0.4,0,0.2,1)",
                      borderRadius: 4,
                    }}
                  />
                </div>
              </div>

              {/* STRENGTHS */}
              <div style={{ padding: "14px 16px", borderRadius: 10, background: "var(--surface-2)", border: "1px solid var(--border)", marginBottom: 12 }}>
                <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace", marginBottom: 8, letterSpacing: 1 }}>STRENGTHS</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {topType.strengths.map((s) => (
                    <span key={s} style={{
                      fontSize: 11, color: "var(--text)",
                      padding: "3px 8px", borderRadius: 6,
                      background: `${topType.gradientFrom}18`,
                      border: `1px solid ${topType.gradientFrom}30`,
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* COMPANY / ROLES */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div style={{ padding: "12px 14px", borderRadius: 10, background: "var(--surface-2)", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace", marginBottom: 6, letterSpacing: 1 }}>COMPANY</div>
                  {topType.recommendedCompanyTypes.map((c) => (
                    <div key={c} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#8b5cf6", flexShrink: 0 }} />
                      <span style={{ fontSize: 11, color: "var(--text)" }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "12px 14px", borderRadius: 10, background: "var(--surface-2)", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace", marginBottom: 6, letterSpacing: 1 }}>ROLES</div>
                  {topType.relatedRoles.map((r) => (
                    <div key={r} style={{ marginBottom: 3 }}>
                      <span className="tag tag-blue" style={{ fontSize: 10 }}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── なぜ向いているのか ── */}
        <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 16, animationDelay: "0.15s" }}>
          <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 14 }}>
            WHY IT FITS YOU
          </div>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>
            あなたに向いている理由
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {reasons.map((reason, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%", flexShrink: 0, marginTop: 8,
                  background: topType.gradientFrom,
                  boxShadow: `0 0 6px ${topType.gradientFrom}80`,
                }} />
                <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.85, margin: 0 }}>{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 開発者からのアドバイス ── */}
        <div
          className="animate-fade-up"
          style={{
            padding: "22px 26px", marginBottom: 16, borderRadius: 12,
            background: "rgba(16,185,129,0.05)",
            border: "1px solid rgba(16,185,129,0.2)",
            borderLeft: "4px solid rgba(16,185,129,0.5)",
            animationDelay: "0.2s",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 14 }}>💬</span>
            <span style={{ fontSize: 10, color: "#059669", fontFamily: "'Space Mono', monospace", letterSpacing: 2 }}>
              開発者からのアドバイス
            </span>
          </div>
          <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 2.0, margin: 0 }}>
            {episode}
          </p>
        </div>

        {/* ── 向いている職種ランキング ── */}
        <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 16, animationDelay: "0.25s" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2 }}>
              RANKING
            </div>
            <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace" }}>
              向いている職種 TOP 6
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {rankedTypes.slice(0, 6).map(({ type, percentage }, i) => (
              <div key={type.id}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
                  <span style={{ fontSize: i < 3 ? 17 : 12, width: 22, textAlign: "center", flexShrink: 0, color: i >= 3 ? "var(--muted)" : undefined }}>
                    {i < 3 ? medals[i] : `${i + 1}`}
                  </span>
                  <span style={{ flex: 1, fontSize: 13, color: i === 0 ? "var(--text)" : "var(--muted)", fontWeight: i === 0 ? 700 : 400 }}>
                    {type.emoji} {type.name}
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

        {/* ── 注意点 ── */}
        <div
          className="animate-fade-up"
          style={{
            padding: "20px 24px", marginBottom: 28, borderRadius: 12,
            background: "rgba(251,146,60,0.07)",
            border: "1px solid rgba(251,146,60,0.25)",
            animationDelay: "0.3s",
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>⚠️</span>
            <div>
              <div style={{ fontSize: 10, color: "#fb923c", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 10 }}>
                CAUTION
              </div>
              <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.9, margin: 0 }}>
                {caution}
              </p>
            </div>
          </div>
        </div>

        <AdBanner style={{ marginBottom: 8 }} />

        {/* ── シェア ── */}
        <div className="card animate-fade-up" style={{ padding: "20px 24px", marginBottom: 16, animationDelay: "0.3s" }}>
          <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 14 }}>
            SHARE RESULT
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {/* X (Twitter) */}
            <button
              onClick={openX}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "11px 18px", borderRadius: 10,
                background: "#000", color: "#fff",
                border: "none", fontSize: 13.5, fontWeight: 700,
                cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.836L2.25 2.25h6.822l4.26 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
              でポスト
            </button>

            {/* LINE */}
            <button
              onClick={openLine}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "11px 18px", borderRadius: 10,
                background: "#06C755", color: "#fff",
                border: "none", fontSize: 13.5, fontWeight: 700,
                cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              でシェア
            </button>

            {/* コピー */}
            <button
              onClick={copyLink}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "11px 18px", borderRadius: 10,
                background: copied ? "rgba(16,185,129,0.12)" : "var(--surface)",
                color: copied ? "#059669" : "var(--text)",
                border: `1px solid ${copied ? "rgba(16,185,129,0.4)" : "var(--border)"}`,
                fontSize: 13.5, fontWeight: 700,
                cursor: "pointer", fontFamily: "inherit",
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
              }}
            >
              {copied ? (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  コピーしました
                </>
              ) : (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  リンクをコピー
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── アクション ── */}
        <div className="animate-fade-up" style={{ display: "flex", gap: 12, flexWrap: "wrap", animationDelay: "0.38s" }}>
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
              border: "1px solid rgba(99,102,241,0.3)",
              background: "rgba(99,102,241,0.08)",
              color: "#4f46e5", fontSize: 14,
              textDecoration: "none", display: "inline-block",
            }}
          >
            全14タイプを見る
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
