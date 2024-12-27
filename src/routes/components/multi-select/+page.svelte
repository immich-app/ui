<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import { asSlug } from '$docs/utilities.js';
	import { Alert, Link, Text } from '@immich/ui';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';

	const examples = [
		//
		{ title: 'Basic', code: basicExample, component: BasicExample },
	];
</script>

<ExampleLayout name="MultiSelect" {examples}>
	<Text>Allows the user to select a multiple options from a dropdown list</Text>
	<Alert color="info" title="Note">
		<Text
			>The <Link href={asSlug('MultiSelect')}>MultiSelect</Link> component is very similar to the <Link
				href={asSlug('Select')}>Select</Link
			> component, but allows the user to select multiple options.</Text
		>
	</Alert>
</ExampleLayout>
