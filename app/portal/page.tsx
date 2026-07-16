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
import {
  LATEST_SERMON,
  EVENTS,
  BULLETIN,
  verseOfTheDay,
} from "./_lib/data";
import { DAYS_LONG, formatDateTime } from "./_lib/format";

// Which service (if any) corresponds to a given weekday.
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

  // Greeting content by day.
  let greetTitle = "";
  let greetSub = "";
  if (day === 0) {
    greetTitle = `Happy Sunday, ${firstName}!`;
    greetSub = "Welcome to Church. We are glad you are here.";
  } else if (day === 3) {
    greetTitle = `Mid-Week Refuel, ${firstName}.`;
    greetSub = "Welcome to Bible Study. Come and be filled.";
  } else if (day >= 0) {
    greetTitle = `Hello, ${firstName}.`;
    greetSub = "Keep shining this week.";
  }

  const verse = now ? verseOfTheDay(now) : null;

  const doCheckIn = () => {
    if (!service) return;
    addCheckIn(service);
    setCheckInOpen(false);
    toast(`Checked in for ${service}. Enjoy the service!`);
  };

  // Events for the coming week, ordered by weekday from today.
  const weekEvents = [...EVENTS].sort((a, b) => a.day - b.day);

  return (
    <div className="space-y-6">
      {/* ---- Greeting + check-in ---- */}
      <section>
        <div className="eyebrow-burgundy mb-2">
          {now ? DAYS_LONG[day] : "Welcome"}
        </div>
        <h1 className="font-display font-semibold text-3xl sm:text-4xl leading-tight">
          {now ? greetTitle : `Welcome, ${firstName}.`}
        </h1>
        <p className="mt-2 text-white/60 leading-relaxed">
          {now ? greetSub : "Loading today for you."}
        </p>

        {/* Attendance trigger on service days */}
        {service && (
          <div className="mt-5">
            {alreadyCheckedIn ? (
              <div className="surface p-4 flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-full btn-primary shrink-0">
                  <CheckIcon width={20} height={20} />
                </span>
                <div>
                  <div className="text-sm font-medium">
                    You are checked in for {service}
                  </div>
                  <div className="text-xs text-white/50">
                    Thank you for being present today.
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setCheckInOpen(true)}
                className="btn-primary glow w-full h-14 rounded-2xl text-base font-medium flex items-center justify-center gap-2"
              >
                <SparkIcon width={20} height={20} />
                Sign Attendance
              </button>
            )}
          </div>
        )}

        {/* Verse of the day on non-service days */}
        {!service && verse && (
          <div className="mt-5 surface p-5">
            <div className="eyebrow mb-2">Verse of the Day</div>
            <p className="font-display text-lg leading-relaxed text-white/90">
              “{verse.text}”
            </p>
            <p className="mt-2 text-sm text-[color:var(--burgundy-2)]">
              {verse.ref}
            </p>
          </div>
        )}
      </section>

      {/* ---- Worship & media ---- */}
      <section className="space-y-3">
        <h2 className="eyebrow">Worship and Media</h2>

        <Link
          href="/portal/hymnal"
          className="card-tap w-full flex items-center gap-4 p-5"
        >
          <span className="grid place-items-center w-12 h-12 rounded-xl bg-white/[0.05] text-white/80 shrink-0">
            <BookIcon width={24} height={24} />
          </span>
          <span className="flex-1">
            <span className="block text-base font-medium">Open Hymnal</span>
            <span className="block text-xs text-white/50 mt-0.5">
              Searchable, large-text hymn book for service
            </span>
          </span>
          <ChevronRight width={20} height={20} className="text-white/30" />
        </Link>

        <div className="grid grid-cols-1 gap-3">
          {/* Latest message */}
          <div className="card-tap overflow-hidden p-0">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={LATEST_SERMON.thumbnail}
                alt={LATEST_SERMON.title}
                fill
                sizes="(max-width: 512px) 100vw, 512px"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <span className="absolute top-3 left-3 chip bg-black/50 backdrop-blur">
                Latest Message
              </span>
              <button
                aria-label="Play latest sermon"
                className="absolute inset-0 grid place-items-center group"
              >
                <span className="grid place-items-center w-14 h-14 rounded-full btn-primary group-hover:scale-105 transition-transform">
                  <PlayIcon width={22} height={22} />
                </span>
              </button>
              <div className="absolute bottom-3 left-4 right-4">
                <div className="font-display text-lg leading-tight">
                  {LATEST_SERMON.title}
                </div>
                <div className="text-xs text-white/60 mt-0.5">
                  {LATEST_SERMON.speaker} • {LATEST_SERMON.date} •{" "}
                  {LATEST_SERMON.duration}
                </div>
              </div>
            </div>
          </div>

          {/* Bulletin */}
          <button
            onClick={() => setBulletinOpen(true)}
            className="card-tap w-full flex items-center gap-4 p-4 text-left"
          >
            <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/[0.05] text-white/80 shrink-0">
              <DocIcon width={22} height={22} />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-medium">Digital Bulletin</span>
              <span className="block text-xs text-white/50 mt-0.5">
                {BULLETIN.title} • {BULLETIN.date}
              </span>
            </span>
            <ChevronRight width={18} height={18} className="text-white/30" />
          </button>
        </div>
      </section>

      {/* ---- Events ---- */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="eyebrow">This Week at Kings World</h2>
          <Link
            href="/portal/calendar"
            className="text-xs text-[color:var(--burgundy-2)] hover:text-white transition-colors flex items-center gap-1"
          >
            Full calendar <ChevronRight width={13} height={13} />
          </Link>
        </div>

        <div className="surface divide-y divide-[color:var(--hair)]">
          {weekEvents.slice(0, 4).map((ev) => (
            <div key={ev.id} className="flex items-center gap-4 p-4">
              <div className="shrink-0 w-12 text-center">
                <div className="text-[color:var(--burgundy-2)] text-xs font-medium">
                  {ev.date}
                </div>
                <div className="grid place-items-center mt-1">
                  <CalendarIcon width={18} height={18} className="text-white/40" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{ev.title}</div>
                <div className="text-xs text-white/50 mt-0.5">
                  {ev.time} • {ev.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/portal/calendar"
          className="btn-ghost w-full h-12 rounded-full text-sm font-medium flex items-center justify-center"
        >
          View Full Calendar
        </Link>
      </section>

      {/* Recent check-in note */}
      {store.checkIns.length > 0 && (
        <p className="text-center text-xs text-white/35">
          Last check-in: {store.checkIns[0].service} on{" "}
          {formatDateTime(store.checkIns[0].at)}
        </p>
      )}

      {/* ---- Check-in confirm sheet ---- */}
      <Sheet
        open={checkInOpen}
        onClose={() => setCheckInOpen(false)}
        title="Sign Attendance"
        subtitle={service ? `${service} • ${now ? DAYS_LONG[day] : ""}` : ""}
      >
        <div className="space-y-5">
          <div className="surface p-5 text-center">
            <div className="grid place-items-center w-16 h-16 rounded-full btn-primary mx-auto glow">
              <SparkIcon width={28} height={28} />
            </div>
            <p className="mt-4 text-white/80 leading-relaxed">
              Confirm you are present for{" "}
              <span className="text-white font-medium">{service}</span> today.
              Your presence will be added to your activity history.
            </p>
          </div>
          <button
            onClick={doCheckIn}
            className="btn-primary w-full h-12 rounded-full text-sm font-medium flex items-center justify-center gap-2"
          >
            <CheckIcon width={18} height={18} /> Confirm Check-In
          </button>
        </div>
      </Sheet>

      {/* ---- Bulletin sheet ---- */}
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
                <li key={i} className="flex gap-3 text-sm text-white/80">
                  <span className="text-[color:var(--burgundy-2)] tabular w-5 shrink-0">
                    {i + 1}.
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
                <li key={i} className="flex gap-3 text-sm text-white/80">
                  <span className="text-[color:var(--burgundy-2)]">•</span>
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
