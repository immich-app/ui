<script lang="ts">
	import { ChildKey } from '$lib/constants.js';
	import Child from '$lib/internal/Child.svelte';
	import { cleanClass } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		class?: string;
		children: Snippet;
	};

	let { class: className, children }: Props = $props();
</script>

<Child for={ChildKey.Card} as={ChildKey.CardBody}>
	<div class={twMerge(cleanClass('w-full p-4', className))}>
		{@render children?.()}
	</div>
</Child>
