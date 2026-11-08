import type {
  Certificate,
  Feature,
  NavItem,
  Profile,
  Project,
  Skill,
  Update,
} from "./types";
import avatar from "@/assets/profile/pfp.jpg";

import certITFest from "@/assets/certif/ITFest8.0.jpeg";
import certUNIKA from "@/assets/certif/WebDevUNIKA.jpg";
import certUNTAR from "@/assets/certif/WebDevUNTAR.jpeg";
import certFusionTech from "@/assets/certif/FusionTech.jpg";
import certAMIKOM from "@/assets/certif/HackatonAMIKOM.png";
import certSMK from "@/assets/certif/HackatonSMK.jpg";
import certCHIPS from "@/assets/certif/CHIPS2025.jpg";
import certMargaDi from "@/assets/certif/Marga_diCoffee.jpg";

import coverNusaka from "@/assets/project-cover/nusaka.png";
import coverWidyatara from "@/assets/project-cover/widyatara.png";
import coverPolanitas from "@/assets/project-cover/polanitas.png";
import coverTuberta from "@/assets/project-cover/tuberta-kitchen.png";
import coverSnapan from "@/assets/project-cover/snaparel.jpg";
import coverArtoMoro from "@/assets/project-cover/artomoro-webview.jpg";
import coverGenCerdas from "@/assets/project-cover/gencerdas.png";
import coverKuntiJump from "@/assets/project-cover/kunti-jump.png";

export const site = {
  title: "Rifqiww Portfolio",
  description: "Portofolio developer: project, sertifikat, dan cara menghubungi saya.",
  footerCredit: "© Rifqiww",
  ctaTitle: "OPEN FOR WORK!",
  ctaText: "Terbuka untuk proyek freelance & kolaborasi.",
};

export const nav: NavItem[] = [
  { label: "HOME", sub: "Beranda", href: "/" },
  { label: "ABOUT", sub: "Tentang & Sertifikat", href: "/about" },
  { label: "PROJECT", sub: "Karya", href: "/projects" },
  { label: "CONTACT", sub: "Kontak", href: "/contact" },
];

export const profile: Profile = {
  name: "RIFQI NR",
  handle: "RifqiNR",
  role: "Frontend Developer",
  tagline: "Turning Ideas Into Digital Reality.",
  shortBio:
    "Saya seorang developer yang berfokus pada pengembangan aplikasi web dan mobile dengan pengalaman membangun antarmuka yang modern, responsif, dan berorientasi pada pengguna. Saya senang mengubah ide menjadi produk digital melalui kode yang bersih, desain yang terstruktur, serta performa yang optimal.",
  longBio: [
    "Halo, saya Rifqi Saya seorang developer yang memiliki ketertarikan dalam membangun produk digital, mulai dari merancang antarmuka hingga mengembangkan aplikasi yang fungsional dan responsif.",
    "Saya berfokus pada pengembangan web dan mobile menggunakan berbagai teknologi modern seperti React, Next.js, TypeScript, React Native, dan Java. Dalam setiap proyek, saya selalu mengutamakan clean code, performa, serta pengalaman pengguna yang intuitif.",
    "Bagi saya, programming bukan sekadar menulis kode, melainkan tentang bagaimana memahami masalah, merancang solusi, dan mengubah ide menjadi sesuatu yang benar-benar bermanfaat."
  ],
  location: "Indonesia",
  email: "rifqinabil378@Gmail.com",
  phone: "6287790385870",
  status: "Available for freelance",
  resumeUrl: "",
 avatar: avatar.src,
  socials: [
    { label: "GitHub", href: "https://github.com/Rifqiww" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rifqi-nabil-rafiudin-b2b579296/" },
    { label: "Instagram", href: "https://www.instagram.com/its_rifqi/" },
  ],
};

export const updates: Update[] = [
  { date: "2026.11.01", title: "Merilis project terbaru: Dashboard Analytics", href: "/projects" },
  { date: "2026.10.15", title: "Lulus sertifikasi Frontend Development", href: "/about" },
  { date: "2026.09.20", title: "Mulai membuka slot proyek freelance", href: "/contact" },
];

export const features: Feature[] = [
  { title: "ABOUT", sub: "Tentang saya", href: "/about" },
  { title: "PROJECT", sub: "Karya terpilih", href: "/projects" },
  { title: "CONTACT", sub: "Mari berkolaborasi", href: "/contact" },
];

export const skills: Skill[] = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "GSAP", category: "Frontend" },
  { name: "Java", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Docker", category: "Tools" },
];

export const projects: Project[] = [
  {
    slug: "nusaka",
    title: "Nusaka",
    year: "2026",
    summary: "Website pengenalan hewan asli Indonesia dengan basis 3D dan interaktif.",
    tags: ["Next.js", "TypeScript", "Tailwind", "ThreeJS"],
    featured: true,
    image: coverNusaka.src,
    liveUrl: "https://nusaka.vercel.app",
    repoUrl: "https://github.com/Rifqiww/nusaka",
  },
  {
    slug: "widyatara",
    title: "Widyatara",
    year: "2026",
    summary: "Website budaya Indonesia dengan pengenalan yang interaktif.",
    tags: ["Next.js", "TypeScript", "Tailwind", "ThreeJS"],
    featured: true,
    image: coverWidyatara.src,
    liveUrl: "https://widyatara.vercel.app",
    repoUrl: "https://github.com/Rifqiww/Widyatara",
  },
  {
    slug: "polanitas",
    title: "Polanitas",
    year: "2026",
    summary: "Website analisis konten digital berbasis LLM dengan fitur bantuan untuk penyandang disabilitas.",
    tags: ["Next.js", "TypeScript", "Tailwind", "LLM"],
    featured: true,
    image: coverPolanitas.src,
    liveUrl: "https://polanitas.vercel.app",
    repoUrl: "https://github.com/Rifqiww/polanitas",
  },
  {
    slug: "tuberta-kitchen",
    title: "Tuberta Kitchen",
    year: "2025",
    summary: "Website pemesanan makanan catering secara online.",
    tags: ["React", "Vite", "Tailwind"],
    featured: true,
    image: coverTuberta.src,
    liveUrl: "https://tuberta-kitchen.vercel.app/Menu",
    repoUrl: "https://github.com/Catering-Tuberta-Kitchen/web-catering-frontend",
  },
  {
    slug: "snapan-apparel",
    title: "Snapan Apparel",
    year: "2025",
    summary: "Aplikasi android untuk pemesanan baju satuan dan lusinan. Dengan fitur unggulan yaitu custom desain kaos.",
    tags: ["Expo Go", "Nativewind"],
    featured: true,
    image: coverSnapan.src,
    liveUrl: "",
    repoUrl: "https://github.com/PJBL-2025/PJBL2025_FrontEnd",
  },
  {
    slug: "bpr-arto-moro",
    title: "BPR ARTO MORO APP",
    year: "2024",
    summary: "Aplikasi perbankan yang berbasis webview untuk BPR ARTO MORO.",
    tags: ["Java"],
    featured: true,
    image: coverArtoMoro.src,
    liveUrl: "",
    repoUrl: "https://github.com/Rifqiww/ArtoMoro_WEBVIEW",
  },
  {
    slug: "gen-cerdas",
    title: "Gen Cerdas",
    year: "2025",
    summary: "Website statis yang bertujuan untuk meningkatkan keinginan belajar remaja dengan pendekatan menggunakan materi yang mudah dipahami.",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    image: coverGenCerdas.src,
    liveUrl: "",
    repoUrl: "https://github.com/Rifqiww/GenCerdas-Vanilla",
  },
  {
    slug: "kunti-jump",
    title: "Kunti Jump",
    year: "2024",
    summary: "Website landing page dari game Kunti Jump",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    image: coverKuntiJump.src,
    liveUrl: "https://kuntijump.vercel.app",
    repoUrl: "https://github.com/Rifqiww/KuntiJump",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Web Design IT Fest 8.0",
    issuer: "Universitas Dian Nuswantoro",
    date: "FEB 2026",
    image: certITFest.src,
    description: "Sertifikat kompetisi Web Design IT Fest 8.0 yang diselenggarakan oleh Universitas Dian Nuswantoro (UDINUS) sebagai UI/UX Designer dan Frontend Developer.",
  },
  {
    title: "Web Development Ficpact Cup 2026",
    issuer: "Universitas Katolik Soegijapranata",
    date: "APR 2026",
    image: certUNIKA.src,
    description: "Sertifikat kompetisi Web Development dalam rangkaian kegiatan Ficpact Cup 2026 yang diselenggarakan oleh Universitas Katolik Soegijapranata (SCU) sebagai Quality Assurance dan Frontend Developer.",
  },
  {
    title: "Web Development I/O Fest 2026",
    issuer: "Universitas Tarumanagara",
    date: "JUN 2026",
    image: certUNTAR.src,
    description: "Sertifikat kompetisi Web Development pada ajang festival teknologi I/O Fest 2026 di Universitas Tarumanagara (UNTAR) sebagai Frontend Developer.",
  },
  {
    title: "Web Design Fusion Tech",
    issuer: "Universitas Teknologi Yogyakarta",
    date: "MAR 2025",
    image: certFusionTech.src,
    description: "Sertifikat kompetisi Web Design tingkat perguruan tinggi pada Fusion Tech yang diadakan oleh Universitas Teknologi Yogyakarta (UTY) sebagai UI/UX Designer dan Frontend Developer.",
  },
  {
    title: "Hackaton Refactory",
    issuer: "Universitas Amikom Yogyakarta",
    date: "OCT 2025",
    image: certAMIKOM.src,
    description: "Sertifikat keikutsertaan dalam ajang kompetisi pengembangan perangkat lunak intensif (Hackathon) yang diselenggarakan oleh Universitas Amikom Yogyakarta sebagai Mobile Developer.",
  },
  {
    title: "Hackaton SMK AI INNOVATION CHALLENGE 2025",
    issuer: "Haraka Communication",
    date: "DES 2025",
    image: certSMK.src,
    description: "Sertifikat partisipasi dalam ajang kompetisi pemanfaatan kecerdasan buatan (Artificial Intelligence) tingkat nasional SMK AI Innovation Challenge 2025.",
  },
  {
    title: "CHIPS 2025",
    issuer: "Universitas Katolik Parahyangan",
    date: "OCT 2025",
    image: certCHIPS.src,
    description: "Sertifikat top 30% ajang kompetisi lomba cerdas cermat bidang ilmu komputer dan teknologi informasi CHIPS 2025 yang diadakan oleh Universitas Katolik Parahyangan (UNPAR).",
  },
  {
    title: "Coffe Marga_di Training",
    issuer: "at_marga_di",
    date: "OCT 2026",
    image: certMargaDi.src,
    description: "Sertifikat pelatihan keahlian pengolahan kopi dan operasional barista profesional yang diselenggarakan oleh @at_marga_di.",
  },
];
