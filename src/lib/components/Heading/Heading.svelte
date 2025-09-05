<script lang="ts">
	import type {
		FontWeight,
		HeadingColor,
		HeadingSize,
		HeadingTag,
		TextVariant,
	} from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import Text from '$lib/internal/Text.svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';

	type Props = {
		/**
		 * The HTML element type.
		 */
		tag?: HeadingTag;
		size?: HeadingSize;
		color?: HeadingColor;
		fontWeight?: FontWeight;
		variant?: TextVariant;
		class?: string;

		children: Snippet;
	} & HTMLAttributes<HTMLElement>;

	const {
		tag = 'p',
		size = 'medium',
		fontWeight = 'semi-bold',
		class: className,
		children,
		...restProps
	}: Props = $props();

	const styles = tv({
		base: 'leading-none tracking-tight',
		variants: {
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

	const classList = $derived(cleanClass(styles({ size }), className));
</script>

<Text {tag} {fontWeight} class={classList} {...restProps}>
	{@render children()}
</Text>
