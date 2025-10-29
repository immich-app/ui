import { defineConfig, type UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  preview: {
    allowedHosts: true,
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
} as UserConfig);
