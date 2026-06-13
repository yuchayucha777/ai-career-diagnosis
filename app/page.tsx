"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function useCountUp(target: number, run: boolean, dur = 1100) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    const id = setInterval(() => {
      const p = Math.min(1, (performance.now() - start) / dur);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p >= 1) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [target, run, dur]);
  return v;
}

function CompassMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2.2" />
      <path d="M16 9.5 18.6 16 16 22.5 13.4 16Z" fill="currentColor" />
      <circle cx="16" cy="16" r="1.8" fill="#fff" />
    </svg>
  );
}

function ChartMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="5" y="17" width="5.4" height="10" rx="1.4" fill="currentColor" />
      <rect x="13.3" y="11" width="5.4" height="16" rx="1.4" fill="currentColor" opacity="0.78" />
      <rect x="21.6" y="6" width="5.4" height="21" rx="1.4" fill="currentColor" opacity="0.56" />
    </svg>
  );
}

function StatBlock({
  value, suffix, label, run, decimals = 0,
}: {
  value: number; suffix: string; label: string; run: boolean; decimals?: number;
}) {
  const n = useCountUp(value, run);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        whiteSpace: "nowrap",
        fontSize: "clamp(26px, 4vw, 36px)",
        fontWeight: 900,
        lineHeight: 1,
        fontVariantNumeric: "tabular-nums",
        background: "linear-gradient(120deg, #6366f1, #8b5cf6)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}>
        {n.toFixed(decimals)}
        <span style={{ fontSize: "0.5em", fontWeight: 700, marginLeft: 2 }}>{suffix}</span>
      </div>
      <div style={{ marginTop: 8, fontSize: 12.5, fontWeight: 500, color: "var(--muted)" }}>{label}</div>
    </div>
  );
}

function FeatureCard({
  accent, icon, eyebrow, title, desc, bullets, cta, href,
}: {
  accent: string;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  cta: string;
  href: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 32,
        borderRadius: 22,
        background: "#fff",
        border: "1px solid rgba(99,102,241,0.10)",
        boxShadow: hover
          ? `0 24px 50px -18px ${accent}88`
          : "0 14px 40px -24px rgba(49,46,129,0.45)",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.25s cubic-bezier(0.3,0.7,0.4,1), box-shadow 0.25s",
        textDecoration: "none",
        color: "inherit",
        willChange: "transform",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
        <div style={{
          width: 56, height: 56,
          display: "grid", placeItems: "center",
          borderRadius: 14,
          background: `linear-gradient(135deg, ${accent}, #8b5cf6)`,
          color: "#fff",
          flexShrink: 0,
        }}>
          {icon}
        </div>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: accent }}>
          {eyebrow}
        </span>
      </div>
      <h3 style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.01em", color: "var(--text)" }}>{title}</h3>
      <p style={{ marginTop: 12, fontSize: 14.5, lineHeight: 1.8, color: "var(--muted)" }}>{desc}</p>
      <ul style={{ listStyle: "none", margin: "22px 0 26px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        {bullets.map((b) => (
          <li key={b} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 14, fontWeight: 500, color: "var(--text)" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: accent, flexShrink: 0 }} />
            {b}
          </li>
        ))}
      </ul>
      <div style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
        padding: "15px 22px",
        fontSize: 15.5, fontWeight: 700,
        background: `linear-gradient(135deg, ${accent}, #8b5cf6)`,
        color: "#fff",
        borderRadius: 12,
        boxShadow: `0 14px 30px -14px ${accent}`,
      }}>
        {cta}
        <svg
          width="18" height="18" viewBox="0 0 18 18" fill="none"
          style={{ transform: hover ? "translateX(3px)" : "none", transition: "transform 0.2s" }}
        >
          <path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const [run, setRun] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setRun(true), 250);
    return () => clearTimeout(id);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", position: "relative", overflowX: "hidden" }}>
      {/* Background grid */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
        backgroundSize: "38px 38px",
        WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, #000 35%, transparent 78%)",
        maskImage: "radial-gradient(ellipse 90% 70% at 50% 0%, #000 35%, transparent 78%)",
      }} />

      {/* Color glows */}
      <div style={{
        position: "fixed", zIndex: 0, pointerEvents: "none",
        top: -180, left: "50%", transform: "translateX(-50%)",
        width: 1100, height: 620,
        background:
          "radial-gradient(circle at 30% 40%, rgba(99,102,241,0.22), transparent 60%)," +
          "radial-gradient(circle at 70% 50%, rgba(139,92,246,0.18), transparent 60%)",
        filter: "blur(30px)",
        opacity: 0.5,
      }} />

      {/* Nav */}
      <header style={{
        position: "relative", zIndex: 3,
        maxWidth: 1140, margin: "0 auto",
        padding: "22px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <span style={{
            width: 38, height: 38, borderRadius: 11,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "grid", placeItems: "center",
            color: "#fff",
            boxShadow: "0 8px 18px -6px #6366f1",
            flexShrink: 0,
          }}>
            <CompassMark size={20} />
          </span>
          <span style={{ fontSize: 18, fontWeight: 500, letterSpacing: "0.01em", color: "var(--text)" }}>
            ITキャリア<b style={{ fontWeight: 900 }}>診断</b>
          </span>
        </div>

        <nav style={{ display: "flex", alignItems: "center", gap: 26, fontSize: 15, fontWeight: 500 }}>
          <Link href="/diagnosis" className="nav-link-hover" style={{ color: "var(--muted)", textDecoration: "none" }}>
            職種診断
          </Link>
          <Link href="/types" className="nav-link-hover" style={{ color: "var(--muted)", textDecoration: "none" }}>
            職種図鑑
          </Link>
          <Link href="/market-value" className="nav-link-hover" style={{ color: "var(--muted)", textDecoration: "none" }}>
            市場価値
          </Link>
          <Link
            href="/diagnosis"
            style={{
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 999,
              whiteSpace: "nowrap",
              fontWeight: 700,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              boxShadow: "0 10px 22px -10px #6366f1",
              textDecoration: "none",
            }}
          >
            無料で診断する
          </Link>
        </nav>
      </header>

      {/* Main */}
      <main style={{
        position: "relative", zIndex: 2,
        maxWidth: 1140, margin: "0 auto",
        padding: "0 28px 80px",
      }}>

        {/* Hero */}
        <section style={{ textAlign: "center", padding: "56px 0 12px" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "7px 15px", borderRadius: 999,
            background: "#fff",
            border: "1.5px solid rgba(99,102,241,0.4)",
            fontSize: 13, fontWeight: 700,
            color: "#6366f1",
            boxShadow: "0 6px 18px -10px rgba(99,102,241,0.5)",
          }}>
            <span className="ping-dot" />
            登録不要・完全無料
          </span>

          <h1 style={{
            margin: "22px 0 0",
            fontSize: "clamp(32px, 5.4vw, 56px)",
            fontWeight: 900,
            lineHeight: 1.18,
            letterSpacing: "-0.01em",
            color: "var(--text)",
          }}>
            3分で見つかる、<br />
            <span style={{
              background: "linear-gradient(120deg, #6366f1, #8b5cf6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}>
              あなたに合うIT職種
            </span>。
          </h1>

          <p style={{
            maxWidth: 620, margin: "22px auto 0",
            fontSize: "clamp(15px, 1.8vw, 17px)",
            lineHeight: 1.85,
            color: "var(--muted)",
          }}>
            かんたんな質問に答えるだけ。14の職種から最適なキャリアを診断し、
            日本のIT市場での想定年収まで、まとめてチェックできます。
          </p>

          {/* Stats */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "clamp(18px, 4vw, 46px)",
            margin: "40px auto 0",
            padding: "22px 30px",
            maxWidth: 640,
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(99,102,241,0.12)",
            borderRadius: 20,
            backdropFilter: "blur(8px)",
            boxShadow: "0 16px 44px -28px rgba(49,46,129,0.5)",
            flexWrap: "wrap",
          }}>
            <StatBlock value={14} suffix=" 職種" label="診断できる職種数" run={run} />
            <span style={{ width: 1, height: 38, background: "rgba(99,102,241,0.16)", flexShrink: 0 }} />
            <StatBlock value={47} suffix="+ スキル" label="評価対象スキル" run={run} />
            <span style={{ width: 1, height: 38, background: "rgba(99,102,241,0.16)", flexShrink: 0 }} />
            <StatBlock value={3} suffix=" 分" label="平均所要時間" run={run} />
          </div>
        </section>

        {/* Feature cards */}
        <section className="home-cards" style={{ display: "grid", gap: 22, marginTop: 52 }}>
          <FeatureCard
            accent="#6366f1"
            icon={<CompassMark size={28} />}
            eyebrow="DIAGNOSIS"
            title="IT職種診断"
            desc="あなたの興味・志向・スキルから、向いているIT職種をランキングで提案します。"
            bullets={[
              "未経験／経験者で質問を最適化",
              "適性スコアと強みを可視化",
              "おすすめ職種をランキング表示",
            ]}
            cta="診断をはじめる"
            href="/diagnosis"
          />
          <FeatureCard
            accent="#8b5cf6"
            icon={<ChartMark size={28} />}
            eyebrow="MARKET VALUE"
            title="市場価値チェック"
            desc="職種・経験年数・スキルから、いまの想定年収と市場での立ち位置を算出します。"
            bullets={[
              "想定年収をリアルタイム計算",
              "偏差値で市場価値を把握",
              "次に伸ばすべきスキルを提案",
            ]}
            cta="年収をチェック"
            href="/market-value"
          />
        </section>

        <p style={{ marginTop: 40, textAlign: "center", fontSize: 12, color: "var(--muted)", opacity: 0.8 }}>
          ※ 年収レンジは日本国内の公開求人・統計をもとにした推計です。実際の金額を保証するものではありません。
        </p>
      </main>
    </div>
  );
}
