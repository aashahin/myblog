import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro';
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://abdelrahman.co',
  integrations: [tailwind(), react(), markdoc(), keystatic(), sitemap()],
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});