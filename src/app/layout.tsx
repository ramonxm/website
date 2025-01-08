import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "#/components/navbar";
import { ThemeProvider } from "next-themes";

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
      <body>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <div className="relative w-full flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
