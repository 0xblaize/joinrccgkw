import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Give() {
  return (
    <section id="give" className="bg-black py-24 sm:py-28 hair-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <SectionHeading
              chapter="04"
              eyebrow="Give"
              title="Give and be a part."
              description="Your giving supports Sunday service, our missions, media work, and outreach across Ile-Ife. Thank you for partnering with us."
            />
          </div>

          <Reveal>
            <div className="card rounded-2xl p-6 sm:p-8">
              <div className="eyebrow-burgundy">Kings World Giving</div>
              <div className="mt-4">
                <div className="eyebrow">Suggested amount</div>
                <div className="mt-1 tabular font-display text-4xl sm:text-5xl">
                  ₦10,000
                </div>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-2">
                {[1000, 5000, 10000, 25000].map((a) => (
                  <button
                    key={a}
                    className="hair-y py-3 text-xs font-medium hover:bg-white/5 hover:text-[color:var(--burgundy-2)] transition-colors tabular"
                  >
                    ₦{a.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="/portal/give"
                  className="flex-1 h-12 grid place-items-center rounded-full btn-primary text-sm font-medium"
                >
                  Give Online
                </a>
                <a
                  href="/portal/give"
                  className="flex-1 h-12 grid place-items-center rounded-full btn-ghost text-sm font-medium"
                >
                  Bank Transfer
                </a>
              </div>

              <div className="mt-5 pt-4 hair-t text-xs text-white/40 flex items-center justify-between">
                <span>Secure payment by Paystack</span>
                <span className="text-[color:var(--burgundy-2)]">Malachi 3:10</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
