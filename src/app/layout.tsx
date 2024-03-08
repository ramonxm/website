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
      <body className={inter.className}>
        <Header />
        <main className="w-full h-screen">
          <div
            role="none"
            data-orientation="horizontal"
            className="shrink-0 bg-border h-[1px] w-full"
          />
          <section className="w-full h-full">{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
