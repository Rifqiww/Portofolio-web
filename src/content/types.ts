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

export type SiteContent = {
  title: string;
  description: string;
  footerCredit: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  viewProject: string;
  contactBtn: string;
  viewMore: string;
  verified: string;
  clickForDetail: string;
  previewUnavailable: string;
  officialCredential: string;
  detailDescription: string;
  emptyProjects: string;
  downloadCv: string;
  contactForm: {
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    openingMail: string;
    defaultSubject: string;
  };
};

export type ContentData = {
  site: SiteContent;
  nav: NavItem[];
  profile: Profile;
  features: Feature[];
  updates: Update[];
  skills: Skill[];
  projects: Project[];
  certificates: Certificate[];
  sectionTitles: {
    about: { title: string; sub: string };
    project: { title: string; sub: string; allSub: string };
    contact: { title: string; sub: string };
    stack: { title: string; sub: string };
    certificate: { title: string; sub: string };
  };
};
