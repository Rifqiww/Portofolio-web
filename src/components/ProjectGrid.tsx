"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/content/types";
import { useLanguage } from "@/context/LanguageContext";
import { getSite } from "@/lib/content";

type ProjectGridProps = { projects: Project[]; tags?: string[] };

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const root = useRef<HTMLDivElement>(null);
  const { locale } = useLanguage();
  const site = getSite(locale);

  useGSAP(
    () => {
      gsap.fromTo(
        ".pg-item",
        { y: 40, rotate: 3, opacity: 0 },
        {
          y: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        },
      );
    },
    { scope: root },
  );

  return (
    <div ref={root} className="[--sh:var(--color-flame)]">
      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div key={p.slug} className="pg-item md:even:mt-10">
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>
      {projects.length === 0 && <p className="text-paper/50">{site.emptyProjects}</p>}
    </div>
  );
}
