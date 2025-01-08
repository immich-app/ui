<script lang="ts">
	import { ChildKey } from '$lib/constants.js';
	import Child from '$lib/internal/Child.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<Child for={ChildKey.Modal} as={ChildKey.ModalFooter}>
	{@render children?.()}
</Child>
