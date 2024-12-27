<script lang="ts">
	import { withChildrenSnippets } from '$lib/common/use-child.svelte.js';
	import Scrollable from '$lib/components/Scrollable/Scrollable.svelte';
	import { ChildKey } from '$lib/constants.js';
	import { cleanClass } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
		children?: Snippet;
	};

	const { class: className, children }: Props = $props();

	const { getChildren: getChildSnippet } = withChildrenSnippets(ChildKey.AppShell);
	const header = $derived(getChildSnippet(ChildKey.AppShellHeader));
	const sidebar = $derived(getChildSnippet(ChildKey.AppShellSidebar));
</script>

<div class={cleanClass('flex h-screen flex-col overflow-hidden', className)}>
	{#if header}
		<header class="border-b">
			{@render header?.()}
		</header>
	{/if}
	<div class="flex w-full grow overflow-y-auto">
		{#if sidebar}
			{@render sidebar()}
		{/if}
		<Scrollable class="grow">
			{@render children?.()}
		</Scrollable>
	</div>
</div>
