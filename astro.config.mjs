import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://OfficialDiLi.github.io',
  // If deploying to username.github.io, no base needed
  // If deploying to username.github.io/repo-name, uncomment and update:
  // base: '/repo-name',
});
