<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import { Text } from '@immich/ui';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';

	const examples = [{ title: 'Basic', code: basicExample, component: BasicExample }];
</script>

<ExampleLayout name="Field" {examples}>
	<Text>A metadata component for tracking common form field information</Text>
</ExampleLayout>
