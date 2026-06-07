"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { CATEGORIES, DIFFICULTY, SALARY_MAX, type Job } from "@/data/jobs";

interface JobCardProps {
  job: Job;
  index: number;
}

export default function JobCard({ job, index }: JobCardProps) {
  const [open, setOpen] = useState(false);
  const cat = CATEGORIES[job.cat];
  const diff = DIFFICULTY[job.difficulty];

  const barLeft = (job.salaryMin / SALARY_MAX) * 100;
  const barWidth = ((job.salaryMax - job.salaryMin) / SALARY_MAX) * 100;

  const themeVars = {
    "--c1": cat.c1,
    "--c2": cat.c2,
    animationDelay: `${Math.min(index, 11) * 45}ms`,
  } as CSSProperties;

  return (
    <article
      data-open={open}
      style={themeVars}
      className="card-rise glow-ring group relative flex flex-col overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--surface)]
                 transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(.2,.8,.2,1)]
                 hover:-translate-y-2 hover:border-transparent
                 hover:shadow-[0_24px_50px_-22px_rgba(0,0,0,.7),0_18px_60px_-28px_var(--c2),0_0_42px_-16px_var(--c1)]
                 data-[open=true]:border-transparent"
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="block w-full cursor-pointer text-left"
      >
        {/* illustration */}
        <div
          className="illust-dots relative grid aspect-square w-full place-items-center overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(120% 100% at 50% 0%, color-mix(in oklab, var(--c1) 38%, transparent), transparent 70%)," +
              "linear-gradient(160deg, color-mix(in oklab, var(--c1) 22%, #0d1117), color-mix(in oklab, var(--c2) 20%, #0d1117))",
          }}
        >
          {/* legibility veil */}
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{ background: "linear-gradient(180deg, rgba(13,17,23,.55), transparent 26%, transparent 86%, rgba(13,17,23,.35))" }}
          />

          {job.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={job.image}
              alt={job.name}
              className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06]"
              loading="lazy"
            />
          ) : (
            <span className="relative z-10 text-[64px] leading-none drop-shadow-[0_8px_18px_rgba(0,0,0,.45)] transition-transform duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-1 group-hover:scale-110">
              {job.glyph}
            </span>
          )}

          <span className="absolute left-2.5 top-2.5 z-10 inline-flex items-center gap-1.5 rounded-[7px] border border-white/15 bg-[rgba(13,17,23,.55)] px-2 py-1 font-mono text-[10.5px] font-bold text-white backdrop-blur-md">
            {cat.emoji} {cat.label}
          </span>
          <span className="absolute right-3 top-2.5 z-10 font-mono text-[10px] tracking-wide text-white/55">
            #{job.id}
          </span>
        </div>

        {/* card body */}
        <div className="px-4 pb-3.5 pt-4">
          <div className="mb-2.5 flex flex-wrap gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-[7px] border px-2.5 py-1 font-mono text-[10.5px] font-bold"
              style={{
                color: diff.color,
                borderColor: `color-mix(in oklab, ${diff.color} 40%, transparent)`,
                backgroundColor: `color-mix(in oklab, ${diff.color} 12%, transparent)`,
              }}
            >
              <span className="text-[9px] tracking-[1px]">{diff.dots}</span>
              {job.difficulty}
            </span>
            {job.rookieFriendly && (
              <span className="inline-flex items-center gap-1.5 rounded-[7px] border border-[rgba(52,211,153,.4)] bg-[rgba(52,211,153,.12)] px-2.5 py-1 font-mono text-[10.5px] font-bold text-[#34d399]">
                🌱 未経験OK
              </span>
            )}
          </div>

          <h3 className="text-[18px] font-bold leading-snug tracking-[-0.01em]">{job.name}</h3>
          <p className="mt-0.5 text-[12.5px] text-[var(--muted)]">{job.catch}</p>

          <div className="mt-3.5">
            <div className="flex items-baseline justify-between">
              <span className="text-[10px] tracking-wider text-[var(--muted)]">想定年収レンジ</span>
              <span className="font-mono text-[16px] font-bold">
                ¥{job.salaryMin}–{job.salaryMax}
                <small className="ml-px text-[11px] text-[var(--muted)]">万</small>
              </span>
            </div>
            <div className="relative mt-1.5 h-[5px] overflow-hidden rounded-full border border-[var(--border)] bg-[#0d1117]">
              <div
                className="absolute inset-y-0 rounded-full shadow-[0_0_10px_-1px_var(--c2)]"
                style={{ left: `${barLeft}%`, width: `${barWidth}%`, backgroundImage: `linear-gradient(90deg, ${cat.c1}, ${cat.c2})` }}
              />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-3.5 font-mono text-[11.5px] tracking-wide text-[var(--muted)] transition-colors group-hover:text-[var(--text)]">
            <span>{open ? "閉じる" : "仕事内容・スキルを見る"}</span>
            <span className={`inline-block text-[13px] transition-transform duration-[350ms] ${open ? "rotate-180" : ""}`}>▾</span>
          </div>
        </div>
      </button>

      {/* accordion */}
      <div data-open={open} className="accordion">
        <div className="overflow-hidden">
          <div
            className={`px-4 pb-[18px] pt-0.5 transition-[opacity,transform] duration-[350ms] ${
              open ? "translate-y-0 opacity-100 delay-[80ms]" : "translate-y-1.5 opacity-0"
            }`}
          >
            <section>
              <div className="mb-2 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-[var(--muted)]">
                <span className="h-1 w-1 rounded-full" style={{ background: cat.c2 }} />
                JOB DESCRIPTION
              </div>
              <p className="text-[13px] leading-[1.7] text-[#c9d4e0]">{job.work}</p>
            </section>

            <section className="mt-3.5">
              <div className="mb-2 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-[var(--muted)]">
                <span className="h-1 w-1 rounded-full" style={{ background: cat.c2 }} />
                REQUIRED SKILLS
              </div>
              <div className="flex flex-wrap gap-1.5">
                {job.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-[7px] border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px] text-[#c9d4e0] transition-[border-color,color,transform] hover:-translate-y-px hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>

            <Link
              href="/diagnosis"
              onClick={(e) => e.stopPropagation()}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-[10px] py-2.5 font-mono text-[12.5px] font-bold text-white no-underline shadow-[0_12px_26px_-14px_var(--c2)] transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: `linear-gradient(135deg, ${cat.c1}, ${cat.c2})` }}
            >
              この職種で診断する <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
