<script lang="ts">
	import ComponentDescription from '$docs/components/ComponentDescription.svelte';
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import OutlineButton from './OutlineButton.svelte';
	import outlineButton from './OutlineButton.svelte?raw';
	import BigList from './BigList.svelte';
	import bigList from './BigList.svelte?raw';
	import CustomTrigger from './CustomTrigger.svelte';
	import customTrigger from './CustomTrigger.svelte?raw';
</script>

<ComponentPage name="Dropdown">
	<ComponentDescription>
		Allows the user to select a single option from a dropdown list that is triggered by a button
	</ComponentDescription>
	<ComponentExamples
		examples={[
			{ title: 'Basic', code: basicExample, component: BasicExample },
			{ title: 'Outline Button', code: outlineButton, component: OutlineButton },
			{
				title: 'Big List',
				code: bigList,
				component: BigList,
			},
			{
				title: 'Custom Trigger',
				code: customTrigger,
				component: CustomTrigger,
			},
		]}
	/>
</ComponentPage>
