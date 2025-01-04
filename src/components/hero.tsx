export function Hero() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-4 py-24 md:py-32">
      <div className="flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Senior Mobile Developer
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Mobile and Web Developer with a focus on React Native, React, Node.js,
          and native iOS development using Swift and SwiftUI.
        </p>
      </div>
    </section>
  );
}
