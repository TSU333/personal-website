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
      className={`relative overflow-hidden rounded-[28px] border border-white/35 bg-white/55 p-5 dark:border-white/15 dark:bg-white/[0.08] ${
        compact ? "min-h-[240px]" : "min-h-[320px]"
      }`}
      style={{ backgroundImage: gradient }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.88),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="flex items-center justify-between gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-foreground/55 dark:text-slate-800/75">
          <span>{label}</span>
          <span>{category}</span>
        </div>

        <div className="space-y-4">
          <div
            className="max-w-[15rem] rounded-[24px] border border-white/60 bg-white/72 p-4 shadow-panel backdrop-blur-lg dark:border-black/10 dark:bg-white/75"
            style={{ boxShadow: `0 32px 80px -44px ${glow}` }}
          >
            <p className="text-lg font-semibold tracking-[-0.015em] text-foreground dark:text-slate-900">
              {title}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted dark:text-slate-700">
              {category}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/55 bg-white/65 px-3 py-1.5 text-xs font-medium text-foreground/75 backdrop-blur dark:border-black/10 dark:bg-white/70 dark:text-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
