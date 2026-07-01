export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className="relative grid place-items-center w-10 h-10 rounded-full ring-gold"
        aria-hidden
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f4d160] via-[#d4af37] to-[#6a0f2a] opacity-90" />
        <span className="absolute inset-[3px] rounded-full bg-[#0b0f19]" />
        <span className="relative font-display font-bold text-[13px] tracking-[0.02em] text-gradient-gold">
          KW
        </span>
      </span>
      <span className="hidden sm:flex flex-col leading-[1.05]">
        <span className="font-display text-[13px] tracking-[0.28em] text-gradient-gold">
          KINGS WORLD
        </span>
        <span className="text-[10px] tracking-[0.35em] text-[#f5efe0]/60">
          RCCG · ILE-IFE
        </span>
      </span>
    </div>
  );
}
