import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramon Xavier",
  applicationName: "Ramon Xavier",
  referrer: "origin-when-cross-origin",
  keywords: ["Ramon", "Ramon Xavier", "Ramon Dev"],
  authors: [{ name: "Ramon Xavier" }],
  creator: "Ramon Xavier",
  publisher: "Ramon Xavier",
  openGraph: {
    title: "Ramon Xavier",
    url: "https://ramonxavier.com",
    siteName: "Ramon Xavier",
    locale: "pt-BR",
    type: "website",
    description:
      "Desenvolvedor apaixonado por tecnologia e aos prazeres da vida.",
  },
  description:
    "Desenvolvedor apaixonado por tecnologia e aos prazeres da vida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
