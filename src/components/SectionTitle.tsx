"use client";

import { useRef, type CSSProperties } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Scribble } from "./Deco";

type SectionTitleProps = { title: string; sub?: string; tone?: "dark" | "light" };

export default function SectionTitle({ title, sub, tone = "dark" }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const light = tone === "light";

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const path = el.querySelector<SVGPathElement>(".t-scribble path");
      const len = path?.getTotalLength() ?? 0;
      if (path) gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 92%", once: true } });
      tl.fromTo(
        ".t-ghost",
        { xPercent: -14, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1.1, ease: "power3.out", clearProps: "opacity,xPercent" },
      )
        .fromTo(
          ".t-main",
          { yPercent: 70, rotate: 3, opacity: 0 },
          { yPercent: 0, rotate: 0, opacity: 1, duration: 0.8, ease: "power4.out", clearProps: "opacity,yPercent,rotate" },
          0.1,
        )
        .to(path ?? [], { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" }, 0.5)
        .fromTo(
          ".t-sub",
          { opacity: 0, x: -24, rotate: -6 },
          { opacity: 1, x: 0, rotate: -2, duration: 0.5, clearProps: "opacity,x" },
          0.7,
        );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="relative mb-14 md:mb-20">
      <span
        aria-hidden
        className="t-ghost outline-text font-display pointer-events-none absolute -left-2 -top-6 -rotate-3 select-none text-[24vw] leading-none md:-top-12 md:text-[11rem]"
        style={{ "--stroke": light ? "rgb(12 12 13 / 0.22)" : "rgb(239 234 223 / 0.2)" } as CSSProperties}
      >
        {title}
      </span>
      <h2
        data-text={title}
        className={`t-main glitch font-display relative pt-6 text-5xl leading-none sm:text-6xl md:pt-10 md:text-8xl ${
          light ? "text-ink" : "text-paper"
        }`}
      >
        {title}
      </h2>
      <Scribble className="t-scribble relative mt-2 h-4 w-48 text-flame md:w-64" />
      {sub && (
        <p className="t-sub relative mt-3 inline-block -rotate-2 bg-sun px-3 py-1 text-xs font-bold tracking-[0.25em] text-ink shadow-[3px_3px_0_var(--color-ink)]">
          {sub}
        </p>
      )}
    </div>
  );
}
