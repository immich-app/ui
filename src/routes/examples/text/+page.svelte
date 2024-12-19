<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import sizeExample from './SizeExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import colorExample from './ColorExample.svelte?raw';
	import ColorExample from './ColorExample.svelte';

	const examples = [
		{ title: 'Size', code: sizeExample, component: SizeExample },
		{ title: 'Color', code: colorExample, component: ColorExample },
	];
</script>

<ExampleLayout name="Text" {examples} />
