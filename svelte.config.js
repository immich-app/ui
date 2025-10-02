import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

process.env.PUBLIC_IMMICH_HOSTNAME ??= 'ui.immich.app';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $docs: './src/docs',
      '@immich/ui': './src/lib/index.ts',
    },
  },
};

export default config;
