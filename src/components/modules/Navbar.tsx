"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "flex justify-center z-10 items-center p-3 space-x-4",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/who-am-i">Who Am I</HoveredLink>
            <HoveredLink href="/talks">Talks</HoveredLink>
            <HoveredLink href="/podcasts">Podcasts</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      <HoveredLink href="/articles">Articles</HoveredLink>
      <HoveredLink href="/links">Links</HoveredLink>
    </div>
  );
};
