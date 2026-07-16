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
  github?: string;
  store?: string;
  demo?: string;
};

export const thinkBreakProject = {
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
    en: "Stop staring at the screen while waiting for AI. ThinkBreak opens a chosen break site when a reply takes too long, then returns you when the response is ready.",
    zh: "不必一直盯着 AI 的等待界面。回复时间过长时，ThinkBreak 会打开你选择的休息页面，并在答案完成后带你返回。",
  },
  overview: {
    en: "ThinkBreak is a Chrome and Edge extension for long AI response times. It watches supported AI pages, detects when a response is still being generated, and turns the wait into a deliberate short break without losing the original conversation.",
    zh: "ThinkBreak 是一个面向 Chrome 与 Edge 的浏览器插件。它会监测支持的 AI 页面，判断回复是否仍在生成，并把漫长等待转化成一次可控的短暂休息，同时保留原本的对话流程。",
  },
  problem: {
    en: "Long AI replies create dead time. Staying on the page wastes attention, while switching away manually makes it easy to miss when the answer is finished.",
    zh: "较长的 AI 回复会制造无效等待。一直停留在页面会消耗注意力，手动切走又容易错过答案完成的时刻。",
  },
  solution: {
    en: "ThinkBreak combines DOM structure, busy states, response changes, input availability, and completion controls to infer the AI state. After a configurable threshold it opens a selected break site, then returns automatically or sends a notification when generation finishes.",
    zh: "ThinkBreak 综合 DOM 结构、忙碌状态、回复变化、输入框可用性和完成按钮等信号判断 AI 状态。达到自定义等待阈值后，它会打开选定的休息页面，并在生成结束时自动返回或发送通知。",
  },
  features: {
    en: [
      "Supports ChatGPT, Claude, Gemini, Grok, and Doubao web experiences.",
      "Uses multiple page signals instead of relying on an official AI API.",
      "Offers configurable thresholds, break destinations, and completion actions.",
      "Runs as a Manifest V3 extension for Chrome and Edge.",
    ],
    zh: [
      "支持 ChatGPT、Claude、Gemini、Grok 与豆包网页端。",
      "通过多个页面信号判断状态，不依赖官方 AI API。",
      "支持自定义等待阈值、休息页面和完成后的处理方式。",
      "基于 Manifest V3，可运行于 Chrome 与 Edge。",
    ],
  },
  challenges: {
    en: [
      "Keeping detection stable as AI products continuously change their interfaces.",
      "Coordinating content scripts, the service worker, tabs, and session state without interrupting the user.",
      "Making automatic switching feel useful and predictable rather than intrusive.",
    ],
    zh: [
      "在 AI 产品界面持续变化的情况下保持检测稳定。",
      "协调内容脚本、Service Worker、标签页和会话状态，同时避免打断用户。",
      "让自动切换保持可控、可预测，而不是制造新的干扰。",
    ],
  },
  imageLabel: {
    en: "Live Workflow",
    zh: "实时工作流",
  },
  tags: ["TypeScript", "Manifest V3", "Chrome / Edge", "DOM Signals"],
  github: "https://github.com/TSU333/ThinkBreak",
  store:
    "https://chromewebstore.google.com/detail/thinkbreak/iniicihbhceodiibohojnfodficielel",
} satisfies Project;

export const projects: Project[] = [thinkBreakProject];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
