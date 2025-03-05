"use client";

import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  delay: number;
}

export default function Articles() {
  const articles: Article[] = [];

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
        Articles{" "}
        <span className="text-muted-foreground font-mono text-base tracking-tighter ml-2">
          (03)
        </span>
      </h1>

      <div className="space-y-12 mt-12">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border-b border-white/10 pb-12 animate-fade-in"
            style={{ animationDelay: `${article.delay}ms` }}
          >
            <Link href={article.link} className="group">
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Calendar size={14} className="mr-2" />
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="text-2xl font-medium group-hover:text-primary transition-colors duration-300">
                {article.title}
              </h2>
              <p className="text-muted-foreground mt-3">{article.excerpt}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-foreground hover-arrow">
                Read article
                <ArrowRight
                  size={14}
                  className="ml-1 arrow-icon transition-transform duration-300 group-hover:-translate-x-1"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
