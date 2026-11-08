"use client";

import { useState, useEffect, type CSSProperties, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Tape } from "./Deco";
import type { Certificate } from "@/content/types";

type CertificateCardProps = { cert: Certificate; index?: number };

const TILTS = [1.6, -2, 1, -1.4];
const JAGS = ["jag-a", "jag-c", "jag-b", "jag-a"];

export default function CertificateCard({ cert, index = 0 }: CertificateCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const cls = "tilt group relative block h-full cursor-pointer text-left";
  const style = {
    "--tilt": `${TILTS[index % 4]}deg`,
    "--sh": "var(--color-flame)",
  } as CSSProperties;

  const cardContent: ReactNode = (
    <>
      <Tape
        className={`-top-3 ${
          index % 2 === 0 ? "left-8 -rotate-6" : "right-8 rotate-6"
        }`}
      />
      <div
        className={`${
          JAGS[index % 4]
        } flex h-full flex-col bg-bone p-3.5 pb-5 text-ink transition-colors duration-200`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden border-2 border-ink bg-ash/15">
          {cert.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cert.image}
              alt={cert.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="relative flex h-full w-full flex-col items-center justify-center p-6 text-center">
              <div className="stripes absolute inset-0 text-ink/10" />
              <div className="halftone absolute inset-0 text-ink/20" />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="relative z-10 h-12 w-12 text-flame transition-transform duration-500 group-hover:scale-110"
              >
                <circle
                  cx="12"
                  cy="9"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  fillOpacity="0.1"
                />
                <path
                  d="M9 14.5L7 21l5-2.5 5 2.5-2-6.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 9l1.5 1.5L15 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-display relative z-10 mt-2 text-sm tracking-widest text-ink/70">
                PREVIEW SERTIFIKAT
              </span>
            </div>
          )}

          <span className="font-display absolute left-2 top-2 -rotate-2 bg-ink px-2.5 py-0.5 text-xs tracking-widest text-sun shadow-[2px_2px_0_var(--color-flame)]">
            CERTIFICATE #{String(index + 1).padStart(2, "0")}
          </span>

          <span className="pointer-events-none font-display absolute bottom-2 right-2 bg-sun px-2 py-0.5 text-[11px] tracking-wider text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-[2px_2px_0_var(--color-ink)]">
            KLIK UNTUK DETAIL ↗
          </span>
        </div>
        <div className="my-3 border-t-2 border-dashed border-ink/30" />
        <div className="flex flex-1 items-start justify-between gap-2.5 sm:gap-3">
          <div className="flex flex-1 flex-col justify-between min-w-0">
            <div>
              <h3 className="font-display text-xl sm:text-2xl leading-[1.05] tracking-wide text-ink md:text-3xl">
                {cert.title}
              </h3>
            </div>

            <div className="mt-2.5">
              <span className="inline-block max-w-full bg-ink px-2.5 py-1 text-xs font-semibold leading-snug text-paper break-words shadow-[2px_2px_0_var(--color-ink)/10]">
                {cert.issuer}
              </span>
            </div>
          </div>

          <div className="flex h-[94px] w-20 sm:w-24 shrink-0 self-start flex-col items-center justify-between border-2 border-ink bg-sun p-2 text-center shadow-[3px_3px_0_var(--color-ink)] -rotate-1 transition-transform duration-300 group-hover:rotate-0">
            <span className="font-display text-xs sm:text-sm leading-none text-ink">{cert.date}</span>
            <div className="barcode my-1 h-5 w-full" />
            <span className="font-display -rotate-6 border border-blood px-1 text-[8px] sm:text-[9px] font-bold tracking-widest text-blood">
              VERIFIED
            </span>
          </div>
        </div>
      </div>
    </>
  );

  const modal =
    mounted && isOpen
      ? createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-2 sm:p-4 md:p-6 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`cert-modal-${index}`}
          >
            <div
              className="relative max-h-[94vh] w-[95vw] max-w-6xl overflow-y-auto border-3 border-ink bg-bone p-4 sm:p-6 md:p-8 text-ink shadow-[8px_8px_0_var(--color-flame)] md:shadow-[14px_14px_0_var(--color-flame)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Tape className="-top-3 left-6 sm:left-10 -rotate-3" />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer font-display absolute right-3 top-3 z-20 -rotate-2 bg-flame px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm tracking-widest text-ink shadow-[3px_3px_0_var(--color-ink)] transition-transform duration-200 hover:-translate-y-0.5 hover:rotate-0 hover:bg-sun md:right-6 md:top-6 md:text-base"
                aria-label="Tutup preview sertifikat"
              >
                ✕ CLOSE
              </button>

              <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:gap-8 items-start pt-10 sm:pt-8 md:pt-4">
                <div className="relative w-full overflow-hidden border-2 border-ink bg-ash/10 shadow-[4px_4px_0_var(--color-ink)] md:shadow-[5px_5px_0_var(--color-ink)]">
                  {cert.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-auto max-h-[48vh] md:max-h-[72vh] w-full object-contain bg-coal/5"
                    />
                  ) : (
                    <div className="relative flex aspect-[16/10] w-full flex-col items-center justify-center p-6 text-center">
                      <div className="stripes absolute inset-0 text-ink/10" />
                      <div className="halftone absolute inset-0 text-ink/20" />
                      <span className="font-display relative z-10 text-base tracking-widest text-ink/60">
                        PREVIEW BELUM TERSEDIA
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display -rotate-1 bg-sun px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs text-ink shadow-[2px_2px_0_var(--color-ink)]">
                        {cert.date}
                      </span>
                      <span className="font-display -rotate-2 border border-blood px-2 py-0.5 text-xs font-bold tracking-widest text-blood">
                        VERIFIED
                      </span>
                      <span className="text-[11px] font-bold tracking-widest text-ink/50 uppercase">
                        CERTIFICATE #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2
                      id={`cert-modal-${index}`}
                      className="font-display mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl leading-[1.05] tracking-wide text-ink"
                    >
                      {cert.title}
                    </h2>

                    <div className="mt-2.5">
                      <span className="inline-block bg-ink px-3 py-1 text-xs font-bold text-paper">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  <div className="my-2 border-t-2 border-dashed border-ink/30" />

                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-ink/50 uppercase">
                      DETAIL & DESKRIPSI
                    </h4>
                    <p className="mt-2 border border-ink/20 bg-paper/70 p-3 sm:p-4 text-sm md:text-base leading-relaxed text-ink/85">
                      {cert.description ||
                        "Sertifikat ini diperoleh atas partisipasi dan pencapaian kompetensi pada bidang terkait."}
                    </p>
                  </div>

                  {cert.credentialUrl && (
                    <div className="pt-2">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer font-display inline-block w-full -skew-x-12 bg-ink py-2.5 text-center text-sm tracking-widest text-paper shadow-[4px_4px_0_var(--color-flame)] transition-all hover:bg-flame hover:text-ink"
                      >
                        VERIFIKASI KREDENSIAL RESMI ↗
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        className={cls}
        style={style}
        aria-haspopup="dialog"
      >
        {cardContent}
      </div>
      {modal}
    </>
  );
}
