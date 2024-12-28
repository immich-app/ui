<script lang="ts">
	import ComponentDescription from '$docs/components/ComponentDescription.svelte';
	import ComponentExamples from '$docs/components/ComponentExamples.svelte';
	import ComponentPage from '$docs/components/ComponentPage.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import ColorExample from './ColorExample.svelte';
	import colorExample from './ColorExample.svelte?raw';
	import DisabledExample from './DisabledExample.svelte';
	import disabledExample from './DisabledExample.svelte?raw';
	import FullWidthExample from './FullWidthExample.svelte';
	import fullWidthExample from './FullWidthExample.svelte?raw';
	import GhostExample from './GhostExample.svelte';
	import ghostExample from './GhostExample.svelte?raw';
	import LoadingExample from './LoadingExample.svelte';
	import loadingExample from './LoadingExample.svelte?raw';
	import OutlineExample from './OutlineExample.svelte';
	import outlineExample from './OutlineExample.svelte?raw';
	import ShapeExample from './ShapeExample.svelte';
	import shapeExample from './ShapeExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import sizeExample from './SizeExample.svelte?raw';
</script>

<ComponentPage name="Button">
	<ComponentDescription
		>A button component, which can also be used to render links</ComponentDescription
	>
	<ComponentExamples
		examples={[
			{ title: 'Basic', code: basicExample, component: BasicExample },
			{ title: 'Shape', code: shapeExample, component: ShapeExample },
			{ title: 'Color', code: colorExample, component: ColorExample },
			{ title: 'Outline', code: outlineExample, component: OutlineExample },
			{ title: 'Ghost', code: ghostExample, component: GhostExample },
			{ title: 'Disabled', code: disabledExample, component: DisabledExample },
			{ title: 'Loading', code: loadingExample, component: LoadingExample },
			{ title: 'Size', code: sizeExample, component: SizeExample },
			{ title: 'Full width', code: fullWidthExample, component: FullWidthExample },
		]}
	/>
</ComponentPage>
