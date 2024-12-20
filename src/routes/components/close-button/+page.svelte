<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import FilledExample from './FilledExample.svelte';
	import filledExample from './FilledExample.svelte?raw';
	import OutlineExample from './OutlineExample.svelte';
	import outlineExample from './OutlineExample.svelte?raw';

	const examples = [
		{ title: 'Basic', code: basicExample, component: BasicExample },
		{ title: 'Outline', code: outlineExample, component: OutlineExample },
		{ title: 'Filled', code: filledExample, component: FilledExample },
	];
</script>

<ExampleLayout name="CloseButton" {examples} />
