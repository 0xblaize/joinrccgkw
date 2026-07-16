"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { HYMNS } from "../_lib/data";
import { ChevronLeft, SearchIcon, CloseIcon, BookIcon } from "../_components/icons";

export default function HymnalPage() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return HYMNS;
    return HYMNS.filter(
      (h) =>
        h.title.toLowerCase().includes(q) ||
        String(h.number).includes(q) ||
        (h.author ?? "").toLowerCase().includes(q) ||
        h.verses.some((v) => v.toLowerCase().includes(q))
    );
  }, [query]);

  const open = openId != null ? HYMNS.find((h) => h.id === openId) : null;

  // ---- Reading view (single hymn, large text) ----
  if (open) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setOpenId(null)}
          className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
        >
          <ChevronLeft width={18} height={18} /> All hymns
        </button>

        <header className="hero-card p-6 sm:p-8 animate-rise">
          <div className="eyebrow text-white/70 mb-2">Hymn {open.number}</div>
          <h1 className="font-display font-semibold text-3xl sm:text-4xl leading-tight">
            {open.title}
          </h1>
          {open.author && (
            <p className="mt-2 text-sm text-white/60">{open.author}</p>
          )}
        </header>

        <div className="grid sm:grid-cols-2 gap-4">
          {open.verses.map((verse, i) => {
            const isChorus = verse.length < 90 && i % 2 === 1;
            return (
              <div
                key={i}
                className={`glass p-5 ${isChorus ? "sm:col-span-2" : ""}`}
              >
                <div
                  className={`eyebrow mb-3 ${
                    isChorus ? "text-gold-gradient" : ""
                  }`}
                >
                  {isChorus ? "Chorus" : `Verse ${Math.floor(i / 2) + 1}`}
                </div>
                <p className="font-display text-xl sm:text-2xl leading-relaxed whitespace-pre-line text-white/90">
                  {verse}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ---- List view ----
  return (
    <div className="space-y-5">
      <Link
        href="/portal"
        className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
      >
        <ChevronLeft width={18} height={18} /> Home
      </Link>

      <header>
        <div className="eyebrow-burgundy mb-2">Digital Hymn Book</div>
        <h1 className="font-display font-semibold text-3xl sm:text-4xl leading-tight">
          Hymnal
        </h1>
        <p className="mt-2 text-sm text-white/60">
          Search by title, number or a line you remember.
        </p>
      </header>

      {/* Search */}
      <div className="relative max-w-xl">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
          <SearchIcon width={19} height={19} />
        </span>
        <input
          className="field pl-11 pr-11"
          placeholder="Search hymns"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
          >
            <CloseIcon width={18} height={18} />
          </button>
        )}
      </div>

      {results.length === 0 ? (
        <p className="text-center text-sm text-white/40 py-10">
          No hymns match “{query}”.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {results.map((h) => (
            <button
              key={h.id}
              onClick={() => setOpenId(h.id)}
              className="card-tap flex items-center gap-4 p-4 text-left"
            >
              <span className="tile tile-rose w-12 h-12 font-display text-lg shrink-0 tabular">
                {h.number}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-base font-medium truncate">
                  {h.title}
                </span>
                {h.author && (
                  <span className="block text-xs text-white/45 mt-0.5 truncate">
                    {h.author}
                  </span>
                )}
              </span>
              <BookIcon
                width={16}
                height={16}
                className="text-white/25 shrink-0"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
