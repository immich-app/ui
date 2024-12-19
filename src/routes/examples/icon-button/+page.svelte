<script lang="ts">
	import ExampleLayout from '$docs/components/ExampleLayout.svelte';
	import BasicExample from './BasicExample.svelte';
	import basicExample from './BasicExample.svelte?raw';
	import ColorExample from './ColorExample.svelte';
	import colorExample from './ColorExample.svelte?raw';
	import DisabledExample from './DisabledExample.svelte';
	import disabledExample from './DisabledExample.svelte?raw';
	import GhostExample from './GhostExample.svelte';
	import ghostExample from './GhostExample.svelte?raw';
	import HeroExample from './HeroExample.svelte';
	import heroExample from './HeroExample.svelte?raw';
	import OutlineExample from './OutlineExample.svelte';
	import outlineExample from './OutlineExample.svelte?raw';
	import ShapeExample from './ShapeExample.svelte';
	import shapeExample from './ShapeExample.svelte?raw';
	import SizeExample from './SizeExample.svelte';
	import sizeExample from './SizeExample.svelte?raw';

	const examples = [
		{ title: 'Basic', code: basicExample, component: BasicExample },
		{ title: 'Shape', code: shapeExample, component: ShapeExample },
		{ title: 'Color', code: colorExample, component: ColorExample },
		{ title: 'Outline', code: outlineExample, component: OutlineExample },
		{ title: 'Ghost', code: ghostExample, component: GhostExample },
		{ title: 'Hero', code: heroExample, component: HeroExample },
		{ title: 'Disabled', code: disabledExample, component: DisabledExample },
		{ title: 'Size', code: sizeExample, component: SizeExample },
	];
</script>

<ExampleLayout name="IconButton" {examples} />
