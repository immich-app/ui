<script lang="ts">
	import inlineDark from '$lib/assets/immich-logo-inline-dark.svg';
	import inlineLight from '$lib/assets/immich-logo-inline-light.svg';
	import stackedDark from '$lib/assets/immich-logo-stacked-dark.svg';
	import stackedLight from '$lib/assets/immich-logo-stacked-light.svg';
	import icon from '$lib/assets/immich-logo.svg';
	import { theme } from '$lib/services/theme.svelte.js';
	import { Theme, type Size } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import { tv } from 'tailwind-variants';

	type Props = {
		size?: Size | 'landing';
		variant?: 'stacked' | 'inline' | 'logo' | 'icon';
		class?: string;
	};

	const { variant = 'logo', size = 'medium', class: className }: Props = $props();

	const getUrl = (variant: Props['variant']): string => {
		switch (variant) {
			case 'stacked': {
				return theme.value === Theme.Light ? stackedLight : stackedDark;
			}

			case 'inline': {
				return theme.value === Theme.Light ? inlineLight : inlineDark;
			}

			default: {
				return icon;
			}
		}
	};

	const styles = tv({
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

	const src = $derived(getUrl(variant));
</script>

<img {src} class={cleanClass(styles({ size, variant }), className)} alt="Immich logo" />
