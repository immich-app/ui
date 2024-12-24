<script lang="ts">
	import type { Color, Size } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import { tv } from 'tailwind-variants';

	type Props = {
		size?: Size;
		color?: Color;
		class?: string;
		children?: Snippet;
	};

	const { class: className, color = 'primary', size = 'medium', children }: Props = $props();

	const styles = tv({
		base: '',
		variants: {
			size: {
				tiny: 'text-xs',
				small: 'text-sm',
				medium: 'text-md',
				large: 'text-lg',
				giant: 'text-xl',
			},
			color: {
				primary: 'text-primary',
				secondary: 'text-secondary',
				success: 'text-success',
				danger: 'text-danger',
				warning: 'text-warning',
				info: 'text-info',
			},
		},
	});
</script>

<div class={cleanClass(styles({ size, color }), className)}>
	{@render children?.()}
</div>
