<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import CustomExample from './CustomExample.svelte';
	import customExample from './CustomExample.svelte?raw';
	import EffectExample from './EffectExample.svelte';
	import effectExample from './EffectExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import sizeExample from './SizeExample.svelte?raw';

	const examples = [
		{ title: 'Effect', code: effectExample, component: EffectExample },
		{ title: 'Sizes', code: sizeExample, component: SizeExample },
		{ title: 'Custom', code: customExample, component: CustomExample },
	];
</script>

<ExampleLayout name="SupporterBadge" {examples}></ExampleLayout>
