import type { CSSProperties, ReactNode } from "react";
import { Tape } from "./Deco";
import type { Project } from "@/content/types";

type ProjectCardProps = { project: Project; index?: number };

const TILTS = [-2.4, 1.8, -1.2, 2.6];
const JAGS = ["jag-a", "jag-b", "jag-c", "jag-b"];
const COVERS = ["bg-flame", "bg-sun", "bg-paper", "bg-blood"];

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const href = project.liveUrl || project.repoUrl;
  const cls = `tilt group relative block h-full ${href ? "cursor-pointer" : ""}`;
  const style = { "--tilt": `${TILTS[index % 4]}deg` } as CSSProperties;

  const inner: ReactNode = (
    <>
      <Tape className={`-top-3 ${index % 2 ? "left-8 rotate-6" : "right-8 -rotate-6"}`} />
      <div className={`${JAGS[index % 4]} h-full bg-bone p-3 pb-6 text-ink`}>
        <div className={`relative aspect-[4/3] overflow-hidden ${COVERS[index % 4]}`}>
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <>
              <div className="stripes absolute inset-0 text-ink/15" />
              <div className="halftone absolute inset-0 text-ink/30" />
              <span className="font-display absolute inset-0 flex items-center justify-center text-8xl text-ink transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6">
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            </>
          )}
          <span className="font-display absolute left-0 top-3 -rotate-6 bg-ink px-3 py-0.5 text-sm tracking-widest text-sun">
            {project.year}
          </span>
        </div>

        <div className="px-1 pt-4">
          <h3 className="font-display text-3xl leading-none tracking-wide">{project.title}</h3>
          <p className="mt-2 text-sm text-ink/70">{project.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t, i) => (
              <li
                key={t}
                style={{ rotate: `${(i % 2 ? 1 : -1) * 1.5}deg` }}
                className="bg-sun px-2 py-0.5 text-xs font-bold text-ink"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>
      {inner}
    </a>
  ) : (
    <div className={cls} style={style}>
      {inner}
    </div>
  );
}
