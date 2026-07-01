import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const impact = [
  { k: "Missions", v: "12 nations" },
  { k: "Media", v: "Broadcast" },
  { k: "Outreach", v: "Ile-Ife" },
  { k: "Building", v: "Next phase" },
];

export default function Give() {
  return (
    <section id="give" className="section-2 relative py-28 sm:py-36 hair-y overflow-hidden">
      {/* Ambient burgundy */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(168,30,79,0.35), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Give · Advancing the Kingdom"
              title="Your generosity"
              accent="builds the church."
              description="Every seed sown here plants the gospel deeper in Ile-Ife, sends missionaries, funds our media, and fuels ministry to the next generation. Thank you for your partnership."
            />
            <Reveal delay={200}>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {impact.map((s) => (
                  <div key={s.k} className="hair-t pt-3">
                    <div className="eyebrow">{s.k}</div>
                    <div className="mt-1 font-display text-xl">{s.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Give card */}
          <Reveal className="lg:col-span-6" large delay={100}>
            <div className="relative">
              <div className="relative surface rounded-3xl p-8 sm:p-10 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-60"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(168,30,79,0.45), transparent 70%)",
                  }}
                />
                <div className="relative flex items-center justify-between">
                  <div className="eyebrow-burgundy">Kings World · Giving</div>
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path
                      d="M12 21s-7-4.4-7-10a4.5 4.5 0 018-2.8A4.5 4.5 0 0119 11c0 5.6-7 10-7 10z"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="relative mt-8">
                  <div className="eyebrow">Amount</div>
                  <div className="mt-2 flex items-end gap-2 tabular">
                    <span className="font-display text-6xl sm:text-7xl leading-none">
                      ₦10,000
                    </span>
                    <span className="text-white/40 pb-2 text-sm">.00</span>
                  </div>
                </div>

                <div className="relative mt-6 grid grid-cols-4 gap-2">
                  {[1000, 5000, 10000, 25000].map((a) => (
                    <button
                      key={a}
                      className="hair-y py-3 text-xs font-semibold tracking-widest hover:bg-white/5 hover:text-[color:var(--burgundy-2)] transition-colors tabular"
                    >
                      ₦{a.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div className="relative mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#give-online"
                    className="flex-1 h-14 grid place-items-center rounded-full btn-primary text-sm font-semibold tracking-[0.25em] uppercase"
                  >
                    Give Online
                  </a>
                  <a
                    href="#give-transfer"
                    className="flex-1 h-14 grid place-items-center rounded-full btn-ghost text-sm font-semibold tracking-[0.25em] uppercase"
                  >
                    Bank Transfer
                  </a>
                </div>

                <div className="relative mt-6 pt-5 hair-t text-xs text-white/40 flex items-center justify-between">
                  <span>Secure · SSL · Paystack</span>
                  <span className="text-[color:var(--burgundy-2)]">Malachi 3:10</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
