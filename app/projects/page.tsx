import type { Metadata } from "next";

import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects, browser extensions, software tools, and creative digital products by TSU.",
};

export default function ProjectsPage() {
  return <ProjectsShowcase projects={projects} />;
}
