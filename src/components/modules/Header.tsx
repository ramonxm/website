import Image from "next/image";
import { Navbar } from "./Navbar";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <header className="mx-auto flex max-w-5xl items-center justify-between gap-20 px-4 py-6 xl:px-0 flex-row lg:flex-row ">
        <Link href="/">
          <Image
            src="/images/logo_name.png"
            alt="Logo"
            width={160}
            height={34}
          />
        </Link>
        <Navbar />
      </header>
    </div>
  );
};
