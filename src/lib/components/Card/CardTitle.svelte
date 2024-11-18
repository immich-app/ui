<script lang="ts">
	import Heading from '$lib/components/Heading/Heading.svelte';
	import type { HeadingSize } from '$lib/types.js';
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
		size?: HeadingSize;
		children: Snippet;
	};

	const { size = 'small', class: className, children }: Props = $props();
</script>

<Heading {size} class={className}>
	{@render children?.()}
</Heading>
