import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[100svh] bg-black overflow-hidden"
    >
      {/* Full background image — people raising hands in worship */}
      <Image
        src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=2400&q=80"
        alt="Congregation raising hands in worship"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />

      {/* Dark overlay for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-[100svh] flex flex-col justify-end">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[color:var(--burgundy-2)]" />
            <span className="eyebrow-burgundy">RCCG Kings World · Ile-Ife</span>
          </div>

          <h1 className="font-display font-semibold mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Welcome home to Kings World.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
            A place of power, purpose and radical love. Raising Kings,
            transforming the world — one family at a time in the heart of
            Ile-Ife.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#join"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full btn-primary text-sm font-medium"
            >
              Plan a Visit
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="#sermons"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full btn-ghost text-sm font-medium"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Latest Sermon
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 text-sm text-white/70">
            <div>
              <div className="eyebrow">Sundays</div>
              <div className="mt-1 text-white">9:00 AM WAT</div>
            </div>
            <div>
              <div className="eyebrow">Wednesdays</div>
              <div className="mt-1 text-white">6:30 PM WAT</div>
            </div>
            <div>
              <div className="eyebrow">Location</div>
              <div className="mt-1 text-white">Ile-Ife, Osun</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2 text-xs tracking-widest uppercase text-white/50">
        Scroll <span className="h-px w-8 bg-white/40" />
      </div>
    </section>
  );
}
