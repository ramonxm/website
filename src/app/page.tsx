import { Layout } from "@/components/layouts/Layout";
import { CardReveal } from "@/components/modules/CardReveal";
import { ContentDescription } from "@/components/modules/ContentDescription";

export default function Home() {
  return (
    <Layout>
      <ContentDescription />
      <CardReveal />
    </Layout>
  );
}
