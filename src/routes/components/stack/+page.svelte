<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import BasicExample from './BasicExample.svelte';
	import rowExample from './RowExample.svelte?raw';
	import RowExample from './RowExample.svelte';
	import verticalExample from './VerticalExample.svelte?raw';
	import VerticalExample from './VerticalExample.svelte';
	import horizontalExample from './HorizontalExample.svelte?raw';
	import HorizontalExample from './HorizontalExample.svelte';

	const examples = [
		{ title: 'Stack', code: basicExample, component: BasicExample },
		{ title: 'Stack (row)', code: rowExample, component: RowExample },
		{ title: 'Vertical Stack', code: verticalExample, component: VerticalExample },
		{ title: 'Horizontal Stack', code: horizontalExample, component: HorizontalExample },
	];
</script>

<ExampleLayout name="Stack" {examples}></ExampleLayout>
