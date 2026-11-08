"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import type { CSSProperties } from "react";
import { Lightning } from "./Deco";

type MarqueeProps = { items: string[] };

export default function Marquee({ items }: MarqueeProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const bands = gsap.utils.toArray<HTMLElement>(".mq-band");
      const tracks = gsap.utils.toArray<HTMLElement>(".mq-track");

      gsap.set(bands[0] ?? [], { rotation: -3.5 });
      gsap.set(bands[1] ?? [], { rotation: 2.5 });

      const tweens = tracks.map((el, i) =>
        gsap.fromTo(
          el,
          { xPercent: i % 2 ? -50 : 0 },
          { xPercent: i % 2 ? 0 : -50, ease: "none", duration: 34 - i * 8, repeat: -1 },
        ),
      );
      const skewTo = bands.map((b) => gsap.quickTo(b, "skewX", { duration: 0.5, ease: "power3.out" }));

      let vel = 0;
      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          vel = self.getVelocity();
        },
      });

      const tick = () => {
        vel *= 0.92;
        const boost = 1 + Math.min(Math.abs(vel) / 350, 7);
        tweens.forEach((tw) => tw.timeScale(boost));
        const sk = gsap.utils.clamp(-9, 9, -vel / 160);
        skewTo.forEach((to) => to(sk));
      };
      gsap.ticker.add(tick);
      return () => gsap.ticker.remove(tick);
    },
    { scope: root },
  );

  const words = [...items, ...items];

  const renderRow = (style: "sun" | "ink") =>
    [...words, ...words].map((t, i) => {
      const mode = i % 3;
      return (
        <span
          key={i}
          className="mx-5 inline-flex items-center gap-8"
          style={{ rotate: `${((i % 5) - 2) * 1.6}deg`, translate: `0 ${((i % 4) - 1.5) * 3}px` }}
        >
          <span
            className={`font-display text-4xl tracking-wider md:text-6xl ${
              mode === 1
                ? "outline-text"
                : mode === 2
                  ? style === "sun"
                    ? "bg-ink px-3 text-sun"
                    : "bg-flame px-3 text-ink"
                  : ""
            }`}
            style={mode === 1 ? ({ "--stroke": style === "sun" ? "#0c0c0d" : "#efeadf" } as CSSProperties) : undefined}
          >
            {t}
          </span>
          {i % 2 === 0 ? (
            <Lightning className={`h-8 w-6 ${style === "sun" ? "text-ink" : "text-sun"}`} />
          ) : (
            <span className={`font-display text-3xl ${style === "sun" ? "text-flame" : "text-flame"}`}>✕</span>
          )}
        </span>
      );
    });

  return (
    <div ref={root} aria-hidden className="relative z-20 -mt-16 overflow-hidden py-14 md:-mt-24 md:py-20">
      <div className="mq-band torn-tb relative -mx-8 bg-sun py-5 text-ink">
        <div className="mq-track flex w-max whitespace-nowrap">{renderRow("sun")}</div>
      </div>
      <div className="mq-band torn-tb relative -mx-8 -mt-8 bg-ink py-4 text-paper ring-1 ring-paper/10 md:-mt-10">
        <div className="mq-track flex w-max whitespace-nowrap">{renderRow("ink")}</div>
      </div>
    </div>
  );
}
