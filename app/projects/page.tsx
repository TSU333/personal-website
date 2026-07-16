import type { Metadata } from "next";

import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "ThinkBreak",
  description:
    "ThinkBreak is a Chrome and Edge extension that opens a break site during long AI responses and returns when the answer is ready.",
};

export default function ProjectsPage() {
  return <ProjectsShowcase projects={projects} />;
}
