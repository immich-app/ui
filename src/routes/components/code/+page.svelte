<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import ColorExample from './ColorExample.svelte';
	import colorExample from './ColorExample.svelte?raw';
	import FilledExample from './FilledExample.svelte';
	import filledExample from './FilledExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import sizeExample from './SizeExample.svelte?raw';

	const examples = [
		{ title: 'Size', code: sizeExample, component: SizeExample },
		{ title: 'Color', code: colorExample, component: ColorExample },
		{ title: 'Filled', code: filledExample, component: FilledExample },
	];
</script>

<ExampleLayout name="Code" {examples} />
