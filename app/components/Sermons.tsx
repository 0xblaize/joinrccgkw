"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const sermons = [
  {
    title: "The Weight of the Crown",
    speaker: "Pastor J.",
    date: "May 26, 2026",
    duration: "48 min",
    tag: "Identity",
    scene: (
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 30% 30%, rgba(168,30,79,0.55), transparent 60%), linear-gradient(180deg, #050203, #000)",
        }}
      />
    ),
  },
  {
    title: "Fire Fell — Consecrated for Assignment",
    speaker: "Pastor A.",
    date: "May 19, 2026",
    duration: "52 min",
    tag: "Holy Spirit",
    scene: (
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 70% 40%, rgba(74,15,34,0.9), transparent 60%), linear-gradient(180deg, #100407, #000)",
        }}
      />
    ),
  },
  {
    title: "Kings Don't Kneel to Culture",
    speaker: "Pastor T.",
    date: "May 12, 2026",
    duration: "46 min",
    tag: "Kingdom",
    scene: (
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 100%, rgba(168,30,79,0.55), transparent 60%), linear-gradient(180deg, #000, #100407)",
        }}
      />
    ),
  },
  {
    title: "Rooted — the Well Runs Deep",
    speaker: "Pastor J.",
    date: "May 5, 2026",
    duration: "41 min",
    tag: "Discipleship",
    scene: (
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 30% 60%, rgba(168,30,79,0.4), transparent 60%), linear-gradient(180deg, #060203, #000)",
        }}
      />
    ),
  },
];

export default function Sermons() {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.9), behavior: "smooth" });
  };

  return (
    <section id="sermons" className="section relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Sermons · Word & Media"
            title="Word that"
            accent="hits different."
            description="Fresh, uncompromising, spirit-filled preaching from the Kings World pulpit. Stream it, take it into your week."
          />
          <Reveal delay={200}>
            <div className="flex items-center gap-3">
              <button
                aria-label="Previous sermon"
                onClick={() => scroll(-1)}
                className="grid place-items-center w-12 h-12 rounded-full border border-white/20 hover:border-white/60 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" />
                </svg>
              </button>
              <button
                aria-label="Next sermon"
                onClick={() => scroll(1)}
                className="grid place-items-center w-12 h-12 rounded-full bg-[color:var(--burgundy)] hover:bg-[color:var(--burgundy-2)] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
                </svg>
              </button>
              <a
                href="#archive"
                className="ml-2 hidden sm:inline-flex items-center gap-2 h-12 px-5 rounded-full btn-ghost text-xs font-semibold tracking-[0.25em] uppercase"
              >
                Full Archive
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8">
          <div
            ref={scroller}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex gap-5 px-4 sm:px-6 lg:px-8 pb-6">
              {sermons.map((s, i) => (
                <Reveal
                  key={s.title}
                  as="article"
                  className="snap-start shrink-0 w-[86%] sm:w-[520px]"
                  delay={i * 100}
                >
                  <div className="group relative rounded-3xl overflow-hidden surface aspect-[16/10] transition-transform duration-700 hover:-translate-y-1">
                    {s.scene}
                    <div className="scanlines absolute inset-0" />
                    {/* Play */}
                    <button
                      aria-label={`Play ${s.title}`}
                      className="absolute inset-0 grid place-items-center"
                    >
                      <span className="relative grid place-items-center w-20 h-20 rounded-full border border-white/30 group-hover:bg-[color:var(--burgundy)] group-hover:border-[color:var(--burgundy)] transition-all duration-500">
                        <span className="absolute inset-0 rounded-full border border-white/30 group-hover:scale-110 transition-transform duration-700" />
                        <svg className="relative w-6 h-6 fill-white translate-x-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>

                    <div className="absolute top-5 left-5 flex items-center gap-2">
                      <span className="surface px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] text-white/80">
                        {s.tag}
                      </span>
                      <span className="surface px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] text-white/60 tabular">
                        {s.duration}
                      </span>
                    </div>

                    <div
                      className="absolute inset-x-0 bottom-0 p-6"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent, rgba(0,0,0,0.85))",
                      }}
                    >
                      <h3 className="font-display text-2xl sm:text-3xl leading-tight">
                        {s.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-3 text-xs text-white/60">
                        <span>{s.speaker}</span>
                        <span className="w-1 h-1 rounded-full bg-[color:var(--burgundy-2)]" />
                        <span>{s.date}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
              {/* Trailing "view all" tile */}
              <Reveal
                as="article"
                className="snap-start shrink-0 w-[70%] sm:w-[360px]"
                delay={sermons.length * 100}
              >
                <a
                  href="#archive"
                  className="group grid place-items-center rounded-3xl surface aspect-[16/10] transition-colors hover:border-[color:var(--burgundy-2)]"
                >
                  <div className="text-center">
                    <div className="font-display text-3xl">Sermon Archive</div>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[color:var(--burgundy-2)]">
                      View all
                      <span className="w-8 h-px bg-current transition-all duration-500 group-hover:w-14" />
                    </div>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
