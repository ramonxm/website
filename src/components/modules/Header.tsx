import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <Link href="/">
        <Image src="/images/logo_name.png" alt="Logo" width={160} height={34} />
      </Link>
    </div>
  );
};
