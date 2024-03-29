import { MotionSvgScroll } from "@/assets/svgs/MotionSvg";
import { Layout } from "@/components/layouts/Layout";
import { Background } from "@/components/modules/Background";
import { Title } from "@/components/modules/Title";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  return (
    <Layout>
      <div className="mt-9 dark:bg-background overflow-hidden mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-center">
          <Background />
          <Title>Software Engineer</Title>
          <TextGenerateEffect words="Full Stack Developer, based on React, React Native, Typescript and Node. I'm passionate about the entire programming ecosystem." />
          <div className="p-4">
            <MotionSvgScroll />
          </div>
        </div>
      </div>
    </Layout>
  );
}
