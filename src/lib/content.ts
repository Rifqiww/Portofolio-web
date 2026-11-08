import {
  certificates,
  features,
  nav,
  profile,
  projects,
  site,
  skills,
  updates,
} from "@/content/data";
import type { Skill } from "@/content/types";

export const getSite = () => site;
export const getNav = () => nav;
export const getProfile = () => profile;
export const getUpdates = () => updates;
export const getFeatures = () => features;
export const getProjects = () => projects;
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getCertificates = () => certificates;

export function getSkillGroups(): { category: string; items: Skill[] }[] {
  const map = new Map<string, Skill[]>();
  for (const s of skills) map.set(s.category, [...(map.get(s.category) ?? []), s]);
  return [...map.entries()].map(([category, items]) => ({ category, items }));
}

export function getProjectTags(): string[] {
  return [...new Set(projects.flatMap((p) => p.tags))];
}
