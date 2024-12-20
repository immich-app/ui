<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import BasicExample from './BasicExample.svelte';
	import shapeExample from './ShapeExample.svelte?raw';
	import ShapeExample from './ShapeExample.svelte';
	import sizeExample from './SizeExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';

	const examples = [
		{ title: 'States', code: basicExample, component: BasicExample },
		{ title: 'Shapes', code: shapeExample, component: ShapeExample },
		{ title: 'Sizes', code: sizeExample, component: SizeExample },
	];
</script>

<ExampleLayout name="Input" {examples}></ExampleLayout>
