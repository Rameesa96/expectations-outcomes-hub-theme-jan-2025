// @ts-check
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  // adapter: deno({
  //   mode: 'middleware' // or 'standalone'
  // }),
  adapter: node({
    mode: "standalone", // or 'middleware'
  })
});