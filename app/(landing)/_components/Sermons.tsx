"use client";

import Image from "next/image";
import { useRef } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const sermons = [
  {
    title: "The Weight of the Crown",
    speaker: "Pastor J.",
    date: "May 26, 2026",
    duration: "48 min",
    image:
      "https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fire Fell",
    speaker: "Pastor A.",
    date: "May 19, 2026",
    duration: "52 min",
    image:
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kings Do Not Kneel to Culture",
    speaker: "Pastor T.",
    date: "May 12, 2026",
    duration: "46 min",
    image:
      "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Rooted",
    speaker: "Pastor J.",
    date: "May 5, 2026",
    duration: "41 min",
    image:
      "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?auto=format&fit=crop&w=1200&q=80",
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
    <section id="sermons" className="bg-black py-24 sm:py-28 hair-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            chapter="03"
            eyebrow="Sermons"
            title="Recent sermons."
            description="Catch up on messages from Sunday service. Watch, listen, and share with a friend."
          />
          <Reveal>
            <div className="flex items-center gap-3">
              <button
                aria-label="Previous"
                onClick={() => scroll(-1)}
                className="grid place-items-center w-10 h-10 rounded-full border border-white/20 hover:border-white/60 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" />
                </svg>
              </button>
              <button
                aria-label="Next"
                onClick={() => scroll(1)}
                className="grid place-items-center w-10 h-10 rounded-full bg-[color:var(--burgundy)] hover:bg-[color:var(--burgundy-2)] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
                </svg>
              </button>
              <a
                href="#archive"
                className="ml-2 hidden sm:inline-flex items-center h-10 px-4 rounded-full btn-ghost text-sm"
              >
                All Sermons
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 -mx-4 sm:-mx-6 lg:-mx-8">
          <div
            ref={scroller}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4">
              {sermons.map((s) => (
                <Reveal
                  key={s.title}
                  as="article"
                  className="snap-start shrink-0 w-[80%] sm:w-[420px]"
                >
                  <div className="group card rounded-2xl overflow-hidden">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(min-width: 640px) 420px, 80vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.8) 100%)",
                        }}
                      />
                      <button
                        aria-label={`Play ${s.title}`}
                        className="absolute inset-0 grid place-items-center"
                      >
                        <span className="grid place-items-center w-14 h-14 rounded-full bg-black/40 border border-white/40 group-hover:bg-[color:var(--burgundy)] group-hover:border-[color:var(--burgundy)] transition-colors">
                          <svg className="w-5 h-5 fill-white translate-x-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </button>
                      <span className="absolute top-3 right-3 rounded-full bg-black/60 border border-white/20 px-2.5 py-1 text-[10px] tracking-widest uppercase text-white/80 tabular">
                        {s.duration}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl leading-snug">
                        {s.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-2 text-xs text-white/55">
                        <span>{s.speaker}</span>
                        <span className="w-1 h-1 rounded-full bg-[color:var(--burgundy-2)]" />
                        <span>{s.date}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
