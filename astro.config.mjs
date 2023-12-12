import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config

import AstroPWA from '@vite-pwa/astro'
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(),vue(),AstroPWA(), react()],
  vite: {
    ssr: {
      noExternal: [
        '@astrojs/vue',
        'astro-component-lib',
      ]
    }
  }
});