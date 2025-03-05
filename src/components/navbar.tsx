"use client";

import { X, Menu, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { title: "About Me", number: "01", path: "/about" },
    { title: "Works", number: "02", path: "/works" },
    { title: "Articles", number: "03", path: "/articles" },
    { title: "Talks", number: "04", path: "/talks" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center border-b border-gray-800 py-4">
        <Link href="/" className="relative h-10 w-32 sm:w-48 md:w-60">
          <Image
            src="/icon.svg"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="object-left"
          />
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-white/10 transition"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex gap-3">
          <Link
            target="_blank"
            href="https://buymeacoffee.com/ramonxm"
            className="bg-transparent border border-white rounded-full px-6 py-2 flex items-center gap-2 hover:bg-white/10 transition"
          >
            Buy me a coffee <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 p-6 flex flex-col">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 transition"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center h-full space-y-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="text-4xl font-bold flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}{" "}
                <span className="text-gray-500">({item.number})</span>
              </Link>
            ))}
            <Link
              target="_blank"
              href="https://buymeacoffee.com/ramonxm"
              className="mt-8 bg-transparent border border-white rounded-full px-6 py-2 flex items-center gap-2 hover:bg-white/10 transition"
            >
              Buy me a coffee <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
