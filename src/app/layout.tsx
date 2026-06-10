import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Human 2.0 Genesis — AI Ebooks for Bangladesh",
  description:
    "Two operator-grade AI systems for Bangladesh. The AI Creator's Blueprint and ChatGPT Business Playbook. Bangla + English. Instant WhatsApp delivery.",
  keywords: [
    "AI operator Bangladesh",
    "AI creator blueprint",
    "ChatGPT Bangla",
    "AI freelancing Bangladesh",
    "prompt framework Bangla",
    "ChatGPT business Bangladesh",
    "AI ebook Bangladesh",
  ],
  openGraph: {
    title: "Human 2.0 Genesis — AI Ebooks for Bangladesh",
    description: "Two operator-grade AI systems. Bangla + English. Instant delivery.",
    url: "https://human2genesis.com",
    siteName: "Human 2.0 Genesis",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Human 2.0 Genesis",
    description: "Two operator-grade AI systems for Bangladesh.",
  },
  robots: { index: true, follow: true },
};

const PIXEL_ID = "2607644909698816";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
