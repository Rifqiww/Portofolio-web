import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import CertificateCard from "@/components/CertificateCard";
import { Lightning, Splat, Tape } from "@/components/Deco";
import { getCertificates, getProfile, getSkillGroups } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

const CHIP_COLORS = ["bg-flame text-ink", "bg-sun text-ink", "bg-paper text-ink", "bg-coal text-paper ring-1 ring-paper/30"];

export default function AboutPage() {
  const profile = getProfile();
  const groups = getSkillGroups();
  const certs = getCertificates();

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-24 sm:pt-28 md:pt-32 md:px-10">
        <SectionTitle title="ABOUT" sub="Tentang saya" />
        <div className="grid items-center gap-12 sm:gap-16 md:grid-cols-[1fr_1.6fr]">
          <Reveal className="relative mx-auto w-full max-w-[270px] sm:max-w-xs">
            <Splat className="absolute -inset-8 text-flame" style={{ filter: "url(#rough)" }} />
            <Lightning className="absolute -right-6 -top-8 z-20 h-20 w-14 rotate-12 text-sun" />
            <div className="relative rotate-[-3deg] bg-bone p-3 pb-10 drop-shadow-[8px_8px_0_#0c0c0d]">
              <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-2" />
              <div className="relative aspect-[4/5] overflow-hidden bg-ash">
                {profile.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" />
                ) : (
                  <>
                    <div className="stripes absolute inset-0 text-flame/30" />
                    <div className="halftone absolute inset-0 text-ink/40" />
                    <span className="font-display absolute inset-0 flex items-center justify-center text-9xl text-paper/90 mix-blend-overlay">
                      {profile.name.slice(0, 1)}
                    </span>
                  </>
                )}
              </div>
              <p className="font-display absolute bottom-2 left-4 text-lg text-ink">{profile.location}</p>
            </div>
            <p className="font-display relative mt-6 w-fit rotate-2 bg-sun px-3 py-1 tracking-widest text-ink">
              {profile.status}
            </p>
          </Reveal>

          <Reveal className="space-y-6 text-lg leading-relaxed text-paper/85">
            {profile.longBio.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl font-medium text-paper" : ""}>
                {p}
              </p>
            ))}
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                className="cursor-pointer font-display inline-block -skew-x-12 bg-flame px-9 py-3 tracking-widest text-ink shadow-[6px_6px_0_var(--color-sun)] transition-transform hover:-translate-y-1"
              >
                DOWNLOAD CV
              </a>
            )}
          </Reveal>
        </div>
      </div>

      <section className="paper torn-tb relative mt-20 md:mt-32 px-5 pb-20 pt-16 md:pb-28 md:pt-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="STACK" sub="Teknologi yang saya pakai" tone="light" />
          <div className="space-y-10 md:space-y-12">
            {groups.map((g) => (
              <Reveal key={g.category}>
                <h3 className="font-display mb-4 sm:mb-5 inline-block -rotate-1 bg-ink px-3 py-1 text-xl sm:text-2xl text-sun">
                  {g.category}
                </h3>
                <ul className="flex flex-wrap gap-2.5 sm:gap-4">
                  {g.items.map((s, i) => (
                    <li
                      key={s.name}
                      style={{ rotate: `${[-2.5, 1.5, -1, 2.5, 0.5][i % 5]}deg` }}
                      className={`font-display cursor-default px-3.5 py-1.5 sm:px-5 sm:py-2 text-base sm:text-xl tracking-wide shadow-[3px_3px_0_var(--color-ink)] sm:shadow-[4px_4px_0_var(--color-ink)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${CHIP_COLORS[i % 4]}`}
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20 md:pt-28 md:px-10">
        <SectionTitle title="CERTIFICATE" sub="Sertifikat" />
        <Reveal stagger className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <CertificateCard key={c.title + c.date} cert={c} index={i} />
          ))}
        </Reveal>
      </section>
    </>
  );
}
