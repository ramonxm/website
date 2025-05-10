import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Ramon Xavier",
  applicationName: "Ramon Xavier",
  referrer: "origin-when-cross-origin",
  keywords: ["Ramon", "Ramon Xavier", "Ramon Dev"],
  authors: [{ name: "Ramon Xavier" }],
  creator: "Ramon Xavier",
  publisher: "Ramon Xavier",
  openGraph: {
    title: "Ramon Xavier",
    url: baseUrl,
    siteName: "Ramon Xavier",
    locale: "pt-BR",
    type: "website",
    description:
      "Desenvolvedor apaixonado por tecnologia e aos prazeres da vida.",
  },
  description:
    "Desenvolvedor apaixonado por tecnologia e aos prazeres da vida.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={cx("dark", GeistSans.variable, GeistMono.variable)}
    >
      <body>
        <div className="container bg-background mx-auto px-4 sm:px-6 py-4 max-w-6xl">
          <main className="flex-1 w-full">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  );
}
