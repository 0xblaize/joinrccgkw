"use client";

import { useEffect, useRef, useState } from "react";

type Slide = {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  cta: { label: string; href: string };
  ctaAlt?: { label: string; href: string };
  scene: React.ReactNode;
};

const SLIDES: Slide[] = [
  {
    eyebrow: "01 · Welcome",
    title: (
      <>
        Welcome home
        <br />
        <span className="font-editorial text-[color:var(--burgundy-2)]">
          to Kings World.
        </span>
      </>
    ),
    body:
      "A place of power, purpose and radical love in the heart of Ile-Ife. There is a seat with your name on it.",
    cta: { label: "Plan a Visit", href: "#visit" },
    ctaAlt: { label: "Watch Latest Sermon", href: "#sermons" },
    scene: <SceneWorship />,
  },
  {
    eyebrow: "02 · Family",
    title: (
      <>
        You were never
        <br />
        <span className="font-editorial text-[color:var(--burgundy-2)]">
          meant to do life alone.
        </span>
      </>
    ),
    body:
      "Kingdom is family. Kids, youth, students, young adults, families — find your tribe and grow in a Life Group.",
    cta: { label: "Find Your Tribe", href: "#community" },
    ctaAlt: { label: "Join a Life Group", href: "#community" },
    scene: <SceneCommunity />,
  },
  {
    eyebrow: "03 · Mandate",
    title: (
      <>
        Raising Kings,
        <br />
        <span className="font-editorial text-[color:var(--burgundy-2)]">
          transforming the world.
        </span>
      </>
    ),
    body:
      "Rooted in the Redeemed Christian Church of God. Sent to Ile-Ife. Building a generation that shifts culture.",
    cta: { label: "About Kings World", href: "#about" },
    ctaAlt: { label: "Give", href: "#give" },
    scene: <ScenePreach />,
  },
];

const AUTO_MS = 6500;

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const spot = useRef<HTMLDivElement | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(
      () => setI((v) => (v + 1) % SLIDES.length),
      AUTO_MS
    );
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [i, paused]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = spot.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", `${mx}%`);
      el.style.setProperty("--my", `${my}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const s = SLIDES[i];

  return (
    <section
      id="top"
      className="relative w-full min-h-[100svh] bg-black overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Scenes crossfade */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
            style={{ opacity: idx === i ? 1 : 0 }}
            aria-hidden={idx !== i}
          >
            <div className="absolute inset-0 kenburns" key={`${idx}-${i}`}>
              {slide.scene}
            </div>
          </div>
        ))}
      </div>

      {/* Cinematic vignette + gradient scrim for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.85) 100%), radial-gradient(120% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)",
        }}
      />
      <div className="scanlines absolute inset-0 pointer-events-none" />
      <div className="noise" />

      {/* Cursor spotlight */}
      <div ref={spot} className="absolute inset-0 pointer-events-none spotlight" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-28 min-h-[100svh] flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <div key={`meta-${i}`} className="slide-in">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[color:var(--burgundy-2)]" />
              <span className="eyebrow-burgundy">{s.eyebrow}</span>
            </div>
          </div>

          <h1
            key={`t-${i}`}
            className="slide-in font-display font-black leading-[0.92] mt-8 text-[13vw] sm:text-[10vw] lg:text-[8.5rem] xl:text-[10rem] tracking-tight"
            style={{ animationDelay: "120ms" }}
          >
            {s.title}
          </h1>

          <p
            key={`b-${i}`}
            className="slide-in mt-8 max-w-xl text-lg sm:text-xl text-white/75 leading-relaxed"
            style={{ animationDelay: "260ms" }}
          >
            {s.body}
          </p>

          <div
            key={`c-${i}`}
            className="slide-in mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href={s.cta.href}
              className="group inline-flex items-center gap-3 h-14 px-7 rounded-full btn-primary text-sm font-semibold tracking-widest uppercase"
            >
              {s.cta.label}
              <span className="grid place-items-center w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
                </svg>
              </span>
            </a>
            {s.ctaAlt && (
              <a
                href={s.ctaAlt.href}
                className="inline-flex items-center gap-3 h-14 px-7 rounded-full btn-ghost text-sm font-semibold tracking-widest uppercase"
              >
                {s.ctaAlt.label}
              </a>
            )}
          </div>
        </div>

        {/* Bottom controls row */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          {/* Countdown */}
          <div className="lg:col-span-4">
            <Countdown />
          </div>

          {/* Dots */}
          <div className="lg:col-span-4 flex items-center gap-3">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="group relative h-1.5 flex-1 max-w-[80px] overflow-hidden bg-white/15"
              >
                <span
                  className="absolute inset-y-0 left-0 bg-[color:var(--burgundy-2)]"
                  style={{
                    width: idx < i ? "100%" : idx === i ? undefined : "0%",
                    animation:
                      idx === i && !paused
                        ? `hb ${AUTO_MS}ms linear forwards`
                        : "none",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Arrows + counter */}
          <div className="lg:col-span-4 flex items-center justify-end gap-4">
            <span className="tabular text-sm text-white/60">
              <span className="text-white">{String(i + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-white/30">/</span>
              {String(SLIDES.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous slide"
                onClick={() =>
                  setI((v) => (v - 1 + SLIDES.length) % SLIDES.length)
                }
                className="grid place-items-center w-12 h-12 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" />
                </svg>
              </button>
              <button
                aria-label="Next slide"
                onClick={() => setI((v) => (v + 1) % SLIDES.length)}
                className="grid place-items-center w-12 h-12 rounded-full bg-[color:var(--burgundy)] hover:bg-[color:var(--burgundy-2)] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hb { from { width: 0% } to { width: 100% } }
      `}</style>
    </section>
  );
}

/* ---------- Countdown to next Sunday 9AM WAT ---------- */

function Countdown() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const target = nextSunday9am();
  const diff = now ? Math.max(0, target.getTime() - now.getTime()) : 0;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);

  return (
    <div className="surface rounded-2xl p-5">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[color:var(--burgundy-2)] blink" />
        <span className="eyebrow">Next Service · Sun 9:00 AM WAT</span>
      </div>
      <div className="mt-3 flex items-baseline gap-3 tabular font-display text-white">
        <Unit v={d} label="d" />
        <Colon />
        <Unit v={h} label="h" />
        <Colon />
        <Unit v={m} label="m" />
        <Colon />
        <Unit v={s} label="s" />
      </div>
    </div>
  );
}

function Unit({ v, label }: { v: number; label: string }) {
  return (
    <span className="inline-flex items-baseline gap-1">
      <span className="text-3xl sm:text-4xl">{String(v).padStart(2, "0")}</span>
      <span className="text-[10px] tracking-widest uppercase text-white/40">
        {label}
      </span>
    </span>
  );
}

function Colon() {
  return <span className="text-3xl sm:text-4xl text-white/25">:</span>;
}

function nextSunday9am() {
  const d = new Date();
  const day = d.getDay(); // 0 = Sun
  const daysUntil = day === 0 && d.getHours() < 9 ? 0 : (7 - day) % 7 || 7;
  const t = new Date(d);
  t.setDate(d.getDate() + daysUntil);
  t.setHours(9, 0, 0, 0);
  if (day === 0 && d.getHours() < 9) {
    t.setDate(d.getDate());
    t.setHours(9, 0, 0, 0);
  }
  return t;
}

/* ---------- Scenes (cinematic CSS-composed backgrounds) ---------- */
/* Drop in real photos later — replace the div with <Image src=... fill /> */

function SceneWorship() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 60% at 50% 100%, rgba(168,30,79,0.55), transparent 60%), radial-gradient(70% 50% at 30% 30%, rgba(123,30,58,0.35), transparent 60%), linear-gradient(180deg, #030203, #0a0405 60%, #1a0510)",
        }}
      />
      {/* Stage silhouettes */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-3/4 opacity-95"
        viewBox="0 0 1600 600"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="fade1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#000" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity="1" />
          </linearGradient>
          <radialGradient id="light1" cx="0.5" cy="0" r="0.7">
            <stop offset="0" stopColor="rgba(168,30,79,0.55)" />
            <stop offset="1" stopColor="rgba(168,30,79,0)" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="1600" height="600" fill="url(#light1)" />
        {/* Crowd silhouettes with hands */}
        {Array.from({ length: 44 }).map((_, k) => {
          const x = 20 + k * 36;
          const height = 120 + ((k * 53) % 80);
          const armY = 600 - height - 40 - ((k * 17) % 30);
          return (
            <g key={k} fill="#000">
              <rect x={x} y={600 - height} width="24" height={height} rx="10" />
              <circle cx={x + 12} cy={600 - height - 12} r="12" />
              {/* Arm raised */}
              <rect x={x + 8} y={armY} width="6" height={80} rx="3" />
              <rect x={x + 14} y={armY - 6} width="6" height={80} rx="3" />
            </g>
          );
        })}
        <rect x="0" y="380" width="1600" height="220" fill="url(#fade1)" />
      </svg>
    </div>
  );
}

function SceneCommunity() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 70% 30%, rgba(123,30,58,0.4), transparent 60%), radial-gradient(50% 50% at 20% 70%, rgba(168,30,79,0.3), transparent 60%), linear-gradient(180deg, #050203, #0a0405)",
        }}
      />
      {/* Circular gathering silhouettes */}
      <svg
        className="absolute inset-0 w-full h-full opacity-80"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="ring1" cx="0.5" cy="0.6" r="0.5">
            <stop offset="0" stopColor="rgba(168,30,79,0.4)" />
            <stop offset="1" stopColor="rgba(168,30,79,0)" />
          </radialGradient>
        </defs>
        <ellipse cx="800" cy="540" rx="700" ry="180" fill="url(#ring1)" />
        {Array.from({ length: 12 }).map((_, k) => {
          const angle = (k / 12) * Math.PI * 2;
          const cx = 800 + Math.cos(angle) * 460;
          const cy = 540 + Math.sin(angle) * 180;
          const scale = 0.7 + Math.sin(angle) * 0.35;
          return (
            <g key={k} fill="#000" transform={`translate(${cx} ${cy}) scale(${scale})`}>
              <circle cx="0" cy="-60" r="26" />
              <path d="M-40 60 C -40 0, 40 0, 40 60 Z" />
            </g>
          );
        })}
      </svg>
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background: "linear-gradient(180deg, transparent, #000)",
        }}
      />
    </div>
  );
}

function ScenePreach() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 20%, rgba(168,30,79,0.55), transparent 60%), radial-gradient(80% 60% at 50% 100%, rgba(30,10,20,1), transparent 70%), linear-gradient(180deg, #050203, #0a0405)",
        }}
      />
      {/* Beam of light behind pulpit */}
      <svg
        className="absolute inset-0 w-full h-full opacity-90"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="beam" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0" stopColor="rgba(168,30,79,0.35)" />
            <stop offset="1" stopColor="rgba(168,30,79,0)" />
          </linearGradient>
        </defs>
        <polygon points="700,0 900,0 1050,900 550,900" fill="url(#beam)" />
        {/* Pulpit silhouette */}
        <g fill="#000">
          <rect x="720" y="560" width="160" height="220" rx="6" />
          <rect x="700" y="540" width="200" height="18" rx="4" />
          {/* Preacher silhouette */}
          <circle cx="800" cy="470" r="42" />
          <path d="M720 700 C 720 560, 880 560, 880 700 Z" />
        </g>
      </svg>
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background: "linear-gradient(180deg, transparent, #000)",
        }}
      />
    </div>
  );
}
