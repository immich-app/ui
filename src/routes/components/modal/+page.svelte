<script lang="ts">
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentNoteCard from '$docs/components/ComponentNoteCard.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import sizeExample from './SizeExample.svelte?raw';
	import { Text } from '@immich/ui';
</script>

<ComponentPage name="Modal">
	<ComponentNoteCard>
		<Text>Modals are always screen width and height on small devices</Text>
	</ComponentNoteCard>
	<ComponentExamples
		examples={[
			{ title: 'Basic', code: basicExample, component: BasicExample },
			{ title: 'Size', code: sizeExample, component: SizeExample },
		]}
	/>
</ComponentPage>
