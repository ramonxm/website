import { SocialLink } from "@/components/modules/SocialLinks";
import { Title } from "@/components/modules/Title";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ramon Xavier | Links",
  description: "Meus links de rede sociais e etc.",
};

export default function Links() {
  return (
    <div className="mx-auto max-w-5xl flex-col items-center flex-wrap justify-center dark:bg-background mt-8">
      <div className="text-center">
        <Title>Hi, I&apos;m Ramon Xavier 👋🏻</Title>
        <p>Software Engineer at Globo</p>
      </div>
      <div className="mx-auto flex flex-col justify-center items-stretch mt-6 gap-6 max-w-2xl">
        <SocialLink
          title="Youtube"
          label="Youtube"
          icon={<IconBrandYoutube />}
          href="https://www.youtube.com/@ramonrxm"
        />
        <SocialLink
          title="X"
          label="X"
          icon={<IconBrandX />}
          href="https://twitter.com/ramonrxm"
        />
        <SocialLink
          title="Github"
          label="Github"
          icon={<IconBrandGithub />}
          href="https://www.github.com/ramonxm"
        />
        <SocialLink
          title="Instagram"
          label="Instagram"
          icon={<IconBrandInstagram />}
          href="https://www.instagram.com/ramonxm"
        />
        <SocialLink
          title="LinkedIn"
          label="LinkedIn"
          icon={<IconBrandLinkedin />}
          href="https://www.linkedin.com/in/ramonxm"
        />
      </div>
    </div>
  );
}
