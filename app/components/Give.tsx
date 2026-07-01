import SectionHeading from "./SectionHeading";

export default function Give() {
  return (
    <section id="give" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gold wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, rgba(244,209,96,0.18), transparent 70%), radial-gradient(60% 60% at 80% 100%, rgba(139,21,56,0.35), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Give · Advancing the Kingdom"
              title="Your generosity"
              accent="builds the church."
              description="Every seed sown here plants the gospel deeper in Ile-Ife, sends missionaries, funds our media, and fuels ministry to the next generation. Thank you for your partnership."
            />

            <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
              {[
                { k: "Tithes", v: "10%" },
                { k: "Offerings", v: "Free" },
                { k: "Missions", v: "Seed" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="glass rounded-2xl px-4 py-4 text-center"
                >
                  <div className="text-[10px] tracking-[0.3em] text-[#d4af37]/80 uppercase">
                    {s.k}
                  </div>
                  <div className="mt-1 font-display text-lg text-gradient-gold">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gold card */}
          <div className="relative">
            <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-[#f4d160] via-[#d4af37] to-[#6a0f2a]">
              <div className="relative rounded-3xl bg-[#0b0f19] p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] tracking-[0.35em] text-[#d4af37]">
                    KINGS WORLD · GIVING
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-[#f4d160]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 3l2.5 5 5.5.8-4 4 1 5.7L12 15.8 7 18.5l1-5.7-4-4 5.5-.8L12 3z"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="mt-8">
                  <div className="text-[11px] tracking-[0.3em] uppercase text-[#f5efe0]/50">
                    Amount
                  </div>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="font-display text-5xl sm:text-6xl text-gradient-gold leading-none">
                      ₦10,000
                    </span>
                    <span className="text-[#f5efe0]/50 pb-2 text-sm">.00</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-2">
                  {[1000, 5000, 10000, 25000].map((a) => (
                    <button
                      key={a}
                      className="glass rounded-xl h-10 text-xs font-semibold tracking-wider hover:text-[#f4d160]"
                    >
                      ₦{a.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#give-online"
                    className="flex-1 h-12 grid place-items-center rounded-full btn-gold text-sm font-semibold tracking-widest uppercase"
                  >
                    Give Online (Card)
                  </a>
                  <a
                    href="#give-transfer"
                    className="flex-1 h-12 grid place-items-center rounded-full btn-outline-gold text-sm font-semibold tracking-widest uppercase"
                  >
                    Bank Transfer
                  </a>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 text-xs text-[#f5efe0]/50 flex items-center justify-between">
                  <span>Secure · SSL · Paystack</span>
                  <span className="text-[#f4d160]">Malachi 3:10</span>
                </div>
              </div>
            </div>
            {/* Floating glow */}
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] blur-3xl opacity-40 bg-[#d4af37]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
