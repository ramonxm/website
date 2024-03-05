import Image from "next/image";
import { Navbar } from "./Navbar";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="mx-auto flex max-w-5xl items-center justify-between gap-20 px-4 py-4 xl:px-0 flex-row lg:flex-row">
      <Link href="/">
        <Image src="/images/logo_name.png" alt="Logo" width={160} height={34} />
      </Link>
      <Navbar />
    </header>
  );
};
