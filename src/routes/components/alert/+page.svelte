<script lang="ts">
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import ColorExample from './ColorExample.svelte';
	import colorExample from './ColorExample.svelte?raw';
	import CustomIconExample from './CustomIconExample.svelte';
	import customIconExample from './CustomIconExample.svelte?raw';
	import EventExample from './EventExample.svelte';
	import eventExample from './EventExample.svelte?raw';
</script>

<ComponentPage name="Alert">
	<ComponentExamples
		examples={[
			{ title: 'Basic', code: basicExample, component: BasicExample },
			{ title: 'Color', code: colorExample, component: ColorExample },
			{ title: 'Custom Icon', code: customIconExample, component: CustomIconExample },
			{ title: 'Event', code: eventExample, component: EventExample },
		]}
	/>
</ComponentPage>
