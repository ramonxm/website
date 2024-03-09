import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/modules/Header";
import { Footer } from "@/components/modules/Footer";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramon Xavier",
  description: "Site de um desenvolvedor apaixonado por programação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
