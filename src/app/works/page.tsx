"use client";

import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  delay: number;
}

export default function Works() {
  const projects: Project[] = [];

  return (
    <div className="pt-8 pb-20">
      <div className="flex items-center justify-between">
        <Link
          href="/about"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft
            size={18}
            className="mr-2 transition-transform duration-300 group-hover:-translate-x-1"
          />
          About
        </Link>
        <Link
          href="/articles"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 group"
        >
          Articles
          <ArrowRight
            size={18}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-12 animate-fade-in">
        Works
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300 bg-white/5 hover:bg-white/10 animate-fade-in"
            style={{ animationDelay: `${project.delay}ms` }}
          >
            <div className="aspect-video bg-black/50 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-muted-foreground mt-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-white/10 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
