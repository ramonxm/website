"use client";

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const SyntaxHighlight = ({
  className,
  children,
}: {
  children: string | string[];
  className?: string;
}) => {
  const language = className?.replace("language-", "");

  return (
    <SyntaxHighlighter style={dark} language={language} PreTag={React.Fragment}>
      {children}
    </SyntaxHighlighter>
  );
};
