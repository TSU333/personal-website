type ProjectImagePlaceholderProps = {
  title: string;
  category: string;
  label: string;
  tags: string[];
  gradient: string;
  glow: string;
  compact?: boolean;
};

export function ProjectImagePlaceholder({
  title,
  category,
  label,
  tags,
  gradient,
  glow,
  compact = false,
}: ProjectImagePlaceholderProps) {
  return (
    <div
      className={`figure-stage ${
        compact ? "min-h-[320px]" : "min-h-[420px]"
      }`}
      style={{ backgroundImage: gradient }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.32),transparent_40%,rgba(255,255,255,0.08))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_42%,rgba(255,255,255,0.02))]" />
      <div className="absolute left-[10%] right-[10%] top-[18%] h-px bg-black/8 dark:bg-white/10" />
      <div className="absolute bottom-[16%] left-[10%] right-[26%] h-px bg-black/8 dark:bg-white/10" />
      <div className="absolute bottom-[16%] top-[18%] left-[10%] w-px bg-black/8 dark:bg-white/10" />

      <div className="relative flex h-full flex-col justify-between gap-8 p-6 sm:p-8">
        <div className="type-ui flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/48 dark:text-white/48">
          <span>{label}</span>
          <span>{category}</span>
        </div>

        <div className="max-w-[18rem] space-y-4 sm:max-w-[22rem]">
          <p
            className="text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.06em] text-zinc-950 dark:text-white"
            style={{ textShadow: `0 18px 42px ${glow}` }}
          >
            {title}
          </p>
          <p className="type-ui text-[12px] uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-300/80">
            {tags.slice(0, 3).join(" / ")}
          </p>
        </div>
      </div>
    </div>
  );
}
