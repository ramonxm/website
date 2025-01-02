import {
  LinkedinIcon,
  ArrowUpRight,
  GithubIcon,
  InstagramIcon,
  LucideTwitter,
  YoutubeIcon,
  ArrowUpLeft,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mx-auto max-w-prose flex flex-col gap-4 px-6 py-8">
      <div className="flex items-center justify-between mb-4">
        <Link href="/">
          <ArrowLeft />
        </Link>
        <Image
          priority
          width={120}
          height={26}
          src="/images/logo.png"
          alt="Ramon Xavier Logo"
        />
        <div />
      </div>
      <section className="flex flex-col gap-4">
        <a
          target="_blank"
          href="https://linkedin.com/in/ramonxm"
          className="flex items-center justify-between ring-1 ring-zinc-950 dark:ring-zinc-200 p-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
        >
          <LinkedinIcon />
          <span className="flex items-center gap-4">LinkedIn</span>
          <ArrowUpRight />
        </a>
        <a
          target="_blank"
          href="https://github.com/ramonxm"
          className="flex items-center justify-between ring-1 ring-zinc-950 dark:ring-zinc-200 p-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
        >
          <GithubIcon />
          <span className="flex items-center gap-4">Github</span>
          <ArrowUpRight />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/ramonxm/"
          className="flex items-center justify-between ring-1 ring-zinc-950 dark:ring-zinc-200 p-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
        >
          <InstagramIcon />
          <span className="flex items-center gap-4">Instagram</span>
          <ArrowUpRight />
        </a>
        <a
          target="_blank"
          href="https://x.com/ramonrxm"
          className="flex items-center justify-between ring-1 ring-zinc-950 dark:ring-zinc-200 p-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
        >
          <LucideTwitter />
          <span className="flex items-center gap-4">X (formerly Twitter)</span>
          <ArrowUpRight />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@ramonrxm"
          className="flex items-center justify-between ring-1 ring-zinc-950 dark:ring-zinc-200 p-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
        >
          <YoutubeIcon />
          <span className="flex items-center gap-4">Youtube</span>
          <ArrowUpRight />
        </a>
      </section>
    </div>
  );
}
