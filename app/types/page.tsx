"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { IT_JOBS, JOB_CATEGORIES, type ITJob } from "@/lib/jobs";

const DIFF = {
  low:    { label: "入門", dots: "●○○", color: "#34d399" },
  medium: { label: "中級", dots: "●●○", color: "#60a5fa" },
  high:   { label: "上級", dots: "●●●", color: "#c084fc" },
};

const SALARY_MAX = 1300;

function JobCard({
  job,
  index,
  open,
  onToggle,
}: {
  job: ITJob;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const cat = JOB_CATEGORIES.find((c) => c.id === job.categoryId)!;
  const d = DIFF[job.difficulty];
  const left = (job.salaryMin / SALARY_MAX) * 100;
  const width = ((job.salaryMax - job.salaryMin) / SALARY_MAX) * 100;
  const [imgErr, setImgErr] = useState(false);

  return (
    <article
      style={{
        position: "relative",
        background: "var(--surface)",
        border: open ? "1px solid transparent" : "1px solid var(--border)",
        borderRadius: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.3s, border-color 0.3s",
        animationDelay: `${Math.min(index, 11) * 45}ms`,
        ...(open
          ? {
              boxShadow: `0 24px 50px -22px rgba(0,0,0,0.7), 0 18px 60px -28px ${cat.gradientTo}, 0 0 42px -16px ${cat.gradientFrom}`,
            }
          : {}),
      }}
    >
      <button
        style={{
          appearance: "none",
          background: "none",
          border: "none",
          color: "inherit",
          textAlign: "left",
          cursor: "pointer",
          fontFamily: "inherit",
          padding: 0,
          width: "100%",
          display: "block",
        }}
        aria-expanded={open}
        onClick={onToggle}
      >
        {/* Illustration */}
        <div
          style={{
            position: "relative",
            aspectRatio: "1 / 1",
            width: "100%",
            background: `radial-gradient(120% 100% at 50% 0%, ${cat.gradientFrom}99, transparent 70%), linear-gradient(160deg, ${cat.gradientFrom}55, ${cat.gradientTo}4d)`,
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
          }}
        >
          {/* Dot grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1.4px)",
              backgroundSize: "16px 16px",
              opacity: 0.4,
            }}
          />

          {/* GPT image — falls back to emoji when missing */}
          {!imgErr ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`/jobs/${job.numId}.png`}
              alt={job.name}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
                transition: "transform 0.5s cubic-bezier(0.2,0.8,0.2,1)",
              }}
              loading="lazy"
              onError={() => setImgErr(true)}
            />
          ) : (
            <span
              style={{
                fontSize: 52,
                zIndex: 2,
                position: "relative",
                filter: "drop-shadow(0 0 16px rgba(255,255,255,0.3))",
              }}
            >
              {job.emoji}
            </span>
          )}

          {/* Top/bottom veil */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              pointerEvents: "none",
              background:
                "linear-gradient(180deg, rgba(13,17,23,0.55), transparent 26%, transparent 86%, rgba(13,17,23,0.35))",
            }}
          />

          {/* Category chip */}
          <span
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 3,
              fontFamily: "'Space Mono', monospace",
              fontSize: 10.5,
              fontWeight: 700,
              color: "#fff",
              background: "rgba(13,17,23,0.55)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.16)",
              padding: "5px 9px",
              borderRadius: 7,
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            {cat.emoji} {cat.label}
          </span>

          {/* Job number */}
          <span
            style={{
              position: "absolute",
              top: 10,
              right: 12,
              zIndex: 3,
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.04em",
            }}
          >
            #{job.numId}
          </span>
        </div>

        {/* Card body */}
        <div style={{ padding: "16px 16px 14px" }}>
          {/* Badges */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10.5,
                fontWeight: 700,
                padding: "4px 9px",
                borderRadius: 7,
                color: d.color,
                border: `1px solid ${d.color}66`,
                background: `${d.color}1f`,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ letterSpacing: 1, fontSize: 9 }}>{d.dots}</span>
              {d.label}
            </span>
            {job.beginnerOk && (
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10.5,
                  fontWeight: 700,
                  padding: "4px 9px",
                  borderRadius: 7,
                  color: "#34d399",
                  border: "1px solid rgba(52,211,153,0.4)",
                  background: "rgba(52,211,153,0.12)",
                }}
              >
                🌱 未経験OK
              </span>
            )}
          </div>

          <h3
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
              color: "var(--text)",
            }}
          >
            {job.name}
          </h3>
          <p style={{ color: "var(--muted)", fontSize: 12.5, marginTop: 3 }}>{job.shortDesc}</p>

          {/* Salary */}
          <div style={{ marginTop: 14 }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  color: "var(--muted)",
                  letterSpacing: "0.06em",
                }}
              >
                想定年収レンジ
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--text)",
                }}
              >
                ¥{job.salaryMin}–{job.salaryMax}
                <small style={{ fontSize: 11, color: "var(--muted)", marginLeft: 1 }}>万</small>
              </span>
            </div>
            <div
              style={{
                marginTop: 7,
                height: 5,
                borderRadius: 99,
                background: "#0d1117",
                border: "1px solid var(--border)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: `${left}%`,
                  width: `${width}%`,
                  borderRadius: 99,
                  background: `linear-gradient(90deg, ${cat.gradientFrom}, ${cat.gradientTo})`,
                  boxShadow: `0 0 10px -1px ${cat.gradientTo}`,
                }}
              />
            </div>
          </div>

          {/* Expand hint */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 15,
              paddingTop: 13,
              borderTop: "1px solid var(--border)",
              fontFamily: "'Space Mono', monospace",
              fontSize: 11.5,
              color: "var(--muted)",
            }}
          >
            <span>{open ? "閉じる" : "仕事内容・スキルを見る"}</span>
            <span
              style={{
                display: "inline-block",
                transition: "transform 0.35s cubic-bezier(0.2,0.8,0.2,1)",
                transform: open ? "rotate(180deg)" : "none",
                fontSize: 13,
              }}
            >
              ▾
            </span>
          </div>
        </div>
      </button>

      {/* Accordion */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.4s cubic-bezier(0.2,0.8,0.2,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              padding: "2px 16px 18px",
              opacity: open ? 1 : 0,
              transform: open ? "none" : "translateY(6px)",
              transition: "opacity 0.35s 0.08s, transform 0.35s 0.08s",
            }}
          >
            {/* Description */}
            <div style={{ marginBottom: 14 }}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  color: "var(--muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: cat.gradientTo,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                JOB DESCRIPTION
              </div>
              <p style={{ fontSize: 13, color: "#c9d4e0", lineHeight: 1.7 }}>{job.detail}</p>
            </div>

            {/* Skills */}
            <div style={{ marginBottom: 14 }}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  color: "var(--muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: cat.gradientTo,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                REQUIRED SKILLS
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {job.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 11,
                      color: "#c9d4e0",
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      borderRadius: 7,
                      padding: "4px 9px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/diagnosis"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                width: "100%",
                fontFamily: "'Space Mono', monospace",
                fontSize: 12.5,
                fontWeight: 700,
                color: "#fff",
                borderRadius: 10,
                padding: 11,
                background: `linear-gradient(135deg, ${cat.gradientFrom}, ${cat.gradientTo})`,
                boxShadow: `0 12px 26px -14px ${cat.gradientTo}`,
                textDecoration: "none",
              }}
            >
              この職種で診断する <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TypesPage() {
  const [filter, setFilter] = useState("all");
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: IT_JOBS.length };
    IT_JOBS.forEach((j) => {
      c[j.categoryId] = (c[j.categoryId] || 0) + 1;
    });
    return c;
  }, []);

  const list = useMemo(
    () => (filter === "all" ? IT_JOBS : IT_JOBS.filter((j) => j.categoryId === filter)),
    [filter]
  );

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });

  const FILTERS = [
    { key: "all", label: "すべて", emoji: "✦" },
    ...JOB_CATEGORIES.map((cat) => ({
      key: cat.id,
      label: cat.label,
      emoji: cat.emoji,
    })),
  ];

  return (
    <>
      {/* Sticky topbar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(13,17,23,0.72)",
          backdropFilter: "blur(14px) saturate(140%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                display: "grid",
                placeItems: "center",
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                fontSize: 15,
                boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 6px 18px -6px #3b82f6",
              }}
            >
              ⌁
            </div>
            <span>
              IT Career Lab
              <small
                style={{
                  display: "block",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  color: "var(--muted)",
                  letterSpacing: "0.06em",
                  fontWeight: 400,
                }}
              >
                // 職種図鑑
              </small>
            </span>
          </div>
          <nav
            style={{
              display: "flex",
              gap: 26,
              fontSize: 13,
              color: "var(--muted)",
            }}
          >
            <Link href="/diagnosis" style={{ color: "inherit", textDecoration: "none" }}>
              診断する
            </Link>
            <Link href="/types" style={{ color: "var(--text)", textDecoration: "none" }}>
              職種図鑑
            </Link>
            <Link href="/market-value" style={{ color: "inherit", textDecoration: "none" }}>
              市場価値チェック
            </Link>
          </nav>
          <Link
            href="/diagnosis"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              fontWeight: 700,
              color: "#fff",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              padding: "8px 16px",
              borderRadius: 8,
              textDecoration: "none",
              boxShadow: "0 8px 22px -10px #8b5cf6",
            }}
          >
            無料診断 →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "64px 0 36px", textAlign: "center" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.18em",
              color: "#3b82f6",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 18,
              padding: "6px 14px",
              border: "1px solid var(--border)",
              borderRadius: 999,
              background: "var(--surface)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#3b82f6",
                boxShadow: "0 0 10px #3b82f6",
                display: "inline-block",
              }}
            />
            14 CAREERS · 5 CATEGORIES
          </span>
          <h1
            className="font-hero"
            style={{
              fontSize: "clamp(34px, 6vw, 60px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
              color: "var(--text)",
            }}
          >
            あなたに合う
            <br />
            <span className="gradient-text">IT職種</span>を見つけよう
          </h1>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "clamp(14px, 2vw, 17px)",
              margin: "18px auto 0",
              maxWidth: 560,
            }}
          >
            14のIT職種をカテゴリ別に図鑑形式で紹介。難易度・年収・必要スキルから、自分にぴったりの一歩を探せます。
          </p>
          <div
            style={{
              display: "flex",
              gap: 32,
              justifyContent: "center",
              marginTop: 32,
              flexWrap: "wrap",
            }}
          >
            {[
              { b: "14", s: "職種" },
              { b: "5", s: "カテゴリ" },
              { b: "3", s: "未経験OK" },
            ].map(({ b, s }) => (
              <div
                key={s}
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <b
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#3b82f6",
                  }}
                >
                  {b}
                </b>
                <span style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.04em" }}>
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky filter tabs */}
      <div
        style={{
          position: "sticky",
          top: 60,
          zIndex: 40,
          padding: "14px 0",
          background: "linear-gradient(var(--bg), var(--bg) 70%, transparent)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {FILTERS.map((f) => {
            const cat = JOB_CATEGORIES.find((c) => c.id === f.key);
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                style={{
                  fontFamily: "inherit",
                  fontSize: 13,
                  fontWeight: 500,
                  color: active ? "#fff" : "var(--muted)",
                  background: active
                    ? `linear-gradient(135deg, ${cat?.gradientFrom ?? "#3b82f6"}, ${cat?.gradientTo ?? "#8b5cf6"})`
                    : "var(--surface)",
                  border: active ? "1px solid transparent" : "1px solid var(--border)",
                  borderRadius: 999,
                  padding: "9px 16px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                  boxShadow: active
                    ? `0 8px 22px -10px ${cat?.gradientTo ?? "#8b5cf6"}`
                    : "none",
                  transition: "all 0.2s",
                }}
              >
                <span style={{ fontSize: 14 }}>{f.emoji}</span>
                {f.label}
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    opacity: 0.8,
                  }}
                >
                  {counts[f.key] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Job grid */}
      <main
        style={{ maxWidth: 1280, margin: "0 auto", padding: "18px 24px 90px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(272px, 1fr))",
            gap: 20,
          }}
        >
          {list.map((job, i) => (
            <JobCard
              key={job.id}
              index={i}
              job={job}
              open={openIds.has(job.id)}
              onToggle={() => toggle(job.id)}
            />
          ))}
          {list.length === 0 && (
            <div
              style={{
                textAlign: "center",
                color: "var(--muted)",
                padding: "60px 0",
                fontFamily: "'Space Mono', monospace",
                gridColumn: "1 / -1",
              }}
            >
              // no jobs found
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "30px 0",
          color: "var(--muted)",
          fontSize: 12,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>© 2026 IT Career Lab</span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11 }}>
            /types · {list.length} of {IT_JOBS.length} jobs
          </span>
        </div>
      </footer>
    </>
  );
}
