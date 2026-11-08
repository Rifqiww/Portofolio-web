import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { Scribble, Tape } from "@/components/Deco";
import { getProfile } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const profile = getProfile();

  return (
    <div className="mx-auto max-w-6xl px-5 pt-24 sm:pt-28 md:pt-32 md:px-10">
      <SectionTitle title="CONTACT" sub="Mari berkolaborasi" />
      <div className="grid items-start gap-12 sm:gap-16 md:grid-cols-2">
        <Reveal className="space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg leading-relaxed text-paper/85">{profile.shortBio}</p>
          <div>
            <a
              href={`mailto:${profile.email}`}
              className="font-display block break-all text-2xl sm:text-3xl text-sun transition-colors hover:text-flame md:text-4xl"
            >
              {profile.email}
            </a>
            <Scribble className="mt-1 h-3 w-44 sm:w-56 text-flame" />
          </div>
          <ul className="flex flex-wrap gap-2.5 sm:gap-3">
            {profile.socials.map((s, i) => (
              <li key={s.label} style={{ rotate: `${(i % 2 ? 1 : -1) * 2}deg` }}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer block bg-paper px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-bold tracking-widest text-ink shadow-[3px_3px_0_var(--color-flame)] transition-colors hover:bg-sun"
                >
                  {s.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className="relative rotate-1 drop-shadow-[6px_6px_0_var(--color-flame)] md:drop-shadow-[9px_9px_0_var(--color-flame)]">
            <Tape className="-top-3 left-6 sm:left-10 -rotate-6" />
            <div className="jag-a paper p-6 sm:p-8 md:p-10">
              <ContactForm email={profile.email} />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
