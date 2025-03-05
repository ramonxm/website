"use client";

import { validateEmail } from "#/utils/valide-email";
import { ArrowUpRight } from "lucide-react";
import { useState, FormEventHandler } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setEmail("");
    } else {
      setIsEmailValid(false);
    }
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
  );
};
