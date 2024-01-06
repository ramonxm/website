import { defineConfig } from "astro/config";
import aws from "astro-sst";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  output: "server",
  adapter: aws(),
});
