import { PropsWithChildren } from "react";
import { Footer } from "../modules/Footer";
import { Header } from "../modules/Header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen">
        <div
          role="none"
          data-orientation="horizontal"
          className="shrink-0 bg-border h-[1px] w-full"
        />
        {children}
      </main>
      <Footer />
    </>
  );
};
