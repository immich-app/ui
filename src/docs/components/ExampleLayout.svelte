<script lang="ts">
	import Examples from '$docs/components/Examples.svelte';
	import { Theme, type ExampleItem } from '$docs/constants.js';
	import { Scrollable, Stack } from '@immich/ui';

	type Props = {
		name: string;
		examples: ExampleItem[];
	};

	const { name, examples }: Props = $props();
</script>

<div class="flex h-full flex-col">
	<!-- TODO replace with breadcrumb component -->
	<nav
		class="flex shrink-0 justify-between border-b border-gray-300 bg-light px-8 py-2 text-dark dark:border-gray-700"
	>
		<div class="flex items-center gap-2">
			<a href="/" class="underline">Home</a>
			<span>/</span>
			<a href="/" class="underline">Components</a>
			<span>/</span>
			<span class="capitalize">{name}</span>
		</div>
	</nav>

	<Scrollable>
		<Stack gap={4} class="max-w-screen-lg p-4">
			<Examples theme={Theme.Dark} {examples} />
		</Stack>
	</Scrollable>
</div>
