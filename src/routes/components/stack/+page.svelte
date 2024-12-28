<script lang="ts">
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import HorizontalExample from './HorizontalExample.svelte';
	import horizontalExample from './HorizontalExample.svelte?raw';
	import RowExample from './RowExample.svelte';
	import rowExample from './RowExample.svelte?raw';
	import VerticalExample from './VerticalExample.svelte';
	import verticalExample from './VerticalExample.svelte?raw';
</script>

<ComponentPage name="Stack">
	<ComponentExamples
		examples={[
			{ title: 'Stack', code: basicExample, component: BasicExample },
			{ title: 'Stack (row)', code: rowExample, component: RowExample },
			{ title: 'Vertical Stack', code: verticalExample, component: VerticalExample },
			{ title: 'Horizontal Stack', code: horizontalExample, component: HorizontalExample },
		]}
	/>
</ComponentPage>
