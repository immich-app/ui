import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--immich-primary) / <alpha-value>)',
				light: 'rgb(var(--immich-light) / <alpha-value>)',
				dark: 'rgb(var(--immich-dark) / <alpha-value>)',
				success: 'rgb(var(--immich-success) / <alpha-value>)',
				danger: 'rgb(var(--immich-danger) / <alpha-value>)',
				warning: 'rgb(var(--immich-warning) / <alpha-value>)',
				info: 'rgb(var(--immich-info) / <alpha-value>)',
				subtle: 'rgb(var(--immich-gray) / <alpha-value>)',
			},
			borderColor: ({ theme }) => ({
				...theme('colors'),
				DEFAULT: 'rgb(var(--immich-default-border) / <alpha-value>)',
			}),
		},
	},

	plugins: [],
} satisfies Config;
