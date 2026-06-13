"use client";

import { useMemo, useState } from "react";
import { CATS, JOBS, type CategoryKey, type Job } from "@/data/jobs";
import JobCard from "./JobCard";
import DetailModal from "./DetailModal";

type FilterKey = "all" | CategoryKey;

export default function JobCatalog() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [modalJob, setModalJob] = useState<Job | null>(null);

  const counts = useMemo(() => {
    const m: Record<string, number> = { all: JOBS.length };
    (Object.keys(CATS) as CategoryKey[]).forEach((k) => {
      m[k] = JOBS.filter((j) => j.cat === k).length;
    });
    return m;
  }, []);

  const filtered = useMemo(
    () => (filter === "all" ? JOBS : JOBS.filter((j) => j.cat === filter)),
    [filter],
  );

  return (
    <>
      {/* category filter */}
      <div style={{
        display: "flex", flexWrap: "wrap", justifyContent: "center",
        gap: 10, margin: "30px auto 0",
      }}>
        {/* all */}
        <CatPill
          active={filter === "all"}
          color="#6366f1"
          label="すべて"
          count={counts.all}
          onClick={() => setFilter("all")}
        />
        {(Object.entries(CATS) as [CategoryKey, typeof CATS[CategoryKey]][]).map(([k, v]) => (
          <CatPill
            key={k}
            active={filter === k}
            color={v.color}
            label={v.label}
            count={counts[k]}
            onClick={() => setFilter(k)}
          />
        ))}
      </div>

      {/* card grid */}
      <main className="zukan-grid" key={filter}>
        {filtered.map((job, i) => (
          <JobCard key={job.id} job={job} index={i} onOpen={setModalJob} />
        ))}
      </main>

      <p style={{ marginTop: 34, textAlign: "center", fontSize: 12, color: "var(--muted)", opacity: 0.8 }}>
        ※ 想定年収は日本国内の公開求人・統計をもとにした推計です。実際の金額を保証するものではありません。
      </p>

      {modalJob && (
        <DetailModal
          job={modalJob}
          onClose={() => setModalJob(null)}
          onNav={setModalJob}
        />
      )}
    </>
  );
}

function CatPill({
  active, color, label, count, onClick,
}: {
  active: boolean; color: string; label: string; count: number; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "9px 16px",
        border: `1.5px solid ${active ? color : "rgba(99,102,241,0.18)"}`,
        borderRadius: 999,
        background: active ? color : "#fff",
        color: active ? "#fff" : "var(--muted)",
        fontSize: 13.5, fontWeight: 700,
        cursor: "pointer",
        transition: "transform 0.12s, background 0.15s, color 0.15s, border-color 0.15s, box-shadow 0.15s",
        boxShadow: active ? `0 10px 22px -12px ${color}` : "none",
        transform: active ? "none" : undefined,
        fontFamily: "inherit",
      }}
      className={active ? "" : "cat-pill-hover"}
    >
      {label}
      <span style={{
        display: "inline-grid", placeItems: "center",
        minWidth: 20, height: 20, padding: "0 5px",
        borderRadius: 999,
        background: active ? "rgba(255,255,255,0.25)" : color + "18",
        color: active ? "#fff" : color,
        fontSize: 11.5, fontWeight: 900,
      }}>
        {count}
      </span>
    </button>
  );
}
