import Image from "next/image";
import TweetCard from "./components/TwitterCard";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center ">
      <main className="mx-auto max-w-prose flex flex-col gap-8 px-8 py-10">
        <nav className="flex gap-6 justify-end mb-8">
          {[
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" },
            { href: "/links", label: "Links" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-lg font-semibold text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <header className="flex items-center justify-between">
          <Image
            priority
            width={57}
            height={40}
            alt="Ramon Xavier"
            src="/images/logo_name.png"
          />
          <div className="text-right">
            <h1 className="text-3xl font-bold text-gray-900">Ramon Xavier</h1>
            <p className="text-lg text-gray-500">Senior Software Developer</p>
          </div>
        </header>

        <section className="flex flex-col gap-6">
          <TweetCard id="1809005384285221230" />
        </section>
      </main>
    </div>
  );
}
