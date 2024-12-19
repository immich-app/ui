<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import ColorExample from './ColorExample.svelte';
	import colorExample from './ColorExample.svelte?raw';
	import CustomIconExample from './CustomIconExample.svelte';
	import customIconExample from './CustomIconExample.svelte?raw';

	const examples = [
		{ title: 'Basic', code: basicExample, component: BasicExample },
		{ title: 'Colors', code: colorExample, component: ColorExample },
		{ title: 'Custom Icon', code: customIconExample, component: CustomIconExample },
	];
</script>

<ExampleLayout name="Alert" {examples} />
