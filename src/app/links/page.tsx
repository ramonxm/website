import { Title } from "@/components/modules/Title";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function Links() {
  return (
    <div className="mx-auto max-w-5xl flex-col items-center flex-wrap justify-center dark:bg-background mt-8">
      <div className="text-center">
        <Title>Hi, I&apos;m Ramon Xavier 👋🏻</Title>
        <p>Software Engineer at Globo</p>
      </div>
      <div className="mx-auto flex flex-col justify-center items-stretch mt-6 gap-6 max-w-2xl">
        <Card className="transition-opacity duration-1000 ease-out opacity-100 hover:opacity-50">
          <a
            href="https://www.youtube.com/@ramonrxm"
            title="Youtube"
            target="__blank"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-center">Youtube</CardTitle>
            </CardHeader>
            <CardFooter className="gap-2 justify-center">
              <IconBrandYoutube className="h-4 w-4 text-neutral-500" />
              <CardDescription>@ramonrxm</CardDescription>
            </CardFooter>
          </a>
        </Card>
        <Card className="transition-opacity duration-1000 ease-out opacity-100 hover:opacity-50">
          <a href="https://twitter.com/ramonrxm" title="X" target="__blank">
            <CardHeader className="pb-2">
              <CardTitle className="text-center">X</CardTitle>
            </CardHeader>
            <CardFooter className="gap-2 justify-center">
              <IconBrandX className="h-4 w-4 text-neutral-500" />
              <CardDescription>@ramonrxm</CardDescription>
            </CardFooter>
          </a>
        </Card>
        <Card className="transition-opacity duration-1000 ease-out opacity-100 hover:opacity-50">
          <a
            href="https://www.github.com/ramonxm"
            target="__blank"
            title="Github"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-center">Github</CardTitle>
            </CardHeader>
            <CardFooter className="gap-2 justify-center">
              <IconBrandGithub className="h-4 w-4 text-neutral-500" />
              <CardDescription>@ramonxm</CardDescription>
            </CardFooter>
          </a>
        </Card>
        <Card className="transition-opacity duration-1000 ease-out opacity-100 hover:opacity-50">
          <a href="https://www.instagram.com/ramonxm" target="__blank">
            <CardHeader className="pb-2">
              <CardTitle className="text-center">Instagram</CardTitle>
            </CardHeader>
            <CardFooter className="gap-2 justify-center">
              <IconBrandInstagram className="h-4 w-4 text-neutral-500" />
              <CardDescription>@ramonxm</CardDescription>
            </CardFooter>
          </a>
        </Card>
        <Card className="transition-opacity duration-1000 ease-out opacity-100 hover:opacity-50">
          <a
            href="https://www.linkedin.com/in/ramonxm"
            title="LinkedIn"
            target="__blank"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-center">LinkedIn</CardTitle>
            </CardHeader>
            <CardFooter className="gap-2 justify-center">
              <IconBrandLinkedin className="h-4 w-4 text-neutral-500" />
              <CardDescription>@ramonxm</CardDescription>
            </CardFooter>
          </a>
        </Card>
      </div>
    </div>
  );
}
