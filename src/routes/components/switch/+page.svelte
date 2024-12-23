<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import { Text } from '@immich/ui';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import ColorExample from './ColorExample.svelte';
	import colorExample from './ColorExample.svelte?raw';
	import FormExample from './FormExample.svelte';
	import formExample from './FormExample.svelte?raw';

	const examples = [
		{ title: 'Basic', code: basicExample, component: BasicExample },
		{ title: 'Colors', code: colorExample, component: ColorExample },
		{ title: 'Form', code: formExample, component: FormExample },
	];
</script>

<ExampleLayout name="Switch" {examples}>
	<Text>A boolean input element</Text>
</ExampleLayout>
