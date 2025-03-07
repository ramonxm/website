"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="pt-8 pb-20">
      <div className="flex items-center justify-between">
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
        <Link
          href="/works"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 group"
        >
          Works
          <ArrowRight
            size={18}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-12 animate-fade-in">
        About Me
      </h1>

      <div
        className="prose prose-invert max-w-3xl animate-fade-in"
        style={{ animationDelay: "100ms" }}
      >
        <p className="text-xl leading-relaxed text-white/80">
          I am a Software Developer with extensive experience in developing
          applications with React Native and websites with React. <br /> I
          currently work at Globo, where I am responsible for the systems that
          manage the entire content production chain (soap operas, series and
          films), in addition to mentoring and supporting juniors.
        </p>

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-2xl font-medium mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-white/10 pl-6 py-2">
                <h3 className="text-lg font-medium">Senior Developer</h3>
                <p className="text-muted-foreground">Globo • 2022 — Present</p>
                <ul className="mt-2 list-disc list-inside space-y-2">
                  <li>Synchronization of offline to online data</li>
                  <li>
                    Decommissioning of a legacy application (on-premise) to the
                    Cloud
                  </li>
                  <li>
                    Development of an application to support the cast in
                    studying the text
                  </li>
                  <li>
                    Offline First - Scalability and resilience with large
                    volumes of photos and data
                  </li>
                  <li>
                    Development of an application for continuity assistants when
                    recording scenes
                  </li>
                  <li>
                    Migration of the codebase of an old React Native application
                    to a more up-to-date version, 90% faster and more efficient
                  </li>
                  <li>
                    Configuration of a pipeline for performance and integrated
                    testing on the Frontend
                  </li>
                </ul>
              </div>
              <div className="border-l-2 border-white/10 pl-6 py-2">
                <h3 className="text-lg font-medium">Frontend Engineer</h3>
                <p className="text-muted-foreground">
                  Storm Group • 2021 — 2022
                </p>
                <ul className="mt-2 list-disc list-inside space-y-2">
                  <li>Migration from Webpack to Vite</li>
                  <li>Reduction of the application's Bundle</li>
                  <li>Migration of Material UI to the latest version</li>
                  <li>Migration of the Javascript codebase to Typescript</li>
                  <li>Integration with Payment Gateway (Mercado Pago)</li>
                  <li>Creation of personalized websites for invitations</li>
                  <li>
                    Implementation of unit and integration testing culture
                  </li>
                </ul>
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
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                GCP
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                Vertex AI
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                OpenAI
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                GraphQL
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                Websockets
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                SQL and NoSQL
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                Firebase
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                Swift
              </span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-sm">
                SwiftUI
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
