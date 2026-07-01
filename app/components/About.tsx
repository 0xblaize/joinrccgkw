import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  { day: "Sunday", name: "Kings Service", time: "9:00 AM", note: "Main worship experience" },
  { day: "Wednesday", name: "Word Encounter", time: "6:30 PM", note: "Mid-week Bible study" },
  { day: "Friday", name: "Prayer & Fire Night", time: "10:00 PM", note: "First Friday monthly" },
];

const stats = [
  { k: "Est.", v: "2010s" },
  { k: "City", v: "Ile-Ife" },
  { k: "Family", v: "1.2k+" },
  { k: "Mission", v: "Global" },
];

export default function About() {
  return (
    <section id="about" className="section relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About · Raising Kings"
          title="Raising Kings,"
          accent="transforming the world."
          description="RCCG Kings World is a family of royals in Ile-Ife on assignment to raise kings and queens who transform every sphere of society by the power of the Holy Spirit."
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Portrait tile */}
          <Reveal className="lg:col-span-5" large>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] surface">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(80% 60% at 30% 20%, rgba(168,30,79,0.35), transparent 60%), linear-gradient(180deg, #0a0405, #000)",
                }}
              />
              <SilhouettePastor />
              <div className="scanlines absolute inset-0" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.9) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="eyebrow-burgundy">The Pulpit</div>
                <div className="mt-2 font-display text-3xl leading-tight">
                  Pastor in Charge
                </div>
                <div className="text-white/50 text-sm mt-1">
                  RCCG Kings World, Ile-Ife
                </div>
              </div>
            </div>
          </Reveal>

          {/* Mandate + services */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal delay={80}>
              <div className="surface rounded-3xl p-8">
                <div className="eyebrow-burgundy">The Mandate</div>
                <p className="mt-4 font-display text-2xl sm:text-3xl leading-snug text-white/90">
                  Under the covering of the{" "}
                  <span className="font-editorial text-[color:var(--burgundy-2)]">
                    Redeemed Christian Church of God
                  </span>
                  , Kings World exists to build believers into royalty — priests
                  and kings ordained to shift atmospheres, cultures and nations.
                </p>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {stats.map((s) => (
                    <div key={s.k} className="hair-t pt-3">
                      <div className="eyebrow">{s.k}</div>
                      <div className="mt-1 font-display text-2xl">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid gap-3">
              {services.map((s, idx) => (
                <Reveal key={s.day} delay={120 + idx * 80}>
                  <div className="group surface rounded-2xl p-6 flex items-center justify-between gap-4 hover:border-[color:var(--burgundy-2)] transition-colors">
                    <div>
                      <div className="eyebrow-burgundy">{s.day}</div>
                      <div className="font-display text-2xl mt-1">{s.name}</div>
                      <div className="text-xs text-white/50 mt-1">{s.note}</div>
                    </div>
                    <div className="text-right">
                      <div className="tabular font-display text-3xl sm:text-4xl">
                        {s.time}
                      </div>
                      <div className="eyebrow text-white/40">WAT</div>
                    </div>
                    <span className="hidden sm:grid place-items-center w-10 h-10 rounded-full border border-white/15 group-hover:bg-[color:var(--burgundy)] group-hover:border-[color:var(--burgundy)] transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
                      </svg>
                    </span>
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

function SilhouettePastor() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 w-full h-4/5"
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <radialGradient id="rim" cx="0.5" cy="0.3" r="0.6">
          <stop offset="0" stopColor="rgba(168,30,79,0.35)" />
          <stop offset="1" stopColor="rgba(168,30,79,0)" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#rim)" />
      <g fill="#000">
        <circle cx="200" cy="180" r="60" />
        <path d="M100 500 C 100 320, 300 320, 300 500 Z" />
      </g>
    </svg>
  );
}
