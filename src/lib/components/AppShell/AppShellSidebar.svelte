<script lang="ts">
	import { ChildKey } from '$lib/constants.js';
	import Child from '$lib/internal/Child.svelte';
	import { cleanClass } from '$lib/utils.js';
	import Scrollable from '$lib/components/Scrollable/Scrollable.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
		children: Snippet;
	};

	let { class: className, children }: Props = $props();
</script>

<Child for={ChildKey.AppShell} as={ChildKey.AppShellSidebar}>
	<Scrollable
		class={cleanClass(
			'hidden h-full shrink-0 border-r border-gray-200 dark:border-gray-700 lg:block',
			className,
		)}
	>
		{@render children?.()}
	</Scrollable>
</Child>
