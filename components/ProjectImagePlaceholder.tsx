"use client";

import { useLanguage } from "@/components/Providers";

type ProjectImagePlaceholderProps = {
  title: string;
  category: string;
  label: string;
  tags: string[];
  gradient: string;
  glow: string;
  compact?: boolean;
};

const previewCopy = {
  en: {
    extension: {
      monitor: "response monitor",
      use: "use",
      useText:
        "Watches the wait, opens a chosen break tab, and returns when the reply is ready.",
      selectedSite: "selected site",
      selectedSiteValue: "Break Tab",
      state: "state",
      stateValue: "Waiting Quietly",
      sessionLine: "session line",
      ready: "ready",
      stack: "stack",
    },
    ops: {
      workflow: "incident workflow",
      routing: "routing",
      routingValue: "Severity aware",
      incoming: "incoming event",
      incomingText:
        "Event received, summarized, then routed to the right path without losing context.",
      escalation: "escalation path",
      escalationItems: [
        "SEV-1 -> primary",
        "SEV-2 -> notify",
        "backup -> if missed",
      ],
      live: "live",
      timeline: "timeline",
      stack: "stack",
    },
  },
  zh: {
    extension: {
      monitor: "响应监测",
      use: "用途",
      useText: "在等待过程中监测回复，打开设定的休息页，并在答案准备好后带你返回。",
      selectedSite: "休息页面",
      selectedSiteValue: "Break Tab",
      state: "状态",
      stateValue: "安静等待中",
      sessionLine: "等待进度",
      ready: "已就绪",
      stack: "技术栈",
    },
    ops: {
      workflow: "事件流程",
      routing: "路由",
      routingValue: "按严重级别处理",
      incoming: "输入事件",
      incomingText: "接收事件，整理摘要，并在不丢失上下文的前提下送往正确处理路径。",
      escalation: "升级路径",
      escalationItems: [
        "SEV-1 -> primary",
        "SEV-2 -> notify",
        "backup -> if missed",
      ],
      live: "进行中",
      timeline: "时间线",
      stack: "技术栈",
    },
  },
} as const;

function ExtensionPreview({
  title,
  category,
  label,
  tags,
  compact,
  locale,
}: {
  title: string;
  category: string;
  label: string;
  tags: string[];
  compact: boolean;
  locale: "en" | "zh";
}) {
  const copy = previewCopy[locale].extension;

  return (
    <div className="relative flex h-full flex-col p-5 sm:p-7">
      <div className="type-ui flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/48 dark:text-white/48">
        <span>{label}</span>
        <span>{category}</span>
      </div>

      <div className="mt-5 flex-1 border border-black/8 dark:border-white/10">
        <div className="grid h-full grid-rows-[auto_1fr_auto]">
          <div className="border-b border-black/8 px-5 py-4 dark:border-white/10 sm:px-6">
            <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
              {copy.monitor}
            </p>
            <p
              className={`mt-4 max-w-[8ch] font-semibold leading-[0.96] tracking-[-0.055em] text-zinc-950 dark:text-white ${
                compact ? "text-[2.55rem]" : "text-[3rem]"
              }`}
            >
              {title}
            </p>
          </div>

          <div className="grid grid-cols-[1.08fr_0.92fr]">
            <div className="border-r border-black/8 px-5 py-5 dark:border-white/10 sm:px-6">
              <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                {copy.use}
              </p>
              <p className="mt-3 max-w-[24rem] text-[1.04rem] leading-8 text-black/70 dark:text-white/74">
                {copy.useText}
              </p>
            </div>

            <div className="px-5 py-5 sm:px-6">
              <div className="space-y-5">
                <div className="border-b border-black/8 pb-4 dark:border-white/10">
                  <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                    {copy.selectedSite}
                  </p>
                  <p className="mt-3 text-[1.1rem] leading-7 text-zinc-950 dark:text-white">
                    {copy.selectedSiteValue}
                  </p>
                </div>
                <div className="border-b border-black/8 pb-4 dark:border-white/10">
                  <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                    {copy.state}
                  </p>
                  <p className="mt-3 text-[1.1rem] leading-7 text-zinc-950 dark:text-white">
                    {copy.stateValue}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[1.08fr_0.92fr] border-t border-black/8 dark:border-white/10">
            <div className="px-5 py-4 sm:px-6">
              <div className="flex items-center justify-between gap-4 text-[11px] text-black/44 dark:text-white/44">
                <span className="type-ui uppercase tracking-[0.12em]">{copy.sessionLine}</span>
                <span className="type-ui uppercase tracking-[0.12em]">{copy.ready}</span>
              </div>
              <div className="mt-3 h-px bg-black/18 dark:bg-white/16">
                <div className="h-px w-[64%] bg-black/58 dark:bg-white/56" />
              </div>
            </div>
            <div className="border-l border-black/8 px-5 py-4 dark:border-white/10 sm:px-6">
              <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                {copy.stack}
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
  locale,
}: {
  title: string;
  category: string;
  label: string;
  tags: string[];
  compact: boolean;
  locale: "en" | "zh";
}) {
  const copy = previewCopy[locale].ops;

  return (
    <div className="relative flex h-full flex-col p-5 sm:p-7">
      <div className="type-ui flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/48 dark:text-white/48">
        <span>{label}</span>
        <span>{category}</span>
      </div>

      <div className="mt-5 flex-1 border border-black/8 dark:border-white/10">
        <div className="grid h-full grid-rows-[auto_1fr_auto]">
          <div className="grid grid-cols-[1.15fr_0.85fr] border-b border-black/8 dark:border-white/10">
            <div className="px-5 py-4 sm:px-6">
              <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                {copy.workflow}
              </p>
              <p
                className={`mt-4 font-semibold leading-[1.02] tracking-[-0.045em] text-zinc-950 dark:text-white ${
                  compact ? "text-[1.6rem]" : "text-[2rem]"
                }`}
              >
                {title}
              </p>
            </div>
            <div className="border-l border-black/8 px-5 py-4 dark:border-white/10 sm:px-6">
              <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                {copy.routing}
              </p>
              <p className="mt-4 text-[1.08rem] leading-7 text-black/72 dark:text-white/74">
                {copy.routingValue}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1fr]">
            <div className="border-r border-black/8 px-5 py-5 dark:border-white/10 sm:px-6">
              <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                {copy.incoming}
              </p>
              <p className="mt-4 max-w-[24rem] text-[1.04rem] leading-8 text-black/70 dark:text-white/74">
                {copy.incomingText}
              </p>
            </div>

            <div className="px-5 py-5 sm:px-6">
              <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                {copy.escalation}
              </p>
              <div className="mt-4 space-y-0">
                {copy.escalationItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-black/8 py-3 text-[1.02rem] leading-7 text-black/72 dark:border-white/10 dark:text-white/74"
                  >
                    <span>{item}</span>
                    <span className="type-ui text-[10px] uppercase tracking-[0.12em] text-black/42 dark:text-white/42">
                      {copy.live}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_1fr] border-t border-black/8 dark:border-white/10">
            <div className="px-5 py-4 sm:px-6">
              <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                {copy.timeline}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-black/56 dark:bg-white/56" />
                <span className="h-px flex-1 bg-black/16 dark:bg-white/14" />
                <span className="h-2 w-2 rounded-full bg-black/24 dark:bg-white/24" />
                <span className="h-px flex-1 bg-black/16 dark:bg-white/14" />
                <span className="h-2 w-2 rounded-full bg-black/24 dark:bg-white/24" />
              </div>
            </div>
            <div className="border-l border-black/8 px-5 py-4 dark:border-white/10 sm:px-6">
              <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                {copy.stack}
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
  gradient: _gradient,
  glow: _glow,
  compact = false,
}: ProjectImagePlaceholderProps) {
  const { locale } = useLanguage();
  const isExtension = tags.includes("Chrome Extension");

  return (
    <div
      className={`figure-stage ${
        compact ? "min-h-[320px]" : "min-h-[420px]"
      }`}
    >
      {isExtension ? (
        <ExtensionPreview
          title={title}
          category={category}
          label={label}
          tags={tags}
          compact={compact}
          locale={locale}
        />
      ) : (
        <OpsPreview
          title={title}
          category={category}
          label={label}
          tags={tags}
          compact={compact}
          locale={locale}
        />
      )}
    </div>
  );
}
