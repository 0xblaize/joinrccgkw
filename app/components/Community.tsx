import SectionHeading from "./SectionHeading";

const tribes = [
  {
    tag: "KINGS KIDS",
    name: "Children's Ministry",
    body: "A safe, spirit-filled space where our little kings and queens encounter Jesus through play, story and worship.",
    ages: "Ages 2 – 12",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 3l2 5h5l-4 3 1.5 5-4.5-3-4.5 3L8 11 4 8h5l3-5z" strokeLinejoin="round" />
      </svg>
    ),
    accent: "from-[#f4d160] to-[#8b1538]",
  },
  {
    tag: "YOUTH & YA",
    name: "Fire Generation",
    body: "For students of OAU and young adults chasing purpose. Real conversations, deep worship, real friendships.",
    ages: "Ages 13 – 30",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 2s4 4 4 8a4 4 0 11-8 0c0-2 1-3 2-4 0 3 2 3 2 3s0-3-1-5c1 0 1-2 1-2z" strokeLinejoin="round" />
      </svg>
    ),
    accent: "from-[#8b1538] to-[#f4d160]",
  },
  {
    tag: "LIFE GROUPS",
    name: "Mid-week Cells",
    body: "Small circles across Ile-Ife where we do life — Bible, prayer, food, tears, testimonies. Family, not audience.",
    ages: "All ages",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="8" cy="10" r="3" />
        <circle cx="16" cy="10" r="3" />
        <path d="M3 20c1-3 4-4 5-4M21 20c-1-3-4-4-5-4M9 20c1-2 4-3 6 0" strokeLinecap="round" />
      </svg>
    ),
    accent: "from-[#d4af37] to-[#3b82f6]",
  },
];

export default function Community() {
  return (
    <section id="community" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Community · Find Your Tribe"
            title="Church isn't done"
            accent="alone."
            description="Kings World is a family. Pick the tribe that fits your season — everyone has a place at the table."
          />
          <a
            href="#life-groups"
            className="inline-flex items-center gap-2 text-sm text-[#f4d160] hover:text-white transition-colors"
          >
            Explore all groups
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {tribes.map((t, i) => (
            <div
              key={t.tag}
              className="group relative glass rounded-3xl p-7 card-hover overflow-hidden"
            >
              {/* accent halo */}
              <div
                className={`pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity bg-gradient-to-br ${t.accent}`}
              />
              <div className="relative flex items-start justify-between">
                <div className="grid place-items-center w-12 h-12 rounded-2xl glass-burgundy text-[#f4d160]">
                  {t.icon}
                </div>
                <span className="text-[10px] tracking-[0.35em] text-[#d4af37]/80">
                  0{i + 1}
                </span>
              </div>
              <div className="relative mt-8">
                <div className="text-[10px] tracking-[0.35em] text-[#d4af37]">
                  {t.tag}
                </div>
                <h3 className="mt-2 font-display text-3xl">{t.name}</h3>
                <p className="mt-3 text-[#f5efe0]/70 leading-relaxed">
                  {t.body}
                </p>
              </div>
              <div className="relative mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-[#f5efe0]/50">{t.ages}</span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#f4d160] group-hover:gap-3 transition-all">
                  Join
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
