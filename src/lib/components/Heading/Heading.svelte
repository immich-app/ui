<script lang="ts">
	import type { Color, HeadingSize } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import { tv } from 'tailwind-variants';

	type Props = {
		size: HeadingSize;
		color?: Color;
		class?: string;

		children: Snippet;
	};

	const { color, size, class: className, children }: Props = $props();

	const sizes = {
		title: 'h1',
		giant: 'h2',
		large: 'h3',
		medium: 'h4',
		small: 'h5',
		tiny: 'h6',
	};

	const styles = tv({
		base: 'font-bold leading-none tracking-tight',
		variants: {
			color: {
				primary: 'text-primary',
				secondary: 'text-dark',
				success: 'text-success',
				danger: 'text-danger',
				warning: 'text-warning',
				info: 'text-info',
			},
			size: {
				tiny: 'text-lg',
				small: 'text-xl',
				medium: 'text-2xl',
				large: 'text-3xl',
				giant: 'text-4xl',
				title: 'text-5xl',
			},
		},
	});

	const tag = $derived(sizes[size] ?? 'h6');
	const classList = $derived(cleanClass(styles({ color, size }), className));
</script>

<svelte:element this={tag} class={classList} role="heading">
	{@render children()}
</svelte:element>
