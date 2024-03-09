import { Layout } from "@/components/layouts/Layout";
import { PropsWithChildren } from "react";

export default function LayoutArticle({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>;
}
