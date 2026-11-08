import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { Lightning, Tape } from "@/components/Deco";
import {
  getFeaturedProjects,
  getFeatures,
  getProfile,
  getSite,
  getSkillGroups,
} from "@/lib/content";

export default function HomePage() {
  const profile = getProfile();
  const site = getSite();
  const features = getFeatures();
  const featured = getFeaturedProjects().slice(0, 3);
  const stack = getSkillGroups().flatMap((g) => g.items.map((s) => s.name));

  return (
    <>
      <Hero profile={profile} ctaTitle={site.ctaTitle} />
      <Marquee items={stack} />

      <section className="mx-auto max-w-6xl px-5 pt-20 md:px-10 md:pt-28">
        <SectionTitle title="ABOUT" sub="Tentang saya"/>
        <Reveal className="mb-14 max-w-2xl text-lg leading-relaxed text-paper/85">
          <span className="bg-sun px-1 font-semibold text-ink">{profile.shortBio.split(".")[0]}.</span>
          {profile.shortBio.split(".").slice(1).join(".")}
        </Reveal>
        <Reveal stagger className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <Link
              key={f.title}
              href={f.href}
              style={{ rotate: `${[-2, 1.5, -1][i % 3]}deg` }}
              className="jag-a group relative flex aspect-[4/3] flex-col justify-end overflow-hidden bg-bone p-6 text-ink transition-transform duration-300 hover:rotate-0 hover:text-white ease-in-out"
            >
              <Tape className="left-1/2 top-2 -translate-x-1/2 rotate-3" />
              <span className="absolute inset-0 -translate-x-[110%] -skew-x-[20deg] bg-flame transition-transform duration-500 group-hover:translate-x-0" />
              <h3 className="font-display relative text-5xl">{f.title}</h3>
              <p className="relative text-sm font-medium text-ink/70">{f.sub}</p>
            </Link>
          ))}
        </Reveal>
      </section>

      <section className="paper torn-tb relative mt-20 px-5 pb-28 pt-20 md:mt-28 md:px-10 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="PROJECT" sub="Karya terpilih" tone="light" />
          <Reveal stagger className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <div key={p.slug} className="md:even:mt-10">
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </Reveal>
          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="cursor-pointer font-display inline-block -skew-x-12 bg-ink px-10 py-3 tracking-widest text-paper shadow-[6px_6px_0_var(--color-flame)] transition-[transform,background-color,color,box-shadow] duration-200 hover:-translate-y-1 hover:bg-flame hover:text-ink hover:shadow-[9px_9px_0_var(--color-ink)]"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>

      <section className="torn-tb relative mt-24 md:mt-40 bg-sun px-5 py-16 md:py-24 text-ink md:px-10">
        <div className="halftone pointer-events-none absolute inset-0 text-ink/10" />
        <Reveal className="relative mx-auto max-w-5xl text-center">
          <h2 className="font-display -rotate-2 text-[13vw] leading-[0.9] md:text-[8rem]">{site.ctaTitle}</h2>
          <p className="mt-4 text-lg font-medium">{site.ctaText}</p>
          <Link
            href="/contact"
            className="cursor-pointer font-display mt-8 inline-block -skew-x-12 bg-ink px-12 py-4 tracking-widest text-paper shadow-[7px_7px_0_var(--color-flame)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--color-flame)]"
          >
            CONTACT ME
          </Link>
        </Reveal>
      </section>
    </>
  );
}
