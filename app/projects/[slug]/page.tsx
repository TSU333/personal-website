import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/ProjectDetail";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({
  params,
}: ProjectDetailPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.title.en,
    description: project.description.en,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
