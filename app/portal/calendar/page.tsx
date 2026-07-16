"use client";

import Link from "next/link";
import { useState } from "react";
import { EVENTS } from "../_lib/data";
import { useNow } from "../_lib/useNow";
import { MONTHS, DAYS_LONG } from "../_lib/format";
import { ChevronLeft, ChevronRight } from "../_components/icons";

const WEEKDAY_SHORT = ["S", "M", "T", "W", "T", "F", "S"];

export default function CalendarPage() {
  const now = useNow();
  // offset in months from the current month
  const [offset, setOffset] = useState(0);

  if (!now) {
    return (
      <div className="min-h-[60vh] grid place-items-center">
        <span className="tile tile-rose w-14 h-14 font-display text-xl animate-float">
          KW
        </span>
      </div>
    );
  }

  const base = new Date(now.getFullYear(), now.getMonth() + offset, 1);
  const year = base.getFullYear();
  const month = base.getMonth();
  const firstWeekday = base.getDay();
  const daysInThisMonth = new Date(year, month + 1, 0).getDate();

  // Which weekdays have a recurring event.
  const eventDays = new Set(EVENTS.map((e) => e.day));

  const todayIsThisMonth =
    now.getFullYear() === year && now.getMonth() === month;

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInThisMonth; d++) cells.push(d);

  // Events grouped for the list under the grid, ordered by weekday.
  const orderedEvents = [...EVENTS].sort((a, b) => a.day - b.day);

  return (
    <div className="space-y-5">
      <Link
        href="/portal"
        className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
      >
        <ChevronLeft width={18} height={18} /> Home
      </Link>

      <header>
        <div className="eyebrow-burgundy mb-2">Church Calendar</div>
        <h1 className="font-display font-semibold text-3xl sm:text-4xl leading-tight">
          What&apos;s happening
        </h1>
      </header>

      <div className="grid lg:grid-cols-2 gap-x-8 gap-y-6 items-start">
        {/* Month switcher */}
        <div className="glass p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setOffset((o) => o - 1)}
              aria-label="Previous month"
              className="grid place-items-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors"
            >
              <ChevronLeft width={18} height={18} />
            </button>
            <div className="font-display text-lg">
              {MONTHS[month]} {year}
            </div>
            <button
              onClick={() => setOffset((o) => o + 1)}
              aria-label="Next month"
              className="grid place-items-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors"
            >
              <ChevronRight width={18} height={18} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {WEEKDAY_SHORT.map((w, i) => (
              <div key={i} className="text-[11px] text-white/40 py-1">
                {w}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {cells.map((d, i) => {
              if (d === null) return <div key={i} />;
              const weekday = new Date(year, month, d).getDay();
              const hasEvent = eventDays.has(weekday);
              const isToday = todayIsThisMonth && d === now.getDate();
              return (
                <div
                  key={i}
                  className={`aspect-square grid place-items-center rounded-lg text-sm relative ${
                    isToday
                      ? "btn-grad font-medium"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  {d}
                  {hasEvent && !isToday && (
                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[color:var(--rose)]" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[color:var(--hair)] text-xs text-white/45">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--rose)]" />
            Days with a recurring service
          </div>
        </div>

        {/* Recurring events list */}
        <div>
          <h2 className="eyebrow mb-3">Weekly Schedule</h2>
          <div className="glass divide-hair">
            {orderedEvents.map((ev) => (
              <div key={ev.id} className="flex items-center gap-4 p-4">
                <div className="shrink-0 w-16">
                  <div className="text-sm font-medium text-gradient">
                    {DAYS_LONG[ev.day].slice(0, 3)}
                  </div>
                  <div className="text-xs text-white/40">{ev.time}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{ev.title}</div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {ev.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
