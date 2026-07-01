import SectionHeading from "./SectionHeading";

export default function MapSection() {
  return (
    <section id="map" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Map · Visit Us"
          title="Come find us in"
          accent="Ile-Ife."
          description="We meet in the ancient city where Nigeria was born. There's a seat with your name on it — pull up this Sunday."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Map canvas */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden ring-1 ring-[#d4af37]/25 h-[420px] sm:h-[520px]">
            <StylizedMap />

            {/* Pin */}
            <div className="absolute left-[52%] top-[46%] -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-2xl bg-[#d4af37]/60 w-24 h-24 -translate-x-9 -translate-y-9" />
                <div className="relative grid place-items-center w-14 h-14 rounded-full btn-gold ring-4 ring-[#0b0f19] glow-gold">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0b0f19]">
                    <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="glass px-3 py-1.5 rounded-full text-[11px] tracking-widest uppercase text-[#f4d160]">
                    Kings World · Ile-Ife
                  </div>
                </div>
              </div>
            </div>

            {/* HUD */}
            <div className="absolute top-4 left-4 glass rounded-2xl px-4 py-3">
              <div className="text-[10px] tracking-[0.35em] text-[#d4af37]/80 uppercase">
                Coordinates
              </div>
              <div className="mt-1 font-mono text-sm">7.4905° N, 4.5521° E</div>
            </div>
            <div className="absolute bottom-4 right-4 glass rounded-2xl px-3 py-2 text-[10px] tracking-widest uppercase text-[#f5efe0]/60">
              Ile-Ife · Osun State
            </div>
          </div>

          {/* Contact panel */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="glass-burgundy rounded-3xl p-6">
              <div className="text-[10px] tracking-[0.35em] text-[#d4af37]">
                ADDRESS
              </div>
              <div className="mt-2 font-display text-xl leading-snug">
                RCCG Kings World
                <br />
                Ile-Ife, Osun State
                <br />
                Nigeria
              </div>
            </div>

            <a
              href="mailto:hello@rccgkingsworld.org"
              className="glass rounded-3xl p-6 card-hover flex items-center justify-between"
            >
              <div>
                <div className="text-[10px] tracking-[0.35em] text-[#d4af37]">
                  EMAIL
                </div>
                <div className="mt-2 font-display text-lg">
                  hello@rccgkingsworld.org
                </div>
              </div>
              <ArrowIcon />
            </a>

            <a
              href="tel:+2340000000000"
              className="glass rounded-3xl p-6 card-hover flex items-center justify-between"
            >
              <div>
                <div className="text-[10px] tracking-[0.35em] text-[#d4af37]">
                  PHONE
                </div>
                <div className="mt-2 font-display text-lg">
                  +234 000 000 0000
                </div>
              </div>
              <ArrowIcon />
            </a>

            <a
              href="https://maps.google.com/?q=Ile-Ife,Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 h-12 grid place-items-center rounded-full btn-gold text-sm font-semibold tracking-widest uppercase"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <span className="grid place-items-center w-10 h-10 rounded-full glass">
      <svg
        className="w-4 h-4 text-[#f4d160]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
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
          "radial-gradient(60% 60% at 50% 40%, rgba(139,21,56,0.35), transparent 70%), linear-gradient(180deg, #0b0f19, #10152a)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 520"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="road" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#d4af37" stopOpacity="0.05" />
            <stop offset="0.5" stopColor="#d4af37" stopOpacity="0.55" />
            <stop offset="1" stopColor="#d4af37" stopOpacity="0.05" />
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M40 0H0V40"
              fill="none"
              stroke="rgba(244,209,96,0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* subtle grid */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* land blobs */}
        <g fill="rgba(139,21,56,0.12)" stroke="rgba(212,175,55,0.25)">
          <path d="M60 340 C 120 260, 260 260, 310 320 C 360 380, 320 460, 220 460 C 120 460, 40 420, 60 340 Z" />
          <path d="M470 90 C 560 60, 700 90, 720 180 C 740 260, 660 300, 570 280 C 470 260, 420 160, 470 90 Z" />
          <path d="M480 360 C 540 320, 700 340, 720 420 C 740 490, 620 500, 540 480 C 460 460, 430 400, 480 360 Z" />
        </g>

        {/* roads */}
        <g stroke="url(#road)" strokeWidth="2" fill="none">
          <path d="M0 260 C 200 240, 300 300, 420 250 C 540 200, 640 260, 800 240" />
          <path d="M420 0 C 400 120, 440 220, 420 260 C 400 320, 460 400, 440 520" />
          <path d="M100 520 C 180 420, 300 360, 420 260" />
          <path d="M420 260 C 540 320, 680 340, 800 300" />
        </g>

        {/* landmarks */}
        <g fill="rgba(244,209,96,0.35)">
          <circle cx="200" cy="330" r="2" />
          <circle cx="620" cy="200" r="2" />
          <circle cx="620" cy="420" r="2" />
          <circle cx="330" cy="420" r="2" />
          <circle cx="700" cy="120" r="2" />
        </g>

        {/* neighborhood labels */}
        <g
          fill="rgba(245,239,224,0.35)"
          fontSize="10"
          fontFamily="monospace"
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
