import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <>
      <footer className="mx-auto flex max-w-5xl flex-col justify-start gap-4 overflow-hidden py-8 px-5 lg:px-0">
        <div className="rounded-xl border text-card-foreground shadow bg-[#121212]">
          <div className="items-center m-0 flex justify-center p-5">
            <div className="grid grid-cols-5 items-center gap-3 md:flex md:gap-2">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                title="Instagram"
              >
                <a
                  target="_blank"
                  title="Instagram"
                  href="https://instagram.com/ramonxm"
                >
                  <IconBrandInstagram />
                </a>
              </button>

              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                title="Twitch"
              >
                <a
                  target="_blank"
                  title="Twitch"
                  href="https://twitch.tv/ramonrxm"
                >
                  <IconBrandTwitch />
                </a>
              </button>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                title="Twitter"
              >
                <a
                  target="_blank"
                  title="Twitter"
                  href="https://twitter.com/ramonrxm"
                >
                  <IconBrandTwitter />
                </a>
              </button>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                title="YouTube"
              >
                <a
                  target="_blank"
                  title="YouTube"
                  href="https://youtube.com/@ramonrxm"
                >
                  <IconBrandYoutube />
                </a>
              </button>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                title="Github"
              >
                <a
                  target="_blank"
                  title="Github"
                  href="https://github.com/ramonxm"
                >
                  <IconBrandGithub />
                </a>
              </button>

              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                title="LinkedIn"
              >
                <a
                  target="_blank"
                  title="LinkedIn"
                  href="https://linkedin.com/in/ramonxm"
                >
                  <IconBrandLinkedin />
                </a>
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="text-white bg-[#121212]  p-4 md:flex md:items-center md:justify-between md:p-6 ">
        <span className="text-sm sm:text-center text-white ">
          © 2024
          <a
            href="https://dellamora.dev"
            target="_blank"
            className="m-1 hover:underline"
            rel="noreferrer"
          >
            - Ramon Xavier
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://www.buymeacoffee.com/ramonxm"
              className="mr-4 hover:underline md:mr-6"
              rel="noreferrer"
            >
              Buy Me A Coffee!
            </a>
          </li>
          <li>
            <a
              href="mailto:ramon1234rxm@gmail.com"
              className="hover:underline"
              rel="noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
