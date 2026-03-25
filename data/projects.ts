import { LocalizedList, LocalizedText } from "@/lib/i18n";

export type Project = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
  overview: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  features: LocalizedList;
  challenges: LocalizedList;
  imageLabel: LocalizedText;
  tags: string[];
  gradient: string;
  glow: string;
  github?: string;
  store?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "thinkbreak",
    title: {
      en: "ThinkBreak",
      zh: "ThinkBreak",
    },
    category: {
      en: "Browser Extension",
      zh: "浏览器插件",
    },
    description: {
      en: "Take a break while AI thinks. If a reply takes too long, the extension opens your chosen break-site tab and brings you back when the answer is ready.",
      zh: "让你在 AI 思考时顺手休息一下。如果回复等待过久，插件会打开你选定的休息页面，并在答案准备好后带你返回。",
    },
    overview: {
      en: "ThinkBreak is a browser extension built around a simple idea: long AI response times do not need to trap you on a waiting screen. It turns those idle moments into intentional short breaks, then returns your attention when the reply is ready.",
      zh: "ThinkBreak 围绕一个很直接的想法展开：AI 回复过慢时，用户不该被困在等待界面里。它把这些空档变成可控的短暂休息，并在答案准备好时把注意力带回来。",
    },
    problem: {
      en: "",
      zh: "",
    },
    solution: {
      en: "ThinkBreak watches for slow replies, opens a user-selected break site when the wait drags on, and restores focus once the answer arrives.",
      zh: "ThinkBreak 会在回复明显过慢时触发，自动打开用户预设的休息页面，并在答案完成后及时带回原页面。",
    },
    features: {
      en: [
        "Detects when an AI reply is taking unusually long.",
        "Opens a user-chosen break-site tab during the waiting period.",
        "Brings you back when the response is ready.",
      ],
      zh: [
        "识别 AI 回复等待过久的时刻。",
        "在等待期间打开用户自定义的休息网站标签页。",
        "当回复完成后把你带回原本对话。",
      ],
    },
    challenges: {
      en: [
        "Keeping response detection reliable across changing AI interfaces.",
        "Making the switch-out and return flow feel seamless instead of intrusive.",
      ],
      zh: [
        "在不断变化的 AI 界面中保持检测逻辑稳定。",
        "让跳转休息页和返回的流程足够顺滑，不显得打扰。",
      ],
    },
    imageLabel: {
      en: "Extension Preview",
      zh: "插件预览",
    },
    tags: ["TypeScript", "Chrome Extension", "Productivity"],
    gradient:
      "linear-gradient(135deg, rgba(173, 203, 255, 0.56), rgba(255, 255, 255, 0.92) 42%, rgba(226, 235, 248, 0.84))",
    glow: "rgba(107, 141, 214, 0.4)",
    github: "https://github.com/TSU333/ThinkBreak",
    store:
      "https://chromewebstore.google.com/detail/thinkbreak/iniicihbhceodiibohojnfodficielel",
    featured: true,
  },
  {
    slug: "openclaw-emergency-ops",
    title: {
      en: "OpenClaw Emergency Ops",
      zh: "OpenClaw Emergency Ops",
    },
    category: {
      en: "Backend System",
      zh: "后端系统",
    },
    description: {
      en: "A structured incident workflow backend for high-signal automation. It receives events, generates readable summaries, routes alerts by severity, escalates to backup contacts, and keeps a full response timeline.",
      zh: "一个面向高信号自动化的结构化事故处理后端。它接收事件、生成可读摘要、按严重级别路由告警、升级到备用联系人，并保留完整响应时间线。",
    },
    overview: {
      en: "OpenClaw Emergency Ops is built to make incident handling more structured and easier to follow under pressure. It turns raw incoming events into clear summaries, routes the right alerts to the right people, and keeps response history readable from first signal to final resolution.",
      zh: "OpenClaw Emergency Ops 的目标，是让高压场景下的事故处置更结构化、更容易追踪。它把原始事件整理成清晰摘要，把正确的告警送到正确的人手里，并把从第一条信号到最终处理的全过程保留下来。",
    },
    problem: {
      en: "Emergency workflows often break down when raw alerts are noisy, routing rules are inconsistent, and escalation context gets lost across different steps.",
      zh: "应急流程经常会在原始告警过于嘈杂、路由规则不一致、升级上下文不断丢失的情况下失去效率。",
    },
    solution: {
      en: "OpenClaw Emergency Ops provides a structured backend layer that ingests events, rewrites them into readable summaries, routes by severity, escalates to backup contacts when needed, and preserves a full response timeline.",
      zh: "OpenClaw Emergency Ops 提供了一个结构化后端层，负责接收事件、重写为可读摘要、按严重级别路由，在需要时升级到备用联系人，并保留完整的响应时间线。",
    },
    features: {
      en: [
        "Receives raw incident events and normalizes them into a stable workflow.",
        "Generates readable summaries for faster triage and handoff.",
        "Routes alerts by severity and escalates to backup contacts when needed.",
      ],
      zh: [
        "接收原始事故事件，并把它们归一到稳定流程中。",
        "生成可读摘要，加快分诊和交接速度。",
        "按严重级别路由告警，并在需要时升级到备用联系人。",
      ],
    },
    challenges: {
      en: [
        "Balancing automation speed with readable, trustworthy operator context.",
        "Designing escalation rules that stay predictable as workflows become more complex.",
      ],
      zh: [
        "在自动化速度和可读、可信的人工上下文之间保持平衡。",
        "在流程变复杂之后，仍然让升级规则保持可预测性。",
      ],
    },
    imageLabel: {
      en: "System Preview",
      zh: "系统预览",
    },
    tags: ["TypeScript", "Automation", "Incident Response"],
    gradient:
      "linear-gradient(135deg, rgba(210, 225, 236, 0.78), rgba(255, 255, 255, 0.94) 42%, rgba(231, 238, 243, 0.88))",
    glow: "rgba(93, 119, 143, 0.32)",
    github: "https://github.com/TSU333/OpenClaw-Emergency-Ops",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
