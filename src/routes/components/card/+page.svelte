<script lang="ts">
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import ExpandableExample from './ExpandableExample.svelte';
	import expandableExample from './ExpandableExample.svelte?raw';
	import FilledExample from './FilledExample.svelte';
	import filledExample from './FilledExample.svelte?raw';
	import OutlineExample from './OutlineExample.svelte';
	import outlineExample from './OutlineExample.svelte?raw';
	import SubtleExample from './SubtleExample.svelte';
	import subtleExample from './SubtleExample.svelte?raw';
</script>

<ComponentPage name="Card">
	<ComponentExamples
		examples={[
			{ title: 'Basic', code: basicExample, component: BasicExample },
			{ title: 'Outline', code: outlineExample, component: OutlineExample },
			{ title: 'Subtle', code: subtleExample, component: SubtleExample },
			{ title: 'Filled', code: filledExample, component: FilledExample },
			{ title: 'Expandable', code: expandableExample, component: ExpandableExample },
		]}
	/>
</ComponentPage>
