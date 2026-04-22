type ProjectImagePlaceholderProps = {
  title: string;
  category: string;
  label: string;
  tags: string[];
  gradient: string;
  glow: string;
  compact?: boolean;
};

function ExtensionPreview({
  title,
  category,
  label,
  tags,
  compact,
}: {
  title: string;
  category: string;
  label: string;
  tags: string[];
  compact: boolean;
}) {
  return (
    <div className="relative flex h-full flex-col p-5 sm:p-7">
      <div className="type-ui flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/48 dark:text-white/48">
        <span>{label}</span>
        <span>{category}</span>
      </div>

      <div className="mt-5 flex-1 overflow-hidden rounded-[24px] border border-black/8 bg-white/82 dark:border-white/10 dark:bg-zinc-950/58">
        <div className="flex items-center gap-2 border-b border-black/8 px-4 py-3 dark:border-white/10">
          <span className="h-2.5 w-2.5 rounded-full bg-black/18 dark:bg-white/18" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/10" />
          <div className="type-ui ml-3 rounded-full border border-black/8 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-black/50 dark:border-white/10 dark:text-white/50">
            active wait session
          </div>
        </div>

        <div className={`grid h-[calc(100%-3.25rem)] ${compact ? "grid-cols-[1.2fr_0.8fr]" : "grid-cols-[1.25fr_0.75fr]"}`}>
          <div className="flex flex-col border-r border-black/8 p-5 dark:border-white/10 sm:p-6">
            <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
              response monitor
            </p>
            <p className="mt-4 max-w-[9ch] text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-zinc-950 dark:text-white">
              {title}
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-[16px] border border-black/8 bg-black/[0.025] p-3.5 dark:border-white/10 dark:bg-white/[0.035]">
                <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                  trigger
                </p>
                <p className="mt-2 text-sm leading-6 text-black/68 dark:text-white/72">
                  Watches for AI replies that stall beyond the chosen threshold.
                </p>
              </div>
              <div className="rounded-[16px] border border-black/8 bg-black/[0.02] p-3.5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                  return flow
                </p>
                <p className="mt-2 text-sm leading-6 text-black/68 dark:text-white/72">
                  Opens a selected break site, then brings the user back when the answer is ready.
                </p>
              </div>
            </div>

            <div className="mt-auto pt-5">
              <div className="flex items-center justify-between text-[11px] text-black/42 dark:text-white/42">
                <span className="type-ui uppercase tracking-[0.12em]">session line</span>
                <span className="type-ui uppercase tracking-[0.12em]">ready</span>
              </div>
              <div className="mt-3 h-1 rounded-full bg-black/8 dark:bg-white/10">
                <div className="h-full w-[68%] rounded-full bg-black/55 dark:bg-white/55" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between p-5 sm:p-6">
            <div className="space-y-3">
              <div className="rounded-[18px] border border-black/8 p-3.5 dark:border-white/10">
                <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                  selected site
                </p>
                <p className="mt-3 text-base font-semibold tracking-[-0.03em] text-zinc-950 dark:text-white">
                  Break Tab
                </p>
              </div>
              <div className="rounded-[18px] border border-black/8 p-3.5 dark:border-white/10">
                <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                  state
                </p>
                <p className="mt-3 text-base font-semibold tracking-[-0.03em] text-zinc-950 dark:text-white">
                  Waiting Quietly
                </p>
              </div>
            </div>

            <div className="border-t border-black/8 pt-4 dark:border-white/10">
              <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                stack
              </p>
              <p className="mt-3 text-[11px] leading-5 uppercase tracking-[0.14em] text-black/54 dark:text-white/54">
                {tags.slice(0, 3).join(" / ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OpsPreview({
  title,
  category,
  label,
  tags,
  compact,
}: {
  title: string;
  category: string;
  label: string;
  tags: string[];
  compact: boolean;
}) {
  return (
    <div className="relative flex h-full flex-col p-5 sm:p-7">
      <div className="type-ui flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/48 dark:text-white/48">
        <span>{label}</span>
        <span>{category}</span>
      </div>

      <div className="mt-5 flex-1 overflow-hidden rounded-[24px] border border-black/8 bg-white/84 dark:border-white/10 dark:bg-zinc-950/60">
        <div className="flex items-start justify-between gap-6 border-b border-black/8 px-5 py-4 dark:border-white/10 sm:px-6">
          <div>
            <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
              incident workflow
            </p>
            <p className={`mt-3 font-semibold leading-[1.02] tracking-[-0.045em] text-zinc-950 dark:text-white ${compact ? "text-[1.5rem]" : "text-[1.8rem]"}`}>
              {title}
            </p>
          </div>
          <div className="pt-0.5 text-right">
            <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
              routing
            </p>
            <p className="mt-2 text-sm leading-6 text-black/68 dark:text-white/72">
              Severity aware
            </p>
          </div>
        </div>

        <div className={`grid h-[calc(100%-5.3rem)] ${compact ? "grid-cols-[0.95fr_1.05fr]" : "grid-cols-[1fr_1fr]"}`}>
          <div className="flex flex-col border-r border-black/8 p-5 dark:border-white/10 sm:p-6">
            <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
              incoming event
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-[16px] border border-black/8 p-3.5 dark:border-white/10">
                <p className="text-sm leading-6 text-black/72 dark:text-white/74">
                  Event received, summarized, then routed to the right path without losing context.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[16px] border border-black/8 p-3.5 dark:border-white/10">
                  <p className="type-ui text-[10px] uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                    active
                  </p>
                  <p className="mt-2 text-[1.5rem] font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white">
                    03
                  </p>
                </div>
                <div className="rounded-[16px] border border-black/8 p-3.5 dark:border-white/10">
                  <p className="type-ui text-[10px] uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                    backup
                  </p>
                  <p className="mt-2 text-[1.5rem] font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white">
                    02
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto border-t border-black/8 pt-4 dark:border-white/10">
              <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                timeline
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-black/65 dark:bg-white/65" />
                <span className="h-px flex-1 bg-black/16 dark:bg-white/14" />
                <span className="h-2 w-2 rounded-full bg-black/24 dark:bg-white/24" />
                <span className="h-px flex-1 bg-black/16 dark:bg-white/14" />
                <span className="h-2 w-2 rounded-full bg-black/24 dark:bg-white/24" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between p-5 sm:p-6">
            <div>
              <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                escalation path
              </p>
              <div className="mt-4 space-y-2.5">
                {["SEV-1 -> primary", "SEV-2 -> notify", "backup -> if missed"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-black/8 pb-2.5 text-sm text-black/70 dark:border-white/10 dark:text-white/72"
                  >
                    <span>{item}</span>
                    <span className="type-ui text-[10px] uppercase tracking-[0.12em] text-black/42 dark:text-white/42">
                      live
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-black/8 pt-4 dark:border-white/10">
              <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                stack
              </p>
              <p className="mt-3 text-[11px] leading-5 uppercase tracking-[0.14em] text-black/54 dark:text-white/54">
                {tags.slice(0, 3).join(" / ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectImagePlaceholder({
  title,
  category,
  label,
  tags,
  gradient,
  glow,
  compact = false,
}: ProjectImagePlaceholderProps) {
  const isExtension = tags.includes("Chrome Extension");

  return (
    <div
      className={`figure-stage ${
        compact ? "min-h-[320px]" : "min-h-[420px]"
      }`}
      style={{ backgroundImage: gradient, boxShadow: `0 24px 48px -40px ${glow}` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_28%,rgba(255,255,255,0.08))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_32%,rgba(255,255,255,0.02))]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.46),transparent_72%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]" />

      {isExtension ? (
        <ExtensionPreview
          title={title}
          category={category}
          label={label}
          tags={tags}
          compact={compact}
        />
      ) : (
        <OpsPreview
          title={title}
          category={category}
          label={label}
          tags={tags}
          compact={compact}
        />
      )}
    </div>
  );
}
