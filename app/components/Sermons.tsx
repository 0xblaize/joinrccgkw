import SectionHeading from "./SectionHeading";

const sermons = [
  {
    title: "The Weight of the Crown",
    speaker: "Pastor J.",
    date: "May 26, 2026",
    duration: "48 min",
    tag: "IDENTITY",
    grad:
      "linear-gradient(135deg, rgba(139,21,56,0.85), rgba(11,15,25,0.9)), radial-gradient(60% 60% at 30% 20%, rgba(244,209,96,0.5), transparent 60%)",
  },
  {
    title: "Fire Fell — Consecrated for Assignment",
    speaker: "Pastor A.",
    date: "May 19, 2026",
    duration: "52 min",
    tag: "HOLY SPIRIT",
    grad:
      "linear-gradient(135deg, rgba(212,175,55,0.55), rgba(11,15,25,0.9)), radial-gradient(60% 60% at 70% 30%, rgba(139,21,56,0.65), transparent 60%)",
  },
  {
    title: "Kings Don't Kneel to Culture",
    speaker: "Pastor T.",
    date: "May 12, 2026",
    duration: "46 min",
    tag: "KINGDOM",
    grad:
      "linear-gradient(135deg, rgba(11,15,25,0.9), rgba(139,21,56,0.75)), radial-gradient(60% 60% at 50% 100%, rgba(244,209,96,0.55), transparent 60%)",
  },
];

export default function Sermons() {
  return (
    <section id="sermons" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Sermons · Media & Messages"
            title="Word that"
            accent="hits different."
            description="Fresh, uncompromising, spirit-filled preaching from the Kings World pulpit. Stream it, subscribe, take it into your week."
          />
          <a
            href="#archive"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full btn-outline-gold text-sm font-semibold tracking-widest uppercase"
          >
            View Sermon Archive
          </a>
        </div>

        {/* Netflix-style carousel */}
        <div className="mt-14 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="marquee-mask overflow-x-auto scroll-smooth snap-x snap-mandatory">
            <div className="flex gap-5 px-4 sm:px-6 lg:px-8 pb-6">
              {sermons.map((s, i) => (
                <article
                  key={s.title}
                  className="snap-start shrink-0 w-[86%] sm:w-[520px] group"
                >
                  <div
                    className="relative aspect-[16/10] rounded-3xl overflow-hidden ring-1 ring-[#d4af37]/25 card-hover"
                    style={{ background: s.grad }}
                  >
                    {/* pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-25">
                      <defs>
                        <pattern
                          id={`p${i}`}
                          width="14"
                          height="14"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M0 14L14 0"
                            stroke="rgba(244,209,96,0.5)"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#p${i})`} />
                    </svg>

                    {/* tag + duration */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="glass text-[10px] tracking-[0.3em] uppercase px-2.5 py-1 rounded-full text-[#f4d160]">
                        {s.tag}
                      </span>
                      <span className="glass text-[10px] uppercase px-2.5 py-1 rounded-full text-white/70">
                        {s.duration}
                      </span>
                    </div>

                    {/* Play button */}
                    <button
                      aria-label={`Play ${s.title}`}
                      className="absolute inset-0 grid place-items-center"
                    >
                      <span className="relative grid place-items-center w-20 h-20 rounded-full btn-gold group-hover:scale-110 transition-transform">
                        <span className="absolute inset-0 rounded-full blur-xl bg-[#d4af37]/40" />
                        <svg
                          className="relative w-7 h-7 fill-[#0b0f19] translate-x-0.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>

                    {/* Bottom bar */}
                    <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/70 to-transparent">
                      <h3 className="font-display text-2xl sm:text-3xl leading-tight">
                        {s.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-3 text-xs text-[#f5efe0]/60">
                        <span>{s.speaker}</span>
                        <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                        <span>{s.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
