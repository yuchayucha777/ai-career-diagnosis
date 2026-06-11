import type { Metadata } from "next";
import Link from "next/link";
import JobCatalog from "./JobCatalog";

export const metadata: Metadata = {
  title: "IT職種図鑑 | IT Career Lab",
  description:
    "14のIT職種をカテゴリ別に図鑑形式で紹介。難易度・想定年収・必要スキルから、あなたに合うIT職種を見つけよう。",
};

const HERO_STATS = [
  { n: "14", label: "職種" },
  { n: "5",  label: "カテゴリ" },
  { n: "3",  label: "未経験OK" },
];

export default function TypesPage() {
  return (
    <div style={{ minHeight: "100vh", width: "100%" }}>
      {/* topbar */}
      <header
        className="sticky top-0 z-50 border-b border-[var(--border)]"
        style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(14px) saturate(140%)" }}
      >
        <div className="mx-auto flex h-[60px] max-w-[1280px] items-center justify-between px-6">
          <div className="flex items-center gap-2.5 font-bold tracking-[-0.01em]">
            <span
              className="grid h-[30px] w-[30px] place-items-center rounded-lg text-[15px]"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                boxShadow: "0 0 0 1px rgba(255,255,255,.08), 0 6px 18px -6px #3b82f6",
              }}
            >
              ⌁
            </span>
            <span>
              IT Career Lab
              <small className="block font-mono text-[10px] font-normal tracking-wide text-[var(--muted)]">
                // 職種図鑑
              </small>
            </span>
          </div>
          <nav className="hidden gap-6 text-[13px] text-[var(--muted)] sm:flex">
            <Link href="/diagnosis" className="transition-colors hover:text-[var(--text)]">診断する</Link>
            <Link href="/types" className="text-[var(--text)] transition-colors">職種図鑑</Link>
            <Link href="/market-value" className="transition-colors hover:text-[var(--text)]">市場価値チェック</Link>
          </nav>
          <Link
            href="/diagnosis"
            className="rounded-lg px-4 py-2 font-mono text-[12px] font-bold text-white no-underline transition-transform hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              boxShadow: "0 8px 22px -10px #8b5cf6",
            }}
          >
            無料診断 →
          </Link>
        </div>
      </header>

      {/* hero */}
      <section style={{ padding: "64px 0 36px", textAlign: "center" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <span
            className="mb-[18px] inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 font-mono text-[12px] tracking-[0.18em] text-[#3b82f6]"
          >
            <span
              className="h-[7px] w-[7px] rounded-full bg-[#3b82f6]"
              style={{ boxShadow: "0 0 10px #3b82f6" }}
            />
            14 CAREERS · 5 CATEGORIES
          </span>
          <h1 style={{ fontSize: "clamp(34px,6vw,60px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.08 }}>
            あなたに合う
            <br />
            <span className="gradient-text">IT職種</span>を見つけよう
          </h1>
          <p className="mx-auto mt-[18px] max-w-[560px] text-[clamp(14px,2vw,17px)] text-[var(--muted)]">
            14のIT職種をカテゴリ別に図鑑形式で紹介。難易度・年収・必要スキルから、自分にぴったりの一歩を探せます。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {HERO_STATS.map(({ n, label }) => (
              <div key={label} className="flex flex-col items-center">
                <b className="font-mono text-[24px] font-bold text-[#3b82f6]">{n}</b>
                <span className="text-[11px] tracking-wide text-[var(--muted)]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* filter + grid (Client) */}
      <JobCatalog />
    </div>
  );
}
