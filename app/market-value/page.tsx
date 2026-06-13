"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ROLES,
  SKILL_GROUPS,
  calculateMarketValue,
  BEGINNER_ROLES,
  BEGINNER_SKILL_GROUPS,
  calculateBeginnerMarketValue,
  type RoleId,
  type SkillId,
  type MarketValueResult,
  type BeginnerRoleId,
  type BeginnerSkillId,
  type BeginnerMarketValueResult,
} from "@/lib/marketValue";

type Phase = "select" | "form" | "result";

function ExperienceSelectView({ onSelect }: { onSelect: (beginner: boolean) => void }) {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }} className="grid-bg">
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px", background: "var(--surface)" }}>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Mono', monospace" }}>
          ← ホーム
        </Link>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ width: "100%", maxWidth: 600 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="font-mono-display" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: 2, marginBottom: 12 }}>
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 900, color: "var(--text)", marginBottom: 8 }}>
              あなたのIT経験を教えてください
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              経験に合わせた市場価値を算出します
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
                background: "linear-gradient(135deg, #ffffff 0%, #f0fff8 100%)",
                color: "inherit",
                fontFamily: "inherit",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>🌱</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
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
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.3)",
                fontSize: 12, color: "#059669",
                fontFamily: "'Space Mono', monospace",
              }}>
                入社想定年収 + 次のステップ
              </div>
            </button>

            <button
              onClick={() => onSelect(false)}
              className="card card-hover"
              style={{
                padding: "32px 24px",
                cursor: "pointer",
                textAlign: "center",
                background: "linear-gradient(135deg, #ffffff 0%, #f5f0ff 100%)",
                color: "inherit",
                fontFamily: "inherit",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>⚡</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
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
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.25)",
                fontSize: 12, color: "#6366f1",
                fontFamily: "'Space Mono', monospace",
              }}>
                転職市場での年収レンジを算出
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function MarketValuePage() {
  const [phase, setPhase] = useState<Phase>("select");
  const [beginnerMode, setBeginnerMode] = useState(false);

  // 経験者用
  const [roleId, setRoleId] = useState<RoleId>("web");
  const [years, setYears] = useState(3);
  const [skills, setSkills] = useState<Set<SkillId>>(new Set());
  const [currentSalary, setCurrentSalary] = useState<number | "">("");
  const [result, setResult] = useState<MarketValueResult | null>(null);

  // 未経験者用
  const [beginnerRoleId, setBeginnerRoleId] = useState<BeginnerRoleId>("frontend");
  const [studyMonths, setStudyMonths] = useState(6);
  const [beginnerSkills, setBeginnerSkills] = useState<Set<BeginnerSkillId>>(new Set());
  const [prevSalary, setPrevSalary] = useState<number | "">("");
  const [beginnerResult, setBeginnerResult] = useState<BeginnerMarketValueResult | null>(null);

  function toggleSkill(id: SkillId) {
    setSkills((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleBeginnerSkill(id: BeginnerSkillId) {
    setBeginnerSkills((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = calculateMarketValue({
      roleId,
      years,
      skills: Array.from(skills),
      currentSalary: typeof currentSalary === "number" ? currentSalary : 0,
    });
    setResult(res);
    setPhase("result");
  }

  function handleBeginnerSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = calculateBeginnerMarketValue({
      roleId: beginnerRoleId,
      studyMonths,
      skills: Array.from(beginnerSkills),
      currentSalary: typeof prevSalary === "number" ? prevSalary : 0,
    });
    setBeginnerResult(res);
    setPhase("result");
  }

  function handleRetry() {
    setPhase("select");
    setResult(null);
    setBeginnerResult(null);
    setBeginnerMode(false);
  }

  if (phase === "select") {
    return (
      <ExperienceSelectView
        onSelect={(beginner) => {
          setBeginnerMode(beginner);
          setPhase("form");
        }}
      />
    );
  }

  if (phase === "result") {
    if (beginnerMode && beginnerResult) {
      return <BeginnerResultView result={beginnerResult} roleId={beginnerRoleId} studyMonths={studyMonths} onRetry={handleRetry} />;
    }
    if (!beginnerMode && result) {
      return <ResultView result={result} years={years} roleId={roleId} onRetry={handleRetry} />;
    }
  }

  if (beginnerMode) {
    return (
      <main style={{ minHeight: "100vh", background: "var(--bg)" }} className="grid-bg">
        <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px", display: "flex", alignItems: "center", gap: 16, background: "var(--surface)" }}>
          <Link href="/" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Mono', monospace" }}>
            ← ホーム
          </Link>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          <span style={{
            padding: "3px 10px", borderRadius: 20, fontSize: 11,
            background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)",
            color: "#059669", fontFamily: "'Space Mono', monospace",
          }}>
            未経験モード
          </span>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: "var(--text)", marginBottom: 8 }}>
              IT転職の入社想定年収を診断
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              目指す職種・学習期間・習得スキルから未経験入社の年収目安を算出します
            </p>
          </div>

          <form onSubmit={handleBeginnerSubmit}>

            {/* Target Role */}
            <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 16, animationDelay: "0.05s" }}>
              <label style={{ display: "block", fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 12 }}>
                01 / 目指している職種
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {BEGINNER_ROLES.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setBeginnerRoleId(role.id)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: 8,
                      border: beginnerRoleId === role.id ? "1px solid var(--blue)" : "1px solid var(--border)",
                      background: beginnerRoleId === role.id ? "rgba(59,130,246,0.1)" : "transparent",
                      color: "inherit",
                      fontSize: 14, cursor: "pointer", textAlign: "left",
                      transition: "all 0.15s", fontFamily: "inherit",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}
                  >
                    <span style={{ color: beginnerRoleId === role.id ? "#6366f1" : "var(--text)", fontWeight: beginnerRoleId === role.id ? 700 : 400 }}>
                      {role.label}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--muted)" }}>{role.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Study months */}
            <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 16, animationDelay: "0.1s" }}>
              <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 16 }}>
                <span>02 / ITの学習期間</span>
                <span style={{ color: "#6366f1", fontSize: 18, fontWeight: 700 }}>
                  {studyMonths === 0 ? "まだ始めてない" : `${studyMonths} ヶ月`}
                </span>
              </label>
              <input
                type="range"
                min={0}
                max={24}
                value={studyMonths}
                onChange={(e) => setStudyMonths(Number(e.target.value))}
                style={{ width: "100%" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                {["0", "6ヶ月", "12ヶ月", "18ヶ月", "24ヶ月"].map((l) => (
                  <span key={l} style={{ fontSize: 11, color: "var(--muted)" }}>{l}</span>
                ))}
              </div>
            </div>

            {/* Beginner Skills */}
            <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 16, animationDelay: "0.15s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <label style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2 }}>
                  03 / 習得済み・勉強中のスキル
                </label>
                <span style={{ fontSize: 12, color: "#6366f1", fontFamily: "'Space Mono', monospace" }}>
                  {beginnerSkills.size} 選択中
                </span>
              </div>
              <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 16 }}>
                少しでも触ったことがあれば選んでOK
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {BEGINNER_SKILL_GROUPS.map((group) => (
                  <div key={group.label}>
                    <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 10, letterSpacing: 1 }}>
                      {group.label}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {group.skills.map((skill) => (
                        <button
                          key={skill.id}
                          type="button"
                          onClick={() => toggleBeginnerSkill(skill.id)}
                          style={{
                            padding: "6px 14px",
                            borderRadius: 20,
                            border: beginnerSkills.has(skill.id) ? "1px solid rgba(59,130,246,0.6)" : "1px solid var(--border)",
                            background: beginnerSkills.has(skill.id) ? "rgba(59,130,246,0.12)" : "var(--surface-2)",
                            color: beginnerSkills.has(skill.id) ? "#4f46e5" : "var(--muted)",
                            fontSize: 13, cursor: "pointer",
                            transition: "all 0.15s", fontFamily: "inherit",
                            transform: beginnerSkills.has(skill.id) ? "scale(1.03)" : "scale(1)",
                          }}
                        >
                          {beginnerSkills.has(skill.id) && <span style={{ marginRight: 4 }}>✓</span>}
                          {skill.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Previous salary */}
            <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 24, animationDelay: "0.2s" }}>
              <label style={{ display: "block", fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 12 }}>
                04 / 前職・現職の年収（任意）
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <input
                  type="number"
                  placeholder="例: 350"
                  value={prevSalary}
                  onChange={(e) => setPrevSalary(e.target.value ? Number(e.target.value) : "")}
                  style={{
                    flex: 1, padding: "12px 16px", borderRadius: 8,
                    background: "var(--surface-2)", border: "1px solid var(--border)",
                    color: "var(--text)", fontSize: 16, outline: "none",
                    fontFamily: "'Space Mono', monospace",
                  }}
                />
                <span style={{ color: "var(--muted)", fontSize: 14 }}>万円</span>
              </div>
            </div>

            <button
              type="submit"
              className="animate-fade-up"
              style={{
                width: "100%", padding: "16px 24px", borderRadius: 12,
                background: "linear-gradient(135deg, #3fb950, #3b82f6)",
                border: "none", color: "#fff", fontSize: 16, fontWeight: 700,
                cursor: "pointer", fontFamily: "inherit",
                boxShadow: "0 4px 20px rgba(63,185,80,0.3)",
                animationDelay: "0.25s",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
            >
              入社想定年収を算出する →
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }} className="grid-bg">
      {/* Nav */}
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px", display: "flex", alignItems: "center", gap: 16, background: "var(--surface)" }}>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Mono', monospace" }}>
          ← ホーム
        </Link>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        <span style={{ color: "var(--muted)", fontSize: 12, fontFamily: "'Space Mono', monospace" }}>
          市場価値診断
        </span>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="font-mono-display" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: 2, marginBottom: 8 }}>
            MARKET VALUE ANALYSIS
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: "var(--text)", marginBottom: 8 }}>
            あなたの市場価値を診断
          </h1>
          <p style={{ color: "var(--muted)", fontSize: 14 }}>
            職種・経験・スキルを入力して転職時の想定年収を算出します
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Role */}
          <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 16, animationDelay: "0.05s" }}>
            <label style={{ display: "block", fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 12 }}>
              01 / 現在の職種
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 8 }}>
              {ROLES.map((role) => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setRoleId(role.id)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: roleId === role.id ? "1px solid var(--blue)" : "1px solid var(--border)",
                    background: roleId === role.id ? "rgba(59,130,246,0.1)" : "transparent",
                    color: roleId === role.id ? "#6366f1" : "var(--muted)",
                    fontSize: 13, cursor: "pointer", textAlign: "left",
                    transition: "all 0.15s", fontFamily: "inherit",
                  }}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* Years */}
          <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 16, animationDelay: "0.1s" }}>
            <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 16 }}>
              <span>02 / 経験年数</span>
              <span style={{ color: "#6366f1", fontSize: 18, fontWeight: 700 }}>{years} 年</span>
            </label>
            <input
              type="range"
              min={1}
              max={20}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              style={{ width: "100%" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              {["1年", "5年", "10年", "15年", "20年"].map((l) => (
                <span key={l} style={{ fontSize: 11, color: "var(--muted)" }}>{l}</span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 16, animationDelay: "0.15s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <label style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2 }}>
                03 / スキル・技術スタック
              </label>
              <span style={{ fontSize: 12, color: "var(--blue)", fontFamily: "'Space Mono', monospace" }}>
                {skills.size} 選択中
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 10, letterSpacing: 1 }}>
                    {group.label}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {group.skills.map((skill) => (
                      <button
                        key={skill.id}
                        type="button"
                        onClick={() => toggleSkill(skill.id)}
                        style={{
                          padding: "6px 14px",
                          borderRadius: 20,
                          border: skills.has(skill.id) ? "1px solid rgba(59,130,246,0.6)" : "1px solid var(--border)",
                          background: skills.has(skill.id) ? "rgba(59,130,246,0.12)" : "var(--surface-2)",
                          color: skills.has(skill.id) ? "#4f46e5" : "var(--muted)",
                          fontSize: 13, cursor: "pointer",
                          transition: "all 0.15s", fontFamily: "inherit",
                          transform: skills.has(skill.id) ? "scale(1.03)" : "scale(1)",
                        }}
                      >
                        {skills.has(skill.id) && <span style={{ marginRight: 4 }}>✓</span>}
                        {skill.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current salary */}
          <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 24, animationDelay: "0.2s" }}>
            <label style={{ display: "block", fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 12 }}>
              04 / 現在の年収（任意）
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <input
                type="number"
                placeholder="例: 500"
                value={currentSalary}
                onChange={(e) => setCurrentSalary(e.target.value ? Number(e.target.value) : "")}
                style={{
                  flex: 1, padding: "12px 16px", borderRadius: 8,
                  background: "var(--surface-2)", border: "1px solid var(--border)",
                  color: "var(--text)", fontSize: 16, outline: "none",
                  fontFamily: "'Space Mono', monospace",
                }}
              />
              <span style={{ color: "var(--muted)", fontSize: 14 }}>万円</span>
            </div>
            <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 8 }}>
              現在の年収を入力すると、比較情報として活用します
            </p>
          </div>

          <button
            type="submit"
            className="animate-fade-up"
            style={{
              width: "100%", padding: "16px 24px", borderRadius: 12,
              background: "linear-gradient(135deg, var(--blue), var(--purple))",
              border: "none", color: "#fff", fontSize: 16, fontWeight: 700,
              cursor: "pointer", fontFamily: "inherit",
              boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
              animationDelay: "0.25s",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 30px rgba(59,130,246,0.4)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(59,130,246,0.3)"; }}
          >
            市場価値を算出する →
          </button>
        </form>
      </div>
    </main>
  );
}

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1200;

    function step(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(target * ease));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target]);

  return <>{val}{suffix}</>;
}

function BeginnerResultView({
  result,
  roleId,
  studyMonths,
  onRetry,
}: {
  result: BeginnerMarketValueResult;
  roleId: BeginnerRoleId;
  studyMonths: number;
  onRetry: () => void;
}) {
  const [showKeywords, setShowKeywords] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const roleLabel = BEGINNER_ROLES.find((r) => r.id === roleId)?.label ?? roleId;

  useEffect(() => {
    const t1 = setTimeout(() => setShowSteps(true), 400);
    const t2 = setTimeout(() => setShowKeywords(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }} className="grid-bg">
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px", display: "flex", gap: 16, background: "var(--surface)" }}>
        <button onClick={onRetry} style={{ background: "none", border: "none", color: "var(--muted)", fontSize: 13, cursor: "pointer", fontFamily: "'Space Mono', monospace" }}>
          ← 再入力
        </button>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Mono', monospace", marginLeft: "auto" }}>
          ホーム
        </Link>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>

        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{
            display: "inline-block",
            padding: "4px 14px", borderRadius: 20, fontSize: 11,
            background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)",
            color: "#059669", fontFamily: "'Space Mono', monospace",
          }}>
            未経験入社の場合の目安年収
          </span>
        </div>

        {/* Main salary card */}
        <div
          className="card animate-fade-scale"
          style={{
            padding: "36px 32px", marginBottom: 20, marginTop: 20,
            background: "linear-gradient(135deg, #f0fff8 0%, #f0f8ff 100%)",
            border: "1px solid rgba(16,185,129,0.2)",
            position: "relative", overflow: "hidden",
            boxShadow: "0 4px 24px rgba(16,185,129,0.1)",
          }}
        >
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: 300, height: 300,
            background: "radial-gradient(circle at top right, rgba(16,185,129,0.08) 0%, transparent 60%)",
          }} />

          <div style={{ position: "relative" }}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'Space Mono', monospace", marginBottom: 8 }}>
                {roleLabel} · 学習期間 {studyMonths === 0 ? "なし" : `${studyMonths}ヶ月`}
              </div>
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 11, color: "var(--muted)" }}>入社想定年収レンジ</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span className="font-hero" style={{ fontSize: 42, fontWeight: 900, color: "var(--text)", lineHeight: 1 }}>
                  <AnimatedNumber target={result.salaryMin} />
                  <span style={{ fontSize: 20 }}>〜</span>
                  <AnimatedNumber target={result.salaryMax} />
                </span>
                <span style={{ fontSize: 18, color: "var(--muted)" }}>万円</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <div style={{ padding: "8px 14px", borderRadius: 8, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)" }}>
                <span style={{ fontSize: 12, color: "#059669", fontFamily: "'Space Mono', monospace" }}>
                  中央値: {Math.round((result.salaryMin + result.salaryMax) / 2)}万円
                </span>
              </div>
              <div style={{ padding: "8px 14px", borderRadius: 8, background: "var(--surface-2)", border: "1px solid var(--border)" }}>
                <span style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'Space Mono', monospace" }}>
                  ※ 実際の年収は企業・地域により異なります
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Next steps */}
        <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 20, animationDelay: "0.15s" }}>
          <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 16 }}>
            NEXT STEPS — 転職に向けてやること
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {result.nextSteps.map((step, i) => (
              <div
                key={step}
                style={{
                  display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 16px",
                  borderRadius: 10, background: "var(--surface-2)", border: "1px solid var(--border)",
                  opacity: showSteps ? 1 : 0,
                  transform: showSteps ? "translateX(0)" : "translateX(-12px)",
                  transition: `opacity 0.4s ${i * 0.12}s, transform 0.4s ${i * 0.12}s`,
                }}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                  background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, color: "#059669", fontFamily: "'Space Mono', monospace", fontWeight: 700,
                }}>
                  {i + 1}
                </div>
                <span style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6 }}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Keywords */}
        {result.keywords.length > 0 && (
          <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 24, animationDelay: "0.25s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2 }}>
                RESUME KEYWORDS — アピールに使えるキーワード
              </div>
            </div>
            <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16 }}>
              転職活動の自己PR・職務経歴書に活用できます
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {result.keywords.map((kw, i) => (
                <span
                  key={kw}
                  className="tag tag-blue"
                  style={{
                    opacity: showKeywords ? 1 : 0,
                    transform: showKeywords ? "translateY(0)" : "translateY(8px)",
                    transition: `opacity 0.4s ${i * 0.04}s, transform 0.4s ${i * 0.04}s`,
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="animate-fade-up" style={{ display: "flex", gap: 12, flexWrap: "wrap", animationDelay: "0.35s" }}>
          <button
            onClick={onRetry}
            style={{
              padding: "12px 24px", borderRadius: 10, border: "1px solid var(--border)",
              background: "var(--surface)", color: "var(--text)", fontSize: 14, cursor: "pointer",
              fontFamily: "inherit", boxShadow: "0 1px 4px rgba(14,18,64,0.05)",
            }}
          >
            条件を変えて再計算
          </button>
          <Link
            href="/diagnosis"
            style={{
              padding: "12px 24px", borderRadius: 10,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff", fontSize: 14, fontWeight: 700,
              textDecoration: "none", display: "inline-block",
              boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
            }}
          >
            IT職種診断も試す →
          </Link>
        </div>
      </div>
    </main>
  );
}

function ResultView({
  result,
  years,
  roleId,
  onRetry,
}: {
  result: MarketValueResult;
  years: number;
  roleId: RoleId;
  onRetry: () => void;
}) {
  const [showBars, setShowBars] = useState(false);
  const [showKeywords, setShowKeywords] = useState(false);
  const roleLabel = ROLES.find((r) => r.id === roleId)?.label ?? roleId;

  useEffect(() => {
    const t1 = setTimeout(() => setShowBars(true), 300);
    const t2 = setTimeout(() => setShowKeywords(true), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const deviationColor =
    result.deviation >= 65 ? "#10b981" :
    result.deviation >= 55 ? "#6366f1" :
    "#f59e0b";

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }} className="grid-bg">
      {/* Nav */}
      <div style={{ borderBottom: "1px solid var(--border)", padding: "16px 24px", display: "flex", gap: 16, background: "var(--surface)" }}>
        <button onClick={onRetry} style={{ background: "none", border: "none", color: "var(--muted)", fontSize: 13, cursor: "pointer", fontFamily: "'Space Mono', monospace" }}>
          ← 再入力
        </button>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", fontFamily: "'Space Mono', monospace", marginLeft: "auto" }}>
          ホーム
        </Link>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>

        <div style={{ textAlign: "center", marginBottom: 8 }}>
        </div>

        {/* Main salary card */}
        <div
          className="card animate-fade-scale"
          style={{
            padding: "36px 32px", marginBottom: 20, marginTop: 20,
            background: "linear-gradient(135deg, #f0f2ff 0%, #f8f0ff 100%)",
            border: "1px solid rgba(99,102,241,0.2)",
            position: "relative", overflow: "hidden",
            boxShadow: "0 4px 24px rgba(99,102,241,0.1)",
          }}
        >
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: 300, height: 300,
            background: "radial-gradient(circle at top right, rgba(139,92,246,0.08) 0%, transparent 60%)",
          }} />

          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap", marginBottom: 28 }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'Space Mono', monospace", marginBottom: 8 }}>
                  {roleLabel} · {years}年目
                </div>
                <div style={{ marginBottom: 4 }}>
                  <span style={{ fontSize: 11, color: "var(--muted)" }}>想定年収レンジ</span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span className="font-hero" style={{ fontSize: 42, fontWeight: 900, color: "var(--text)", lineHeight: 1 }}>
                    <AnimatedNumber target={result.salaryMin} />
                    <span style={{ fontSize: 20 }}>〜</span>
                    <AnimatedNumber target={result.salaryMax} />
                  </span>
                  <span style={{ fontSize: 18, color: "var(--muted)" }}>万円</span>
                </div>
              </div>

              <div style={{
                width: 100, height: 100,
                borderRadius: "50%",
                border: `3px solid ${deviationColor}`,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                background: `${deviationColor}18`,
                flexShrink: 0,
                boxShadow: `0 4px 20px ${deviationColor}30`,
              }}>
                <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace" }}>偏差値</div>
                <div style={{ fontSize: 28, fontWeight: 900, color: deviationColor, fontFamily: "'Orbitron', sans-serif" }}>
                  <AnimatedNumber target={result.deviation} />
                </div>
              </div>
            </div>

            {/* Range bar */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono', monospace", marginBottom: 6 }}>
                <span>{result.salaryMin}万</span>
                <span>市場レンジ</span>
                <span>{result.salaryMax}万</span>
              </div>
              <div style={{ height: 10, borderRadius: 5, background: "var(--border)", overflow: "hidden", position: "relative" }}>
                <div style={{
                  position: "absolute", top: 0, left: 0,
                  height: "100%", borderRadius: 5,
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                  width: showBars ? "100%" : "0%",
                  transition: "width 1.4s cubic-bezier(0.4,0,0.2,1)",
                }} />
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <div style={{ padding: "8px 16px", borderRadius: 8, background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)" }}>
                <span style={{ fontSize: 12, color: "#6366f1", fontFamily: "'Space Mono', monospace" }}>
                  中央値: {Math.round((result.salaryMin + result.salaryMax) / 2)}万円
                </span>
              </div>
              <div style={{ padding: "8px 16px", borderRadius: 8, background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
                <span style={{ fontSize: 12, color: "#059669", fontFamily: "'Space Mono', monospace" }}>
                  市場平均比 +{Math.round(((result.salaryMin + result.salaryMax) / 2 / 600 - 1) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Target roles */}
        <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 20, animationDelay: "0.15s" }}>
          <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 16 }}>
            TARGET ROLES
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {result.targetRoles.map(({ role, matchPercent }, i) => (
              <div key={role.id}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: 6,
                    background: i === 0 ? "rgba(99,102,241,0.15)" : "var(--surface-2)",
                    border: `1px solid ${i === 0 ? "rgba(99,102,241,0.35)" : "var(--border)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, color: i === 0 ? "#6366f1" : "var(--muted)",
                    fontFamily: "'Space Mono', monospace", fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <span style={{ flex: 1, fontSize: 14, color: "var(--text)", fontWeight: i === 0 ? 700 : 400 }}>
                    {role.label}
                  </span>
                  <span className="font-mono-display" style={{ fontSize: 12, color: i === 0 ? "#6366f1" : "var(--muted)" }}>
                    {matchPercent}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: showBars ? `${matchPercent}%` : "0%",
                      background: i === 0
                        ? "linear-gradient(90deg, #6366f1, #8b5cf6)"
                        : "var(--border-bright)",
                      transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keywords */}
        <div className="card animate-fade-up" style={{ padding: "24px 28px", marginBottom: 24, animationDelay: "0.25s" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 2 }}>
              RESUME KEYWORDS
            </div>
            <span style={{ fontSize: 12, color: "#6366f1", fontFamily: "'Space Mono', monospace" }}>
              {result.keywords.length} キーワード
            </span>
          </div>
          <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16 }}>
            職務経歴書・自己PR文に使えるキーワードをスキルから自動生成しました
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {result.keywords.map((kw, i) => (
              <span
                key={kw}
                className="tag tag-blue"
                style={{
                  opacity: showKeywords ? 1 : 0,
                  transform: showKeywords ? "translateY(0)" : "translateY(8px)",
                  transition: `opacity 0.4s ${i * 0.04}s, transform 0.4s ${i * 0.04}s`,
                  cursor: "default",
                }}
              >
                {kw}
              </span>
            ))}
          </div>
          {result.keywords.length === 0 && (
            <p style={{ color: "var(--muted)", fontSize: 14, fontStyle: "italic" }}>
              スキルを選択するとキーワードが生成されます
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="animate-fade-up" style={{ display: "flex", gap: 12, flexWrap: "wrap", animationDelay: "0.35s" }}>
          <button
            onClick={onRetry}
            style={{
              padding: "12px 24px", borderRadius: 10, border: "1px solid var(--border)",
              background: "var(--surface)", color: "var(--text)", fontSize: 14, cursor: "pointer",
              fontFamily: "inherit", boxShadow: "0 1px 4px rgba(14,18,64,0.05)",
            }}
          >
            条件を変えて再計算
          </button>
          <Link
            href="/diagnosis"
            style={{
              padding: "12px 24px", borderRadius: 10,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff", fontSize: 14, fontWeight: 700,
              textDecoration: "none", display: "inline-block",
              boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
            }}
          >
            IT職種診断も試す →
          </Link>
        </div>
      </div>
    </main>
  );
}
