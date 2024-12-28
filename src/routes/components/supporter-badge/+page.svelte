<script lang="ts">
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import CustomExample from './CustomExample.svelte';
	import customExample from './CustomExample.svelte?raw';
	import EffectExample from './EffectExample.svelte';
	import effectExample from './EffectExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage name="SupporterBadge">
	<ComponentExamples
		examples={[
			{ title: 'Effect', code: effectExample, component: EffectExample },
			{ title: 'Sizes', code: sizeExample, component: SizeExample },
			{ title: 'Custom', code: customExample, component: CustomExample },
		]}
	/>
</ComponentPage>
