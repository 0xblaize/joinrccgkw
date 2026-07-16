"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "./_lib/auth";
import { useNow } from "./_lib/useNow";
import { useStore, addCheckIn, hasCheckedInToday } from "./_lib/store";
import { useToast } from "./_components/Toast";
import Sheet from "./_components/Sheet";
import {
  BookIcon,
  PlayIcon,
  DocIcon,
  CalendarIcon,
  ChevronRight,
  CheckIcon,
  SparkIcon,
} from "./_components/icons";
import { LATEST_SERMON, EVENTS, BULLETIN, verseOfTheDay } from "./_lib/data";
import { DAYS_LONG, formatDateTime } from "./_lib/format";

function serviceForDay(day: number): string | null {
  if (day === 0) return "Sunday Service";
  if (day === 3) return "Bible Study";
  return null;
}

export default function HomePage() {
  const { user } = useAuth();
  const now = useNow();
  const store = useStore();
  const toast = useToast();

  const [checkInOpen, setCheckInOpen] = useState(false);
  const [bulletinOpen, setBulletinOpen] = useState(false);

  const firstName = user?.firstName ?? "";
  const day = now?.getDay() ?? -1;
  const service = day >= 0 ? serviceForDay(day) : null;
  const alreadyCheckedIn = service ? hasCheckedInToday(service) : false;
  const verse = now ? verseOfTheDay(now) : null;

  let greetTitle = `Welcome, ${firstName}.`;
  let greetSub = "We are glad you are here.";
  if (day === 0) {
    greetTitle = `Happy Sunday, ${firstName}!`;
    greetSub = "Welcome to Church. Heaven is celebrating your presence.";
  } else if (day === 3) {
    greetTitle = `Mid-Week Refuel, ${firstName}.`;
    greetSub = "Welcome to Bible Study. Come and be filled.";
  } else if (day >= 0) {
    greetTitle = `Hello, ${firstName}.`;
    greetSub = "Keep shining this week. The King is with you.";
  }

  const doCheckIn = () => {
    if (!service) return;
    addCheckIn(service);
    setCheckInOpen(false);
    toast(`Checked in for ${service}. Enjoy the service!`);
  };

  const weekEvents = [...EVENTS].sort((a, b) => a.day - b.day);

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* ---------------- HERO ---------------- */}
      <section className="hero-card p-6 sm:p-8 lg:p-10 animate-rise">
        <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 chip bg-white/10 border-white/20 text-white/90">
              <SparkIcon width={13} height={13} />
              {now ? DAYS_LONG[day] : "Welcome"}
            </div>
            <h1 className="mt-4 font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
              {greetTitle}
            </h1>
            <p className="mt-3 text-white/80 leading-relaxed text-base sm:text-lg">
              {greetSub}
            </p>

            {/* Check-in on service days */}
            {service && (
              <div className="mt-6">
                {alreadyCheckedIn ? (
                  <div className="glass inline-flex items-center gap-3 px-4 py-3 rounded-2xl">
                    <span className="grid place-items-center w-9 h-9 rounded-full bg-white/15 shrink-0">
                      <CheckIcon width={18} height={18} />
                    </span>
                    <span className="text-sm">
                      <span className="font-medium">Checked in</span> for {service}.
                      Thank you for being present.
                    </span>
                  </div>
                ) : (
                  <button
                    onClick={() => setCheckInOpen(true)}
                    className="glow inline-flex items-center justify-center gap-2 h-14 px-7 rounded-2xl bg-white text-[#5a1230] text-base font-semibold hover:brightness-105 transition"
                  >
                    <SparkIcon width={20} height={20} />
                    Sign Attendance
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Verse of the day sits in the hero on non-service days */}
          {!service && verse && (
            <div className="glass rounded-2xl p-5 lg:max-w-xs w-full">
              <div className="eyebrow text-white/70 mb-2">Verse of the Day</div>
              <p className="font-display text-lg leading-relaxed">
                “{verse.text}”
              </p>
              <p className="mt-2 text-sm text-gold-gradient font-medium">
                {verse.ref}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ---------------- BENTO GRID ---------------- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
        {/* Latest message — large tile */}
        <div className="sm:col-span-2 lg:col-span-7 card-tap overflow-hidden p-0 group">
          <div className="relative aspect-[16/10] sm:aspect-[16/8] w-full">
            <Image
              src={LATEST_SERMON.thumbnail}
              alt={LATEST_SERMON.title}
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-[1.03] transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <span className="absolute top-4 left-4 chip chip-active">
              Latest Message
            </span>
            <div className="absolute inset-0 grid place-items-center">
              <span className="grid place-items-center w-16 h-16 rounded-full bg-white/15 backdrop-blur border border-white/30 group-hover:scale-110 transition">
                <PlayIcon width={24} height={24} />
              </span>
            </div>
            <div className="absolute bottom-4 left-5 right-5">
              <div className="font-display text-xl sm:text-2xl leading-tight">
                {LATEST_SERMON.title}
              </div>
              <div className="text-xs text-white/70 mt-1">
                {LATEST_SERMON.speaker} • {LATEST_SERMON.date} •{" "}
                {LATEST_SERMON.duration}
              </div>
            </div>
          </div>
        </div>

        {/* Hymnal — tall rose tile */}
        <Link
          href="/portal/hymnal"
          className="lg:col-span-5 card-tap p-6 flex flex-col justify-between min-h-[160px] group"
        >
          <div className="flex items-start justify-between">
            <span className="tile tile-rose w-12 h-12">
              <BookIcon width={24} height={24} />
            </span>
            <ChevronRight
              width={20}
              height={20}
              className="text-white/40 group-hover:translate-x-1 transition-transform"
            />
          </div>
          <div className="mt-6">
            <div className="font-display text-xl">Open Hymnal</div>
            <p className="text-sm text-white/55 mt-1">
              Searchable, large-text hymn book for service.
            </p>
          </div>
        </Link>

        {/* Bulletin */}
        <button
          onClick={() => setBulletinOpen(true)}
          className="lg:col-span-5 card-tap p-6 flex items-center gap-4 text-left group"
        >
          <span className="tile w-12 h-12 shrink-0">
            <DocIcon width={22} height={22} />
          </span>
          <span className="flex-1">
            <span className="block font-display text-lg">Digital Bulletin</span>
            <span className="block text-sm text-white/55 mt-0.5">
              {BULLETIN.title} • {BULLETIN.date}
            </span>
          </span>
          <ChevronRight
            width={20}
            height={20}
            className="text-white/40 group-hover:translate-x-1 transition-transform"
          />
        </button>

        {/* Events — spans wide */}
        <div className="sm:col-span-2 lg:col-span-7 glass p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="eyebrow-burgundy">This Week</div>
              <h2 className="font-display text-xl mt-1">At Kings World</h2>
            </div>
            <Link
              href="/portal/calendar"
              className="chip hover:border-white/40 transition-colors"
            >
              Full calendar <ChevronRight width={13} height={13} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {weekEvents.slice(0, 4).map((ev) => (
              <div
                key={ev.id}
                className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-[color:var(--hair)] p-3"
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-b from-[color:var(--burgundy-2)]/30 to-transparent border border-[color:var(--rose)]/20 shrink-0">
                  <CalendarIcon width={18} height={18} className="text-white/80" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">{ev.title}</div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {ev.date} • {ev.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {store.checkIns.length > 0 && (
        <p className="text-center text-xs text-white/35">
          Last check-in: {store.checkIns[0].service} on{" "}
          {formatDateTime(store.checkIns[0].at)}
        </p>
      )}

      {/* ---------------- Check-in sheet ---------------- */}
      <Sheet
        open={checkInOpen}
        onClose={() => setCheckInOpen(false)}
        title="Sign Attendance"
        subtitle={service ? `${service} • ${now ? DAYS_LONG[day] : ""}` : ""}
      >
        <div className="space-y-5">
          <div className="hero-card p-6 text-center">
            <div className="grid place-items-center w-16 h-16 rounded-full bg-white/15 backdrop-blur border border-white/30 mx-auto glow">
              <SparkIcon width={28} height={28} />
            </div>
            <p className="mt-4 text-white/85 leading-relaxed">
              Confirm you are present for{" "}
              <span className="font-semibold">{service}</span> today. Your
              presence will be added to your activity history.
            </p>
          </div>
          <button
            onClick={doCheckIn}
            className="btn-grad w-full h-12 rounded-full text-sm font-medium flex items-center justify-center gap-2"
          >
            <CheckIcon width={18} height={18} /> Confirm Check-In
          </button>
        </div>
      </Sheet>

      {/* ---------------- Bulletin sheet ---------------- */}
      <Sheet
        open={bulletinOpen}
        onClose={() => setBulletinOpen(false)}
        title={BULLETIN.title}
        subtitle={BULLETIN.date}
      >
        <div className="space-y-6">
          <div>
            <div className="eyebrow-burgundy mb-3">Order of Service</div>
            <ol className="space-y-2">
              {BULLETIN.order.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/85">
                  <span className="text-gradient font-semibold tabular w-5 shrink-0">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <div className="eyebrow-burgundy mb-3">Announcements</div>
            <ul className="space-y-2">
              {BULLETIN.announcements.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/85">
                  <span className="text-[color:var(--rose)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn-ghost w-full h-12 rounded-full text-sm font-medium">
            Download PDF
          </button>
        </div>
      </Sheet>
    </div>
  );
}
