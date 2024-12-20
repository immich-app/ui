<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';

	const examples = [{ title: 'Basic', code: basicExample, component: BasicExample }];
</script>

<ExampleLayout name="Field" {examples} />
