<script lang="ts">
	import ComponentDescription from '$docs/components/ComponentDescription.svelte';
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentFieldCard from '$docs/components/ComponentFieldCard.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import ComponentTipCard from '$docs/components/ComponentTipCard.svelte';
	import { asSlug } from '$docs/utilities.js';
	import { Link, Text } from '@immich/ui';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
</script>

<ComponentPage name="MultiSelect">
	<ComponentDescription
		>Allows the user to select a multiple options from a dropdown list</ComponentDescription
	>
	<ComponentFieldCard />
	<ComponentTipCard>
		<Text
			>The <Link href={asSlug('MultiSelect')}>MultiSelect</Link> component is very similar to the <Link
				href={asSlug('Select')}>Select</Link
			> component, but allows the user to select multiple options.</Text
		>
	</ComponentTipCard>
	<ComponentExamples examples={[{ title: 'Basic', code: basicExample, component: BasicExample }]} />
</ComponentPage>
