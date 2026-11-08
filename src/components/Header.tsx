"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import type { NavItem, SocialLink } from "@/content/types";

type HeaderProps = { brand: string; nav: NavItem[]; socials: SocialLink[] };

const DRAWER_EDGE =
  "polygon(7% 0, 100% 0, 100% 100%, 0 100%, 3% 82%, 0 64%, 4% 46%, 1% 28%, 4% 12%)";

export default function Header({ brand, nav, socials }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const isFirstRender = useRef(true);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hd-in",
        { y: -25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.1, ease: "power3.out", stagger: 0.08, clearProps: "opacity,visibility" },
      );

      gsap.to(".hd-btn", { rotation: 2.5, duration: 0.5, repeat: -1, yoyo: true, ease: "steps(1)" });

      tl.current = gsap
        .timeline({
          paused: true,
          onStart: () => {
            const drawer = document.getElementById("site-drawer");
            if (drawer) {
              drawer.classList.remove("invisible", "pointer-events-none");
              drawer.classList.add("pointer-events-auto");
            }
          },
          onReverseComplete: () => {
            const drawer = document.getElementById("site-drawer");
            if (drawer) {
              drawer.classList.add("invisible", "pointer-events-none");
              drawer.classList.remove("pointer-events-auto");
            }
          },
        })
        .fromTo(".drawer-backdrop", { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.inOut" }, 0)
        .fromTo(".drawer-under", { xPercent: 108 }, { xPercent: 0, duration: 0.55, ease: "power4.out" }, 0)
        .fromTo(".drawer-panel", { xPercent: 108 }, { xPercent: 0, duration: 0.6, ease: "power4.out" }, 0.06)
        .fromTo(
          ".drawer-item",
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.06, duration: 0.45, ease: "power3.out" },
          0.2,
        )
        .fromTo(".drawer-foot", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }, 0.4);
    },
    { scope: root },
  );

  useEffect(() => {
    const t = tl.current;
    if (!t) return;
    const drawer = document.getElementById("site-drawer");

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (open) {
      if (drawer) {
        drawer.classList.remove("invisible", "pointer-events-none");
        drawer.classList.add("pointer-events-auto");
      }
      t.timeScale(1).play();
    } else {
      t.timeScale(1.3).reverse();
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={root}>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-paper/10 bg-ink/85 px-5 py-3 backdrop-blur-md md:px-10">
        <Link
          href="/"
          className="hd-in font-display -rotate-2 bg-ink px-3 py-1 text-xl tracking-wider text-paper shadow-[3px_3px_0_var(--color-flame)] transition-transform hover:rotate-0"
        >
          {brand}
        </Link>

        <button
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="site-drawer"
          aria-label="Buka menu"
          className={`cursor-pointer hd-in hd-btn font-display -skew-x-12 bg-flame px-5 py-2 text-sm tracking-widest text-ink shadow-[4px_4px_0_var(--color-ink)] transition-[opacity,transform] duration-300 hover:scale-105 active:scale-95 ${
            open ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          MENU
        </button>
      </header>

      <div
        id="site-drawer"
        className="drawer-root invisible pointer-events-none fixed inset-0 z-[60]"
        aria-hidden={!open}
      >
        <div
          className="drawer-backdrop absolute inset-0 bg-ink/70 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        />

        <div
          className="drawer-under absolute right-0 top-0 h-full w-[min(94vw,420px)] bg-flame"
          style={{ clipPath: DRAWER_EDGE }}
        />
        <aside
          className="drawer-panel absolute right-0 top-0 flex h-full w-[min(88vw,380px)] flex-col bg-coal px-6 pb-8 pt-6 sm:px-8"
          style={{ clipPath: DRAWER_EDGE }}
        >
          <div className="halftone pointer-events-none absolute inset-0 text-paper/[0.05]" />

          <div className="relative flex items-center justify-end">
            <button
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              aria-label="Tutup menu"
              className="cursor-pointer font-display -skew-x-12 bg-sun px-4 py-1 text-sm tracking-widest text-ink transition-transform hover:scale-110"
            >
              CLOSE
            </button>
          </div>

          <nav className="relative mt-8 sm:mt-10 flex-1">
            <ul className="space-y-1">
              {nav.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href} className="drawer-item">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      tabIndex={open ? 0 : -1}
                      className="group relative flex items-baseline gap-3 py-2"
                    >
                      <span className="absolute -left-3 top-1/2 h-9 w-0 -skew-x-12 bg-flame transition-all duration-300 group-hover:w-[calc(100%+1.5rem)]" />
                      <span className="font-display relative w-7 text-xs sm:text-sm text-sun">0{i + 1}</span>
                      <span
                        className={`font-display relative text-4xl sm:text-5xl leading-none transition-colors duration-300 ${active ? "text-flame group-hover:text-sun" : "text-paper group-hover:text-sun"
                          }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                    <p className="-mt-1 ml-10 text-[11px] tracking-widest text-paper/40">{item.sub}</p>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="drawer-foot relative">
            <p className="mb-3 text-[11px] tracking-[0.3em] text-paper/40">OFFICIAL ACCOUNT</p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={open ? 0 : -1}
                  style={{ rotate: `${(i % 2 ? 1 : -1) * 2}deg` }}
                  className="bg-paper px-3 py-1 text-xs font-bold tracking-widest text-ink transition-colors hover:bg-sun"
                >
                  {s.label.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}