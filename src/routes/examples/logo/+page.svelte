<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import IconExample from './IconExample.svelte';
	import iconExample from './IconExample.svelte?raw';
	import InlineExample from './InlineExample.svelte';
	import inlineExample from './InlineExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import sizeExample from './SizeExample.svelte?raw';
	import StackedExample from './StackedExample.svelte';
	import stackedExample from './StackedExample.svelte?raw';

	const examples = [
		{ title: 'Size', code: sizeExample, component: SizeExample },
		{ title: 'Icon', code: iconExample, component: IconExample },
		{ title: 'Inline', code: inlineExample, component: InlineExample },
		{ title: 'Stacked', code: stackedExample, component: StackedExample },
	];
</script>

<ExampleLayout name="Logo" {examples}></ExampleLayout>
