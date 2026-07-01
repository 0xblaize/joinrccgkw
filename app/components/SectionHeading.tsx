import Reveal from "./Reveal";

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
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignCls} gap-5 max-w-3xl`}>
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[color:var(--burgundy-2)]" />
          <span className="eyebrow-burgundy">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-black leading-[0.95] text-5xl sm:text-6xl lg:text-7xl tracking-tight">
          {title}
          {accent && (
            <>
              {" "}
              <span className="font-editorial text-[color:var(--burgundy-2)]">
                {accent}
              </span>
            </>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
