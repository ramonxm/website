"use client";

import { ArrowLeft, Calendar, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Talk {
  title: string;
  event: string;
  location: string;
  date: string;
  link: string;
  videoLink: string;
  slideLink: string;
  delay: number;
}

export default function Talks() {
  const talks: Talk[] = [];

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
        Talks
      </h1>

      <div className="space-y-12 mt-12">
        {talks.map((talk, index) => (
          <div
            key={index}
            className="border border-white/10 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${talk.delay}ms` }}
          >
            <h2 className="text-2xl font-medium mb-4">{talk.title}</h2>

            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mb-6 space-y-2 sm:space-y-0">
              <div className="flex items-center">
                <Calendar size={14} className="mr-2" />
                <span>{talk.date}</span>
              </div>
              <span className="hidden sm:block mx-2">•</span>
              <div className="flex items-center">
                <MapPin size={14} className="mr-2" />
                <span>{talk.location}</span>
              </div>
              <span className="hidden sm:block mx-2">•</span>
              <span>{talk.event}</span>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href={talk.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors duration-300"
              >
                Watch video
                <ExternalLink size={14} className="ml-2" />
              </a>
              <a
                href={talk.slideLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors duration-300"
              >
                View slides
                <ExternalLink size={14} className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
