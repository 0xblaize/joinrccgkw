export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignCls} gap-4 max-w-3xl`}>
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#d4af37]" />
        <span className="text-[11px] tracking-[0.4em] text-[#d4af37]/90 uppercase">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display font-black leading-[0.95] text-5xl sm:text-6xl lg:text-7xl">
        {title}{" "}
        {accent && <span className="text-gradient-royal">{accent}</span>}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-[#f5efe0]/70 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
