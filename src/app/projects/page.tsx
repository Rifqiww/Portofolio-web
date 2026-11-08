import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ProjectGrid from "@/components/ProjectGrid";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = { title: "Project" };

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-24 sm:pt-28 md:pt-32 md:px-10">
      <SectionTitle title="PROJECT" sub="Semua karya" />
      <ProjectGrid projects={getProjects()} />
    </div>
  );
}
