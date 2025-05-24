<script lang="ts">
	import ComponentDescription from '$docs/components/ComponentDescription.svelte';
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
</script>

<ComponentPage name="Dropdown">
	<ComponentDescription>
		Allows the user to select a single option from a dropdown list that is triggered by a button
	</ComponentDescription>
	<ComponentExamples examples={[{ title: 'Basic', code: basicExample, component: BasicExample }]} />
</ComponentPage>
