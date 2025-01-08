"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu } from "lucide-react";

import { Button } from "#/components/ui/button";
import { ThemeToggle } from "#/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "#/components/ui/sheet";

export function Navbar() {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src={
                theme === "dark"
                  ? "/images/logo_name.png"
                  : "/images/logo_name-light.png"
              }
              alt="Ramon Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/about"
              className="transition-colors hover:text-foreground/80"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="transition-colors hover:text-foreground/80"
            >
              Projects
            </Link>
            <Link
              href="/links"
              className="transition-colors hover:text-foreground/80"
            >
              Links
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-foreground/80"
            >
              Contact
            </Link>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="flex flex-col space-y-4">
              <Link href="#about" className="text-sm font-medium">
                About
              </Link>
              <Link href="#projects" className="text-sm font-medium">
                Projects
              </Link>
              <Link href="#skills" className="text-sm font-medium">
                Skills
              </Link>
              <Link href="#contact" className="text-sm font-medium">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
