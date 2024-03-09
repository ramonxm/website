import { Title } from "@/components/modules/Title";
import Image from "next/image";

export default function WhoAmI() {
  return (
    <div className="mx-auto max-w-5xl md:flex-col items-center justify-center dark:bg-background mt-8">
      <Title>Who Am I</Title>
      <div className="flex flex-col md:flex-row gap-6 md:items-center mt-8">
        <Image
          width={298}
          height={398}
          alt="Profile"
          src="/images/profile.jpg"
          priority
          loading="eager"
          className="border-none rounded-full shadow-lg align-middle"
        />
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
          I have been a technology enthusiast since childhood, always curious
          about both software and hardware aspects of computing. However, my
          true passion lies in software development, specifically in web and
          mobile applications. <br /> Currently, I work with React, React
          Native, and Node.js, contributing to numerous projects while
          constantly striving for application quality and performance. I have
          previous experience with Java, PHP, C/C++, and Python, exploring
          different programming languages and broadening my skill set. My
          ultimate goal is to continue growing in the field of technology and
          share my knowledge with beginners who aspire to enter the programming
          world.
        </p>
      </div>
    </div>
  );
}
