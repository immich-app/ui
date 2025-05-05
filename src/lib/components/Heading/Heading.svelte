<script lang="ts">
	import type { HeadingColor, HeadingSize, HeadingTag } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';

	type Props = {
		size?: HeadingSize;
		/**
		 * The HTML element type.
		 */
		tag?: HeadingTag;
		color?: HeadingColor;
		class?: string;

		children: Snippet;
	} & HTMLAttributes<HTMLHeadingElement>;

	const {
		color,
		tag = 'p',
		size = 'medium',
		class: className,
		children,
		...restProps
	}: Props = $props();

	const styles = tv({
		base: 'font-semibold leading-none tracking-tight',
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

	const classList = $derived(cleanClass(styles({ color, size }), className));
</script>

<svelte:element this={tag} class={classList} {...restProps}>
	{@render children()}
</svelte:element>
