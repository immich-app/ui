<script lang="ts">
	import ExampleCard from '$docs/components/ExampleCard.svelte';
	import type { ExampleItem, Theme } from '$docs/constants.js';

	type Props = {
		theme: Theme;
		examples: ExampleItem[];
	};

	const { examples, theme }: Props = $props();
</script>

{#each examples as { title, code, component }}
	<ExampleCard {theme} {title} {code} {component} />
{/each}
