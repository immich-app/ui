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
	<nav class="flex shrink-0 justify-between border-b bg-light p-4 text-dark">
		<div class="flex items-center gap-2">
			<a href="/" class="underline">Home</a>
			<span>/</span>
			<a href="/" class="underline">Components</a>
			<span>/</span>
			<span class="capitalize">{name}</span>
		</div>
	</nav>

	<Scrollable class="mt-4 flex max-w-screen-md flex-col gap-2 p-4">
		<Stack>
			<Heading size="large">{name}</Heading>
			{@render children?.()}
		</Stack>
		<Stack gap={4}>
			<Examples theme={Theme.Dark} {examples} />
		</Stack>
	</Scrollable>
</div>
