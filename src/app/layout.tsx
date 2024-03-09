import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramon Xavier",
  openGraph: {
    title: "Ramon Xavier",
    siteName: "Ramon Xavier",
    locale: "pt-BR",
    type: "website",
    description: "Site de um desenvolvedor apaixonado por programação.",
  },
  description: "Site de um desenvolvedor apaixonado por programação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
