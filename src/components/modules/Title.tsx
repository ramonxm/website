import { ReactNode } from "react";

type TitleProps = { children: ReactNode };

export const Title = ({ children }: TitleProps) => {
  return (
    <div className="w-full rounded-md flex-col flex antialiased  overflow-hidden">
      <div className="max-w-7xl mx-auto w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-[3.5rem] md:leading-normal font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 dark:text-white text-black">
          {children}
        </h1>
      </div>
    </div>
  );
};
