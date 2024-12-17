<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
	import ExampleCard from '$docs/components/ExampleCard.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import ColorExample from './ColorExample.svelte';
	import colorExample from './ColorExample.svelte?raw';
	import CustomIconExample from './CustomIconExample.svelte';
	import customIconExample from './CustomIconExample.svelte?raw';
</script>

<DualThemeLayout name="Alert">
	{#snippet component({ theme })}
		<ExampleCard {theme} title="Basic" example={basicExample} component={BasicExample} />
		<ExampleCard {theme} title="Colors" example={colorExample} component={ColorExample} />
		<ExampleCard
			{theme}
			title="Custom Icon"
			example={customIconExample}
			component={CustomIconExample}
		/>
	{/snippet}
</DualThemeLayout>
