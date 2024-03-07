import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";

import { readPostFile } from "@/lib/mdx";

interface PostPageProps {
  params: { slug: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const markdown = await readPostFile(params.slug);

  if (!markdown) {
    notFound();
  }

  const { content } = await compileMDX<{ title: string }>({
    source: markdown,
    options: {
      mdxOptions: { rehypePlugins: [] },
      parseFrontmatter: true,
    },
  });

  return (
    <div className="mx-auto max-w-5xl flex-col items-center justify-center dark:bg-background mt-8">
      {content}
    </div>
  );
}
