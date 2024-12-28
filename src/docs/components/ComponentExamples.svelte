<script lang="ts">
	import ExampleCard from '$docs/components/ComponentExampleCard.svelte';
	import type { ExampleItem } from '$docs/constants.js';
	import { Stack } from '@immich/ui';

	type Props = {
		examples: ExampleItem[];
	};

	const { examples }: Props = $props();
</script>

<Stack gap={4} class="mt-4">
	{#each examples as { title, code, component }}
		<ExampleCard {title} {code} {component} />
	{/each}
</Stack>
