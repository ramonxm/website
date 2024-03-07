import { SyntaxHighlight } from "@/components/modules/SyntaxHighlight";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    //@ts-ignore
    code: SyntaxHighlight,
  };
}
