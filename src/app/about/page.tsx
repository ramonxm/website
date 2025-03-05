"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="pt-8 pb-20">
      <Link
        href="/"
        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 group"
      >
        <ArrowLeft
          size={18}
          className="mr-2 transition-transform duration-300 group-hover:-translate-x-1"
        />
        Home
      </Link>

      <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-12 animate-fade-in">
        About Me{" "}
        <span className="text-muted-foreground font-mono text-base tracking-tighter ml-2">
          (01)
        </span>
      </h1>

      <div
        className="prose prose-invert max-w-3xl animate-fade-in"
        style={{ animationDelay: "100ms" }}
      >
        <p className="text-xl leading-relaxed text-white/80">Coming soon</p>

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-2xl font-medium mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-white/10 pl-6 py-2">
                <h3 className="text-lg font-medium">Senior Developer</h3>
                <p className="text-muted-foreground">
                  Company Name • 2020 — Present
                </p>
                <p className="mt-2">Coming soon</p>
              </div>
              <div className="border-l-2 border-white/10 pl-6 py-2">
                <h3 className="text-lg font-medium">Frontend Engineer</h3>
                <p className="text-muted-foreground">
                  Previous Company • 2018 — 2020
                </p>
                <p className="mt-2">Coming soon</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                React Native
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                AWS
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                UI/UX Design
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
