"use client";

import Logo from "./Logo";

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
    <footer id="footer" className="relative pt-24 pb-10">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px hairline"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-[#f5efe0]/60 max-w-xs">
              Raising Kings, transforming the world — one family, one city, one
              generation at a time. Based in Ile-Ife under the covering of the
              RCCG.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Social
                label="Instagram"
                href="https://instagram.com"
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
          </div>

          <div>
            <div className="text-[10px] tracking-[0.35em] text-[#d4af37] uppercase">
              Quick Links
            </div>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#f5efe0]/75 hover:text-[#f4d160] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.35em] text-[#d4af37] uppercase">
              Member Access
            </div>
            <ul className="mt-5 space-y-3">
              {memberLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#f5efe0]/75 hover:text-[#f4d160] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.35em] text-[#d4af37] uppercase">
              Newsletter
            </div>
            <p className="mt-5 text-sm text-[#f5efe0]/60">
              Weekly word, sermon drops, and event updates — straight to your
              inbox.
            </p>
            <form
              className="mt-4 glass rounded-full p-1 flex items-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-[#f5efe0]/40 focus:outline-none"
              />
              <button
                type="submit"
                className="h-9 px-4 rounded-full btn-gold text-xs font-bold tracking-widest uppercase"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-[10px] tracking-widest uppercase text-[#f5efe0]/40">
              We respect your inbox. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#f5efe0]/45">
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
      className="grid place-items-center w-10 h-10 rounded-full glass hover:text-[#f4d160] text-[#f5efe0]/70 transition-colors"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d={path} />
      </svg>
    </a>
  );
}
