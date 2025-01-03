<script lang="ts">
	import type { Size, TextColor } from '$lib/types.js';
	import type { Snippet } from 'svelte';
	import { tv } from 'tailwind-variants';

	type Props = {
		color?: TextColor;
		size?: Size;
		variant?: 'filled';
		children: Snippet;
	};

	const { size = 'medium', variant, color = 'secondary', children }: Props = $props();

	const styles = tv({
		base: 'font-monospace',
		variants: {
			textColor: {
				muted: 'text-gray-600 dark:text-gray-400',
				primary: 'text-primary',
				secondary: 'text-dark',
				success: 'text-success',
				danger: 'text-danger',
				warning: 'text-warning',
				info: 'text-info',
			},

			filled: {
				true: 'rounded px-2 py-1',
				false: '',
			},

			filledColor: {
				false: '',
				muted: 'bg-gray-600 dark:bg-gray-800 text-light',
				primary: 'bg-primary text-light',
				secondary: 'bg-dark text-light',
				success: 'bg-success text-light',
				danger: 'bg-danger text-light',
				warning: 'bg-warning text-light',
				info: 'bg-info text-dark',
			},

			size: {
				tiny: 'text-xs',
				small: 'text-sm',
				medium: 'text-md',
				large: 'text-lg',
				giant: 'text-xl',
			},
		},
	});
</script>

<code
	class={styles({
		filled: variant === 'filled',
		filledColor: variant === 'filled' && color,
		textColor: color,
		size,
	})}>{@render children()}</code
>
