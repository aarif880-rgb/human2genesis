import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The AI Creator's Blueprint — Human 2.0 Genesis",
  description:
    "Stop using AI like a beginner. The AI Creator's Blueprint is a structured AI operating system for Bangladeshi freelancers, creators, and professionals. Eid Special: ৳199.",
  keywords: ["AI operator Bangladesh", "AI creator blueprint", "ChatGPT Bangla", "AI freelancing Bangladesh", "prompt framework Bangla"],
  openGraph: {
    title: "The AI Creator's Blueprint — Human 2.0 Genesis",
    description: "Stop using AI like a beginner. Learn how operators actually use it.",
    url: "https://human2genesis.com",
    siteName: "Human 2.0 Genesis",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Creator's Blueprint",
    description: "Stop using AI like a beginner. Learn how operators actually use it.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
