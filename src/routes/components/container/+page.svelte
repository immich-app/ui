<script lang="ts">
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import CenterExample from './CenterExample.svelte';
	import centerExample from './CenterExample.svelte?raw';
</script>

<ComponentPage name="Container" size="full">
	<ComponentExamples
		examples={[
			{ title: 'Basic', code: basicExample, component: BasicExample },
			{ title: 'Center', code: centerExample, component: CenterExample },
		]}
	/>
</ComponentPage>
