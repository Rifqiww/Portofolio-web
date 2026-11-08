export type NavItem = { label: string; sub: string; href: string };

export type SocialLink = { label: string; href: string };

export type Profile = {
  name: string;
  handle: string;
  role: string;
  tagline: string;
  shortBio: string;
  longBio: string[];
  location: string;
  email: string;
  phone?: string;
  status: string;
  resumeUrl?: string;
  avatar?: string;
  socials: SocialLink[];
};

export type Skill = { name: string; category: string };

export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
  featured: boolean;
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
  description?: string;
};

export type Update = { date: string; title: string; href?: string };

export type Feature = { title: string; sub: string; href: string; note?: string };
