<script lang="ts">
	import { ChildKey } from '$lib/constants.js';
	import Child from '$lib/internal/Child.svelte';
	import { cleanClass } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
	};

	let { children, class: className }: Props = $props();
</script>

<Child for={ChildKey.Card} as={ChildKey.CardFooter}>
	<div class={cleanClass('flex items-center p-4 pt-0', className)}>
		{@render children?.()}
	</div>
</Child>
