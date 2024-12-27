<script lang="ts">
	import { ChildKey } from '$lib/constants.js';
	import Child from '$lib/internal/Child.svelte';
	import { cleanClass } from '$lib/utils.js';
	import Scrollable from '$lib/components/Scrollable/Scrollable.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
		children: Snippet;
		noBorder?: boolean;
	};

	let { class: className, children, noBorder = false }: Props = $props();
</script>

<Child for={ChildKey.AppShell} as={ChildKey.AppShellSidebar}>
	<Scrollable
		class={cleanClass('hidden h-full w-min shrink-0 lg:block', className, noBorder || 'border-r')}
	>
		{@render children?.()}
	</Scrollable>
</Child>
