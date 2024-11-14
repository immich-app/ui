<script lang="ts">
	import icon from '$lib/assets/immich-logo.svg';
	import inlineDark from '$lib/assets/immich-logo-inline-dark.svg';
	import inlineLight from '$lib/assets/immich-logo-inline-light.svg';
	import stackedDark from '$lib/assets/immich-logo-stacked-dark.svg';
	import stackedLight from '$lib/assets/immich-logo-stacked-light.svg';
	import type { Size } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import { tv } from 'tailwind-variants';

	type Props = {
		size?: Size | 'landing';
		theme?: 'dark' | 'light';
		variant?: 'stacked' | 'inline' | 'logo' | 'icon';
		class?: string;
	};

	const getUrl = ({ theme, variant }: Required<Pick<Props, 'theme' | 'variant'>>): string => {
		switch (variant) {
			case 'stacked': {
				return theme === 'light' ? stackedLight : stackedDark;
			}

			case 'inline': {
				return theme === 'light' ? inlineLight : inlineDark;
			}

			default: {
				return icon;
			}
		}
	};

	const logo = tv({
		variants: {
			size: {
				tiny: 'h-8',
				small: 'h-10',
				medium: 'h-12',
				large: 'h-16',
				giant: 'h-24',
				landing: 'h-64',
			},

			variant: {
				stacked: '',
				inline: '',
				logo: 'aspect-square rounded-full bg-light shadow-lg',
				icon: 'aspect-square',
			},
		},
	});

	const { theme = 'light', variant = 'logo', size = 'medium', class: className }: Props = $props();
	const src = $derived(getUrl({ theme, variant }));
</script>

<img {src} class={cleanClass(logo({ size, variant }), className)} alt="Immich logo" />
