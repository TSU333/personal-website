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
      className={`relative overflow-hidden rounded-[30px] border border-black/6 bg-white/72 p-6 dark:border-white/10 dark:bg-zinc-900/65 ${
        compact ? "min-h-[252px]" : "min-h-[340px]"
      }`}
      style={{ backgroundImage: gradient }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.84),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="flex items-center justify-between gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/42">
          <span>{label}</span>
          <span>{category}</span>
        </div>

        <div className="space-y-4">
          <div
            className="max-w-[15rem] rounded-[26px] border border-black/6 bg-white/82 p-5 shadow-panel backdrop-blur-lg"
            style={{ boxShadow: `0 32px 80px -44px ${glow}` }}
          >
            <p className="text-lg font-semibold tracking-[-0.04em] text-zinc-950">
              {title}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {category}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/6 bg-white/74 px-3 py-1.5 text-xs font-medium text-zinc-700 backdrop-blur"
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
