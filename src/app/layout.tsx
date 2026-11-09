import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RoughFilter } from "@/components/Deco";
import { getProfile, getSite } from "@/lib/content";
import { LanguageProvider } from "@/context/LanguageContext";
import favicon from "../../public/favicon/ico.png";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const site = getSite();
const profile = getProfile();

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
  return (
    <html lang="id" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          <RoughFilter />
          <Header brand={profile.handle} socials={profile.socials} />
          <main>{children}</main>
          <Footer socials={profile.socials} credit={site.footerCredit} name={profile.name} />
        </LanguageProvider>
      </body>
    </html>
  );
}
