import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config

import AstroPWA from '@vite-pwa/astro'

export default defineConfig({
  integrations: [tailwind(),vue(),AstroPWA()],
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
  plugins: [
    {
      name: 'vite-plugin-pwa',
      options: {
        includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'Senior Software Developer London',
          short_name: 'Senior Software Developer London',
          description: 'Senior Software Developer London available for hire in London',
          theme_color: '#7611a6',
          background_color: '#ffffff',
          icons: [
            {
              src: 'favicon.svg',
              sizes: '192x192',
              type: 'image/svg+xml',
            },
            {
              src: 'apple-touch-icon.png',
              sizes: '180x180',
              type: 'image/png',
            },
          ],
        },
      },
    },
  ],
  vite: {
    ssr: {
      noExternal: [
        '@astrojs/vue',
        'astro-component-lib',
      ]
    }
  }
});
