export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] pt-28 sm:pt-32 pb-16 overflow-hidden"
    >
      {/* Orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-70 animate-floaty"
        style={{
          background:
            "radial-gradient(closest-side, rgba(244,209,96,0.45), rgba(212,175,55,0.10) 55%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-24 w-[560px] h-[560px] rounded-full blur-3xl opacity-80 animate-floaty"
        style={{
          animationDelay: "-3s",
          background:
            "radial-gradient(closest-side, rgba(139,21,56,0.55), rgba(106,15,42,0.15) 55%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full blur-3xl opacity-60 animate-floaty"
        style={{
          animationDelay: "-6s",
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.35), transparent 70%)",
        }}
      />

      {/* Cinematic overlay lines */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 4px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span className="text-[11px] tracking-[0.4em] text-[#d4af37]/90">
            RCCG · KINGS WORLD · ILE-IFE
          </span>
        </div>

        <h1 className="font-display font-black leading-[0.92] text-[13vw] sm:text-[10vw] lg:text-[8.5rem] xl:text-[10rem] tracking-tight">
          <span className="block text-gradient-royal">Welcome</span>
          <span className="block">
            Home <span className="text-[#f5efe0]/70 italic font-light">to</span>{" "}
            <span className="text-gradient-gold">Kings</span>
          </span>
          <span className="block text-gradient-royal">World.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-[#f5efe0]/80">
          A place of <span className="text-[#f4d160]">power</span>,{" "}
          <span className="text-[#f4d160]">purpose</span>, and radical love.
          Join the family — where kings are raised and destinies are unlocked.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#visit"
            className="group relative inline-flex items-center gap-3 h-14 px-7 rounded-full btn-gold text-sm font-semibold tracking-widest uppercase"
          >
            Plan a Visit
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
            </svg>
          </a>
          <a
            href="#sermons"
            className="inline-flex items-center gap-3 h-14 px-7 rounded-full btn-outline-gold text-sm font-semibold tracking-widest uppercase"
          >
            <span className="grid place-items-center w-6 h-6 rounded-full bg-[#f4d160]/15">
              <svg className="w-3 h-3 fill-[#f4d160]" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch Latest Sermon
          </a>
        </div>

        {/* Bottom stats strip */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          {[
            { k: "Est.", v: "Ile-Ife" },
            { k: "Sunday", v: "9:00 AM" },
            { k: "Wednesday", v: "6:30 PM" },
            { k: "Family of", v: "Royals" },
          ].map((s) => (
            <div
              key={s.k}
              className="glass rounded-2xl px-4 py-3 flex flex-col"
            >
              <span className="text-[10px] tracking-[0.3em] text-[#d4af37]/80 uppercase">
                {s.k}
              </span>
              <span className="mt-1 font-display text-lg text-[#f5efe0]">
                {s.v}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#f5efe0]/40">
          <span className="h-px w-8 bg-[#f5efe0]/30" />
          scroll to enter the kingdom
        </div>
      </div>
    </section>
  );
}
