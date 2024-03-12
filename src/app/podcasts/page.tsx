import { NoContent } from "@/assets/svgs/NoContent";
import { Layout } from "@/components/layouts/Layout";
import { Title } from "@/components/modules/Title";

export default function Podcasts() {
  return (
    <Layout>
      <div className="mx-auto max-w-5xl md:flex-col items-center justify-center dark:bg-background mt-8">
        <Title>Podcasts</Title>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="w-64 h-64 mt-6">
            <NoContent />
          </div>
          <p>Call me for podcasts</p>
        </div>
      </div>
    </Layout>
  );
}
