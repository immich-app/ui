<script lang="ts">
	import Heading from '$lib/components/Heading/Heading.svelte';
	import type { HeadingSize, HeadingTags } from '$lib/types.js';
	import type { Snippet } from 'svelte';

	type Props = {
		/**
		 * The HTML element type.
		 */
		tag: HeadingTags;
		class?: string;
		size?: HeadingSize;
		children: Snippet;
	};

	const { size = 'small', tag, class: className, children }: Props = $props();
</script>

<Heading {tag} {size} class={className}>
	{@render children?.()}
</Heading>
