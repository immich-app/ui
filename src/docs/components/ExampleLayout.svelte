<script lang="ts">
	import Examples from '$docs/components/Examples.svelte';
	import { Theme, type ExampleItem } from '$docs/constants.js';
	import { Heading, Scrollable, Stack } from '@immich/ui';
	import type { Snippet } from 'svelte';

	type Props = {
		name: string;
		examples: ExampleItem[];
		children?: Snippet;
	};

	const { name, examples, children }: Props = $props();
</script>

<div class="flex h-full flex-col">
	<!-- TODO replace with breadcrumb component -->
	<nav
		class="flex shrink-0 justify-between border-b border-gray-300 bg-light p-4 text-dark dark:border-gray-700"
	>
		<div class="flex items-center gap-2">
			<a href="/" class="underline">Home</a>
			<span>/</span>
			<a href="/" class="underline">Components</a>
			<span>/</span>
			<span class="capitalize">{name}</span>
		</div>
	</nav>

	<Scrollable class="p-4">
		<Heading size="large">{name}</Heading>
		{@render children?.()}
		<Stack gap={4} class="mt-4 max-w-screen-md">
			<Examples theme={Theme.Dark} {examples} />
		</Stack>
	</Scrollable>
</div>
