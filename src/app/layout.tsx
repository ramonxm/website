import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Footer } from "#/components/footer";
import { Navbar } from "#/components/navbar";

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
          <div className="container bg-background mx-auto px-4 sm:px-6 py-4 max-w-6xl">
            <div className={`transition-opacity duration-700 ease-out`}>
              <Navbar />
              <main className="flex-1 w-full">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
