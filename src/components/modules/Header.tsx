import Image from "next/image";
import { NavigationMenuRoot } from "./Navigation";

export const Header = () => {
  return (
    <header className="mx-auto flex max-w-5xl items-center justify-between gap-20 px-5 py-8 xl:px-0 flex-row-reverse lg:flex-row">
      <Image src="/images/logo_name.png" alt={""} width={240} height={240} />
      <NavigationMenuRoot />
    </header>
  );
};
