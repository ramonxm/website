"use client";

import { validateEmail } from "#/utils/valide-email";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, FormEventHandler } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      alert("Thank you for subscribing!");
      setEmail("");
    } else {
      setIsEmailValid(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { title: "About Me", number: "01", path: "/" },
    { title: "Works", number: "02", path: "/about" },
    { title: "Articles", number: "03", path: "/works" },
    { title: "Talks", number: "04", path: "/insights" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/ramonxm" },
    { name: "Github", url: "https://github.com/ramonxm" },
    { name: "Instagram", url: "https://www.instagram.com/ramonxm/" },
    { name: "X (formerly Twitter)", url: "https://x.com/ramonrxm" },
    { name: "Youtube", url: "https://www.youtube.com/@ramonrxm" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 sm:px-6 py-4 max-w-6xl">
        <nav className="flex justify-between items-center border-b border-gray-800 py-4">
          <div className="relative h-10 w-32 sm:w-48 md:w-60">
            <Image
              src="/icon.svg"
              alt="Logo"
              layout="fill"
              objectFit="contain"
              className="object-left"
            />
          </div>

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

        <div className="py-8 md:py-12">
          <ul className="space-y-6 md:space-y-8">
            {menuItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <Link href={item.path} className="group w-full">
                  <div className="flex items-baseline">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold transition-all group-hover:pl-2">
                      {item.title}
                    </h1>
                    <span className="text-sm sm:text-lg md:text-xl text-gray-500 ml-2">
                      ({item.number})
                    </span>
                  </div>
                </Link>
                <Link
                  href={item.path}
                  className="p-2 sm:p-3 md:p-4 flex items-center justify-center hover:bg-white/10 transition rounded-full"
                  aria-label={`Go to ${item.title}`}
                >
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-800 mt-8 py-8">
          <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
            <div>
              <h3 className="text-gray-500 mb-4">Follow me.</h3>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    target="_blank"
                    href={link.url}
                    className="flex items-center justify-between p-3 hover:bg-white/10 transition-all"
                  >
                    <span className="flex-1 text-sm md:text-base mx-2">
                      {link.name}
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full md:w-auto md:min-w-[300px]">
              <h3 className="text-gray-500 mb-4">Stay connected w/ me.</h3>
              <form onSubmit={handleSubmit} className="flex">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    className={`bg-transparent border-b ${
                      isEmailValid ? "border-gray-500" : "border-red-500"
                    } py-2 focus:outline-none focus:border-white w-full pr-10`}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsEmailValid(true);
                    }}
                    aria-label="Email address"
                  />
                  {!isEmailValid && (
                    <p className="text-red-500 text-xs mt-1">
                      Please enter a valid email
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-3 hover:text-gray-300 transition-colors"
                  aria-label="Submit email"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
