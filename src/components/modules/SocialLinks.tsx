import React, { ReactElement } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "../ui/card";

type SocialLinkProps = {
  href: string;
  title: string;
  icon: ReactElement;
  label: string;
};

export const SocialLink = ({ href, title, icon, label }: SocialLinkProps) => (
  <Card className="transition-opacity duration-1000 ease-out opacity-100 hover:opacity-50">
    <a href={href} title={title} target="__blank">
      <CardHeader className="pb-2">
        <CardTitle className="text-center">{label}</CardTitle>
      </CardHeader>
      <CardFooter className="gap-2 justify-center">
        {icon &&
          React.cloneElement(icon, { className: "h-4 w-4 text-neutral-500" })}
        <CardDescription>@ramonrxm</CardDescription>
      </CardFooter>
    </a>
  </Card>
);
