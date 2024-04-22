import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import AstroPWA from '@vite-pwa/astro'

export default defineConfig({
  integrations: [tailwind(),vue()],
  buildOptions: {
    outdir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: true,
    rollupOptions: {
      plugins: [
        vue(),
        tailwind(),
      ],
    },
  },
  vite: {
    ssr: {
      noExternal: [
        '@astrojs/vue',
        'astro-component-lib',
      ]
    }
  }
});
