"use client";

import Link from "next/link";
import { useRef, type CSSProperties } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Lightning, Splat, Tape } from "./Deco";
import type { Profile } from "@/content/types";

type HeroProps = { profile: Profile; ctaTitle: string };

export default function Hero({ profile, ctaTitle }: HeroProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
          ".hero-slash-ltr",
          { xPercent: -130 },
          { xPercent: 0, duration: 1.2, stagger: 0.14 },
        )
        .fromTo(
          ".hero-slash-rtl",
          { xPercent: 130 },
          { xPercent: 0, duration: 1.2 },
          0,
        )
        .fromTo(".kv-char", { yPercent: 115, rotate: 6 }, { yPercent: 0, rotate: 0, duration: 0.9, stagger: 0.04 }, 0.25)
        .fromTo(".kv-role", { opacity: 0, x: -40, rotate: -6 }, { opacity: 1, x: 0, rotate: -3, duration: 0.7 }, 0.9)
        .fromTo(".kv-tag", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 1.0)
        .fromTo(
          ".kv-cta",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, clearProps: "opacity,visibility,transform" },
          1.1,
        )
        .fromTo(
          ".kv-frame",
          { scale: 0.6, rotate: -14, opacity: 0 },
          { scale: 1, rotate: 3, opacity: 1, duration: 1, ease: "back.out(1.6)" },
          0.5,
        )
        .fromTo(".kv-splat", { scale: 0, rotate: -40 }, { scale: 1, rotate: 0, duration: 0.9, ease: "back.out(2)" }, 0.45)
        .fromTo(".kv-bolt", { scale: 0, rotate: 30 }, { scale: 1, rotate: 12, duration: 0.6, ease: "back.out(3)" }, 1.1)
        .fromTo(".kv-sticker", { scale: 0, rotate: -50 }, { scale: 1, rotate: 12, duration: 0.7, ease: "back.out(2.4)" }, 1.3);

      gsap.to(".jit-a", { rotation: "+=3", duration: 0.55, repeat: -1, yoyo: true, ease: "steps(1)", delay: 1.6 });
      gsap.to(".jit-b", { rotation: "-=4", duration: 0.7, repeat: -1, yoyo: true, ease: "steps(1)", delay: 1.8 });

      const mm = gsap.matchMedia();
      mm.add("(hover: hover) and (min-width: 768px)", () => {
        const layers = gsap.utils.toArray<HTMLElement>("[data-depth]");
        const setters = layers.map((l) => {
          const d = Number(l.dataset.depth ?? 0);
          return { x: gsap.quickTo(l, "x", { duration: 0.8, ease: "power3" }), y: gsap.quickTo(l, "y", { duration: 0.8, ease: "power3" }), d };
        });
        const move = (e: MouseEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          setters.forEach((s) => {
            s.x(nx * s.d);
            s.y(ny * s.d);
          });
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
      });

      gsap.to(".hero-bg", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative min-h-svh overflow-hidden px-5 pb-36 pt-28 md:px-10 md:pb-44">
      <div className="hero-bg absolute inset-0">
        <div className="halftone absolute inset-0 text-paper/[0.07]" />
        <div className="hero-slash-ltr absolute -left-[12%] top-[16%] h-44 w-[85%] -rotate-[8deg] bg-flame" style={{ filter: "url(#rough)" }} />
        <div className="hero-slash-rtl absolute -right-[12%] top-[52%] h-20 w-[75%] -rotate-[8deg] bg-sun" style={{ filter: "url(#rough)" }} />
        <div className="hero-slash-ltr absolute -left-[5%] bottom-[14%] h-5 w-[55%] -rotate-[8deg] bg-paper" style={{ filter: "url(#rough)" }} />
        <span
          aria-hidden
          className="outline-text font-display absolute -bottom-6 -left-4 -rotate-6 select-none text-[28vw] leading-none"
          style={{ "--stroke": "rgb(239 234 223 / 0.12)" } as CSSProperties}
        >
          PORTFOLIO
        </span>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 md:min-h-[calc(100svh-9rem)] md:grid-cols-[1.25fr_1fr]">
        <div data-depth="14">
          <p className="kv-role font-display mb-5 inline-block -rotate-3 bg-sun px-4 py-1 text-lg tracking-[0.2em] text-ink shadow-[4px_4px_0_var(--color-ink)] md:text-2xl">
            {profile.role}
          </p>
          <h1
            aria-label={profile.name}
            className="font-display text-[clamp(3.5rem,14vw,10.5rem)] leading-[0.86] text-paper"
            style={{ textShadow: "5px 5px 0 #0c0c0d" }}
          >
            {profile.name.split(" ").map((word, wi) => (
              <span key={wi} className="block overflow-hidden py-1">
                {word.split("").map((c, i) => (
                  <span key={i} className="kv-char inline-block">
                    {c}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="kv-tag mt-6 max-w-fit bg-ink/80 p-3 text-paper/90">{profile.tagline}</p>

          <div className="mt-8 sm:mt-9 flex flex-wrap gap-4 sm:gap-5">
            <Link
              href="/projects"
              className="kv-cta cursor-pointer font-display -skew-x-12 bg-flame px-7 py-3 sm:px-9 tracking-widest text-ink shadow-[6px_6px_0_var(--color-ink)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[9px_9px_0_var(--color-ink)]"
            >
              VIEW PROJECT
            </Link>
            <Link
              href="/contact"
              className="kv-cta cursor-pointer font-display -skew-x-12 border-2 border-paper bg-ink px-7 py-3 sm:px-9 tracking-widest text-paper shadow-[6px_6px_0_var(--color-sun)] transition-[transform,background-color,color] duration-200 hover:-translate-y-1 hover:bg-paper hover:text-ink"
            >
              CONTACT
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[270px] sm:max-w-sm md:max-w-md" data-depth="-26">
          <Splat className="kv-splat absolute -inset-10 -z-0 text-flame" style={{ filter: "url(#rough)" }} />
          <Lightning className="kv-bolt absolute -right-6 sm:-right-8 -top-10 sm:-top-12 z-20 h-24 w-16 sm:h-28 sm:w-20 rotate-12 text-sun drop-shadow-[4px_4px_0_#0c0c0d]" />

          <div className="kv-frame relative z-10">
            <div className="jit-b relative rotate-3 bg-bone p-3 pb-12 drop-shadow-[10px_10px_0_#0c0c0d]">
              <Tape className="-top-3 left-6 -rotate-6" />
              <Tape className="-top-3 right-6 rotate-6" />
              <div className="relative aspect-[4/5] overflow-hidden bg-ash">
                {profile.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" />
                ) : (
                  <>
                    <div className="stripes absolute inset-0 text-flame/30" />
                    <div className="halftone absolute inset-0 text-ink/40" />
                    <span className="font-display absolute inset-0 flex items-center justify-center text-[10rem] leading-none text-paper/90 mix-blend-overlay">
                      {profile.name.slice(0, 1)}
                    </span>
                  </>
                )}
              </div>
              <p className="font-display absolute bottom-3 left-4 -rotate-2 text-xl tracking-wider text-ink">
                {profile.handle}
              </p>
            </div>
          </div>

          <div className="kv-sticker absolute -bottom-8 -left-4 z-20 sm:-bottom-10 sm:-left-6 md:-left-12">
            <div className="jit-a font-display flex h-28 w-28 sm:h-32 sm:w-32 rotate-12 items-center justify-center rounded-full border-4 border-dashed border-ink bg-sun p-3 text-center text-lg sm:text-xl leading-tight text-ink shadow-[5px_5px_0_var(--color-ink)] md:h-40 md:w-40 md:text-2xl">
              {ctaTitle}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
