import { Cards } from "@/components/modules/Cards";
import { Title } from "@/components/modules/Title";

export default function Articles() {
  return (
    <div className="mx-auto max-w-5xl flex-col items-center justify-center dark:bg-background mt-8">
      <Title>Articles</Title>
      <div className="flex flex-col mt-6 gap-6">
        <Cards />
      </div>
    </div>
  );
}
