import type { Metadata } from "next";

import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by TSU, including ThinkBreak and OpenClaw Emergency Ops.",
};

export default function ProjectsPage() {
  return <ProjectsShowcase projects={projects} />;
}
