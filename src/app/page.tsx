"use client";

import { ArrowRight } from "lucide-react";

import Link from "next/link";

export default function Home() {
  const menuItems = [
    { title: "About Me", path: "/about" },
    { title: "Works", path: "/works" },
    { title: "Articles", path: "/articles" },
    { title: "Talks", path: "/talks" },
  ];

  return (
    <div className="py-8 md:py-12">
      <ul className="space-y-6 md:space-y-8">
        {menuItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <Link href={item.path} className="group w-full">
              <div className="flex items-baseline">
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold transition-all group-hover:pl-2">
                  {item.title}
                </h1>
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
  );
}
