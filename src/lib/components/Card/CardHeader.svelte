<script lang="ts">
	import { ContextKey } from '$lib/constants.js';
	import Child from '$lib/internal/Child.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<Child for={ContextKey.Card} as={ContextKey.CardHeader}>
	{@render children?.()}
</Child>
