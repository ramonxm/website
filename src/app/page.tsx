import { Header } from "@/components/modules/Header";
import { NavigationMenuRoot } from "@/components/modules/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <div
      data-orientation="horizontal"
      role="none"
      className="shrink-0 bg-border h-[1px] w-full"
    >
      <Header />
      <main className="mx-auto max-w-5xl flex-col items-center justify-center px-5 py-8 xl:px-0 dark:bg-background">
        <div className="mx-auto flex max-w-5xl justify-center gap-2 px-5 py-8 xl:px-0 flex-row-reverse lg:flex-col">
          <h1 className="animate-text bg-gradient-to-r  from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight">
            Software Engineer
          </h1>
          <p className="text-sm text-muted-foreground">
            Full Stack Developer, based on React, React Native, Typescript and
            Node. I&apos;m passionate about the entire programming ecosystem.
          </p>
        </div>
        <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 animate-pulse  ${
                i === 3 || i === 6 ? "col-span-2" : ""
              }`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
