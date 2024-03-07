import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/modules/Header";
import { Footer } from "@/components/modules/Footer";
import { headers } from "next/headers";

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
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const specificRoute = "/links";

  console.log(headersList);

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {pathname !== specificRoute && <Header />}
        <main className="w-full h-screen">
          <div
            role="none"
            data-orientation="horizontal"
            className="shrink-0 bg-border h-[1px] w-full"
          />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
