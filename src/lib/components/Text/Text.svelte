<script lang="ts">
	import type { Color, Size } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import { tv } from 'tailwind-variants';

	type Props = {
		color?: Color | 'muted';
		class?: string;
		size?: Size;
		children: Snippet;
		variant?: 'italic';
		fontWeight?: 'light' | 'normal' | 'semi-bold' | 'bold';
	};

	const {
		color,
		size,
		variant,
		fontWeight = 'normal',
		children,
		class: className,
	}: Props = $props();

	const styles = tv({
		variants: {
			color: {
				muted: 'text-gray-600 dark:text-gray-400',
				primary: 'text-primary',
				secondary: 'text-dark',
				success: 'text-success',
				danger: 'text-danger',
				warning: 'text-warning',
				info: 'text-info',
			},

			variant: {
				italic: 'italic',
			},

			size: {
				tiny: 'text-xs',
				small: 'text-sm',
				medium: 'text-md',
				large: 'text-lg',
				giant: 'text-xl',
			},

			fontWeight: {
				light: 'font-light',
				normal: 'font-normal',
				'semi-bold': 'font-semibold',
				bold: 'font-bold',
			},
		},
	});
</script>

<p class={cleanClass(styles({ color, size, fontWeight, variant }), className)}>
	{@render children()}
</p>
