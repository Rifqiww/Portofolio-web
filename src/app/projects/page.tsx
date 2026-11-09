"use client";

import SectionTitle from "@/components/SectionTitle";
import ProjectGrid from "@/components/ProjectGrid";
import { useLanguage } from "@/context/LanguageContext";
import { getProjects, getSectionTitles } from "@/lib/content";

export default function ProjectsPage() {
  const { locale } = useLanguage();
  const projects = getProjects(locale);
  const sectionTitles = getSectionTitles(locale);

  return (
    <div className="mx-auto max-w-6xl px-5 pt-24 sm:pt-28 md:pt-32 md:px-10">
      <SectionTitle title={sectionTitles.project.title} sub={sectionTitles.project.allSub} />
      <ProjectGrid projects={projects} />
    </div>
  );
}
