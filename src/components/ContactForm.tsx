"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getSite } from "@/lib/content";

type ContactFormProps = {
  email: string;
};

const field =
  "w-full border-b-[3px] border-ink/30 bg-transparent py-3 font-medium text-ink outline-none transition-colors focus:border-flame placeholder:text-ink/40";

export default function ContactForm({ email }: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const { locale } = useLanguage();
  const site = getSite(locale);
  const formText = site.contactForm;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const senderEmail = String(f.get("email") ?? "").trim();
    const subject = encodeURIComponent(String(f.get("subject") ?? formText.defaultSubject));
    const message = String(f.get("message") ?? "").trim();

    const senderLabel = locale === "id" ? "Pengirim" : "Sender";
    const body = encodeURIComponent(
      `${message}\n\n—\n${senderLabel}: ${name}\nEmail: ${senderEmail}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <input name="name" required placeholder={formText.namePlaceholder} className={field} />
      <input name="email" type="email" required placeholder={formText.emailPlaceholder} className={field} />
      <input name="subject" required placeholder={formText.subjectPlaceholder} className={field} />
      <textarea name="message" required rows={5} placeholder={formText.messagePlaceholder} className={field} />
      <button
        type="submit"
        className="cursor-pointer font-display -skew-x-12 bg-ink px-10 py-3 tracking-widest text-paper shadow-[5px_5px_0_var(--color-flame)] transition-[transform,background-color,color] duration-200 hover:-translate-y-1 hover:bg-flame hover:text-ink"
      >
        {formText.sendButton}
      </button>
      {sent && (
        <p className="text-sm font-semibold text-flame">
          {formText.openingMail}
        </p>
      )}
    </form>
  );
}
