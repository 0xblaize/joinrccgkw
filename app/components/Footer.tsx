"use client";

import Logo from "./Logo";
import Reveal from "./Reveal";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Community", href: "#community" },
  { label: "Sermons", href: "#sermons" },
  { label: "Give", href: "#give" },
  { label: "Visit", href: "#map" },
];

const memberLinks = [
  { label: "Portal Login", href: "#portal" },
  { label: "Create Account", href: "#signup" },
  { label: "Sunday Check-in", href: "#checkin" },
  { label: "Birthdays", href: "#birthdays" },
];

export default function Footer() {
  return (
    <footer id="footer" className="section relative pt-28 pb-10 overflow-hidden">
      {/* Enormous burgundy glow on wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[110%] h-[400px] blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(168,30,79,0.6), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <Reveal>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-white/55 max-w-xs">
              Raising Kings, transforming the world — one family, one city, one
              generation at a time. Based in Ile-Ife under the covering of the
              RCCG.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Social
                label="Instagram"
                href="https://instagram.com/rccgkpife"
                path="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.4.5.7.3 1.3.6 1.9 1.2.6.6.9 1.2 1.2 1.9.3.6.5 1.3.5 2.4C22 9.2 22 9.5 22 12s0 2.8-.1 3.9c0 1.1-.2 1.8-.5 2.4-.3.7-.6 1.3-1.2 1.9-.6.6-1.2.9-1.9 1.2-.6.3-1.3.5-2.4.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.4-.5-.7-.3-1.3-.6-1.9-1.2-.6-.6-.9-1.2-1.2-1.9-.3-.6-.5-1.3-.5-2.4C2 14.8 2 14.5 2 12s0-2.8.1-3.9c0-1.1.2-1.8.5-2.4.3-.7.6-1.3 1.2-1.9.6-.6 1.2-.9 1.9-1.2.6-.3 1.3-.5 2.4-.5C9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 9a3 3 0 110 6 3 3 0 010-6z"
              />
              <Social
                label="YouTube"
                href="https://youtube.com"
                path="M23 12s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.9-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7zM10 15.5v-7l6 3.5-6 3.5z"
              />
              <Social
                label="Twitter"
                href="https://twitter.com"
                path="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4 4 0 00-6.9 3.6C8.4 8.6 5.2 6.9 3 4.3a4 4 0 001.2 5.4c-.7 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.2 4-.7.2-1.4.2-2.1.1.6 1.7 2.2 2.9 4.1 2.9A8 8 0 012 17.9 11.4 11.4 0 008.2 20c7.4 0 11.5-6.2 11.5-11.5v-.5c.8-.6 1.5-1.3 2.3-2.1z"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="eyebrow-burgundy">Quick Links</div>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors link-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <div className="eyebrow-burgundy">Member Access</div>
            <ul className="mt-5 space-y-3">
              {memberLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[color:var(--burgundy-2)]" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={240}>
            <div className="eyebrow-burgundy">Newsletter</div>
            <p className="mt-5 text-sm text-white/55">
              Weekly word, sermon drops, and event updates — straight to your
              inbox.
            </p>
            <form
              className="mt-4 flex items-center gap-2 hair-b pb-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 bg-transparent text-sm placeholder:text-white/30 focus:outline-none py-2"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid place-items-center w-10 h-10 rounded-full btn-primary"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
                </svg>
              </button>
            </form>
            <p className="mt-3 text-[10px] tracking-widest uppercase text-white/40">
              We respect your inbox.
            </p>
          </Reveal>
        </div>

        {/* Enormous wordmark */}
        <Reveal large>
          <div className="mt-20 select-none">
            <div className="font-display font-black leading-[0.85] text-[18vw] sm:text-[16vw] tracking-tight shimmer-text">
              KINGS WORLD
            </div>
          </div>
        </Reveal>

        <div className="mt-8 pt-6 hair-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© 2026 RCCG Kings World, Ile-Ife. All rights reserved.</span>
          <span className="tracking-widest uppercase">
            Made in Ile-Ife · For the Kingdom
          </span>
        </div>
      </div>
    </footer>
  );
}

function Social({
  label,
  href,
  path,
}: {
  label: string;
  href: string;
  path: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid place-items-center w-10 h-10 rounded-full border border-white/15 hover:bg-[color:var(--burgundy)] hover:border-[color:var(--burgundy)] transition-colors"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d={path} />
      </svg>
    </a>
  );
}
