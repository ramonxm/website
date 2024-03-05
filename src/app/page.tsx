import { Background } from "@/components/modules/Background";
import { Title } from "@/components/modules/Title";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  return (
    <div className="h-screen">
      <section className="dark:bg-background relative overflow-hidden h-2/6	items-center flex mx-auto max-w-5xl">
        <Background />
        <div className="flex-col items-center justify-center">
          <Title>Software Engineer</Title>
          <TextGenerateEffect words="Full Stack Developer, based on React, React Native, Typescript and Node. I'm passionate about the entire programming ecosystem." />
        </div>
      </section>
    </div>
  );
}
