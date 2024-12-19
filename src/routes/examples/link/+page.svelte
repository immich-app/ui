<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import BasicExample from './BasicExample.svelte';

	const examples = [{ title: 'Basic', code: basicExample, component: BasicExample }];
</script>

<ExampleLayout name="Link" {examples}></ExampleLayout>
