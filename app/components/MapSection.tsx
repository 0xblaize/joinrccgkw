import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function MapSection() {
  return (
    <section id="map" className="section relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit · Map"
          title="Come find us in"
          accent="Ile-Ife."
          description="We meet in the ancient city where Nigeria was born. There's a seat with your name on it — pull up this Sunday."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-8" large>
            <div className="relative rounded-3xl overflow-hidden surface h-[440px] sm:h-[560px]">
              <StylizedMap />
              <div className="absolute left-[52%] top-[46%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 w-24 h-24 -translate-x-9 -translate-y-9 rounded-full bg-[color:var(--burgundy-2)]/40 blur-2xl blink" />
                  <div className="relative grid place-items-center w-14 h-14 rounded-full bg-[color:var(--burgundy)] ring-4 ring-black">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                    </svg>
                  </div>
                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="surface px-3 py-1.5 rounded-full text-[11px] tracking-[0.3em] uppercase text-white">
                      Kings World · Ile-Ife
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 surface rounded-2xl px-4 py-3">
                <div className="eyebrow">Coordinates</div>
                <div className="mt-1 font-mono text-sm tabular">
                  7.4905° N · 4.5521° E
                </div>
              </div>
              <div className="absolute bottom-4 right-4 surface rounded-full px-3 py-1.5 text-[10px] tracking-[0.3em] uppercase text-white/60">
                Ile-Ife · Osun State
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <Reveal delay={100}>
              <div className="surface-burgundy rounded-3xl p-6">
                <div className="eyebrow-burgundy">Address</div>
                <div className="mt-3 font-display text-2xl leading-snug">
                  RCCG Kings World
                  <br />
                  Ile-Ife, Osun State
                  <br />
                  Nigeria
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <a
                href="mailto:hello@rccgkingsworld.org"
                className="group surface rounded-3xl p-6 flex items-center justify-between hover:border-[color:var(--burgundy-2)] transition-colors"
              >
                <div>
                  <div className="eyebrow">Email</div>
                  <div className="mt-2 font-display text-lg">
                    hello@rccgkingsworld.org
                  </div>
                </div>
                <ArrowIcon />
              </a>
            </Reveal>

            <Reveal delay={240}>
              <a
                href="tel:+2340000000000"
                className="group surface rounded-3xl p-6 flex items-center justify-between hover:border-[color:var(--burgundy-2)] transition-colors"
              >
                <div>
                  <div className="eyebrow">Phone</div>
                  <div className="mt-2 font-display text-lg tabular">
                    +234 000 000 0000
                  </div>
                </div>
                <ArrowIcon />
              </a>
            </Reveal>

            <Reveal delay={300}>
              <a
                href="https://maps.google.com/?q=Ile-Ife,Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 h-14 grid place-items-center rounded-full btn-primary text-sm font-semibold tracking-[0.25em] uppercase"
              >
                Get Directions
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <span className="grid place-items-center w-10 h-10 rounded-full border border-white/15 group-hover:bg-[color:var(--burgundy)] group-hover:border-[color:var(--burgundy)] transition-colors">
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function StylizedMap() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(60% 60% at 50% 40%, rgba(74,15,34,0.55), transparent 70%), linear-gradient(180deg, #000, #050203)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 560"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="road" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(168,30,79,0.05)" />
            <stop offset="0.5" stopColor="rgba(168,30,79,0.7)" />
            <stop offset="1" stopColor="rgba(168,30,79,0.05)" />
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M40 0H0V40"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <g fill="rgba(168,30,79,0.10)" stroke="rgba(168,30,79,0.35)">
          <path d="M60 340 C 120 260, 260 260, 310 320 C 360 380, 320 460, 220 460 C 120 460, 40 420, 60 340 Z" />
          <path d="M470 90 C 560 60, 700 90, 720 180 C 740 260, 660 300, 570 280 C 470 260, 420 160, 470 90 Z" />
          <path d="M480 360 C 540 320, 700 340, 720 420 C 740 490, 620 500, 540 480 C 460 460, 430 400, 480 360 Z" />
        </g>
        <g stroke="url(#road)" strokeWidth="2" fill="none">
          <path d="M0 260 C 200 240, 300 300, 420 250 C 540 200, 640 260, 800 240" />
          <path d="M420 0 C 400 120, 440 220, 420 260 C 400 320, 460 400, 440 560" />
          <path d="M100 560 C 180 420, 300 360, 420 260" />
          <path d="M420 260 C 540 320, 680 340, 800 300" />
        </g>
        <g
          fill="rgba(255,255,255,0.4)"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
          letterSpacing="2"
        >
          <text x="120" y="310">OAU</text>
          <text x="600" y="150">MAYFAIR</text>
          <text x="600" y="450">MOORE</text>
          <text x="290" y="450">LAGERE</text>
        </g>
      </svg>
    </div>
  );
}
