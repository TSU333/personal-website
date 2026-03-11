import type { Metadata } from "next";

import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "ThinkBreak for Chrome, built by TSU. A simple extension for AI waiting time.",
};

export default function ProjectsPage() {
  return <ProjectsShowcase projects={projects} />;
}
