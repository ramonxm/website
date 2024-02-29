import { SparklesCore } from "../ui/sparkles";

export const Title = () => {
  return (
    <div className="w-full rounded-md flex-col flex md:items-center md:justify-center dark:bg-background antialiased  overflow-hidden">
      <div className="max-w-7xl mx-auto w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 dark:text-white text-black">
          Software Engineer
        </h1>
      </div>
      <div className="w-[40rem] relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          maxSize={1}
          minSize={0.4}
          particleDensity={150}
          particleColor="#c4c4c4"
          className="w-full h-full"
          background="dark:bg-background"
        />
        <div className="absolute inset-0 w-full h-full dark:bg-background [mask-image:radial-gradient(350px_100px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};
