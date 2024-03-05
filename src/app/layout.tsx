import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/modules/Header";
import { Footer } from "@/components/modules/Footer";

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
      <body className={inter.className}>
        <main className="w-full h-screen">
          <Header />
          <div
            role="none"
            data-orientation="horizontal"
            className="shrink-0 bg-border h-[1px] w-full"
          />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
