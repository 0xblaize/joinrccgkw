import SectionHeading from "./SectionHeading";

const services = [
  {
    day: "Sunday",
    name: "Kings Service",
    time: "9:00 AM",
    note: "Main worship experience",
  },
  {
    day: "Wednesday",
    name: "Word Encounter",
    time: "6:30 PM",
    note: "Mid-week Bible study",
  },
  {
    day: "Friday",
    name: "Prayer & Fire Night",
    time: "10:00 PM",
    note: "First Friday monthly",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About · Raising Kings"
          title="Raising Kings,"
          accent="Transforming the World."
          description="RCCG Kings World is a family of royals in Ile-Ife on assignment to raise kings and queens who transform every sphere of society by the power of the Holy Spirit."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: image mosaic */}
          <div className="lg:col-span-7 grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4 h-[540px] sm:h-[620px]">
            <TilePastor className="col-span-3 row-span-4" />
            <TileWorship className="col-span-3 row-span-3" />
            <TileCongregation className="col-span-2 row-span-2" />
            <TileYouth className="col-span-4 row-span-3" />
            <TileScripture className="col-span-2 row-span-2" />
          </div>

          {/* Right: service cards + mandate */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="glass rounded-3xl p-6">
              <div className="text-[11px] tracking-[0.35em] text-[#d4af37]/90 uppercase">
                The Mandate
              </div>
              <p className="mt-3 text-[#f5efe0]/85 text-lg leading-relaxed">
                Under the covering of the{" "}
                <span className="text-[#f4d160]">
                  Redeemed Christian Church of God
                </span>
                , Kings World exists to build believers into royalty — priests
                and kings ordained to shift atmospheres, cultures and nations.
              </p>
              <div className="mt-5 flex items-center gap-3 text-sm text-[#f5efe0]/60">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-[#d4af37]/15 ring-1 ring-[#d4af37]/40 font-display font-bold text-[#f4d160]">
                  P
                </span>
                <div>
                  <div className="text-[#f5efe0]">Pastor in Charge</div>
                  <div className="text-xs text-[#f5efe0]/50">
                    RCCG Kings World, Ile-Ife
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              {services.map((s) => (
                <div
                  key={s.day}
                  className="glass-burgundy rounded-2xl p-5 flex items-center justify-between gap-4 card-hover"
                >
                  <div>
                    <div className="text-[10px] tracking-[0.35em] text-[#d4af37] uppercase">
                      {s.day}
                    </div>
                    <div className="font-display text-xl mt-1">{s.name}</div>
                    <div className="text-xs text-[#f5efe0]/55 mt-1">
                      {s.note}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl text-gradient-gold">
                      {s.time}
                    </div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-[#f5efe0]/50">
                      WAT
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Decorative "image" tiles — pure CSS placeholders that look premium
   without needing external assets. Swap for real <Image /> when ready. */

function baseTile(children: React.ReactNode, extra = "") {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl ring-1 ring-[#d4af37]/20 ${extra}`}
    >
      {children}
      <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/5" />
    </div>
  );
}

function TilePastor({ className = "" }) {
  return (
    <div className={className}>
      {baseTile(
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 90% at 30% 20%, rgba(244,209,96,0.35), transparent 50%), radial-gradient(120% 90% at 80% 90%, rgba(139,21,56,0.6), transparent 55%), linear-gradient(180deg, #180b1c, #0b0f19)",
            }}
          />
          <div className="absolute inset-0 grid place-items-end p-5">
            <div>
              <div className="text-[10px] tracking-[0.35em] text-[#d4af37]">
                THE PULPIT
              </div>
              <div className="font-display text-2xl mt-1">Anointed Word</div>
            </div>
          </div>
          <SilhouettePastor />
        </>,
        "h-full"
      )}
    </div>
  );
}

function TileWorship({ className = "" }) {
  return (
    <div className={className}>
      {baseTile(
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 100%, rgba(212,175,55,0.35), transparent 55%), linear-gradient(180deg, #0b0f19, #1a0812)",
            }}
          />
          <div className="absolute inset-0 flex items-end p-5">
            <div>
              <div className="text-[10px] tracking-[0.35em] text-[#d4af37]">
                WORSHIP
              </div>
              <div className="font-display text-xl mt-1">Kingdom Sound</div>
            </div>
          </div>
          <HandsUp />
        </>,
        "h-full"
      )}
    </div>
  );
}

function TileCongregation({ className = "" }) {
  return (
    <div className={className}>
      {baseTile(
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(139,21,56,0.55), rgba(11,15,25,0.9)), radial-gradient(80% 60% at 50% 20%, rgba(244,209,96,0.4), transparent 60%)",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
            <div className="text-3xl font-display text-gradient-gold">1.2k</div>
            <div className="text-[10px] tracking-[0.3em] text-[#f5efe0]/70">
              FAMILY
            </div>
          </div>
        </div>,
        "h-full"
      )}
    </div>
  );
}

function TileYouth({ className = "" }) {
  return (
    <div className={className}>
      {baseTile(
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, #2a0a18 0%, #0b0f19 55%, #1a1206 100%)",
            }}
          />
          <PatternDots />
          <div className="absolute inset-0 flex items-end justify-between p-5">
            <div>
              <div className="text-[10px] tracking-[0.35em] text-[#d4af37]">
                YOUTH
              </div>
              <div className="font-display text-2xl mt-1">
                Fire Generation
              </div>
            </div>
            <div className="text-[10px] text-[#f5efe0]/50 text-right leading-tight">
              OAU corridor
              <br />
              Ile-Ife
            </div>
          </div>
        </>,
        "h-full"
      )}
    </div>
  );
}

function TileScripture({ className = "" }) {
  return (
    <div className={className}>
      {baseTile(
        <div
          className="absolute inset-0 flex flex-col items-start justify-between p-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(212,175,55,0.15), transparent 60%), linear-gradient(180deg, #10152a, #0b0f19)",
          }}
        >
          <div className="text-[10px] tracking-[0.35em] text-[#d4af37]">
            REV 1:6
          </div>
          <div className="font-display text-lg leading-snug text-[#f5efe0]">
            &ldquo;Made us kings and priests unto God.&rdquo;
          </div>
        </div>,
        "h-full"
      )}
    </div>
  );
}

function SilhouettePastor() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 w-full h-2/3 opacity-90"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b0f19" stopOpacity="0" />
          <stop offset="1" stopColor="#0b0f19" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g fill="#000" opacity="0.85">
        <circle cx="100" cy="70" r="24" />
        <path d="M60 200 C 60 130, 140 130, 140 200 Z" />
      </g>
      <rect x="0" y="120" width="200" height="80" fill="url(#pg)" />
    </svg>
  );
}

function HandsUp() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 w-full h-3/4 opacity-80"
      viewBox="0 0 300 200"
      preserveAspectRatio="xMidYMax slice"
    >
      {Array.from({ length: 10 }).map((_, i) => {
        const x = 10 + i * 28;
        const h = 60 + ((i * 37) % 60);
        return (
          <g key={i} fill="#000">
            <rect x={x} y={200 - h} width="10" height={h} rx="4" />
            <circle cx={x + 5} cy={200 - h - 6} r="6" />
          </g>
        );
      })}
      <rect x="0" y="150" width="300" height="50" fill="#0b0f19" />
    </svg>
  );
}

function PatternDots() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-25">
      <defs>
        <pattern id="dp" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#d4af37" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dp)" />
    </svg>
  );
}
