import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[100svh] bg-black overflow-hidden"
    >
      <Image
        src="/hero-bg.jpg"
        alt="Congregation worshipping"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center z-[5]"
      >
        <div className="w-[70vw] max-w-[520px] aspect-square opacity-90">
          
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-[100svh] flex flex-col justify-end">
        <div className="max-w-2xl">
          <div className="relative inline-flex items-center px-5 py-2.5">
            <span
              aria-hidden
              className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[color:var(--burgundy-2)]"
            />
            <span
              aria-hidden
              className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[color:var(--burgundy-2)]"
            />
            <span
              aria-hidden
              className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[color:var(--burgundy-2)]"
            />
            <span
              aria-hidden
              className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[color:var(--burgundy-2)]"
            />
            <span className="eyebrow-burgundy">RCCG Kings World</span>
          </div>

          <h1 className="font-display font-semibold mt-6 text-4xl sm:text-5xl leading-[1.1] tracking-tight">
            Welcome Home For Kings.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
            We are a family of believers in Ile-Ife. Come as you are.
            There is a seat for you this Sunday.
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
              <div className="mt-1 text-white tabular">8:00 AM</div>
              <div className="text-white tabular">10:00 AM</div>
            </div>
            <div>
              <div className="eyebrow">Wednesdays</div>
              <div className="mt-1 text-white tabular">6:30 PM</div>
            </div>
            <div>
              <div className="eyebrow">Location</div>
              <div className="mt-1 text-white">Ile-Ife, Osun</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
        <div className="relative w-[18px] h-7 rounded-full border border-white/35">
          <span className="absolute left-1/2 top-1.5 -translate-x-1/2 w-[2px] h-[5px] rounded-full bg-white/70 mouse-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
