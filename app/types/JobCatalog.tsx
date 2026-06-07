"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { CATEGORIES, JOBS, type CategoryKey } from "@/data/jobs";
import JobCard from "./JobCard";

type FilterKey = "all" | CategoryKey;

const FILTERS: { key: FilterKey; label: string; emoji: string }[] = [
  { key: "all", label: "すべて", emoji: "✦" },
  ...Object.values(CATEGORIES).map((c) => ({ key: c.key, label: c.label, emoji: c.emoji })),
];

export default function JobCatalog() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: JOBS.length };
    JOBS.forEach((j) => (c[j.cat] = (c[j.cat] ?? 0) + 1));
    return c;
  }, []);

  const list = useMemo(
    () => (filter === "all" ? JOBS : JOBS.filter((j) => j.cat === filter)),
    [filter],
  );

  const activeCat = filter !== "all" ? CATEGORIES[filter] : null;

  return (
    <>
      {/* sticky filter tabs */}
      <div
        style={{
          position: "sticky", top: 60, zIndex: 40, width: "100%",
          padding: "14px 0",
          background: "linear-gradient(var(--bg), var(--bg) 70%, transparent)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
          {FILTERS.map((f) => {
            const c = f.key !== "all" ? CATEGORIES[f.key] : null;
            const active = filter === f.key;
            const vars = {
              "--ac1": c?.c1 ?? "#3b82f6",
              "--ac2": c?.c2 ?? "#8b5cf6",
            } as CSSProperties;
            return (
              <button
                key={f.key}
                type="button"
                style={active ? { ...vars, backgroundImage: "linear-gradient(135deg, var(--ac1), var(--ac2))" } : vars}
                onClick={() => setFilter(f.key)}
                className={`inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                  active
                    ? "border border-transparent text-white shadow-[0_8px_22px_-10px_var(--ac2)]"
                    : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:-translate-y-px hover:border-[#4b5563] hover:text-[var(--text)]"
                }`}
              >
                <span className={active ? "" : "grayscale-[0.3]"}>{f.emoji}</span>
                {f.label}
                <span className={`font-mono text-[11px] ${active ? "text-white/85" : "text-[var(--muted)]/80"}`}>
                  {counts[f.key] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* card grid */}
      <main style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(272px, 1fr))", gap: 20, paddingTop: 18, paddingBottom: 90 }}>
          {list.map((job, i) => (
            <JobCard key={job.id} job={job} index={i} />
          ))}
          {list.length === 0 && (
            <p className="col-span-full py-16 text-center font-mono text-[var(--muted)]">// no jobs found</p>
          )}
        </div>
      </main>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "30px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontSize: 12, color: "var(--muted)" }}>
          <span>© 2026 IT Career Lab</span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11 }}>
            /types · {list.length} of {JOBS.length} jobs{activeCat ? ` · ${activeCat.label}` : ""}
          </span>
        </div>
      </footer>
    </>
  );
}
