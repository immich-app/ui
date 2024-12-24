<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import ColorExample from './ColorExample.svelte';
	import colorExample from './ColorExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import sizeExample from './SizeExample.svelte?raw';

	const examples = [
		{ title: 'Basic', code: basicExample, component: BasicExample },
		{ title: 'Color', code: colorExample, component: ColorExample },
		{ title: 'Size', code: sizeExample, component: SizeExample },
	];
</script>

<ExampleLayout name="Avatar" {examples} />
