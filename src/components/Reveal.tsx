"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  y?: number;
};

export default function Reveal({ children, className, stagger = false, y = 36 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = stagger ? Array.from(el.children) : [el];
      if (targets.length === 0) return;

      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: stagger ? 0.1 : 0,
          clearProps: "opacity,visibility,transform",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
