"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage, type Locale } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const selectLocale = (l: Locale) => {
    setLocale(l);
    setOpen(false);
  };

  const otherLocale: Locale = locale === "en" ? "id" : "en";

  return (
    <div ref={rootRef} className="relative z-50 inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Pilih bahasa / Select language"
        className="cursor-pointer font-display inline-flex items-center gap-1 border border-paper/20 bg-ink px-2.5 py-1 text-sm tracking-wider text-paper shadow-[2px_2px_0_var(--color-flame)] transition-colors hover:border-flame hover:text-sun focus:outline-none"
      >
        <span>{locale.toUpperCase()}</span>
        <svg
          className={`h-3 w-3 text-paper/70 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 mt-1.5 w-24 border-2 border-paper/30 bg-ink p-1 shadow-[3px_3px_0_var(--color-flame)]"
        >
          <button
            type="button"
            role="option"
            aria-selected={locale === "id"}
            onClick={() => selectLocale("id")}
            className={`cursor-pointer font-display flex w-full items-center justify-between px-2.5 py-1 text-left text-xs tracking-wider transition-colors ${
              locale === "id"
                ? "bg-flame text-ink"
                : "text-paper/85 hover:bg-paper/10 hover:text-sun"
            }`}
          >
            <span>ID</span>
            <span className="text-[10px] font-normal opacity-80">Indo</span>
          </button>
          <button
            type="button"
            role="option"
            aria-selected={locale === "en"}
            onClick={() => selectLocale("en")}
            className={`cursor-pointer font-display mt-0.5 flex w-full items-center justify-between px-2.5 py-1 text-left text-xs tracking-wider transition-colors ${
              locale === "en"
                ? "bg-flame text-ink"
                : "text-paper/85 hover:bg-paper/10 hover:text-sun"
            }`}
          >
            <span>EN</span>
            <span className="text-[10px] font-normal opacity-80">English</span>
          </button>
        </div>
      )}
    </div>
  );
}

