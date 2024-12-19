<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import sizeExample from './SizeExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import colorExample from './ColorExample.svelte?raw';
	import ColorExample from './ColorExample.svelte';

	const examples = [
		{ title: 'Sizes', code: sizeExample, component: SizeExample },
		{ title: 'Colors', code: colorExample, component: ColorExample },
	];
</script>

<ExampleLayout name="LoadingSpinner" {examples}></ExampleLayout>
