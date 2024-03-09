import { Layout } from "@/components/layouts/Layout";
import { Title } from "@/components/modules/Title";

export default function Podcasts() {
  return (
    <Layout>
      <div className="mx-auto max-w-5xl md:flex-col items-center justify-center dark:bg-background mt-8">
        <Title>Podcasts</Title>
      </div>
    </Layout>
  );
}
