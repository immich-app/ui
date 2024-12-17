<script lang="ts">
	import DualThemeLayout from '$docs/components/DualThemeLayout.svelte';
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
	import HeroExample from './HeroExample.svelte';
	import heroExample from './HeroExample.svelte?raw';
	import LoadingExample from './LoadingExample.svelte';
	import loadingExample from './LoadingExample.svelte?raw';
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
		{ title: 'Loading', code: loadingExample, component: LoadingExample },
		{ title: 'Size', code: sizeExample, component: SizeExample },
		{ title: 'Full width', code: fullWidthExample, component: FullWidthExample },
	];
</script>

<DualThemeLayout name="Button" {examples} />
