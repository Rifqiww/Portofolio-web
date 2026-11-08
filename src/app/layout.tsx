import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RoughFilter } from "@/components/Deco";
import { getNav, getProfile, getSite } from "@/lib/content";
import favicon from "../../public/favicon/ico.png";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const site = getSite();

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const profile = getProfile();
  const nav = getNav();

  return (
    <html lang="id" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <RoughFilter />
        <Header brand={profile.handle} nav={nav} socials={profile.socials} />
        <main>{children}</main>
        <Footer nav={nav} socials={profile.socials} credit={site.footerCredit} name={profile.name} />
      </body>
    </html>
  );
}
