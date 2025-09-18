import type { Config } from 'tailwindcss';
import { tailwindConfig } from './src/lib/theme/default.js';

const { colors, borderColor } = tailwindConfig();

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      borderColor,
    },
  },

  plugins: [],
} satisfies Config;
