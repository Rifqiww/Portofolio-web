"use client";

import { useState, type FormEvent } from "react";

type ContactFormProps = {
  email: string;
};

const field =
  "w-full border-b-[3px] border-ink/30 bg-transparent py-3 font-medium text-ink outline-none transition-colors focus:border-flame placeholder:text-ink/40";

export default function ContactForm({ email }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const senderEmail = String(f.get("email") ?? "").trim();
    const subject = encodeURIComponent(String(f.get("subject") ?? "Halo"));
    const message = String(f.get("message") ?? "").trim();

    const body = encodeURIComponent(
      `${message}\n\n—\nPengirim: ${name}\nEmail: ${senderEmail}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <input name="name" required placeholder="Nama" className={field} />
      <input name="email" type="email" required placeholder="Email" className={field} />
      <input name="subject" required placeholder="Subjek" className={field} />
      <textarea name="message" required rows={5} placeholder="Pesan" className={field} />
      <button
        type="submit"
        className="cursor-pointer font-display -skew-x-12 bg-ink px-10 py-3 tracking-widest text-paper shadow-[5px_5px_0_var(--color-flame)] transition-[transform,background-color,color] duration-200 hover:-translate-y-1 hover:bg-flame hover:text-ink"
      >
        SEND
      </button>
      {sent && (
        <p className="text-sm font-semibold text-flame">
          Membuka aplikasi email kamu…
        </p>
      )}
    </form>
  );
}
