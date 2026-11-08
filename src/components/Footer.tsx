import Link from "next/link";
import type { CSSProperties } from "react";
import type { NavItem, SocialLink } from "@/content/types";

type FooterProps = { nav: NavItem[]; socials: SocialLink[]; credit: string; name: string };

export default function Footer({ nav, socials, credit, name }: FooterProps) {
  return (
    <footer className="torn-tb relative mt-10 overflow-hidden bg-coal">
      <div className="halftone pointer-events-none absolute inset-0 text-paper/[0.04]" />
      <div className="torn-t absolute inset-x-0 top-0 h-6" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-10 pt-20 md:grid-cols-[1fr_1fr_auto] md:px-10">
        <div>
          <p className="mb-4 text-[11px] tracking-[0.3em] text-sun">MENU</p>
          <ul className="space-y-2">
            {nav.map((n, i) => (
              <li key={n.href} style={{ rotate: `${(i % 2 ? 1 : -1) * 0.8}deg` }}>
                <Link href={n.href} className="cursor-pointer font-display text-3xl transition-colors hover:text-flame">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[11px] tracking-[0.3em] text-sun">OFFICIAL ACCOUNT</p>
          <ul className="flex flex-wrap gap-3">
            {socials.map((s, i) => (
              <li key={s.label} style={{ rotate: `${(i % 2 ? 1 : -1) * 2.2}deg` }}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer block bg-paper px-3 py-1 text-xs font-bold tracking-widest text-ink transition-colors hover:bg-sun"
                >
                  {s.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="relative pb-6 text-center text-xs text-paper/40">{credit}</p>
    </footer>
  );
}
