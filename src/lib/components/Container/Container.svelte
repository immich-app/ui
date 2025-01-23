<script lang="ts">
	import type { Size } from '$lib/types.js';
	import { cleanClass } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import { tv } from 'tailwind-variants';

	type Props = {
		size?: Size | 'full';
		class?: string;
		center?: boolean;
		children?: Snippet;
	};

	const { center, class: className, size = 'full', children }: Props = $props();

	const styles = tv({
		base: '',
		variants: {
			size: {
				tiny: 'max-w-lg',
				small: 'max-w-screen-sm',
				medium: 'max-w-screen-md',
				large: 'max-w-screen-lg',
				giant: 'max-w-screen-xl',
				full: 'w-full',
			},
		},
	});
</script>

<div class={cleanClass(styles({ size }), center && 'mx-auto w-full', className)}>
	{@render children?.()}
</div>
