<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import ColorExample from './ColorExample.svelte';
	import colorExample from './ColorExample.svelte?raw';
	import ShapeExample from './ShapeExample.svelte';
	import shapeExample from './ShapeExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import sizeExample from './SizeExample.svelte?raw';

	const examples = [
		{ title: 'Shape', code: shapeExample, component: ShapeExample },
		{ title: 'Color', code: colorExample, component: ColorExample },
		{ title: 'Size', code: sizeExample, component: SizeExample },
	];
</script>

<ExampleLayout name="Checkbox" {examples} />
