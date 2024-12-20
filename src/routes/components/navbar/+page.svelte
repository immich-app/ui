<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import GroupExample from './GroupExample.svelte';
	import groupExample from './GroupExample.svelte?raw';

	const examples = [
		{ title: 'Basic', code: basicExample, component: BasicExample },
		{ title: 'Group', code: groupExample, component: GroupExample },
	];
</script>

<ExampleLayout name="Basic" {examples} />
