import Image from "next/image";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="mx-auto flex max-w-5xl items-center justify-between gap-20 px-4 py-4 xl:px-0 flex-row-reverse lg:flex-row">
      <Image src="/images/logo_name.png" alt={""} width={160} height={34} />
      <Navbar />
    </header>
  );
};
