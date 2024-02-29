import { Cards } from "@/components/modules/Cards";
import { Header } from "@/components/modules/Header";
import { Title } from "@/components/modules/Title";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Header />
      <div
        role="none"
        data-orientation="horizontal"
        className="shrink-0 bg-border h-[1px] w-full"
      />
      <div className="mx-auto max-w-5xl flex-col items-center justify-center dark:bg-background mt-8">
        <Title />
        <TextGenerateEffect words="Full Stack Developer, based on React, React Native, Typescript and Node. I'm passionate about the entire programming ecosystem." />
        <div className="flex flex-col mt-6 gap-6">
          <Cards />
        </div>
      </div>
    </main>
  );
}
