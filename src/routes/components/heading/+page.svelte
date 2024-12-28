<script lang="ts">
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import ColorExample from './ColorExample.svelte';
	import colorExample from './ColorExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage name="Heading">
	<ComponentExamples
		examples={[
			{ title: 'Size', code: sizeExample, component: SizeExample },
			{ title: 'Color', code: colorExample, component: ColorExample },
		]}
	/>
</ComponentPage>
