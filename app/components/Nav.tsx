"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const TABS = [
  { label: "About", href: "#about" },
  { label: "Community", href: "#community" },
  { label: "Sermons", href: "#sermons" },
  { label: "Give", href: "#give" },
  { label: "Visit", href: "#map" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-black/85 backdrop-blur hair-b" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#top" aria-label="Kings World home">
              <Logo />
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {TABS.map((t) => (
                <a
                  key={t.label}
                  href={t.href}
                  className="link-underline text-sm text-white/75 hover:text-white transition-colors"
                >
                  {t.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#join"
                className="hidden sm:inline-flex items-center h-10 px-5 rounded-full btn-primary text-sm font-medium"
              >
                Join Us
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-white/20"
              >
                <span className="flex flex-col gap-1.5">
                  <span
                    className={`h-px w-5 bg-white transition-transform ${
                      open ? "translate-y-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-px w-5 bg-white transition-opacity ${
                      open ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-px w-5 bg-white transition-transform ${
                      open ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-10 h-full flex flex-col">
          <nav className="flex-1 flex flex-col justify-center gap-1">
            {TABS.map((t) => (
              <a
                key={t.label}
                href={t.href}
                onClick={() => setOpen(false)}
                className="hair-b py-5 flex items-center justify-between text-2xl text-white/90 hover:text-white"
              >
                {t.label}
                <span className="text-white/40">→</span>
              </a>
            ))}
          </nav>
          <a
            href="#join"
            onClick={() => setOpen(false)}
            className="h-12 grid place-items-center rounded-full btn-primary text-sm font-medium"
          >
            Join Us
          </a>
        </div>
      </div>
    </>
  );
}
