import type { Config } from 'tailwindcss';

type Theme = Config['theme'];

export const tailwindConfig = () =>
	({
		colors: {
			primary: 'rgb(var(--immich-ui-primary) / <alpha-value>)',
			light: 'rgb(var(--immich-ui-light) / <alpha-value>)',
			dark: 'rgb(var(--immich-ui-dark) / <alpha-value>)',
			success: 'rgb(var(--immich-ui-success) / <alpha-value>)',
			danger: 'rgb(var(--immich-ui-danger) / <alpha-value>)',
			warning: 'rgb(var(--immich-ui-warning) / <alpha-value>)',
			info: 'rgb(var(--immich-ui-info) / <alpha-value>)',
			subtle: 'rgb(var(--immich-ui-gray) / <alpha-value>)',
		},
		borderColor: ({ theme }) => ({
			...theme('colors'),
			DEFAULT: 'rgb(var(--immich-ui-default-border) / <alpha-value>)',
		}),
	}) satisfies Theme;
