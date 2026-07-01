const DEFAULT_ITEMS = [
  "This Sunday · 9:00 AM",
  "Kings World · Ile-Ife",
  "Raising Kings",
  "Transforming The World",
  "Word Encounter · Wed 6:30 PM",
  "Plan Your Visit",
];

export default function Marquee({
  items = DEFAULT_ITEMS,
  slow = false,
  tone = "dark",
}: {
  items?: string[];
  slow?: boolean;
  tone?: "dark" | "burgundy";
}) {
  const bg =
    tone === "burgundy"
      ? "bg-[color:var(--burgundy-deep)]"
      : "bg-black";
  const line = items.concat(items); // duplicate for seamless loop
  return (
    <div className={`relative hair-y overflow-hidden ${bg}`}>
      <div className={`marquee-track ${slow ? "marquee-slow" : ""} py-4`}>
        {line.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-8 px-6 whitespace-nowrap"
          >
            <span className="font-display italic text-3xl sm:text-4xl md:text-5xl text-white/90">
              {t}
            </span>
            <span className="w-2 h-2 rounded-full bg-[color:var(--burgundy-2)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
