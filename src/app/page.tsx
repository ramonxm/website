import { Cards } from "@/components/modules/Cards";
import { Title } from "@/components/modules/Title";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl flex-col items-center justify-center dark:bg-background mt-8">
      <Title>Software Engineer</Title>
      <TextGenerateEffect words="Full Stack Developer, based on React, React Native, Typescript and Node. I'm passionate about the entire programming ecosystem." />
    </div>
  );
}
