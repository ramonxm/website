"use client";

import { ArrowRight } from "lucide-react";

import Link from "next/link";

export default function Home() {
  const menuItems = [
    { title: "About Me", number: "01", path: "/about" },
    { title: "Works", number: "02", path: "/works" },
    { title: "Articles", number: "03", path: "/articles" },
    { title: "Talks", number: "04", path: "/talks" },
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
  );
}
