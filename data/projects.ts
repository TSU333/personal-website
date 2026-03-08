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
      en: "Waiting for AI responses often leads to low-value tab watching, distracted scrolling, or losing track of the original task entirely.",
      zh: "等待 AI 回复的过程经常会变成低价值的盯屏、分心刷内容，或者干脆忘记原本要做的事。",
    },
    solution: {
      en: "ThinkBreak watches for slow replies, opens a user-selected break site when the wait drags on, and restores focus once the answer arrives. The experience stays lightweight so the tool feels practical rather than disruptive.",
      zh: "ThinkBreak 会在回复明显过慢时触发，自动打开用户预设的休息页面，并在答案完成后及时带回原页面。整个体验保持轻量，让它更像一个实用工具，而不是新的干扰源。",
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
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
