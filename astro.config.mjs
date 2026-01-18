import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://hlop3z.github.io',
  base: '/portfolio',
  outDir: './docs',
  integrations: [tailwind()],
  build: {
    assets: 'assets'
  }
});
