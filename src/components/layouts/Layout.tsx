import { PropsWithChildren } from "react";
import { Header } from "../modules/Header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen">{children}</main>
    </>
  );
};
