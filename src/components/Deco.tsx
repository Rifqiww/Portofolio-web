import type { CSSProperties } from "react";

type DecoProps = { className?: string; style?: CSSProperties };

export function Tape({ className = "", style }: DecoProps) {
  return <span aria-hidden className={`tape absolute z-10 block h-7 w-24 ${className}`} style={style} />;
}

export function Lightning({ className = "", style }: DecoProps) {
  return (
    <svg aria-hidden viewBox="0 0 90 120" className={className} style={style}>
      <polygon points="52,0 14,62 40,62 26,120 80,46 52,46 72,0" fill="currentColor" />
    </svg>
  );
}

export function Splat({ className = "", style }: DecoProps) {
  return (
    <svg aria-hidden viewBox="0 0 140 130" className={className} style={style}>
      <path
        d="M66 6c15-7 27 7 40 5s22 15 14 30 10 24-3 38-7 29-25 31-25 15-40 6S22 108 14 90 0 62 14 47 8 22 26 15 50 14 66 6z"
        fill="currentColor"
      />
      <circle cx="128" cy="18" r="5" fill="currentColor" />
      <circle cx="12" cy="116" r="4" fill="currentColor" />
      <circle cx="132" cy="108" r="3" fill="currentColor" />
      <circle cx="4" cy="30" r="3" fill="currentColor" />
    </svg>
  );
}

export function Scribble({ className = "", style }: DecoProps) {
  return (
    <svg aria-hidden viewBox="0 0 300 24" className={className} style={style} preserveAspectRatio="none">
      <path
        d="M3 14C40 2 70 22 112 10s80-8 126 4 52 2 59-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RoughFilter() {
  return (
    <svg aria-hidden width="0" height="0" className="pointer-events-none absolute">
      <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="4" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="7" />
      </filter>
    </svg>
  );
}
