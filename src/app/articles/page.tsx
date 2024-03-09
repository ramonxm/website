import { Layout } from "@/components/layouts/Layout";
import { Cards } from "@/components/modules/Cards";
import { Title } from "@/components/modules/Title";
import { getAllArticles } from "@/lib/article";

export default async function Articles() {
  const articles = await getAllArticles();

  return (
    <div className="mx-auto max-w-5xl flex-col items-center justify-center dark:bg-background mt-8">
      <Title>Articles</Title>
      <div className="flex flex-col mt-6 gap-6">
        <Cards items={articles} />
      </div>
    </div>
  );
}
