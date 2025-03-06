"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEventHandler } from "react";

export const Footer = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    window.location.href = "mailto:ramon1234rxm@gmail.com";
  };

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/ramonxm" },
    { name: "Github", url: "https://github.com/ramonxm" },
    { name: "Instagram", url: "https://www.instagram.com/ramonxm/" },
    { name: "X (formerly Twitter)", url: "https://x.com/ramonrxm" },
    { name: "Youtube", url: "https://www.youtube.com/@ramonrxm" },
  ];

  return (
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
          <form onSubmit={handleSubmit} className="self-end">
            <button
              type="submit"
              className="py-2 flex cursor-pointer transition-all items-center gap-2 delay-150 text-white rounded-lg hover:bg-gray-950"
              aria-label="Submit email"
            >
              Send Mail
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
