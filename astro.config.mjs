import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://gleeful-belekoy-e3ae83.netlify.app/",
  integrations: [preact()]
});