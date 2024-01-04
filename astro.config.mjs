import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://resonant-florentine-9ab193.netlify.app',
  integrations: [preact()]
});