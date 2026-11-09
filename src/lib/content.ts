import { contents, skills } from "@/content/data";
import type {
  Certificate,
  ContentData,
  Feature,
  NavItem,
  Profile,
  Project,
  Skill,
  Update,
} from "@/content/types";

export type Locale = "id" | "en";

export const getContent = (locale: Locale = "id"): ContentData => contents[locale] ?? contents.id;

export const getSite = (locale: Locale = "id") => getContent(locale).site;
export const getNav = (locale: Locale = "id"): NavItem[] => getContent(locale).nav;
export const getProfile = (locale: Locale = "id"): Profile => getContent(locale).profile;
export const getUpdates = (locale: Locale = "id"): Update[] => getContent(locale).updates;
export const getFeatures = (locale: Locale = "id"): Feature[] => getContent(locale).features;
export const getProjects = (locale: Locale = "id"): Project[] => getContent(locale).projects;
export const getFeaturedProjects = (locale: Locale = "id"): Project[] =>
  getContent(locale).projects.filter((p) => p.featured);
export const getCertificates = (locale: Locale = "id"): Certificate[] =>
  getContent(locale).certificates;
export const getSectionTitles = (locale: Locale = "id") => getContent(locale).sectionTitles;

export function getSkillGroups(): { category: string; items: Skill[] }[] {
  const map = new Map<string, Skill[]>();
  for (const s of skills) map.set(s.category, [...(map.get(s.category) ?? []), s]);
  return [...map.entries()].map(([category, items]) => ({ category, items }));
}

export function getProjectTags(locale: Locale = "id"): string[] {
  return [...new Set(getContent(locale).projects.flatMap((p) => p.tags))];
}
