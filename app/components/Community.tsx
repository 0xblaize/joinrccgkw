import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tribes = [
  {
    tag: "01 · Kings Kids",
    name: "Children's Ministry",
    body: "A safe, spirit-filled space where our little kings and queens encounter Jesus through play, story and worship.",
    ages: "Ages 2 – 12",
  },
  {
    tag: "02 · Fire Generation",
    name: "Youth & Young Adults",
    body: "For students of OAU and young adults chasing purpose. Real conversations, deep worship, real friendships.",
    ages: "Ages 13 – 30",
  },
  {
    tag: "03 · Life Groups",
    name: "Mid-week Cells",
    body: "Small circles across Ile-Ife where we do life — Bible, prayer, food, tears, testimonies. Family, not audience.",
    ages: "All ages",
  },
];

export default function Community() {
  return (
    <section id="community" className="section-2 relative py-28 sm:py-36 hair-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Community · Find Your Tribe"
            title="Church isn't done"
            accent="alone."
            description="Kings World is a family. Pick the tribe that fits your season — everyone has a place at the table."
          />
          <Reveal delay={200}>
            <a
              href="#groups"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[color:var(--burgundy-2)] link-underline"
            >
              Explore all groups
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
              </svg>
            </a>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
          {tribes.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} large>
              <article className="group relative surface rounded-3xl p-8 h-full min-h-[380px] flex flex-col overflow-hidden transition-colors duration-500 hover:border-[color:var(--burgundy-2)]">
                {/* Burgundy sweep on hover */}
                <div
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 0%, rgba(168,30,79,0.22), transparent 70%)",
                  }}
                />
                <div className="relative flex items-center justify-between">
                  <span className="eyebrow-burgundy">{t.tag}</span>
                  <span className="text-white/25 text-xs tabular">
                    0{i + 1}/03
                  </span>
                </div>
                <h3 className="relative mt-8 font-display text-4xl leading-none">
                  {t.name}
                </h3>
                <p className="relative mt-4 text-white/60 leading-relaxed">
                  {t.body}
                </p>
                <div className="relative mt-auto pt-8 hair-t flex items-center justify-between">
                  <span className="text-xs text-white/40">{t.ages}</span>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-white group-hover:text-[color:var(--burgundy-2)] transition-colors">
                    Join
                    <span className="w-8 h-px bg-current transition-all duration-500 group-hover:w-12" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
